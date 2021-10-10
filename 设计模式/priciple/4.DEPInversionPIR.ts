/*
 * @Author: 朱世新
 * @Date: 2021-10-11 07:30:56
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-10-11 07:35:23
 * @Description: 
 * 
 * 依赖倒置原则
 * 依赖抽象，而非依赖具体实现
 */
interface Girlfriend{
  age:number;
  height:number;
  cook():void
}

class LCL implements Girlfriend{
  age:number = 35;
  height:number = 178;
  cook(){
    console.log("泡面");
  }
}

class LSM implements Girlfriend{
  age:number = 18;
  height:number = 178;
  cook(){
    console.log("泡面");
  }
}

class SingleDog{
  constructor(public girlfriend:Girlfriend){

  }
}

let dog1 = new SingleDog(new LCL());
let dog2 = new SingleDog(new LSM())