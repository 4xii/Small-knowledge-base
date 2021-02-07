import vnode from './vnode.js';

//重载功能较弱，该函数必须接受3个参数，必须是下面三种之一
//h('div',{},'文字')
//h('div',{},[])
//h('div',{},h())
export default function (sel, data, c) {
  //检查参数的个数
  if(arguments.length != 3)
    throw new Error('必须传入三个参数')
  //检查参数c的类型
  if(typeof c == 'string' || typeof c == 'number'){
    //说明h函数为h('div',{},'文字')
    return vnode(sel,data,undefined,c,undefined)
  }else if(Array.isArray(c)){
    //说明现在调用h函数为h('div',{},[])
    let children = [];
    //变量c,收集children
    for(let i = 0;i< c.length;i++){
      //检查c[i]必须是一个对象
      if(!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel')))
        throw new Error('传入的数组参数中有项结果不是h函数')
      //这里不用执行c[i]
      //收集
      children.push(c[i])
    }
    //循环结束了，就说明children收集完毕，此时可以返回虚拟节点，他有chilren属性
    return vnode(sel,data,children,undefined,undefined)
  }else if(typeof c == 'object' && c.hasOwnProperty('sel')){
    //说明现在调用h函数为h('div',{},h())
    let children = [c];
    return vnode(sel,data,children,undefined,undefined)
  }else{
    throw new Error('传入的第三个参数类型不对')
  }

}