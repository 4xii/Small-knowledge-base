import patchVnode from './patchVnode.js'
import createElement from './createElement.js'
//判断是否同一个虚拟节点
function checkSameVnode(a,b){
  return a.sel ==b.sel && a.key == b.key;
}

export default function updateChildren(parentElm,oldCh,newCh){
  console.log('updateCh')
  console.log(oldCh,newCh);

  //旧前
  let oldStartIdx = 0;
  //新前
  let newStartIdx = 0;
  //旧后
  let oldEndIdx = oldCh.length - 1;
  //新后
  let newEndIdx = newCh.length - 1;
  //旧前节点
  let oldStartVnode = oldCh[oldStartIdx ];
  //旧后节点
  let oldEndVnode = oldCh[oldEndIdx];
  //新前节点
  let newStartVnode = newCh[newStartIdx ];
  //新后节点
  let newEndVnode = newCh[newEndIdx]

  let keyMap = null;

  //开始while
  while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx){
    console.log('⭐')
    if(oldStartVnode == null || oldCh[oldStartIdx] == undefined){
      oldStartVnode = oldCh[++oldStartIdx]
    } else if (oldEndVnode == null || oldCh[oldEndIdx] == undefined){
      oldEndVnode = oldCh[--oldEndIdx]
    } else if(newStartVnode == null || newCh[newStartIdx] == undefined){
      newStartVnode = newCh[++newStartIdx]
    } else if (newEndVnode == null || newCh[newEndIdx] == undefined){
      newEndVnode = newCh[--newEndIdx]
    } else if(checkSameVnode(oldStartVnode,newStartVnode)){
      console.log('新前旧前')//新前和旧前
      patchVnode(oldStartVnode,newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if(checkSameVnode(oldEndVnode,newEndVnode)){
      console.log('新后旧后')//新后和旧后
      patchVnode(oldEndVnode,newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if(checkSameVnode(oldStartVnode,newEndVnode)){
      console.log('新后旧前')//新后和旧前
      patchVnode(oldStartVnode,newEndVnode);
      //当新后旧前命中，移动节点，移动新前指向的这个节点到老节点的旧后的后面
      //插入一个已经在DOM树上的节点，他就会移动
      parentElm.insertBefore(oldStartVnode.elm,oldEndVnode.elm.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if(checkSameVnode(oldEndVnode,newStartVnode)){
      console.log('新前旧后')//新后和旧前
      patchVnode(oldEndVnode,newStartVnode);
      //当新后旧前命中，移动节点，移动新前指向的这个节点到老节点的旧后的后面
      parentElm.insertBefore(oldEndVnode.elm,oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      //四种都没有找到
      //制作key的map一个映射对象，这样就不用每次都遍历老对象
      if(!keyMap){
        keyMap = {};
         // 从 oldStartIdx 开始，到oldEndIdx结束，创建keyMap映射对象
        for(let i = oldStartIdx;i<=oldEndIdx;i++){
          const key = oldCh[i].key;
          if(key != undefined){
            keyMap[key] = i;
          }
        }
      }
      //寻找当前这项newStarIdx在keyMap中的映射位置序号
      const idxInOld = keyMap[newStartVnode.key]
      if(idxInOld == undefined){
      //判断，如果idxInOld是undefined表示他是全新的项
      //被加入的项就是被newStartVnode这项，还不是真正的DOM节点
      parentElm.insertBefore(createElement(newStartVnode),oldStartVnode.elm)
      }else{
        //如果不是undefined，不是全新的项，而是需要移动
        const elmToMove = oldCh[idxInOld];
          patchVnode(elmToMove,newStartVnode)
          //把这项设置为undefined，表示我已经处理完这项了
          oldCh[idxInOld] = undefined;
          //移动，调用insertBefore也可以实现移动
          parentElm.insertBefore(elmToMove.elm,oldStartVnode.elm)
      }
      //指向下移，只移新的头
      newStartVnode = newCh[++newStartIdx]
    }
  }
  //继续看看有没有剩余的
  if(newStartIdx <= newEndIdx){
    console.log('new还有剩余节点没处理，要加项,要把所有剩余的节点都插入到oldStartIdx之前');
    //遍历新的newCh，添加到老的没有处理之前
    

    for(let i = newStartIdx;i<=newEndIdx;i++){
      //insertBefore方法可以自动识别null，如果是null就会自动排到队尾去。和appendChild是一致了
      //newCh[i]现在还没有成为真正的DOM，要调用createElment()函数变为DOM
      parentElm.insertBefore(createElement(newCh[i]),oldCh[oldStartIdx].elm);
    }
  } else if(oldStartIdx <= oldEndIdx){
    console.log('old还有剩余节点没有处理')
    //批量删除oldStart和oldEnd指针直接的项
    for(let i = oldStartIdx;i<=oldEndIdx;i++){
      if(oldCh[i]){
        parentElm.removeChild(oldCh[i].elm)
      }
    }
  }
}