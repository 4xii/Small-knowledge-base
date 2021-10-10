/*
 * @Author: 朱世新
 * @Date: 2021-10-11 06:43:47
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-10-11 07:04:04
 * @Description: 
 * 
 * 单一职责
 * 一个类的功能要尽可能单一，不要太杂
 * 如果一个类代码行数超过100，方法超10个
 */
export { }
//不是拆的越细越好,拆的过细就有可能降低内聚性
class Product {
  public name: string;
  public price: number;
  public category:Category;
  //public updateProduct(){}
  public updateName(){}
  public updatePrice() {}
  public updateCategory(){}
}

class Category{
  public categoryName: string;
  public categoryIcon: string;
}
