/*
 * @Author: 朱世新
 * @Date: 2021-10-12 08:14:20
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-10-12 08:23:21
 * @Description: 
 */
interface Running {
  run(): void;
}

interface Flying {
  fly(): void;
}

interface Swimming {
  swim(): void;
}

/* interface AutomobileInterface {
  run(): void;
  fly(): void;
  swim(): void;
} */

//1.为了复用 2.为了低耦合 3.为了单一原则
class Automobile implements Running, Flying, Swimming {
  run() { }
  fly() { }
  swim() { }
}

/* class Automobile implements AutomobileInterface{
  run() { }
  fly() { }
  swim() { }
}
 */
class Car implements Running {
  run() { }
}