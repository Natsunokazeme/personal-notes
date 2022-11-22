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

when state or props changed, the components will render again.
no need to change child state from parent components. props are enough to do that.
child can change parent component's state by callback function in props supered from parent.
if state render in react can just write in the render function as js.
In render function, we could use map replace of for to render repetition components.(In functional components,just return is ok for render)
style in jsx is used as style={{key:value}}.its key is camel

const [a,setA] =useState(initVal);
useState 有 2 个参数，第二个是 callback，用于 state 更新后的回调函数

react hooks
useState<T>(()=>T)
useEffect(()=>void,[])
如果 useEffect 的第二个参数是空数组，那么它只会在组件挂载的时候执行一次，如果是不传第二个参数，那么它会在组件挂载的时候执行一次，组件更新的时候也会执行一次，如果是传入一个数组，那么它会在组件挂载的时候执行一次，当数组中的值发生变化的时候也会执行一次。useEffect return 一个函数，这个函数会在 useEffect 再次执行前或组件销毁前执行，这个函数可以用来清除副作用。

react hook return 内进行的操作会在组件更新的时候执行，而不是在组件挂载的时候执行，并且对 let 声明的变量只会在 return 内生效，不会影响外部变量。

useContext 用于在 provider 包裹的函数组件中访问 context，即可在孙子组件中访问父组件的 context，不需要一层层传递。context 包含的是一个对象，可以在对象中添加多个属性，然后在子组件中通过 useContext 访问。

react 中，数据单向流动，父组件的数据可以通过 props 传递给子组件，但是子组件不能直接修改父组件的数据，只能通过父组件传递给子组件的函数修改父组件的数据。

在 hook 组件中，只有 state 或来自父组件的 props 发生变化时，才会重新渲染组件。
在 render 函数中对变量进行操作，不会影响到外部变量，只会影响到 render 函数中的变量。

react route :

1.  <Route path="/" component={App} />
    {/* 当 url 为/时渲染 Home */}
     <IndexRoute component={Home} />
2.  <Route path="about" component={About}/>
    <Route path="inbox" component={Inbox}>
     <Route path="/messages/:id" component={Message} />

         {/* 跳转 /inbox/messages/:id 到 /messages/:id */}

     <Redirect from="messages/:id" to="/messages/:id" />
     </Route>
     URL	  组件
     /	    App
     /about	App -> About
     /inbox	App -> Inbox
     /messages/:id	App -> Inbox -> Message

    Route 可以定义 onEnter 和 onLeave 两个 hook ，这些 hook 会在页面跳转确认时触发一次。这些 hook 对于一些情况非常的有用，例如权限验证或者在路由跳转前将一些数据持久化保存起来。
    在路由跳转过程中，onLeave hook 会在所有将离开的路由中触发，从最下层的子路由开始直到最外层父路由结束。然后 onEnter hook 会从最外层的父路由开始直到最下层子路由结束。

react router 路径语法
:paramName – 匹配一段位于 /、? 或 # 之后的 URL。 命中的部分将被作为一个参数
() – 在它内部的内容被认为是可选的

- – 匹配任意字符（非贪婪的）直到命中下一个字符或者整个 URL 的末尾，并创建一个 splat 参数

优先级：自上而下，深度优先遍历

组件的 props 可直接用一个对象传进去，组件必须以大写开头命名

jsx 其实是 React.createElement(component,props,...children)的语法糖
可将任何东西作为子元素传递给自定义组件，只要确保在该组件渲染之前能够被转换成 React 理解的对象。这种用法并不常见，但可以用于扩展 JSX。
例：<Repeat numTimes={10}>
{(index) => <div key={index}>This is item {index} in the list</div>}
</Repeat>
将回调函数当作 children 传给 Repeat 组件，Repeat 组件会调用回调函数，将 index 作为参数传入，然后将返回的 React 元素渲染到页面上。

ReactDOM.createPortal(
this.props.children,
domNode
);
将子元素挂载到一个不同的 DOM 节点上，这个节点存在于当前组件的层级之外。可用于父组件有 overflow: hidden 或 z-index 样式，但是需要子组件能够在视觉上“跳出”其容器的情况。

forwardRef
 接收一个渲染函数，React 将会把 ref 当作第二个参数传入这个函数，这样就可以在函数组件内部使用 ref 了。可用于隔代ref获取引用，react不允许ref通过props传递，因为组件上已经有 ref 这个属性,在组件调和过程中，已经被特殊处理，forwardRef出现就是解决这个问题，把ref转发到自定义的forwardRef定义的属性上，让ref，可以通过props传递。
 例：const NewFather = React.forwardRef((props,ref)=><Father grandRef={ref}  {...props} />  )

 高阶组件 HOC 将组件作为参数，并返回一个新的组件。新的组件会渲染传入的组件，同时还会提供额外的功能。HOC 通常用于代码复用、逻辑抽象和状态抽象。

 PureComponent 会自动实现 shouldComponentUpdate()，并且浅层对比 props 和 state 的变化。如果没有变化，就不会触发重新渲染。一般用于性能优化，减少render次数但是如果 props 或 state 是复杂数据结构，可能会因为无法检测到变化而产生 bug。

 React.memo() 是一个高阶组件，接收两个参数，第一个是组件，第二个是比较更新前后的props控制组件是否渲染的函数，返回true不渲染，false渲染。 memo与 PureComponent 非常类似，但它只会对函数props进行比较。

 Profiler 用于性能检测，检测组件渲染的时间，以及渲染的次数。可用于性能优化。
 Profiler 需要两个参数：第一个参数：是 id，用于表识唯一性的Profiler。第二个参数：onRender回调函数，用于渲染完成，接受渲染参数

 createElement 将 JSX 转换为 React 元素。React.createElement(type, [props], [...children])，type 可以是 HTML 标签名、React 组件或者 React.Fragment。props 是一个对象，表示元素的属性。children 是一个数组，表示元素的子元素。如果没有子元素，可以省略这个参数。如果有多个子元素，可以把它们放在一个数组里。如果子元素是一个字符串，可以直接放在 props 里。

 cloneElement 以 element 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。用于代理劫持子元素

 createContext 用于创建一个Context对象，createContext对象中，包括用于传递 Context 对象值 value的Provider，和接受value变化订阅的Consumer

 useMemo和useCallback的区别，useMemo是缓存计算结果，useCallback是缓存函数，useMemo和useCallback的依赖项都是一个数组

useContext 可以代替 context.Consumer 来获取 Provider 中保存的 value 值。都得有context.provider，但context.provider中的value值发生变化时，useContext不会重新渲染，需要配合useReducer或者useMemo来实现

React-dom API
render用于渲染一个react元素，一般react项目我们都用它，渲染根部容器app。
ReactDOM.render(element, container[, callback])
例：ReactDOM.render(
    < App / >,
    document.getElementById('app')
)

createPortal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。createPortal(child, container)。第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。第二个参数（container）是一个 DOM 元素。
