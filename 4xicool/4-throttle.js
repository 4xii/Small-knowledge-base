function throttle(callback,wait){
  //定义开始事件
  let start = 0;
  //返回结果是一个函数
  return function(event){
    //获取当前的时间戳
    let now = Date.now();
    //判断
    if(now - start >= wait){
      //若满足条件则执行回调函数
      callback();
      //修改开始时间
      start = now;
    }
  }
}