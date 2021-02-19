function map(arr,callback){
  //声明一个空的数组
  let result = [];
  //遍历数组
  for (let i = 0; i < arr.length; i++) {
    //执行回调
    result.push(callback(arr[i]));
  }
  //返回结果
  return result
}


function reduce(arr,callback,initValue){
  //变量声明
  let result = initValue;
  //执行回调
  for (let i = 0; i < arr.length; i++) {
    //执行回调
    result = callback(result,arr[i]);
  }
  //返回最终的结果
  return result;
}

function filter(arr,callback){
  let result = [];
  //声明空数组
  for(let i = 0;i<arr.lenght;i++){
    let res = callback(arr[i]);
    //判断
    if(res){
      result.push(arr[i])
    }
  }
  //返回结果
  return result;
}

function find(arr,callback){
  for(let i = 0;i<arr.length;i++){
    let res = callback(arr[i]);
    if(res){
      return arr[i]
    }
  }
  return undefined
}

function findIndex(arr,callback){
  for(let i = 0;i<arr.length;i++){
    let res = callback(arr[i]);
    if(res){
      return i;
    }
  }
  return -1
}

function every(arr,callback){
  //遍历
  for (let i = 0; i < arr.length; i++) {
    //回调执行，结果为false
    if(!callback(arr[i])){
      return false
    }
  }
  //如果都满足则返回true
  return true;
}

function some(arr,callback){
  //遍历
  for (let i = 0; i < arr.length; i++) {
    //回调执行，有一个是true就返回true
    if(callback(arr[i])){
      return true
    }
  }
  //如果都满足则返回true
  return false;
}