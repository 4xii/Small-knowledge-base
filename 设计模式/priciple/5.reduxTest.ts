/*
 * @Author: 朱世新
 * @Date: 2021-10-12 08:00:13
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-10-12 08:16:49
 * @Description: 
 */
import { createStore, AnyAction } from 'redux'
let store = createStore(state => state);
interface MyAction extends AnyAction {
  age: number
}
class My2Action implements AnyAction {
  [extraProps: string]: any; type: any;
}
let action: My2Action = { type: "increment", age: 10 }
store.dispatch(action);