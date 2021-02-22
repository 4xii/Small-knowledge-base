import { _decorator, Component, Node, Vec3, ParticleSystemComponent, BoxColliderComponent, RigidBodyComponent, ICollisionEvent } from "cc";
import { CustomEventListener } from "../data/CustomEventListener";
import {RoadPoint} from "./RoadPoint";
import {Constants} from '../data/Constants';
import { AudioManager } from "./AudioManager";

const { ccclass, property } = _decorator;
const EventName = Constants.EventName;

const _tempVec = new Vec3();

@ccclass("Car")
export class Car extends Component {
    @property
    maxSpeed = 0.2;//可配置的最大速度
    //小车朝向问题
    private _currRoadPoint: RoadPoint = null;
    private _pointA = new Vec3();
    private _pointB = new Vec3();
    private _currSpeed = 0;//速度
    private _isMoving = false;
    private _offset = new Vec3();
    private _originRotation = 0;
    private _targetRotation = 0;
    private _centerPoint = new Vec3();
    private _rotMeasure = 0;//度量值
    private _acceleration = 0.2; //加速度
    private _isMain = false;//由于AI小车和主角小车公用一套逻辑，用于区分
    private _isInOrder = false;//订单触发>乘客在运动
    private _isBraking = false;
    private _gas:ParticleSystemComponent = null;
    private _overCD: Function = null;
    private _camera:Node = null;

    //监听动画播放结束的回调
    public start (){
        CustomEventListener.on(EventName.FINISHED_WALK,this._finishedWalk,this)
    }

    public update(dt:number){
        if (!this._isMoving || this._isInOrder) {
            return;
        }
        this._offset.set(this.node.worldPosition);

        //加速
        this._currSpeed += this._acceleration * dt;
        if (this._currSpeed > this.maxSpeed) {
            this._currSpeed = this.maxSpeed;
        }
        if (this._currSpeed <= 0.001) {
            this._isMoving = false;//刹车到0.001 就停止
            if(this._isBraking){
                this._isBraking = false;
                CustomEventListener.dispatchEvent(EventName.END_BRAKING);//派发刹车事件
            }
        }
        //向朝向方向运动
        switch (this._currRoadPoint.moveType) {
            case RoadPoint.RoadMoveType.BEND:
                const offsetRotation = this._targetRotation - this._originRotation;//总需要旋转的角度
                const currRotation = this._conversion(this.node.eulerAngles.y);//已经旋转的角度
                //当前进度值+（速度*度量值）>角度  得出下一站运动的角度
                let nextStation = (currRotation - this._originRotation) + (this._currSpeed * this._rotMeasure * (this._targetRotation > this._originRotation ? 1 : -1))
                //容错处理
                if (Math.abs(nextStation) > Math.abs(offsetRotation)) {
                    nextStation = offsetRotation;
                }

                //应该旋转的角度
                const target = nextStation + this._originRotation;
                _tempVec.set(0, target, 0);
                this.node.eulerAngles = _tempVec;

                //运动
                // const sin = Math.sin(nextStation*Math.PI/180);
                // const cos = Math.cos(nextStation*Math.PI/180);
                // const xLength = this._pointA.x - this._centerPoint.x;
                // const zLength = this. _pointA.z - this._centerPoint.z;
                // //求出目标x轴坐标
                // const xPos = xLength * cos + zLength*sin + this._centerPoint.x;
                // const zPos = -xLength * sin + zLength*cos + this._centerPoint.z; 
                Vec3.rotateY(this._offset, this._pointA, this._centerPoint, nextStation * Math.PI / 180);
                //this._offset.set(xPos,0,zPos);
                break;
            default:
                const z = this._pointB.z - this._pointA.z;
                if (z !== 0) {
                    if (z > 0) {
                        //制定一个范围
                        this._offset.z += this._currSpeed;
                        //容错处理
                        if (this._offset.z > this._pointB.z) {
                            this._offset.z = this._pointB.z;
                        }
                    } else {
                        this._offset.z -= this._currSpeed;
                        //容错处理
                        if (this._offset.z < this._pointB.z) {
                            this._offset.z = this._pointB.z;
                        }
                    }
                } else {
                    const x = this._pointB.x - this._pointA.x;
                    if (x > 0) {
                        this._offset.x += this._currSpeed;
                        //容错处理
                        if (this._offset.x > this._pointB.x) {
                            this._offset.x = this._pointB.x;
                        }
                    } else {
                        this._offset.x -= this._currSpeed;
                        //容错处理
                        if (this._offset.x < this._pointB.x) {
                            this._offset.x = this._pointB.x;
                        }

                    }
                }
                break;
        }
        this.node.setWorldPosition(this._offset);
        Vec3.subtract(_tempVec, this._pointB, this._offset);
        if (_tempVec.length() <= 0.01) {
            this._arrivalSataion();
        }

    }

    
    public setEntry(entry:Node,isMain=false){
        this.node.setWorldPosition(entry.worldPosition);
        this._currRoadPoint = entry.getComponent(RoadPoint); 
        this._isMain = isMain; 
        if(!this._currRoadPoint){
            console.warn('This is no RoadPoint in' + entry.name);
        } 

        //通过下一个点与本点的差计算小车朝向
        this._pointA.set(entry.worldPosition)
        this._pointB.set(this._currRoadPoint.nextStation.worldPosition);
        const z = this._pointB.z - this._pointA.z;
        if(z !== 0){
            if(z<0){
                this.node.eulerAngles = new Vec3();
            }else{
                this.node.eulerAngles = new Vec3(0,180,0)
            }
        }else{
            const x = this._pointB.x - this._pointA.x;
            if(x>0){
                this.node.eulerAngles = new Vec3(0,270,0);
            }else{
                this.node.eulerAngles = new Vec3(0,90,0);
            }
        }


        const collider = this.node.getComponent(BoxColliderComponent);
        if(this._isMain){
            const gasNode = this.node.getChildByName('gas');
            this._gas = gasNode.getComponent(ParticleSystemComponent);
            this._gas.play();

            collider.on('onCollisionEnter',this._onCollisionEnter,this);
            collider.setGroup(Constants.CarGroup.MAIN_CAR)//玩家分组
            collider.setMask(Constants.CarGroup.OTHER_CAR)//要碰撞的组
        }else{
            collider.setGroup(Constants.CarGroup.OTHER_CAR)
            collider.setMask(-1)//所有组都检测为-1
        }
        this._resetPhysical();//激活一次刚体组件
    }

