function clone1(target){
  //类型对象
  if(typeof target === 'object' && target !== null){
    //判断数据是否是数组
    if(Array.isArray(target)){
      return [...target];
    }else{
      return {...target}
    }
  } else {
    return target
  }
}

function clone2(target) {
  //判断
  if(typeof target === 'object' && target !== null){
    //创建一个容器
    const result = Array.isArray(target ) ? [] : {};
    //遍历数据
    for(let key in target){
      //判断当前对象身上是否包含该属性
      if(target.hasOwnProperty(key)){
        //将属性设置到result结果数据中
        result[key] = target[key];
      }
    }
    return result
  } else {
    return target;
  }
}

function deepClone1(target){//正则函数日期无法转JSON
  //通过数据创建JSON格式的字符串
  let str = JSON.stringify(target)
  //将JSON字符串创建为JS数据
  let data = JSON.parse(str);
  return data
}

function deepClone2(target){
  //检测数据类型
  if(typeof target === 'object' && target != null){
    //创建一个容器
    const result = Array.isArray(target) ? [] :{}
    //遍历对象
    for(let key in target){
      //检测该属性是否为对象本身的属性（不能拷贝原型对象的属性）
      if(target.hasOwnProperty(key)){
        //拷贝
        result[key] = deepClone2(target[key]);
      }
    }
    return result;
  } else {
    return target;
  }
}

function deepClone3(target,map=new Map()){
  //检测数据类型
  if(typeof target === 'object' && target != null){
    //克隆数据之前，进行判断，数据之前是否克隆过
    let cache = map.get(target);
    if(cache){
      return cache;
    }
    //创建一个容器
    const result = Array.isArray(target) ? [] :{}
    //将新的结果存入容器中
    map.set(target,result)
    //遍历对象
    for(let key in target){
      //检测该属性是否为对象本身的属性（不能拷贝原型对象的属性）
      if(target.hasOwnProperty(key)){
        //拷贝
        result[key] = deepClone3(target[key],map);
      }
    }
    return result;
  } else {
    return target;
  }
}

function deepClone4(target,map=new Map()){
  //检测数据类型
  if(typeof target === 'object' && target != null){
    //克隆数据之前，进行判断，数据之前是否克隆过
    let cache = map.get(target);
    if(cache){
      return cache;
    }
    //判断目标数据类型
    let isArray = Array.isArray(target)
    //创建一个容器
    const result = isArray ? [] :{}
    //将新的结果存入容器中
    map.set(target,result)
    //遍历对象
    //如果目标数据为数组
    if(isArray){
      //forEach
      target.forEach((item,index) => {
        result[index] = deepClone4(item,map);
      })
    }else{
      //如果是对象
      Object.keys(target).forEach(key => {
        result[key] = deepClone4(target[key],map)
      })
    }
    return result;
  } else {
    return target;
  }
}