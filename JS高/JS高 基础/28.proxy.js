/*
 * Author: 朱世新
 * Date: 2021-04-12 14:18:20
 * LastEditors: 朱世新
 * LastEditTime: 2021-04-19 12:45:51
 * Description: 
*/
var target = {
  a:1,
  b:2
}

let proxy = new Proxy(target,{
  get(target,prop){
    return 'This is property value' + target[prop]
  },

  set(target,prop,value){
    target[prop] = value;
    console.log(target[prop]);
  }
})

console.log(proxy.a);
console.log(target.a);
proxy.b = 3;
console.log(target);

//var obj = {a:1,b:2}
//1.获取原型 [[GetPrototypeOf]]
// var proto = Object.getPrototypeOf(obj);
// console.log(proto);
// console.log(obj.__proto__);
// console.log(Obj.prototype);

//2.设置原型[[SetPrototypeOf]]
// Object.setPrototypeOf(obj,{c:3,d:4});
// console.log(obj);

//3.获取对象的可扩展性[[IsExtensible]]
// var extensible = Object.isExtensible(obj)
// console.log(extensible);//true
// Object.freeze(obj);//冻结
// var extensible2 = Object.isExtensible(obj)
// console.log(extensible);//false

// Object.seal(obj);//封闭对象
// obj.c = 3;//不可修改的
// delete obj.a//不可删除
// obj.b = 3//可写
// console.log(obj);

//4.获取自有属性[[GetOwnProperty]]
// Object.setPrototypeOf(obj,{c:3,d:4});
// console.log(Object.getOwnPropertyNames(obj));//["a","b"]
// console.log([1,2,3].map(parseInt));