    public setCamera(camera:Node,pos:Vec3,rotation:number){
        if(this._isMain){
            this._camera = camera;
            this._camera.parent = this.node;
            this._camera.setPosition(pos);
            this._camera.eulerAngles = new Vec3(rotation,0,0)
        }
    }
    public startRunning(){
        if(this._currRoadPoint){
            this._isMoving = true;
            this._currSpeed = 0;
            this._acceleration = 0.2;
        }
    }
    public stopRunning(){
        this._acceleration = -0.3;
        CustomEventListener.dispatchEvent(EventName.START_BRAKING,this.node);//执行START_BRAKING
        this._isBraking = true;
        //this._isMoving = false;
        AudioManager.playSound(Constants.AudioSource.STOP);
    }

    public moveAfterFinished(cd:Function){
        this._overCD = cd;
    }

    public stopImmediaterly(){
        this._isMoving =false;
        this._currSpeed = 0;
    }

    //到站
    private _arrivalSataion(){
        
        this._pointA.set(this._pointB);
        this._currRoadPoint = this._currRoadPoint.nextStation.getComponent(RoadPoint);
        if(this._currRoadPoint.nextStation){
            this._pointB.set(this._currRoadPoint.nextStation.worldPosition);

            //到站乘客事件
            if(this._isMain){
                //触发刹车动画
                if(this._isBraking){
                    this._isBraking = false;
                    CustomEventListener.dispatchEvent(EventName.END_BRAKING);
                }


                if (this._currRoadPoint.type === RoadPoint.RoadPointType.GREETING) {
                    this._greetingCustomer();
                } else if (this._currRoadPoint.type === RoadPoint.RoadPointType.GOODBYE) {
                    this._takingCustomer();
                } else if (this._currRoadPoint.type === RoadPoint.RoadPointType.END){
                    AudioManager.playSound(Constants.AudioSource.WIN);//到达终点播放胜利
                }
            }


            //转弯,到达某一个站
            if(this._currRoadPoint.moveType === RoadPoint.RoadMoveType.BEND){
                //判断是顺逆时针
                if(this._currRoadPoint.clockwise){
                    this._originRotation = this._conversion(this.node.eulerAngles.y);
                    this._targetRotation = this._originRotation - 90;
                    //找出顺时针的圆心
                    if((this._pointB.z < this._pointA.z && this._pointB.x > this._pointA.x) || (this._pointB.z >this._pointA.z && this._pointB.x < this._pointA.x)){
                        this._centerPoint.set(this._pointB.x,0,this._pointA.z)
                    }else{
                        this._centerPoint.set(this._pointA.x,0,this._pointB.z)
                    }
                }
            }else {
                this._originRotation = this._conversion(this.node.eulerAngles.y);
                this._targetRotation = this._originRotation - 90;

                if((this._pointB.z > this._pointA.z && this._pointB.x > this._pointA.x) || (this._pointB.z < this._pointA.z && this._pointB.x < this._pointA.x)){
                    this._centerPoint.set(this._pointB.x,0,this._pointA.z)
                }else{
                    this._centerPoint.set(this._pointA.x,0,this._pointB.z)
                }
            }

            Vec3.subtract(_tempVec,this._pointA,this._centerPoint);
            const r = _tempVec.length();
            this._rotMeasure = 90/(Math.PI * r /2);

        }else{
            this._isMoving = false;
            this._currRoadPoint = null;

            if(this._overCD){
                this._overCD(this);
                this._overCD = null;
            }
        }
    }

