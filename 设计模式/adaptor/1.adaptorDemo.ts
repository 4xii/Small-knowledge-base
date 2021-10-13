/*
 * @Author: 朱世新
 * @Date: 2021-10-14 06:26:17
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-10-14 06:30:37
 * @Description: 
 */
//这是需要被适配的类
class Socket {
  output(){
    return '220V'
  }
}

abstract class Power{
  abstract charge(): string
}

class PowerAdaptor extends Power{
  constructor(public socket:Socket){
    super();
  }
  charge():string{
    return this.socket.output()+'转换为24v'
  }
}

let adaptor = new PowerAdaptor(new Socket());
console.log(adaptor.charge());
