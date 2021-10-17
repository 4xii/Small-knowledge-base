/*
 * @Author: 朱世新
 * @Date: 2021-10-17 16:13:29
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-10-17 16:13:29
 * @Description: 
 * 
 * 以前node里面全部回调
 */
let fs = require('fs')

/* fs.readFile('./1.txt','utf8',function(err,data){
  console.log(data);
});

function readFile(...args){
  return new Promise(function(){
    fs.readFile(...args,function(err,data){
      console.log(data);
      resolve(data)
    });
  })
} */
function promisiAdaptor(callableFn){//fs.readFile
  return function(...args){
    return new Promise (function(resolve,reject){
      callableFn(...args,function(err,result){
        err?reject(err):resolve(result)
      })
    })
  }
}
let readFile = promisiAdaptor(fs.readFile);

(async function (){
  let content = await readFile('./1.txt','utf8');
  console.log(content);
})();