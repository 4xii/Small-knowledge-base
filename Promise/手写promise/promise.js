function Promise(executor) {
  //添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;
  //声明属性
  this.callbacks = [];
  const self = this;//self _this that
  //resolve函数
  function resolve(data) {
    //状态只能修改一次
    if (self.PromiseState !== 'pending') return;
    //1.修改对象状态(promiseState)
    self.PromiseState = 'fulfilled';//resolved
    //2.设置对象结果值(promiseResult)
    self.PromiseResult = data;
    //调用成功的回调函数
    self.callbacks.forEach(item => {
      item.onResolved(data);
    })
  }
  //reject
  function reject(data) {
    //状态只能修改一次
    if (self.PromiseState !== 'pending') return;
    //1.修改对象状态(promiseState)
    self.PromiseState = 'rejected';//resolved
    //2.设置对象结果值(promiseResult)
    self.PromiseResult = data;
    //执行回调
    self.callbacks.forEach(item => {
      item.onRejected(data);
    })
  }

  try {
    //同步调用[执行器函数]
    executor(resolve, reject)
  } catch (e) {
    //修改promise对象状态为 失败
    reject(e);
  }

}

//添加then方法
Promise.prototype.then = function (onResolved, onRejected) {
  return new Promise((resolve, reject) => {
    //调用回调函数 PromiseState
    if (this.PromiseState === 'fulfilled') {
      try {

        //获取回调函数的执行结果
        let result = onResolved(this.PromiseResult);
        //判断
        if (result instanceof Promise) {
          //如果是Promise类型对象
          result.then(v => {
            resolve(v);
          }, r => {
            reject(r)
          })
        } else {
          //结果的对象状态为成功
          resolve(result);
        }
      } catch (e) {
        reject(e)
      }
    }
    if (this.PromiseState === 'rejected') {
      onRejected(this.PromiseResult);
    }
    //判断pending状态
    if (this.PromiseState === 'pending') {
      //保存回调函数
      this.callbacks.push({
        onResolved: onResolved,
        onRejected: onRejected
      })
    }
  })
}