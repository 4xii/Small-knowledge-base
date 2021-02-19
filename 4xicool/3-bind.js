function bind(Fn,obj,...args){
  //返回一个新的函数
  return function(...args2){
    //执行call函数
    return call(Fn,obj,...args,...args2)
  }
}