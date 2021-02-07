import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const myVnode1 = h('div',{},'你好')
const container = document.getElementById('container');

patch(container,myVnode1);
