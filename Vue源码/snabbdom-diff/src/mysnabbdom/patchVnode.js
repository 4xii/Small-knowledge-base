import createElement from "./createElement.js";
import updateChildren from './updateChildren.js'

//对比同一个虚拟节点
export default function patchVnode(oldVnode,newVnode){
  //判断新旧vnode是否是同一个对象
  if(oldVnode === newVnode) return;
  //判断新vnode有没有text属性
  if(newVnode.text != undefined && (newVnode.children === undefined || newVnode.children.length == 0)){
    //新vnode有text属性
    //console.log('新vnode有text属性')
    if(newVnode.text !== oldVnode.text){
      //如果新虚拟节点中的text和老的虚拟节点的text不同，那么直接让新的text写入老的elm中即可。如果老的elm中是children，那么也会立即消失
      oldVnode.elm.innerText = newVnode.text
    }
  } else {
    //新节点没有text属性
    //console.log('新节点没有text属性')
    //判断老的有没有children
    if(oldVnode.children != undefined && oldVnode.children.length > 0){
      //老的有children，此时就是最复杂的情况，新老都有children
      updateChildren(oldVnode.elm,oldVnode.children,newVnode.children)

    }else{
      //老的没有children，新的有children
      //情况老节点内容
      oldVnode.elm.innerHTML = '';
      //遍历新的vnode子节点，创建DOM，上树
      for(let i = 0;i<newVnode.children.length;i++){
        let dom = createElement(newVnode.children[i]);
        oldVnode.elm.appendChild(dom)
      }      
    }
  }
}