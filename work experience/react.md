components 分为 Functional component 和 class component

functional component 用法

Function Welcome(props){
return (

<h1>Hello, {props.name}</h1>
);
}

ReactDOM.render(
<Welcome name='Jeff'/>,document.getElementById('root')
);

注:props 为父层传入的属性，无法修改

class component 用法

classClockextendsReact.Component{
constructor(props){
super(props);
this.state ={date:newDate()};}
render(){
return(

<div>
<h1>Hello, world!</h1>
<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
</div>
);
}
}
State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。

hook 用法
useState();
useEffect():

Redux

Action#
action 是一个具有 type 字段的普通 JavaScript 对象,用于描述事件，type 为描述事件的字段，payload 为事件的附加信息
例：const addTodoAction = {
type: 'todos/todoAdded',
payload: 'Buy milk'
}

Reducer#
reducer 是一个函数，接收当前的 state 和一个 action 对象，必要时决定如何更新状态，并返回新状态。函数签名是：(state, action) => newState，在其内部根据 action 执行不同的状态更新
注：仅使用 state 和 action 参数计算新的状态值
禁止直接修改 state。必须通过复制现有的 state 并对复制的值进行更改的方式来做 不可变更新（immutable updates）。
禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码

store#
store 是通过传入一个 reducer 来创建的，并且有一个名为 getState 的方法，它返回 reducer 处理后的 state
const store = configureStore({ reducer: counterReducer })
store.getState()

Dispatch#
Redux store 有一个方法叫 dispatch。更新 state 的唯一方法是调用 store.dispatch() 并传入一个 action 对象
store.dispatch({ type: 'counter/increment' })

我们通常调用 action creator 来调用 action：
const increment = () => {
return {
type: 'counter/increment'
}
}

Selector#
Selector 函数可以从 store 状态树中提取指定的片段。随着应用变得越来越大，会遇到应用程序的不同部分需要读取相同的数据，selector 可以避免重复这样的读取逻辑
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
//只读取了 state 的 value

创建 Slice Reducer 和 Action
负责生成 action 类型字符串、action creator 函数和 action 对象的工作。您所要做的就是为这个切片定义一个名称，编写一个包含 reducer 函数的对象，它会自动生成相应的 action 代码。name 选项的字符串用作每个 action 类型的第一部分，每个 reducer 函数的键名用作 action 第二部分。以及定义初始状态值。
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
name: 'counter',
initialState: {
value: 0
},
reducers: {
increment: state => {
state.value += 1
},
decrement: state => {
state.value -= 1
},
incrementByAmount: (state, action) => {
state.value += action.payload
}
}
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

Thunk
thunk 是一种特定类型的 Redux 函数，可以包含异步逻辑。Thunk 是使用两个函数编写的：
一个内部 thunk 函数，它以 dispatch 和 getState 作为参数
一个外部创建者函数，它创建并返回 thunk 函数
例：export const incrementAsync = amount => dispatch => {
setTimeout(() => {
dispatch(incrementByAmount(amount))
}, 1000)
}

使用 useSelector 提取数据
解决了无法直接访问 redux 中的 store 的问题
useSelector 这个 hooks 让我们的组件从 Redux 的 store 状态树中提取它需要的任何数据。
const count = useSelector(selectCount)

使用 useDispatch 来 dispatch action
直接访问 redux 中 store 的 dispatch 方法

connect
用于将 state 和 dispatch 映射为 props,
connect(mapStateToProps, mapDispatchToProps)(Component)

function mapStateToProps(state, ownProps?)
返回一个 connected 的组件需要的数据，每一次 state 改变的时候都会自动订阅,是 connect 的第一个参数，可用 null 或 undefined 替代，取消该方法
