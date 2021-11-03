//导出方法，不实现功能
import {
    reactive,
    shallowReactive,
    shallowReadonly,
    readonly
} from './reactive'
let state = reactive({ name: '4xi', age: { n: 12 } })
console.log(state.age);