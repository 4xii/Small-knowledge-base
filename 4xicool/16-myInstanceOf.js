function myInstanceOf(obj,Fn){
  //获取函数的显示原型
  let prototype = Fn.prototype;
  //获取obj的隐式原型对象
  let proto = obj.__proto__;
  //遍历原型链
  while(proto){//最上层proto会变成null，就跳出循环啦
    //检测原型对象是否相等
    if(prototype === proto){
      return true;
    }
    //如果不等于
    proto = proto.__proto__
  }
  return false;
}

