import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const myVnode1 = h('ul',{},[
  h('p',{key:'A'},'A'),
  h('p',{key:'B'},'B'),
  h('p',{key:'C'},'C'),
  h('p',{key:'D'},'D'),
  h('p',{key:'E'},'E'),
]);
//新节点
const myVnode2 = h('ul',{},[
  h('p',{key:'E'},'E'),
  h('p',{key:'B'},'B'),
  h('p',{key:'A'},'A'),
  h('p',{key:'D'},'D'),
  h('p',{key:'C'},'C'),
  h('p',{key:'Q'},'Q'),

])

//得到盒子和按钮
const container = document.getElementById('container');
const btn = document.getElementById('btn')

//第一次上树
patch(container,myVnode1);



btn.onclick = function(){
  patch(myVnode1,myVnode2)
}