//定义表示记分牌的类
class ScorePanel{
  //score和level用来记录分数和等级
  score  = 0;
  level = 1;

  //分数和等级所在的元素，在构造函数钟进行初始化
  scoreEle:HTMLElement;
  levelEle:HTMLElement;

  //设置一个变量限制等级
  maxlevel:number;
  //设置一个变量表示多少分时升级
  upScore:number;


  constructor(maxlevel:number = 10,upScore:number = 10){
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxlevel = maxlevel;
    this.upScore = upScore;
  }

  //设置一个加分的方法
  addScore(){
    //使分数自增
    this.scoreEle.innerHTML = ++this.score + '';
    //判断分数是多少
    if(this.score % this.upScore ===0){
      this.levelUp();
    }
  }

  //提升等级的方法
  levelUp(){
    if(this.level < this.maxlevel){
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}

export default ScorePanel;

//测试代码
/* const scorePanel = new ScorePanel(100,2);
for(let i=0;i<200;i++){
  scorePanel.addScore(); 
} */

