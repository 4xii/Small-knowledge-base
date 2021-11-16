const isObject = (value) => typeof value == 'object' && value !== null;
const extend = Object.assign;

function effect(fn, options = {}) {
    //需要让effect变成响应的effect，可以做到数据变化从新执行
    const effect = createReactiveEffect(fn, options);
    if (!options.lazy) { //默认effect会先执行
        effect(); //响应式的effect默认会先执行一次
    }
    return effect;
}
let uid = 0;
let activeEffect; // 存储当前的effect，解决问题1
const effectStack = [];
function createReactiveEffect(fn, options) {
    const effect = function reactiveEffect() {
        if (!effectStack.includes(effect)) {
            //保证effect没有加入到effectStack中，解决问题2
            try {
                effectStack.push(effect);
                activeEffect = effect;
                return fn(); //函数运行时取值 会执行get方法
            }
            finally {
                effectStack.pop();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect.id = uid++; // 制作一个effect标识 用于区分effect
    effect._isEffect = true; // 用于标识这个是响应式effect
    effect.raw = fn; // 保留effect对应的原函数
    effect.options = options; // 在effect上保存用户的属性
    return effect;
}
//让，某个对象中的属性，收集当前他对应的effect函数
const targetMap = new WeakMap();
function track(target, type, key) {
    //  activeEffect; // 当前正在运行的effect
    if (activeEffect === undefined) { // 此属性不用收集依赖，因为没在effect中使用
        return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map));
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set));
    }
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
    }
}
//问题1
/*
effect(()=>{
    state.xxx++ 反复自调用执行
}) */
//问题2，为保证每个属性收集是一致的，用栈
/* effect(()=>{ //effect1
    state.name -> effect1
    effect(()=>{ //effect2
        state.age -> effect2
    })
    state.address -> effect2
}) */

// 实现 new Proxy(target，handler)
const get = createGetter();
const shallowGet = createGetter(false, true);
const readonlyGet = createGetter(true);
const shallowReadonlyGet = createGetter(true, true);
const set = createSetter();
const shallowSet = createSetter(true);
const mutableHandlers = {
    get,
    set
};
const shallowReactiveHandlers = {
    get: shallowGet,
    set: shallowSet
};
let readonlyObj = {
    set: (target, key) => {
        console.warn(`set on key ${key} falied`);
    }
};
const readonlyHandlers = extend({
    get: readonlyGet,
}, readonlyObj);
const shallowReadonlyHandlers = extend({
    get: shallowReadonlyGet,
}, readonlyObj);
//是不是仅读的，仅读的属性set时会报异常
//是不是深度的
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        //proxy + reflect
        //后续Object上的方法，会被迁移到Reflect Reflect.getProptypeof()
        //以前target[key] = value 方式设置值可能会失败，并不会报异常，也没用返回值表示
        //Reflect 方法具备返回值
        //reflect 使用可以不适应proxy
        const res = Reflect.get(target, key, receiver); //target[key]
        if (!isReadonly) {
            //收集依赖，等会数据变化后更新对应的视图
            console.log("收集effect");
            track(target, 0 /* GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (isObject(res)) { //vue2是一上来就递归，vue3是取值时会代理，vue3的代理模式是懒代理
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver); //target[key] = value
        return result;
    };
}

function reactive(target) {
    return createReactiveObject(target, false, mutableHandlers);
}
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers);
}
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers);
}
//是不是仅读，是不是深度，柯里化 new Proxy() 最核心的需要拦截 数据的读取和数据的修改
const reactiveMap = new WeakMap(); //会自动垃圾回收，不会造成内存写了，key只能是对象 Map使用对象key，对象被清空，key依然会使用，导致内存泄漏
const readonlyMap = new WeakMap();
function createReactiveObject(target, isReadonly, baseHandlers) {
    //如果目标不是对象，没法拦截了，reactive这个api只能拦截对象类型
    if (!isObject(target)) {
        return target;
    }
    //如果某个对象已经被代理过，就不要再次被代理了 可能一个对象，被代理是深度，又被仅读代理了
    const proxyMap = isReadonly ? readonlyMap : reactiveMap;
    const existProxy = proxyMap.get(target);
    if (existProxy) {
        return existProxy; //如果已经被代理了，直接返回即可
    }
    const proxy = new Proxy(target, baseHandlers);
    proxyMap.set(target, proxy); //将要代理的对象，和对应代理结果缓存起来
    return proxy;
}

export { effect, reactive, readonly, shallowReactive, shallowReadonly };
//# sourceMappingURL=reactivity.esm-bundler.js.map
