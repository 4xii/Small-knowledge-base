(function(){
  class Animal{
    name:string;
    constructor(name:string){
      this.name = name;
    }

    sayHello(){
      console.log('动物在叫~')
    }
  }

  class Dog extends Animal{

    age:number;

    constructor(name:string,age:number){
      //如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
      super(name);
      this.age = age;
    }

    sayHello(){
      //在类的方法中，super就表示当前类的父类
      //super.sayHello();
      console.log('汪汪汪');
    }
  }

  const dog = new Dog('hwj',20)
  dog.sayHello();
})()