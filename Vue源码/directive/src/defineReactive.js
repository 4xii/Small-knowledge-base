import observe from './observe.js'
import Dep from './Dep.js'
export default function defineReactive(data,key,val){
  const dep = new Dep();
  console.log('defineReactive',data,key)
  if(arguments.length == 2){
    val = data[key];
  }
  //子元素要进行observe，形成递归，多个函数循环调用
  let childOb = observe(val);
  Object.defineProperty(data,key,{
    //可枚举
    enumerable:true,
    //可以被配置,比如可以被delete
    configurable:true,

    //getter
    get() {
      console.log(`打开${key}属性`)
      //如果现在处于依赖收集阶段
      if(Dep.target){
        dep.depend();
        if(childOb){
          childOb.dep.depend()
        };
      }
      return val;
    },
    //setter
    set(newValue) {
      console.log(`改变obj的${key}属性`,newValue)
      if(val === newValue){
        return;
      }
      val = newValue;
      //当设置新值，这个新值也要被observe
      childOb = observe(newValue)
      //发布订阅模式，通知dep
      dep.notify();
    }
  });
}