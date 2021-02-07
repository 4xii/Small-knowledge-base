import vnode from './vnode.js'
import createElement from './createElement.js'
export default function (oldVnode,newVnode) {
  //判断传入的第一个参数，是DOM节点还是虚拟节点
  if(oldVnode.sel != '' || oldVnode.sel == undefined){
    //传入的第一个参数DOM节点
    oldVnode = vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode);
  }
  
  //判断oldVnode和newVnode是不是同一个节点
  if(oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel){
    console.log('同一个')
  }else{
    console.log('暴力插入新的，删除旧的')
    createElement(newVnode,oldVnode.elm);
  }
}