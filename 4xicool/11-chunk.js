//数组分块
function chunk(arr,size=1){
  //声明两个遍历
  let result = [];
  let tmp = [];
  //遍历
  arr.forEach(item => {
    //判断tmp元素长度是否为0
    if(tmp.length === 0){
      //将tmp压入到result
      result.push(tmp);
    }
    //将元素压入到临时数组tmp中
    tmp.push(item)
    //判断
    if(tmp.length === size){
      tmp = [];
    }
  })
  return result;
}