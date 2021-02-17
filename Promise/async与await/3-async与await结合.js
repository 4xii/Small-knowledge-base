/* 
  resource content.txt content1.txt
*/

const fs = require('fs');
const util = require('util');
const mineReadFile = util.promisify(fs.readFile)

//回调函数的方式
// fs.readFile('./resource/content.txt',(err,data1) => {
//   if(err) throw err;
//   fs.readFile('./resource/content1.txt',(err,data2) => {
//     if(err) throw err;
//     fs.readFile('./resource/content2.txt',(err,data3) => {
//       if(err) throw err;
//       console.log(data1+data2+data3);
//     })
//   })
// })

async function main(){
  try {
    //读取第一个文件内容
    let data1 = await  mineReadFile('./resource/content.txt')
    let data2 = await  mineReadFile('./resource/content1.txt')
    let data3 = await  mineReadFile('./resource/content2.txt')
    console.log(data1+data2+data3);
  } catch (error) {
    console.log(e); 
  }
}
main();