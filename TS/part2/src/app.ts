console.log('hello');
let a:number = 10;
let b:number = 33;

function fn(this: Window){
  alert(this);
}

let box1 = document.getElementById('box1');

  /* if(box1 !== null){
    box1.addEventListener('click',function(){
      alert('hello')
    })
  } */

  box1?.addEventListener('click',function(){
    alert('hello')
  });