    private _onCollisionEnter(event:ICollisionEvent){
        console.log('碰撞了')
        
        const otherCollider = event.otherCollider;
        if(otherCollider.node.name === 'group'){
            return;
        }
        const otherRigidBody = otherCollider.node.getComponent(RigidBodyComponent);//获取刚体
        otherRigidBody.useGravity = true;//使用重力
        otherRigidBody.applyForce(new Vec3(0,3000,-1500),new Vec3(0,0.5,0));//添加推力

        const collider = event.selfCollider;
        collider.addMask(Constants.CarGroup.NORMAL);
        const rigidBody = this.node.getComponent(RigidBodyComponent);
        rigidBody.useGravity = true;
        this._gameover();

    }
    
    private _greetingCustomer(){
        //接客
        this._isInOrder = true;
        this._currSpeed = 0;//清除速度
        //dispatchEvent派发 小车的位置 当前的方向
        this._gas.stop();
        CustomEventListener.dispatchEvent(EventName.GREETING,this.node.worldPosition,this._currRoadPoint.direction)
    }

    private _takingCustomer(){
        this._isInOrder = true;
        this._currSpeed = 0;//清除速度
        this._gas.stop();
        CustomEventListener.dispatchEvent(EventName.GOODBYE,this.node.worldPosition,this._currRoadPoint.direction)
        CustomEventListener.dispatchEvent(EventName.SHOW_COIN,this.node.worldPosition);//送客弹金币
    }

    private _finishedWalk(){
        if(this._isMain){
            this._isInOrder = false;
            this._gas.play();
        }
    }

    private _gameover(){
        CustomEventListener.dispatchEvent(EventName.GAME_OVER);
    }

    private _resetPhysical(){
        //只有在碰撞时需要重力，重置重力
        const rigidBody = this.node.getComponent(RigidBodyComponent);
        rigidBody.useGravity = false;
        rigidBody.sleep();
        rigidBody.wakeUp();//节点池拿出来刚体可能休眠
    }
    //转换角度正负
    private _conversion(value:number){
        let a = value;
        if(a<=0){
            a+=360
        }
        return a;
    }
}
