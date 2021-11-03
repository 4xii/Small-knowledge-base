// 实现 new Proxy(target，handler)

import { extend, isObject } from '../../shared/src/index'
import { reactive, readonly } from './reactive';

const get = createGetter();
const shallowGet = createGetter(false, true);
const readonlyGet = createGetter(true);
const shallowReadonlyGet = createGetter(true, true);


const set = createSetter();
const shallowSet = createSetter(true);

export const mutableHandlers = {
    get,
    set
}
export const shallowReactiveHandlers = {
    get: shallowGet,
    set: shallowSet
}

let readonlyObj = {
    set: (target, key) => {
        console.warn(`set on key ${key} falied`);
    }
}

export const readonlyHandlers = extend({
    get: readonlyGet,
}, readonlyObj)

export const shallowReadonlyHandlers = extend({
    get: shallowReadonlyGet,
}, readonlyObj)

//是不是仅读的，仅读的属性set时会报异常
//是不是深度的
function createGetter(isReadonly = false, shallow = false) {//拦截获取功能
    return function get(target,key,receiver){//let proxy = reactive()
        //proxy + reflect

        //后续Object上的方法，会被迁移到Reflect Reflect.getProptypeof()
        //以前target[key] = value 方式设置值可能会失败，并不会报异常，也没用返回值表示
        //Reflect 方法具备返回值
        //reflect 使用可以不适应proxy

        const res = Reflect.get(target,key,receiver);//target[key]
        if(!isReadonly){
            //收集依赖，等会数据变化后更新对应的视图
        }

        if(shallow){
            return res;
        }
        if(isObject(res)){//vue2是一上来就递归，vue3是取值时会代理，vue3的代理模式是懒代理
            return isReadonly ? readonly(res) : reactive(res)
        }
        return res;
    }
}
function createSetter(shallow = false) {//拦截设置功能
    return function set(target,key,value,receiver){
        const result = Reflect.set(target,key,value,receiver);//target[key] = value

        return result;
    }
}