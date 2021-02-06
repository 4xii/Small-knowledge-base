import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { h } from 'snabbdom/h'; // helper function for creating vnodes

//创建出patch函数
const patch = init([classModule,propsModule,styleModule,eventListenersModule]);


//创建虚拟节点
const myVnode1 = h('a',{
  props:{
    href:'http://www.baidu.com',
    target:'_blank'
  }
},'百度');

const myVnode2 = h('div','我是一个盒子');

const myVnode3 = h('ul',[
  h('li','苹果'),
  h('li','西瓜'),
  h('li','香蕉'),
  h('li','火龙果'),
])
//让虚拟节点上树
const container = document.getElementById('container');
patch(container,myVnode3);