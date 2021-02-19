//数组扁平化
function flatten1(arr){
  //声明空数组
  let result = [];
  //遍历数组
  arr.forEach(item => {
    //判断
    if(Array.isArray(item)){
      result = result.concat(flatten1(item));
    }else{
      result = result.concat(item)
    }
  });
  //返回结果
  return result;
}

function flatten2(arr){
  let result = [...arr];
  //循环判断
  while(result.some(item => Array.isArray(item))){
    result = [].concat(...result)
  }
  return result
}