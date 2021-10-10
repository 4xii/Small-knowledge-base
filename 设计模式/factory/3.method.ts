/*
 * @Author: 朱世新
 * @Date: 2021-10-10 17:05:22
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-10-10 21:41:53
 * @Description: 
 * 
 * 工厂方法
 * 把创建产品的工作交由具体工作类来实现
 */
export{}
abstract class Coffee{
  constructor(public name:string){

  }
}
class AmericanoCoffee extends Coffee {

}
class LatteCoffee extends Coffee {

}
class CappuccinoCoffee extends Coffee {

}

abstract class CateFactory{
  abstract createCoffee(): Coffee;

}
class AmericanoCoffeeFactory extends CateFactory {
  createCoffee(){
    return new AmericanoCoffee('美式咖啡')
  }
}

class LatteCoffeeCoffeeFactory extends CateFactory {
  createCoffee(){
    return new LatteCoffee('拿铁咖啡')
  }
}

class CappuccinoCoffeeCoffeeFactory extends CateFactory {
  createCoffee(){
    return new CappuccinoCoffee('卡布奇诺咖啡')
  }
}

//原来在简单工厂里，是由Factory来创建产品
//在工厂方法里，不再由Factory来创建产品，而是先创建具体的工厂，然后具体的工厂来创建产品
class Factory{
  static order(name:string){
    switch (name ){
      case 'American':
        return new AmericanoCoffeeFactory().createCoffee()
      case 'LatteCoffee':
        return new LatteCoffeeCoffeeFactory().createCoffee()
      case 'CappuccinoCoffee':
        return new AmericanoCoffeeFactory().createCoffee()
      default:
        throw new Error('你点的品种我们不支持')
    }
  }
}
let americanoCoffeeFactory = new AmericanoCoffeeFactory()
console.log(americanoCoffeeFactory.createCoffee());
