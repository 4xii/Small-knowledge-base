/*
 * @Author: 朱世新
 * @Date: 2021-10-11 06:56:56
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-10-11 07:04:02
 * @Description: 
 * 
 * 尽可能使用父类或者抽象类
 * 任何在能使用父类的地方都要可以使用子类
 * 多态有关系
 */
abstract class AbstractDrink{
  getPrice():number{
    return 1;
  }
}
class CocaCola extends AbstractDrink{
  getPrice(){
    return 3;
  }
}
class Sprite extends AbstractDrink{
  getPrice(){
    return 4;
  }
}
class Fanta extends AbstractDrink{
  getPrice(){
    return 5;
  }
}
class Customer{
  drink(abstractDrink:AbstractDrink){
    console.log("花费"+abstractDrink.getPrice());
  }
}

//里氏代换，可以替换，任何可以传父类的地方，都可以把子类传进去
//里氏代换是一个原则，要求子类不能违法父类的规定
let c1 = new Customer();
c1.drink(new CocaCola())