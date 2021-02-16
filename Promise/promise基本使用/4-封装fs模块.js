/* 
  封装一个函数 mineReadFile 读取文件内容
  参数：path 文件路径
  返回：promise对象
*/
function mineReadFile(path){
  return new Promise((resolve,reject)=>{
    //读取文件
    require('fs').readFile(path,(err,data)=>{
      //判断
      if(err) reject;
      //成功
      resolve(data)
    })
  })
}

mineReadFile('./resource/content.txt')
.then(value=>{
  //输出文件内容
  console.log(value.toString());
},reason=>{
  console.log(reason)
})