# Promise是什么
## 1.抽象表达：Promise是一门新的技术（ES6规范）Promse是JS中进行异步编程的新解决方案 旧的就是单纯的使用回调函数
## 2.具体表达 从语法上来说Promise是一个构造函数 从功能上来说Promise对象用来封装一个异步操作并可以获取其成功/失败的结果值

## 异步编程
* fs 文件操作
  ```js
  require('fs').readFile('./index.html',(err,data)=>{})
  ```
* 数据库操作
* AJAX
  ```js
    $.get('/server',(data)=>{})
  ```
* 定时器
  ```js
    setTimeout(()=>{},2000)
  ```
# 指定回调函数的方式更加灵活
* 旧的：必须在启动异步任务前指定
* promise 启动异步任务 => 返回promise对象 => 给promise对象绑定回调函数（甚至可以在异步任务结束后指定/多个）

# 支持链式调用，可以解决回调地狱问题
* 回调地狱：回调函数嵌套调用，外部回调异步执行的结果是嵌套的回调执行的条件
* 不便于阅读 不便于异常处理

# Promise的状态改变
## 实例对象中的一个属性 [PromiseState]
* pending 未决定的
* resolved / fulfilled 成功 
* reject 失败

# Promise对象的值
## 实例对象中的另一个属性 [PromiseResult] 保存着异步任务 [成功/失败]的结果
* resolve value
* reject  reason

## 1.Promise构造函数：Promise(executor){}
* executor函数：执行器(resolve,reject)=>{}
* resolve函数：内部定义成功时我们调用的函数 value=>{}
* reject函数：内部定义失败时我们调用的函数 reason=>{}
说明：executor会在Promise内部立即同步调用，异步操作在执行器中执行

## 2.Promise.prototype.then方法(onResolved,onRejected)=>{}
* onResolved函数：成功的回调函数(value)=>{}
* onRejected函数：失败的回调函数(reason)=>{}
说明：指定用于得到成功value的成功回调和用于得到失败reason的失败回调返回的一个新的promise对象

## 3.Proimse.prototype.catch方法(onRejected)=>{}
* onRejected函数：失败的回调函数(reason)=>{}

## 4.Promise.resolve方法(value)=>{}
* value：成功的数据或promise对象
说明：返回一个成功/失败的promise对象


## 5.Promise.reject方法(reason)=>{}
* reason:失败的原因
说明：返回一个失败的promise对象

## 6.Promise.all 方法(promise)=>{}
* promise：包含n个promise数组
说明：返回一个新的promise，只有所有的promise都成功才成功，只要有一个失败了就直接失败

## 7.Promise.race方法(promise)=>{}
* promise：包含n个promise数组
说明：返回一个新的promise，第一个完成的promise的结果状态就是最终的结果状态

# Promise
异步程序
```js
var data = $.ajax({
  url:'xxx',
  async:false//同步
})
console.log(data.responseJSON)
console.log('wassup')
function getNames(data){
  return data.map(function(item){
    return item.name
  })
}
```

* Promise的存在是异步问题同步化解决方案
```js
const p = new Promise((resolve,reject)=>{
  var data = $.ajax({
    url:'xxx',
    success(data){
      resolve(data)
    }
  })
})

//同步？ 异步，不能去阻塞下面的程序
p.then(res)=>{
  console.log(getNames(res))
}

console.log('wassup')
function getNames(data){
  return data.map(function(item){
    return item.name
  })
}
```