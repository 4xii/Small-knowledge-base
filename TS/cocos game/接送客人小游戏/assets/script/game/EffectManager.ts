import { _decorator, Component, Node, Prefab, ParticleUtils, ParticleSystemComponent, instantiate } from "cc";
import { CustomEventListener } from "../data/CustomEventListener";
import {Constants} from "../data/Constants";
import { PoolManager } from "../data/PoolManager";
const { ccclass, property } = _decorator;

@ccclass("EffectManager")
export class EffectManager extends Component {
    //获取管理特效
    @property({
        type:Prefab
    })
    brakeTrail: Prefab = null;

    @property({
        type:Prefab
    })
    coin: Prefab = null;

    private _followTarget:Node = null;
    private _currBraking:Node = null;
    private _coin:ParticleSystemComponent = null;

    public start(){
        CustomEventListener.on(Constants.EventName.START_BRAKING,this._startBraking,this);
        CustomEventListener.on(Constants.EventName.END_BRAKING,this._endBraking,this);
        CustomEventListener.on(Constants.EventName.SHOW_COIN,this._showCoin,this)
    }

    //更新当前
    public update(){
        if(this._currBraking && this._followTarget){
            this._currBraking.setWorldPosition(this._followTarget.worldPosition)
        }
    }

    private _startBraking(...args:any[]){
        const follow = this._followTarget = args[0];
        this._currBraking = PoolManager.getNode(this.brakeTrail,this.node)
        this._currBraking.setWorldPosition(follow);
        ParticleUtils.play(this._currBraking);//把当前节点对象的粒子系统执行play操作
    }

    private _endBraking(){
        const currBraking = this._currBraking;
        ParticleUtils.stop(currBraking);//把当前节点对象的粒子系统停止操作
        this.scheduleOnce(()=>{
            PoolManager.setNode(currBraking);//2秒后回收
        },2);

        this._currBraking = null;
        this._followTarget = null;
    }

    private _showCoin(...args:any[]){
        const pos = args[0];
        if(!this._coin){
            const coin = instantiate(this.coin) as Node;
            coin.setParent(this.node);
            this._coin = coin.getComponent(ParticleSystemComponent)
        }

        this._coin.node.setWorldPosition(pos);
        this._coin.play();
    }
}
