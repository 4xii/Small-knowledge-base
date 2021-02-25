/* 
  扫描器类
*/
export default class Scanner{
  constructor(templateStr) {
    //将模板字符串写在实例身上
    this.templateStr = templateStr;
    //指针
    this.pos = 0;
    //尾巴,一开始就是模板字符串
    this.tail =templateStr;
  }

  //走过指定内容，没有返回值
  scan(tag) {
    if(this.tail.indexOf(tag) == 0){
      //tag有多长，就让指针后移多少位
      this.pos += tag.length;
      //尾巴
      this.tail = this.templateStr.substring(this.pos)
    }
  }

  //让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
  scanUtil(stopTag) {
    //记录一下执行本方法的时候pos的值
    const pos_backup = this.pos;
    //当尾巴开头不是stopTag的时候，就说明还没有扫描到stopTag
    //&&防止找不到，找到最后也要停止
    while(!this.eos() && this.tail.indexOf(stopTag) !== 0){
      this.pos++;
      //改变尾巴为从当前指针这个字符开始，到最后的字符
      this.tail = this.templateStr.substring(this.pos)
    }

    return this.templateStr.substring(pos_backup,this.pos);
  }

  //判断指针是否到头
  eos() {
    return this.pos >= this.templateStr.length;
  }
}