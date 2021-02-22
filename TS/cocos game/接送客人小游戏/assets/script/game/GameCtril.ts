import { _decorator, Component, Node,Touch,EventTouch, BoxColliderComponent } from "cc";
import { Constants } from "../data/Constants";
import { AudioManager } from "./AudioManager";
import { CarManager } from "./CarManager";
import { MapManager } from "./MapManager";
const { ccclass, property } = _decorator;

@ccclass("GameCtril")
export class GameCtril extends Component {
    @property({
        type:MapManager,
    })
    mapManager: MapManager = null;

    @property({
        type:CarManager,
    })
    carManager: CarManager = null;

    @property({
        type:Node,
    })
    group:Node = null;

    //生命周期onLoad初始化阶段
    public onLoad(){
        this.mapManager.resetMap();
        this.carManager.reset(this.mapManager.currPath)
        const collider = this.group.getComponent(BoxColliderComponent);
        collider.setGroup(Constants.CarGroup.NORMAL);
        collider.setMask(-1);//所有组都检测
    }

    //屏幕点击事件
    public start(){
        this.node.on(Node.EventType.TOUCH_START,this._touchStart,this);
        this.node.on(Node.EventType.TOUCH_END,this._touchEnd,this)

        AudioManager.playMusic(Constants.AudioSource.BACKGROUND)
    }
    
    private _touchStart(touch:Touch,event:EventTouch){
        this.carManager.controlMoving();
    }

    private _touchEnd(touch:Touch,event:EventTouch){
        this.carManager.controlMoving(false);
    }
}
