import {def} from './utils.js'
import defineReactive from './defineReactive.js'
import {arrayMethods} from './array'
import observe from './observe.js'
import Dep from './Dep.js'
export default class Observer{
  constructor(value){
    //每一个Observer的实例身上，都有一个dep
    this.dep = new Dep();
    //给实例(this,一定要注意，构造函数中的this不是表示类本身，而是表示实例)添加了__ob__属性，值是这个new的实例
    def(value,'__ob__',this,false)
    console.log('我是Observer构造器',value)
    //Observer将一个正常的object转换为每个层级的属性都是响应式(可以被侦测的)object
    //检查它是数组还是对象
    if(Array.isArray(value)){
      //如果是数组，就将这个数组的原型指向arrayMethods
      Object.setPrototypeOf(value,arrayMethods);
      //让这个数组变得observe
      this.observeArray(value)
    }else{
      this.walk(value)
    }
  }
  //遍历
  walk(value){
    for(let k in value){
      defineReactive(value,k)
    }
  }
  //数组的特殊遍历
  observeArray(arr){
    for(let i = 0,l = arr.length;i<l;i++){
      //逐项进行observe
      observe(arr[i]);
    }
  }
}