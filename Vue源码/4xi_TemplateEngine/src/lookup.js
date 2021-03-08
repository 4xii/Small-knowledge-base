/* 
  功能是可以在dataObj对象中，寻找用连续点符号的keyName属性
  识别a.b.c
*/
export default function lookup(dataObj,keyName){
  //看看keyName中有没有点符号
  if(keyName.indexOf('.') != -1 && keyName != '.'){
    //如果有点符号,那么拆开
    var keys = keyName.split('.');
    //设置临时变量，用于周转，一层一层找下去
    var temp = dataObj
    for (let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]];
    }

    return temp;
  }
  //如果这里没有点符号
  return dataObj[keyName];
}
