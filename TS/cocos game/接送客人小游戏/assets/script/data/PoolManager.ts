import { _decorator, Component, Node, Prefab, instantiate } from "cc";
const { ccclass, property } = _decorator;

@ccclass("PoolManager")
export class PoolManager{
    public static handle = new Map<string,Node[]>();

    public static getNode(prefab:Prefab,parent:Node){
        const name = prefab.name;
        let node:Node = null;
        //判断有没有当前节点词
        if(this.handle.has(name)){
            node = this.handle.get(name).pop()//取出当前池里的对象词
        }else{
            node = instantiate(prefab) as Node;
        }

        node.setParent(parent);
        return node;
    }

    public static setNode(target:Node){
        const name = target.name;
        target.parent = null;
        if(this.handle.has(name)){
            this.handle.get(name).push(target);
        }else{
            this.handle.set(name,[target]);
        }
    }
}
