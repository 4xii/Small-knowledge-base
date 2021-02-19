function apply(Fn,obj,args){
  if(obj === undefined || obj === null){
    obj = globalThis
  }
  //为obj添加零时方法
  obj.temp = Fn;
  //执行函数
  let result = obj.temp(...args);
  delete obj.temp;
  return result;
}