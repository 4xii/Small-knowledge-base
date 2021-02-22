import { _decorator, Component, Node, Vec3, AnimationComponent } from "cc";
import { CustomEventListener } from "../data/CustomEventListener";
import {Constants} from "../data/Constants"
import { AudioManager } from "./AudioManager";
const { ccclass, property } = _decorator;

const EventName = Constants.EventName;
const _tempVec = new Vec3();

@ccclass("C")
export class C extends Component {
    @property({
        type:[Node]
    })
    customers:Node[]=[];
    @property
    walkTime = 2;

    private _currCustomer:Node = null;
    private _startPos = new Vec3();
    private _endPos = new Vec3();
    private _inTheOrder = false;
    private _deltaTime = 0;//差值位置
    private _state = Constants.CustomerState.NONE;
    

    public start(){
        CustomEventListener.on(EventName.GREETING,this._greetingCustomer,this);
        CustomEventListener.on(EventName.GOODBYE,this._takingCustomer,this);
    }

    public update(dt:number){
        
        //在订单中
        if(this._inTheOrder){
            this._deltaTime += dt;
            if(this._deltaTime > this.walkTime){
                this._deltaTime = 0;//结束了
                this._inTheOrder = false;
                this._currCustomer.active = false;
                if(this._state === Constants.CustomerState.GOODBYE){
                    this._currCustomer = null;//当触发GOODBYE 当前乘客消失
                }

                CustomEventListener.dispatchEvent(EventName.FINISHED_WALK)
                if(this._state === Constants.CustomerState.GREETING){
                    AudioManager.playSound(Constants.AudioSource.INCAR);
                }
            }else{
                Vec3.lerp(_tempVec,this._startPos,this._endPos,this._deltaTime/this.walkTime);//多少秒完成运动时间
                this._currCustomer.setWorldPosition(_tempVec);
            }
        }
    }

    private _greetingCustomer(...args:any[]){
        //随机出一个乘客
        this._currCustomer = this.customers[Math.floor(Math.random()*this.customers.length)]
        this._state = Constants.CustomerState.GREETING;
        this._inTheOrder = true;
        if(!this._currCustomer){
            return;//如果当前没有乘客
        }
        const carPos = args[0];
        const direction =args[1];
        Vec3.multiplyScalar(this._startPos,direction,1.4);
        this._startPos.add(carPos);//顾客开始位置
        Vec3.multiplyScalar(this._endPos,direction,0.5);
        this._endPos.add(carPos);

        this._currCustomer.setWorldPosition(this._startPos);
        this._currCustomer.active = true;

        if (direction.x !== 0) {
            if (direction.x > 0) {
                this._currCustomer.eulerAngles = new Vec3(0, -90, 0);
            } else {
                this._currCustomer.eulerAngles = new Vec3(0, 90, 0);
            }
        } else {
            if (direction.z > 0) {
                this._currCustomer.eulerAngles = new Vec3(0, 180, 0);
            } else {
                this._currCustomer.eulerAngles = new Vec3();
            }
        }
        //播放动画
        const animComp = this._currCustomer.getComponent(AnimationComponent);
        animComp.play('walk');

    }

    private _takingCustomer(...args:any[]){
        this._state = Constants.CustomerState.GOODBYE;
        this._inTheOrder = true;

        const carPos = args[0];
        const direction =args[1];
        Vec3.multiplyScalar(this._startPos,direction,0.5);
        this._startPos.add(carPos);//顾客开始位置
        Vec3.multiplyScalar(this._endPos,direction,1.4);
        this._endPos.add(carPos);

        this._currCustomer.setWorldPosition(this._startPos);
        this._currCustomer.active = true;

        if (direction.x !== 0) {
            if (direction.x > 0) {
                this._currCustomer.eulerAngles = new Vec3(0, 90, 0);
            } else {
                this._currCustomer.eulerAngles = new Vec3(0, -90, 0);
            }
        } else {
            if (direction.z > 0) {
                this._currCustomer.eulerAngles = new Vec3();
            } else {
                this._currCustomer.eulerAngles = new Vec3(0, 180, 0);
            }
        }
        //播放动画
        const animComp = this._currCustomer.getComponent(AnimationComponent);
        animComp.play('walk');
        AudioManager.playSound(Constants.AudioSource.GETMONEY);
    }
}
