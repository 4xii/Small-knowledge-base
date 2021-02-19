function drop(arr,size){
  //过滤原数组产生新数组
  // return arr.filter((value,index) => {
  //   //
  //   return index >= size;
  // })
  return arr.filter((val,index)=> index >= size)
}

function dropRight(arr,size){
  return arr.filter((val,index) => index < arr.length - size)
}