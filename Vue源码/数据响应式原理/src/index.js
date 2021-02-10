import observe from './observe.js'
import Wather from './Watcher.js'
var obj = {
  a:{
    m:{
      n:5
    }
  },
  b:10,
  c:{
    d:{
      e:{
        f:6666
      }
    }
  },
  g:[22,33,44,55]
};


observe(obj)
new Wather(obj,'a.m.n',(val)=>{
  console.log('★',val)
})
obj.a.m.n = 88;
console.log(obj);
