"use strict";
//使用class关键字来定义一个类
/*
  对象中主要包含了两个部分、
    属性
    方法
*/
class Person {
    constructor() {
        /*
          直接定义的属性是实例属性，需要通过对象的实例去访问:
            const per = new Person();
            per.name
      
          使用static开头的是属性是静态属性(类实例),可以直接通过类去访问
            Person.age
      
          readonly开头的属性表示一个只读的属性无法修改
        */
        //定义属性
        // readonly name:string = '孙悟空';
        this.name = '孙悟空';
        //在属性前使用static关键字可以定义类属性(静态属性)
        //static readonly age:number = 18;
        this.age = 18;
    }
    //定义方法
    static sayHello() {
        console.log('Hello');
    }
}
const per = new Person();
// console.log(per);
// console.log(per.name,per.age);
//console.log(Person.age);
// console.log(per.name);
// per.name = 'tom';
// console.log(per.name);
// per.sayHello();
Person.sayHello();
