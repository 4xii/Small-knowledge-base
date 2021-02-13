import parseAttrsString from './parseAttrsString.js'
//parse函数，主函数
export default function(templateString){
  //指针
  var index = 0;
  //剩余部分
  var rest = '';
  //开始标记
  var startRegExp = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/
  //结束标记
  var endRegExp = /^\<\/([a-z]+[1-6]?)\>/
  //抓取结束标记前的文字
  var wordRegExp = /^([^\<]+)\<\/([a-z]+[1-6]?)\>/
  //准备两个栈
  var stack1 = [];
  var stack2 = [{'children':[]}];
  
  while(index < templateString.length - 1){
    rest = templateString.substring(index);
    //console.log(templateString[index]);
    //识别遍历到的这个字符，是不是一个开始标签
    if(startRegExp.test(rest)){
      let tag = rest.match(startRegExp)[1];
      let attrsString = rest.match(startRegExp)[2]
      //console.log('检测到开始标记',tag);
      //将开始标记推入栈1中
      stack1.push(tag);
      //将空数组推入栈2中
      stack2.push({'tag':tag,'children':[],'attrs':parseAttrsString(attrsString)})
      //指针移动标签的长度加2喝attrsString，< >占两位
      //得到attrs的长度
      const attrsStringLength = attrsString != null ? attrsString.length : 0
      index += tag.length + 2 + attrsStringLength
    } else if(endRegExp.test(rest)){
      //设别遍历到的这个字符是不是一个结束标签
      let tag = rest.match(endRegExp)[1];
      //console.log('检测到结束标记',tag);
      let pop_tag = stack1.pop();
      //此时，tag一定是和栈1顶部的是相同的
      if(tag == pop_tag){
        let pop_arr = stack2.pop();
        if(stack2.length > 0){
          stack2[stack2.length - 1].children.push(pop_arr)
        }

      } else {
        throw new Error(stack1[stack1.length - 1]+'标签没有封闭')
      }
      //</>占三位
      index += tag.length + 3;;
    } else if (wordRegExp.test(rest)){
      //设别遍历到的这个字符是不是文字
      let word = rest.match(wordRegExp)[1];
      //看word是不是全空
      if(!/^\s+$/.test(word)){
        //不是全是空
        //console.log('检测到文字',word);
        //改变此时stack2栈顶元素中
        stack2[stack2.length - 1].children.push({'text':word,'type':3})
      }
      
      index += word.length;
      //console.log(stack1,stack2)
    } else {
      index++;
    }
  }
  //此时stack2就是我们之前默认放置的一项了，此时要返回这一项的children即可
  return stack2[0].children[0];
}