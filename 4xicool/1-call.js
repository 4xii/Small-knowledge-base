function call(Fn,obj,...args){
  //判断
  if(obj === undefined || obj === null){
    obj = globalThis;//全局对象
  }
  //为 obj 添加零时的方法
  obj.temp = Fn;
  //调用temp 方法
  let result = obj.temp(...args);
  //删除 temp 方法
  delete obj.temp;
  //返回执行结果
  return result;
}