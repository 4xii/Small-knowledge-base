/*
 * @Author: 朱世新
 * @Date: 2021-10-09 06:55:14
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-10-09 07:37:43
 * @Description: 
 */
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

//简单工厂
class CafeFactory{
  static order(name:string){
    switch (name ){
      case 'American':
        return new AmericanoCoffee('美式咖啡')
      case 'LatteCoffee':
        return new LatteCoffee('拿铁咖啡')
      case 'CappuccinoCoffee':
        return new AmericanoCoffee('卡布奇诺咖啡')
      default:
        throw new Error('你点的品种我们不支持')
    }
  }
}
console.log(CafeFactory.order('American'));
