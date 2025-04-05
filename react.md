components 分为 Functional component 和 class component

functional component 用法

```javascript

Function Welcome(props){
return (

<h1>Hello, {props.name}</h1>
);
}

ReactDOM.render(
<Welcome name='Jeff'/>,document.getElementById('root')
);
```

注:props 为父层传入的属性，无法修改

class component 用法

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: newDate()}
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
```

# **Redux**

## redux 原理

redux 是一个状态管理库，用于管理 react 应用的状态，redux 的核心是 store，store 是一个对象，包含了所有的状态，store 通过 reducer 来更新状态，reducer 是一个函数，接收当前的 state 和一个 action 对象，必要时决定如何更新状态，并返回新状态。

## Action#

action 是一个具有 type 字段的普通 JavaScript 对象,用于描述事件，type 为描述事件的字段，payload 为事件的附加信息
例：const addTodoAction = {
type: 'todos/todoAdded',
payload: 'Buy milk'
}

## Reducer#

reducer 是一个函数，接收当前的 state 和一个 action 对象，必要时决定如何更新状态，并返回新状态。函数签名是：(state, action) => newState，在其内部根据 action 执行不同的状态更新
注：仅使用 state 和 action 参数计算新的状态值
禁止直接修改 state。必须通过复制现有的 state 并对复制的值进行更改的方式来做 不可变更新(immutable updates)。
禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码

## store#

store 是通过传入一个 reducer 来创建的，并且有一个名为 getState 的方法，它返回 reducer 处理后的 state
const store = configureStore({ reducer: counterReducer })
store.getState()

## Dispatch#

Redux store 有一个方法叫 dispatch。更新 state 的唯一方法是调用 store.dispatch() 并传入一个 action 对象
store.dispatch({ type: 'counter/increment' })

我们通常调用 action creator 来调用 action：
const increment = () => {
return {
type: 'counter/increment'
}
}

## Selector#

Selector 函数可以从 store 状态树中提取指定的片段。随着应用变得越来越大，会遇到应用程序的不同部分需要读取相同的数据，selector 可以避免重复这样的读取逻辑
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
//只读取了 state 的 value

## 创建 Slice Reducer 和 Action

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

## Thunk

thunk 是一种特定类型的 Redux 函数，可以包含异步逻辑。Thunk 是使用两个函数编写的：
一个内部 thunk 函数，它以 dispatch 和 getState 作为参数
一个外部创建者函数，它创建并返回 thunk 函数
例：export const incrementAsync = amount => dispatch => {
setTimeout(() => {
dispatch(incrementByAmount(amount))
}, 1000)
}

## 使用 useSelector 提取数据

解决了无法直接访问 redux 中的 store 的问题
useSelector 这个 hooks 让我们的组件从 Redux 的 store 状态树中提取它需要的任何数据。
const count = useSelector(selectCount)

使用 useDispatch 来 dispatch action
直接访问 redux 中 store 的 dispatch 方法

## connect

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

# react hooks

## useEffect(()=>void,[])

如果 useEffect 的第二个参数是空数组，那么它只会在组件挂载的时候执行一次，如果是不传第二个参数，那么它会在组件挂载的时候执行一次，组件更新的时候也会执行一次，如果是传入一个数组，那么它会在组件挂载的时候执行一次，当数组中的值发生变化的时候也会执行一次。useEffect return 一个函数，这个函数会在 useEffect 再次执行前或组件销毁前执行，这个函数可以用来清除副作用。

## useLayoutEffect(()=>void,[])

与 useEffect 类似，但是会在所有的 DOM 变更之后*同步*调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
组件更新时执行销毁

## useContext

用于在 provider 包裹的函数组件中访问 context，即可在孙子组件中访问父组件的 context，不需要一层层传递。context 包含的是一个对象，可以在对象中添加多个属性，然后在子组件中通过 useContext 访问。

react 中，数据单向流动，父组件的数据可以通过 props 传递给子组件，但是子组件不能直接修改父组件的数据，只能通过父组件传递给子组件的函数修改父组件的数据。

在 hook 组件中，只有 state 或来自父组件的 props 发生变化时，才会重新渲染组件。
在 render 函数中对变量进行操作，不会影响到外部变量，只会影响到 render 函数中的变量。

# react route :

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

# react router 路径语法

:paramName – 匹配一段位于 /、? 或 # 之后的 URL。 命中的部分将被作为一个参数
() – 在它内部的内容被认为是可选的

- – 匹配任意字符(非贪婪的)直到命中下一个字符或者整个 URL 的末尾，并创建一个 splat 参数

优先级：自上而下，深度优先遍历

组件的 props 可直接用一个对象传进去，组件必须以大写开头命名

# forwardRef

接收一个渲染函数，React 将会把 ref 当作第二个参数传入这个函数，这样就可以在函数组件内部使用 ref 了。可用于隔代 ref 获取引用，react 不允许 ref 通过 props 传递，因为组件上已经有 ref 这个属性,在组件调和过程中，已经被特殊处理，forwardRef 出现就是解决这个问题，把 ref 转发到自定义的 forwardRef 定义的属性上，让 ref，可以通过 props 传递。
例：const NewFather = React.forwardRef((props,ref)=><Father grandRef={ref} {...props} /> )

# 高阶组件 HOC

将组件作为参数，并返回一个新的组件。新的组件会渲染传入的组件，同时还会提供额外的功能如混入 prop。HOC 通常用于代码复用、逻辑抽象和状态抽象。

# _PureComponent_

会自动实现 shouldComponentUpdate()，并且浅层对比 props 和 state 的变化。如果没有变化，就不会触发重新渲染。一般用于性能优化，减少 render 次数但是如果 props 或 state 是复杂数据结构，可能会因为无法检测到变化而产生 bug。
举例:export default class App extends PureComponent {
render() {
return <div>{this.props.name}</div>;
}
}

# Profiler

用于性能检测，检测组件渲染的时间，以及渲染的次数。可用于性能优化。
Profiler 需要两个参数：第一个参数：是 id，用于表识唯一性的 Profiler。第二个参数：onRender 回调函数，用于渲染完成，接受渲染参数

# React.memo()

是一个高阶组件，接收两个参数，第一个是组件，第二个是比较更新前后的 props 控制组件是否渲染的函数，默认返回 true 不渲染，false 渲染,通过 Object.is 比较 prop。 memo 与 PureComponent 非常类似，但它只会对函数 props 进行比较。

# useMemo 和 useCallback 的区别

_useMemo 是缓存计算结果，useCallback 是缓存函数，useMemo 和 useCallback 的依赖项都是一个数组_

useContext 可以代替 context.Consumer 来获取 Provider 中保存的 value 值。都得有 context.provider，但 context.provider 中的 value 值发生变化时，useContext 不会重新渲染，需要配合 useReducer 或者 useMemo 来实现

_react18 新特性都要在 ConcurrentMode 下才能使用,即用新的 root 渲染:const root = ReactDOM.createRoot(document.getElementById('app'))_
// v18 的新方法
root.render(<App/>)

1.  useState 更新会触发组件重新渲染，useRef 可保存变量，不会触发组件重新渲染，也不会重新渲染时丢失
2.  useEffect 可多处使用
3.  react 子传父用 props 的回调函数
4.  创建组件时，没有命令行，但有插件可以使用
5.  react 没有样式穿透，只有引入 css-module 包才能用 :global(.className)
6.  react 里，route 的 element 是一个组件，可以用 children 来获取其子组件，也可以用子 route 来继承其 route，冒号后表 params，可以用 match.params 来获取
7.  react 里 hash route 不能使用 useHistory,可以用 useLocation
8.  react 写法优化,{a&&template}不推荐,这样 a 为 false 时 template 不计算,也就是不渲染,但也会被创建,占用内存
9.  _react 写法优化 事件绑定时不要用 onClick = {async()=>{}}这样写,因为每次渲染都会创建一个新的函数,可以用 useCallback,useMemo,useRef 等 hook 来优化,或者直接在 jsx 里写 onClick={this.handleClick.bind(this)}这样写,因为 bind 返回的是一个函数,每次渲染都是同一个函数,不会重新创建,也可以用箭头函数,因为箭头函数没有 this,所以不会重新创建,但是这样写会导致每次渲染都会重新绑定事件,所以不推荐_
10. react 的 useRef 返回一个可变的 ref 对象,其 current 属性被初始化为传入的参数(initialValue),ref 对象的 current 不会随着组件的重新渲染而改变,并且改变 ref 对象的 current 不会引发组件的重新渲染。
11. useState 的函数式更新 setState(prevState=>{return prevState+1})这样写,可以避免因为异步更新导致的错误,因为函数式更新的回调函数会在更新时执行,而不是在渲染时执行,所以不会因为异步更新导致的错误
12. react 渲染
    jsx 其实是 React.createElement(component,props,...children)的语法糖
    可将任何东西作为子元素传递给自定义组件，只要确保在该组件渲染之前能够被转换成 React 理解的对象。这种用法并不常见，但可以用于扩展 JSX。
    例：<Repeat numTimes={10}>
    {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
    将回调函数当作 children 传给 Repeat 组件，Repeat 组件会调用回调函数，将 index 作为参数传入，然后将返回的 React 元素渲染到页面上。
13. _setState 会把它的多次调用合成一次，只 render 一次,遇上 setTimeout，setState 会变成同步(18 之后改成异步并发,即多个不同 setState 合并在同一次 render)_

14. _react 视图挂载_
    ```js
    import {createPortal} from "react"
    const Modal = ({children}) => {
      return createPortal(children, parentNode)
    }
    ```
    portal 只改变 DOM 节点的所处位置。在其他方面，渲染至 portal 的 JSX 的行为表现与作为 React 组件的子节点一致。该子节点可以访问由父节点树提供的 context 对象、事件将从子节点依循 React 树冒泡到父节点。
    将子元素挂载到一个不同的 DOM 节点上，这个节点存在于当前组件的层级之外。可用于父组件有 overflow: hidden 或 z-index 样式，但是需要子组件能够在视觉上“跳出”其容器的情况。

React-dom API
render 用于渲染一个 react 元素，一般 react 项目我们都用它，渲染根部容器 app。
ReactDOM.render(element, container[, callback])
例：ReactDOM.render(
< App / >,
document.getElementById('app')
)

# createElement

将 JSX 转换为 React 元素。React.createElement(type, [props], [...children])，type 可以是 HTML 标签名、React 组件或者 React.Fragment。props 是一个对象，表示元素的属性。children 是一个数组，表示元素的子元素。如果没有子元素，可以省略这个参数。如果有多个子元素，可以把它们放在一个数组里。如果子元素是一个字符串，可以直接放在 props 里。

# cloneElement

以 element 元素为样板克隆并返回新的 React 元素。返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。用于代理劫持子元素

# createContext

用于创建一个 Context 对象，createContext 对象中，包括用于传递 Context 对象值 value 的 Provider，和接受 value 变化订阅的 Consumer

# _Fiber_

Fiber 是 react 16 及以后采用的架构，相比较之前的 Reconciler-Renderer 架构变成了 Scheduler-Reconciler-Renderer;

Scheduler(调度器)—— 调度任务的优先级，高优任务优先进入 Reconciler
Reconciler(协调器)—— 负责找出变化的组件
Renderer(渲染器)—— 负责将变化的组件渲染到页面上

Reconciler 工作的阶段被称为 render 阶段。因为在该阶段会调用组件的 render 方法。
Renderer 工作的阶段被称为 commit 阶段。就像你完成一个需求的编码后执行 git commit 提交代码。commit 阶段会把 render 阶段提交的信息渲染在页面上。

## Scheduler

是调度器队列，它的作用是在浏览器空闲的时候，将任务交给 Reconciler,但如果有优先级更高的任务，如用户交互，动画等，会暂停当前的任务，先执行优先级更高的;

## Reconciler

是递归处理虚拟 dom,如果递归的次数太多，js 会一直占用主线程，阻碍 Renderer 的渲染，导致页面卡顿，所以 react16 采用了 Fiber 架构，将递归改成可中断的循环，每次循环不会太长，如果有优先级更高的任务，会先执行优先级高的任务，这样就不会阻塞主线程，提高了用户体验。
当前帧没有剩余时间的时候，会将剩余任务放到下一帧。
只有当所有组件都完成 Reconciler 的工作，才会统一交给 Renderer。

Fiber 的核心思想是将一个异步方法做成可中断的，并且继续执行的时候会复用之前的中间状态

## _Fiber 节点_

Fiber 节点构成 Fiber 树，Fiber 树是对 React 元素树进一步对应 DOM 树。Fiber 节点是对 React 元素的一种对应，它是一个普通的 JavaScript 对象，包含了当前元素的类型、对应的 DOM 节点、还有对应的 Fiber 节点的子节点、兄弟节点、父节点等信息,还包含了更新该 Fiber 节点状态所需要的信息以及调度优先级相关的信息

## 双缓存

_在内存中构建并直接替换的技术。 Fiber 双缓存意味着 DOM 树的创建与更新也是在内存里完成的。这个 Fiber 树称为 workInProgress Fiber,同时还有一个对应正在屏幕上显示的旧 Fiber 树,即 current Fiber. 如果它们的节点复用， 则节点通过 alternate 属性相连(由 diff 算法决定是否复用)。_
currentFiber.alternate === workInProgressFiber;
workInProgressFiber.alternate === currentFiber;

渲染完成后,fiberRoot 的 current 属性指向 workInProgressFiber 的根节点,workInProgressFiber 变成 currentFiber,然后 workInProgressFiber 又指向 null,这样就完成了替换,下次状态更新再产生一个新的 workInProgressFiber。

通过判断 currentFiber.alternate 是否存在,来判断是否是第一次渲染,如果是第一次渲染,则直接创建 DOM 节点,如果不是,则可以通过 diff 算法判断是否复用 DOM 节点

## render 阶段

即 Reconciler 构建 Fiber 树的阶段

workInProgress 代表当前已创建的 workInProgress fiber 节点
performUnitOfWork() 创建 workInProgress fiber 节点并连接到 Fiber 树
shouldYield() 判断是否有剩余时间，如果没有，就将任务交给 Renderer，如果有，就继续执行 Reconciler 的任务，如果有优先级更高的任务，就先执行优先级更高的任务，如果没有，就继续执行 Reconciler 的任务，直到没有任务或者没有剩余时间，将任务交给 Renderer。

### 向下阶段

从 rootFiber 开始，深度优先遍历 fiber 节点并调用 beginWork(),通过 beginWork 创建子 Fiber 节点，并连接到当前 Fiber 节点。
当遍历到叶子节点时开始向上返回，调用 completeUnitOfWork()
function beginWork(
current: Fiber | null,
workInProgress: Fiber,
renderLanes: Lanes
): Fiber | null

### 向上阶段

_completeUnitOfWork() 会判断当前节点是否有兄弟节点，如果有，就返回兄弟节点并调用 beginWork，如果没有，就返回父节点。_
update 时,已经存在 dom 节点，所以不需要创建 dom 节点，只需要更新 dom 节点的属性
mount 时,需要创建 dom 节点并连接到 dom 树上并更新 dom 节点的属性

遍历完所有节点后 completeUnitOfWork 返回 rootFiber，进入 commit 阶段

### reconcileChildren

这是 Reconciler 模块的核心部分。在 beginWork 中，根据 workInProgress.tag 决定是否调用 reconcileChildren 方法。

export function reconcileChildren(
current: Fiber | null,
workInProgress: Fiber,
nextChildren: any,
renderLanes: Lanes
) {
if (current === null) {
// 对于 mount 的组件
workInProgress.child = mountChildFibers(
workInProgress,
null,
nextChildren,
renderLanes,
);
} else {
// 对于 update 的组件
//diff 算法比较,生成新的 fiber child
workInProgress.child = reconcileChildFibers(
workInProgress,
current.child,
nextChildren,
renderLanes,
);
}
}

### effectList

在 commit 阶段需要对每一个 fiber 节点进行操作，但是不是每一个 fiber 节点都需要操作 dom，比如说函数组件，它没有 dom 节点，所以不需要操作，所以需要一个 effectList 来记录哪些 fiber 节点需要操作 dom，哪些不需要操作。
每个执行完 completeWork 并且存在 effectTag 的 fiber 节点都会被添加到 effectList 中，effectList 是一个单链表，每个 fiber 节点都有一个 nextEffect 属性指向下一个 fiber 节点。这个单向链表还有一个属性叫做 firstEffect，指向第一个需要操作的 fiber 节点，还有一个属性叫做 lastEffect，指向最后一个需要操作的 fiber 节点。

## commit 阶段

通过 commitRoot(fiberRootNode)开始，不可中断
Renderer 渲染的阶段
commit 阶段的主要工作(即 Renderer 的工作流程)分为三部分：
before mutation 阶段(执行 DOM 操作前)
mutation 阶段(执行 DOM 操作)
layout 阶段(执行 DOM 操作后)

### before mutation 阶段

此阶段进行了遍历 effectList 并调用 commitBeforeMutationEffects 函数处理；
_commitBeforeMutationEffects 函数主要分为三部分 1.处理 Dom 节点更新/删除后的 focus/blur 逻辑 2.调用 getSnapshotBeforeUpdate 生命周期函数 3.调用 useEffect(异步,防止阻止渲染)和 useLayoutEffect 钩子函数_

#### 调用 _getSnapshotBeforeUpdate_

自从 react16 采用了 fiber 构架之后，原来的 Reconciler 可被中断了，原来位于此处的 componentWillxxx 钩子函数在一次更新里可能会调用多次，因此都添加了 UNSAFE\_前缀
getSnapshotBeforeUpdate 在 render 之后，commit 之前调用，可以在此处获取 dom 节点的信息，返回值会作为 componentDidUpdate 的第三个参数传入，并且每次更新只有一次调用。

### mutation 阶段

这个阶段就是执行 dom 操作
遍历 effectList 并调用 commitMutationEffects 函数依次做三步处理；

1. 根据 ContentReset effectTag 重置文字节点
2. 更新 ref
3. 根据 effectTag 分别处理，其中 effectTag 包括(Placement | Update | Deletion | Hydrating)

_Fiber 节点不一定对应一个 dom 节点，它可能是一个组件，需要根据 fiber.tag 判断_

#### placement effect

创建 dom 节点并插入到父节点中，但会检查有无兄弟节点，如果有，就 insertBefore 插入到兄弟节点前，如果没有，就 appendChild 插入到父节点的子节点中

#### update effect

更新 Fiber 节点，当 fiber.tag 为 FunctionComponent 时会执行 useLayoutEffect 钩子函数销毁

#### deletion effect

删除 Fiber 节点对应 dom 节点

### layout 阶段

通过遍历 effectList 并调用 commitLayoutEffects 函数处理

1. 调用 useEffect 和 useLayoutEffect 钩子函数
2. 更新 ref
3. 更新 rootFiber

```javascript
function commitLayoutEffects(root: FiberRoot, committedLanes: Lanes) {
  while (nextEffect !== null) {
    const effectTag = nextEffect.effectTag

    // 调用生命周期钩子和hook
    if (effectTag & (Update | Callback)) {
      const current = nextEffect.alternate
      commitLayoutEffectOnFiber(root, current, nextEffect, committedLanes)
    }

    // 赋值ref
    if (effectTag & Ref) {
      commitAttachRef(nextEffect)
    }

    nextEffect = nextEffect.nextEffect
  }
}
```

其中 commitLayoutEffectOnFiber 会根据 fiber.tag 判断 class 组件还是 function 组件，
在 function 组件中调用 hooks
// 执行 useLayoutEffect 的回调函数
commitHookEffectListMount(HookLayout | HookHasEffect, finishedWork);
// 调度 useEffect 的销毁函数与回调函数，异步
schedulePassiveEffects(finishedWork);

componentWillUnmount 会在 mutation 阶段执行。此时 current Fiber 树还指向前一次更新的 Fiber 树，在生命周期钩子内获取的 DOM 还是更新前的。

componentDidMount 和 componentDidUpdate 会在 layout 阶段执行。此时 current Fiber 树已经指向更新后的 Fiber 树，在生命周期钩子内获取的 DOM 就是更新后的。

# **生命周期**

_采用 fiber 后，生命周期的执行顺序发生了变化，fiber 的生命周期分为三个阶段：mounting、updating、unmounting_

## mounting 阶段：

从根节点开始，深度优先遍历 fiber 树，创建 fiber 节点并连接到 fiber 树上，这个过程叫做 mounting，mounting 阶段的生命周期函数有：

1. constructor
2. getDerivedStateFromProps
3. render
4. componentDidMount

## updating 阶段：

当组件的 props 或 state 发生变化时，会触发更新，更新的过程叫做 updating，updating 阶段的生命周期函数有：

1. getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

## unmounting 阶段：

当组件从 DOM 中移除时，会触发 unmounting，unmounting 阶段的生命周期函数有：

1. componentWillUnmount

### _getDerivedStateFromProps_

该函数的功能就是从更新后的 props 中获取 State，它让组件在 props 发生改变时更新它自身的内部 state。

# **diff 算法**

diff 算法决定是否复用
通过比较 current Fiber(已存在的 fiber 节点)和更新后的 JSX 对象来生成 workInProgress Fiber(新的 fiber 节点)
从 Diff 的入口函数 reconcileChildFibers 出发，该函数会根据 newChild(即 JSX 对象)类型调用不同的处理函数。

## 单节点 diff

即 newChild 不是数组类型；先比较 key(默认 null)，再比较 type，都相同则可以复用，否则标记旧 dom 节点为删除，新建 fiber 节点。

## 多节点 diff

此时 newChild 是数组类型，即有多个子节点；但 currentFiber 是链表类型，只能一个一个比较。比较完 child(当前 currentFiber)后，再更新 child = child.sibling，直到没有兄弟节点为止。
因为更新操作多于创建和删除操作，所以在 diff 算法中，会先判断当前节点是否属于更新。
基于以上原因，Diff 算法的整体逻辑会经历两轮遍历：
第一轮遍历：处理更新的节点。
第二轮遍历：处理剩下的不属于更新的节点。

### 第一轮遍历

let i = 0，遍历 newChildren(JSX 对象)，将 newChildren[i]与 oldFiber 比较，判断 DOM 节点是否可复用。
如果可复用，i++，继续比较 newChildren[i]与 oldFiber.sibling，可以复用则继续遍历。
如果不可复用，分两种情况：
步骤三 key 不同导致不可复用，立即跳出整个遍历，第一轮遍历结束。
步骤四 key 相同 type 不同导致不可复用，会将 oldFiber 标记为 DELETION，并继续遍历。
如果 newChildren 遍历完(即 i === newChildren.length - 1)或者 oldFiber 遍历完(即 oldFiber.sibling === null)，跳出遍历，第一轮遍历结束。

此时分为两种情况：

1. 步骤三跳出遍历，都还有剩，这意味着有节点在这次更新中改变了位置。
2. 步骤四跳出遍历，此时若都遍历完则全为更新操作，若 newChildren 遍历完且 oldFiber 还有剩则为删除操作，遍历标记相应的 oldFiber 为 Deletion，若 oldFiber 遍历完则为创建操作。遍历剩余 newChildren 并 标记新生成的 fiber 节点为 Placement。

### 第二轮遍历

将所有还未处理的 oldFiber 存入以 key 为 key，oldFiber 为 value 的 Map 中，接下来遍历剩余的 newChildren，通过 newChildren[i].key 就能在 existingChildren 中找到 key 相同的 oldFiber。
React 选择最后一次可复用的节点 index 为 lastPlacedIndex，从 0 开始；找到当前 newChildren[i]的 index 即 i，如果 i 大于 lastPlacedIndex，复用该节点并更新 lastPlacedIndex，视为原 fiber 节点在新 fiber 节点的位置不变；若 i 小于 lastPlacedIndex，则复用该节点并视为原 fiber 节点在新 fiber 节点的位置向后变化。
考虑性能，我们要尽量减少将节点从旧 jsx 数组后面移动到新 jsx 数组前面的操作。

_当 child !== null 且 key 相同且 type 不同时执行 deleteRemainingChildren 将 child 及其兄弟 fiber 都标记删除。_
_当 child !== null 且 key 不同时仅将 child 标记删除。_

# 状态更新

## 触发状态更新的方法

1. ReactDOM.render (根组件)
2. this.setState (类组件)
3. this.forceUpdate (类组件)
4. useState (函数组件)
5. useReducer (函数组件)
   根组件和类组件共用一套 Update 结构

## render 阶段开始

调用 performSyncWorkOnRoot 或 performConcurrentWorkOnRoot 来进入同步或异步更新

## 状态更新流程

更新: _触发事件--> 在对应 fiber 节点上创建 update 对象-->从 fiber 节点向上遍历到 root-->调度更新-->render 阶段-->commit 阶段_

创建：_创建 fiberRootNode、rootFiber、updateQueue(`legacyCreateRootFromDOMContainer`)--> 创建 Update 对象(`updateContainer`)--> 从 fiber 到 root(`markUpdateLaneFromFiberToRoot`)-->调度更新(`ensureRootIsScheduled`)--> render 阶段(`performSyncWorkOnRoot` 或 `performConcurrentWorkOnRoot`)--> commit 阶段(`commitRoot`)_

它们都会在触发状态更新的 fiber 上创建 Update 对象,然后调用 markUpdateLaneFromFiberToRoot，将更新标记从当前 fiber 一直传递到 root fiber，然后调用 scheduler 的 ensureRootIsScheduled，决定以同步还是异步的方式调度本次更新。其中，ensureRootIsScheduled 会根据 newCallbackPriority === SyncLanePriority 调用 performSyncWorkOnRoot 或 performConcurrentWorkOnRoot 开启 render 阶段

## 心智模型

当高优先级出现时，中断当前更新，等待高优先级更新完成后再基于高优先级更新的结果进行更新。这样可以保证高优先级任务的优先级，提高用户体验。

## update 结构

```javascript
const update: Update<*> = {
  eventTime,
  lane,
  suspenseConfig,
  tag: UpdateState,
  payload: null,
  callback: null,
  next: null,
}
```

update 是一个链表结构，每个 update 都有一个 next 指针指向下一个 update，当一个组件有多个状态更新时，会形成一个 update 链表，被保存在 fiber.updateQueue。

## _updateQueue 结构_

updateQueue 有三种类型，其中针对 HostComponent 的类型是保存 props 的,针对 FunctionComponent 的类型是保存 hooks 的,针对 ClassComponent 和 HostRoot 的类型是保存 state 的，即以下类型。

```javascript
const queue: UpdateQueue<State> = {
  baseState: fiber.memoizedState,
  firstBaseUpdate: null,
  lastBaseUpdate: null,
  shared: {
    pending: null,
  },
  effects: null,
}
```

baseState：本次更新前该 Fiber 节点的 state，Update 基于该 state 计算更新后的 state;
firstBaseUpdate 与 lastBaseUpdate：本次更新前该 Fiber 节点已保存的 Update。以链表形式存在，链表头为 firstBaseUpdate，链表尾为 lastBaseUpdate。之所以在更新产生前该 Fiber 节点内就存在 Update，是由于*某些 Update 优先级较低所以在上次 render 阶段由 Update 计算 state 时被跳过*。
shared.pending：触发更新时，产生的 Update 会保存在 shared.pending 中形成单向环状链表。当由 Update 计算 state 时这个环会被剪开并连接在 lastBaseUpdate 后面,shared.pending 始终指向最后一个插入的 update。

_剪开环的操作: lastBaseUpdate.next = shared.pending.next，shared.pending.next = null，lastBaseUpdate = shared.pending。_

## 优先级

React 会调用 Scheduler 提供的方法 runWithPriority。
该方法接收一个优先级常量与一个回调函数作为参数。回调函数会以优先级高低为顺序排列在一个定时器中并在合适的时间触发。
_优先级最终会反映到 update.lane 变量上。_

## update 执行

根据 fiber 节点的 firstBaseUpdate 与 lastBaseUpdate 依次执行，但优先级不够的会被跳过，且 update 之间可能有依赖关系，所以被跳过的 update 及其后面所有 update 会成为下次更新的 baseUpdate。(即 u1 -- u2)。
在 commit 阶段结尾会再调度一次更新。在该次更新中会基于 baseState 中 firstBaseUpdate 保存的 u1->u2，开启一次新的 render 阶段。
因此，u2 对应的更新执行了两次，相应的 render 阶段的生命周期勾子 componentWillXXX 也会触发两次。这也是为什么这些勾子会被标记为 unsafe\_。

_当有 Update 被跳过时，下次更新的 baseState !== 上次更新的 memoizedState。_ 通过这种方式，React 保证了最终的状态一定和用户触发的交互一致

## ReactDOM.render

ReactDOM.render 会调用 legacyRenderSubtreeIntoContainer 方法，该方法会调用 createFiberRoot 方法完成 fiberRootNode 和 rootFiber 的创建以及关联。并初始化 updateQueue。

// 连接 rootFiber 与 fiberRootNode
root.current = uninitializedFiber;
uninitializedFiber.stateNode = root;

## react 三种模式

react 有三种模式对应三个入口函数，分别是
legacy -- ReactDOM.render(<App />, rootNode)
blocking -- ReactDOM.createBlockingRoot(rootNode).render(<App />)
concurrent -- ReactDOM.createRoot(rootNode).render(<App />)

## this.setState

this.setState 内会调用 this.updater.enqueueSetState 方法。
该方法内就是创建 update 对象并通过 enqueueUpdate 将其插入到 fiber.updateQueue.shared.pending 中以及通过 scheduleUpdateOnFiber 调度 update。

## this.forceUpdate

调用 this.updater.enqueueForceUpdate 方法，除了赋值 update.tag = ForceUpdate;以及没有 payload 外，其余与 this.setState 相同。
赋值 update.tag = ForceUpdate 是为了在 render 阶段判断 ClassComponent 是否需要更新时跳过 shouldComponentUpdate 方法。

```javascript
const shouldUpdate =
  checkHasForceUpdateAfterProcessing() ||
  checkShouldComponentUpdate(
    workInProgress,
    ctor,
    oldProps,
    newProps,
    oldState,
    newState,
    nextContext
  )
```

# Hooks

## **基本 Hooks**

在 Class 组件中，update 保存在 fiber.updateQueue 中，而在 Function 组件中，update 保存在 fiber.memoizedState,也就是 单个 hook 中。
对应的 fiber 结构类似如下

```javascript
// App组件对应的fiber对象
const fiber = {
  // 保存该FunctionComponent对应的Hooks链表
  memoizedState: null,
  // 指向App函数
  stateNode: App,
}

hook = {
  // 保存update的queue，即上文介绍的queue
  queue: {
    pending: null,
  },
  // 保存hook对应的state
  memoizedState: null,
  baseState: null,
  baseQueue: null,
  // 与下一个Hook连接形成单向无环链表
  next: null,
}
```

同类型 hook 的 memoizedState 保存不同类型数据，具体如下：
useState：对于 const [state, updateState] = useState(initialState)，memoizedState 保存 state 的值
useReducer：对于 const [state, dispatch] = useReducer(reducer, {});，memoizedState 保存 state 的值
useEffect：memoizedState 保存包含 useEffect 回调函数、依赖项等的链表数据结构 effect。effect 链表同时会保存在 fiber.updateQueue 中
useRef：对于 useRef(1)，memoizedState 保存{current: 1}
useMemo：对于 useMemo(callback, [depA])，memoizedState 保存[callback(), depA]
useCallback：对于 useCallback(callback, [depA])，memoizedState 保存[callback, depA]。与 useMemo 的区别是，useCallback 保存的是 callback 函数本身，而 useMemo 保存的是 callback 函数的执行结果
有些 hook 是没有 memoizedState 的，比如：
useContext

Hook 是无环的单向链表
在组件 render 时，每当遇到下一个 useState，我们移动 workInProgressHook 也就是 fiber.memoizedState 的指针

## useState 基本实现

```javascript
function useState(initialState) {
  let hook
  if (isMount) {
    hook = {
      queue: {
        pending: null,
      },
      memoizedState: initialState,
      next: null,
    }
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook
    } else {
      workInProgressHook.next = hook
    }
    workInProgressHook = hook
  } else {
    hook = workInProgressHook
    workInProgressHook = workInProgressHook.next
  }

  let baseState = hook.memoizedState
  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next

    do {
      const action = firstUpdate.action
      baseState = action(baseState)
      firstUpdate = firstUpdate.next
    } while (firstUpdate !== hook.queue.pending.next)

    hook.queue.pending = null
  }
  hook.memoizedState = baseState

  return [baseState, dispatchAction.bind(null, hook.queue)]
}
//dispatchAction 函数
function dispatchAction(queue, action) {
  const update = {
    action,
    next: null,
  }
  if (queue.pending === null) {
    update.next = update
    //初始化updateQueue为环形链表
  } else {
    update.next = queue.pending.next
    queue.pending.next = update
    //添加到环形链表末尾
  }
  queue.pending = update //移动链表指针到链表末尾
  scheduleUpdateOnFiber(fiber) //调度更新
}
```

## Hooks 数据结构

在真实的 Hooks 中，组件 mount 时的 hook 与 update 时的 hook 来源于不同的对象，这类对象在源码中被称为 dispatcher。
一般是通过对应 fiber 的以下条件判断 isMount。
current === null || current.memoizedState === null

在 FunctionComponent render 时，会从 ReactCurrentDispatcher.current（即当前 dispatcher）中寻找需要的 hook。

```javascript
// mount时的Dispatcher
const HooksDispatcherOnMount: Dispatcher = {
  useCallback: mountCallback,
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle: mountImperativeHandle,
  useLayoutEffect: mountLayoutEffect,
  useMemo: mountMemo,
  useReducer: mountReducer,
  useRef: mountRef,
  useState: mountState,
  // ...省略
}

// update时的Dispatcher
const HooksDispatcherOnUpdate: Dispatcher = {
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: updateReducer,
  useRef: updateRef,
  useState: updateState,
  // ...省略
}

ReactCurrentDispatcher.current =
  current === null || current.memoizedState === null
    ? HooksDispatcherOnMount
    : HooksDispatcherOnUpdate
```

除了这两个 dispatcher，还有其他的 dispatcher 例如 ContextOnlyDispatcher

```javascript
export const ContextOnlyDispatcher: Dispatcher = {
useCallback: throwInvalidHookError,
useContext: throwInvalidHookError,
useEffect: throwInvalidHookError,
useImperativeHandle: throwInvalidHookError,
useLayoutEffect: throwInvalidHookError,
...
}
```

## useState 和 useReducer

它们源码如下

```javascript
function useState(initialState) {
  var dispatcher = resolveDispatcher()
  return dispatcher.useState(initialState)
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher()
  return dispatcher.useReducer(reducer, initialArg, init)
}
```

_useState 即 reducer 参数为 basicStateReducer 的 useReducer_
mount 时这两个 Hook 的唯一区别为 queue 参数的 lastRenderedReducer 字段,update 时它们都调用同一个函数 updateReducer

```javascript
function mountState<S>(
  initialState: (() => S) | S
): [S, Dispatch<BasicStateAction<S>>] {
  // 创建并返回当前的hook
  const hook = mountWorkInProgressHook()

  // ...赋值初始state

  // 创建queue
  const queue = (hook.queue = {
    pending: null,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: (initialState: any),
  })

  // ...创建dispatch
  return [hook.memoizedState, dispatch]
}

function basicStateReducer<S>(state: S, action: BasicStateAction<S>): S {
  return typeof action === "function" ? action(state) : action
}

function updateReducer<S, I, A>(
  reducer: (S, A) => S,
  initialArg: I,
  init?: (I) => S
): [S, Dispatch<A>] {
  // 获取当前hook
  const hook = updateWorkInProgressHook()
  const queue = hook.queue

  queue.lastRenderedReducer = reducer

  // ...同update与updateQueue类似的更新逻辑

  const dispatch: Dispatch<A> = (queue.dispatch: any)
  return [hook.memoizedState, dispatch]
}
```

## **useEffect**

flushPassiveEffects 内部会设置优先级，并执行 flushPassiveEffectsImpl。
flushPassiveEffectsImpl 主要做三件事：

1. 调用该 useEffect 在上一次 render 时的销毁函数
2. 调用该 useEffect 在本次 render 时的回调函数
3. 如果存在同步任务，不需要等待下次事件循环的宏任务，提前执行他
   从 v16.13.0 开始，useEffect 的优先级被设置为 NormalPriority，即优先级最低，会在页面渲染后（layout 阶段后）异步执行。

针对 1，useEffect 的执行需要保证所有组件 useEffect 的销毁函数必须都执行完后才能执行任意一个组件的 useEffect 的回调函数。
这是因为多个组件间可能共用同一个 ref，而销毁函数可能会修改这个 ref，所以需要保证销毁函数执行完后再执行回调函数。
同理，useLayoutEffect 也是如此，只是它的优先级是 ImmediatePriority，即优先级最高，会在 layout 阶段前执行。

```javascript
// pendingPassiveHookEffectsUnmount中保存了所有需要执行销毁的useEffect
const unmountEffects = pendingPassiveHookEffectsUnmount
pendingPassiveHookEffectsUnmount = []
for (let i = 0; i < unmountEffects.length; i += 2) {
  const effect = ((unmountEffects[i]: any): HookEffect)
  const fiber = ((unmountEffects[i + 1]: any): Fiber)
  const destroy = effect.destroy
  effect.destroy = undefined

  if (typeof destroy === "function") {
    // 销毁函数存在则执行
    try {
      destroy()
    } catch (error) {
      captureCommitPhaseError(fiber, error)
    }
  }
}

function schedulePassiveEffects(finishedWork: Fiber) {
  const updateQueue: FunctionComponentUpdateQueue | null =
    (finishedWork.updateQueue: any)
  const lastEffect = updateQueue !== null ? updateQueue.lastEffect : null
  if (lastEffect !== null) {
    const firstEffect = lastEffect.next
    let effect = firstEffect
    do {
      const {next, tag} = effect
      if (
        (tag & HookPassive) !== NoHookEffect &&
        (tag & HookHasEffect) !== NoHookEffect
      ) {
        // 向`pendingPassiveHookEffectsUnmount`数组内`push`要销毁的effect
        enqueuePendingPassiveHookEffectUnmount(finishedWork, effect)
        // 向`pendingPassiveHookEffectsMount`数组内`push`要执行回调的effect
        enqueuePendingPassiveHookEffectMount(finishedWork, effect)
      }
      effect = next
    } while (effect !== firstEffect)
  }
}
```

向 pendingPassiveHookEffectsUnmount 数组内 push 数据的操作发生在 layout 阶段 commitLayoutEffectOnFiber 方法内部的 schedulePassiveEffects 方法中。

针对 2，create 阶段与销毁类似，不同的是 try 执行回调函数并赋值 destroy 函数

```javascript
try {
  const create = effect.create
  effect.destroy = create()
} catch (error) {
  captureCommitPhaseError(fiber, error)
}
```

## useRef

```javascript
function mountRef<T>(initialValue: T): {|current: T|} {
  // 获取当前useRef hook
  const hook = mountWorkInProgressHook()
  // 创建ref
  const ref = {current: initialValue}
  hook.memoizedState = ref
  return ref
}

function updateRef<T>(initialValue: T): {|current: T|} {
  // 获取当前useRef hook
  const hook = updateWorkInProgressHook()
  // 返回保存的数据
  return hook.memoizedState
}
```

hook.memoizedState 保存 ref 的值,它仅仅是一个包含 current 属性的对象。

ref 的工作流程可以分为两部分：
render 阶段为含有 ref 属性的 fiber 添加 Ref effectTag
commit 阶段为包含 Ref effectTag 的 fiber 执行对应操作

组件对应 fiber 被赋值 Ref effectTag 需要满足的条件：
fiber 类型为 HostComponent、ClassComponent、ScopeComponent（这种情况我们不讨论）
对于 mount，workInProgress.ref !== null，即存在 ref 属性
对于 update，current.ref !== workInProgress.ref，即 ref 属性改变

## useMemo 和 useCallback

```javascript
function mountMemo<T>(
  nextCreate: () => T,
  deps: Array<mixed> | void | null
): T {
  // 创建并返回当前hook
  const hook = mountWorkInProgressHook()
  const nextDeps = deps === undefined ? null : deps
  // 计算value
  const nextValue = nextCreate()
  // 将value与deps保存在hook.memoizedState
  hook.memoizedState = [nextValue, nextDeps]
  return nextValue
}

function updateMemo<T>(
  nextCreate: () => T,
  deps: Array<mixed> | void | null
): T {
  // 返回当前hook
  const hook = updateWorkInProgressHook()
  const nextDeps = deps === undefined ? null : deps
  const prevState = hook.memoizedState

  if (prevState !== null) {
    if (nextDeps !== null) {
      const prevDeps: Array<mixed> | null = prevState[1]
      // 判断update前后value是否变化
      if (areHookInputsEqual(nextDeps, prevDeps)) {
        // 未变化
        return prevState[0]
      }
    }
  }
  // 变化，重新计算value
  const nextValue = nextCreate()
  hook.memoizedState = [nextValue, nextDeps]
  return nextValue
}
```

useCallback 与 useMemo 创建时的不同就是 nextCreate: () => T 变成了 callback: T；

# concurrent 模式

在 react 16.6 之后，react 的引入了 scheduler，用于时间切片和调度任务的优先级
Scheduler 将需要被执行的回调函数作为 MessageChannel 的回调执行。如果当前宿主环境不支持 MessageChannel，则使用 setTimeout。
注：MessageChannel 是一个异步通信机制，比 setTimeout 更先执行的宏任务。
每次遍历前，都会通过 Scheduler 提供的 shouldYield 方法判断是否需要中断遍历，使浏览器有时间渲染。
是否中断的依据，最重要的一点便是每个任务的剩余时间是否用完。
在 Scheduler 中，为任务分配的初始剩余时间为 5ms，随着应用运行，会通过 fps 动态调整分配给任务的可执行时间。(时间切片)

## 优先级调度

```javascript
function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break
    default:
      priorityLevel = NormalPriority
  }

  var previousPriorityLevel = currentPriorityLevel
  currentPriorityLevel = priorityLevel

  try {
    return eventHandler()
  } finally {
    currentPriorityLevel = previousPriorityLevel
  }
}

var timeout
switch (priorityLevel) {
  case ImmediatePriority:
    timeout = IMMEDIATE_PRIORITY_TIMEOUT
    break
  case UserBlockingPriority:
    timeout = USER_BLOCKING_PRIORITY_TIMEOUT
    break
  case IdlePriority:
    timeout = IDLE_PRIORITY_TIMEOUT
    break
  case LowPriority:
    timeout = LOW_PRIORITY_TIMEOUT
    break
  case NormalPriority:
  default:
    timeout = NORMAL_PRIORITY_TIMEOUT
    break
}

var expirationTime = startTime + timeout

// Times out immediately
var IMMEDIATE_PRIORITY_TIMEOUT = -1
// Eventually times out
var USER_BLOCKING_PRIORITY_TIMEOUT = 250
var NORMAL_PRIORITY_TIMEOUT = 5000
var LOW_PRIORITY_TIMEOUT = 10000
// Never times out
var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt
```

一共有 5 个优先级，commit 阶段的起点 commitRoot 方法的优先级为 ImmediateSchedulerPriority。
ImmediateSchedulerPriority 即 ImmediatePriority 的别名，为最高优先级，会立即执行。

Scheduler 存在两个队列：
timerQueue：保存未就绪任务
taskQueue：保存已就绪任务
每当有新的未就绪的任务被注册，我们将其插入 timerQueue 并根据开始时间重新排列 timerQueue 中任务的顺序。
当 timerQueue 中有任务就绪，即 startTime <= currentTime，我们将其取出并加入 taskQueue。
取出 taskQueue 中最早过期的任务并执行他。

## lane 模型

React 的优先级模型,是通过使用 31 位的二进制表示 31 条赛道，位数越小的赛道优先级越高，某些相邻的赛道拥有相同优先级。
Lane 模型是一种用于标识更新优先级的概念，而 Scheduler 是负责根据这些优先级信息来动态调度任务执行的机制。
Lane 模型主要关注于标识和管理更新的优先级，它是一种静态的概念，用于确定哪些更新应该被认为是紧急的。
Scheduler 则是负责实际的任务调度和执行，它根据 Lane 中的优先级信息，动态地决定何时执行哪些任务，以保证应用的响应性和性能。

# react tips

1. react _State hooks 原理：state hooks 是在 fiber 节点里以链表形式储存的，因此是按照顺序读取，若 state hooks 写在 if 或 for 里，某一次没执行的话，会造成之后所有的 state hooks 的读取位置错误_
2. react useReducer,用法类似 redux，是 useState 的基础，例: const [val,dispatch] = useReducer(reducer,initVal)
3. react hooks 为什么不能在循环，条件判断，嵌套函数中使用，因为 hooks 是按顺序读取的，如果在循环，条件判断，嵌套函数中使用，那么 hooks 的读取位置就会发生错误，导致读取到错误的值
4. react hooks 和 class 组件的区别
5. react useDeferredValue 返回一个延迟响应的值，该值可能“延后”的最长时间为 timeoutMs。 const deferredValue = useDeferredValue(value, { timeoutMs: 2000 });
6. react 的自定义 hook 其实就是将自定义 hook 内的代码执行了一遍
7. **react 组件渲染时会重新创造函数和变量**
8. useEffect 销毁阶段拿到的 useState 值是初始值，不会随着 update 更新值，因此用 useRef 替代 useState
9. react useImperativeHandle,暴露组件的内部方法给父组件。 父组件通过 ref 获取子组件的实例，可以通过 ref.current 调用子组件的方法
10. react lazy 用于懒加载组件 用法
    ```js
    import {lazy} from "react"
    const MarkdownPreview = lazy(() => import("./MarkdownPreview.js"))
    ```
11. react suspense 用于处理组件的加载状态以及捕获错误，用法
    ```js
    import {Suspense} from "react"
    ;<Suspense fallback={<div>Loading...</div>}>
      <MarkdownPreview />
    </Suspense>
    ```
12. react cache 用于服务端渲染时缓存数据，用法

    ```js
    import {cache} from "react"
    import calculateMetrics from "lib/metrics"

    const getMetrics = cache(calculateMetrics)

    function Chart({data}) {
      const report = getMetrics(data)
      // ...
    }
    ```

13. react memo 用于缓存组件，避免 props 未改变时重复渲染，用法

    ```js
    import {memo} from "react"
    const MemoizedComponent = memo(SomeComponent, arePropsEqual?)//默认是浅比较
    ```

14. react startTransition 用于在后台渲染 UI 的一部分，会将 action 内的 state 更新标记为 transition。用法
    ```js
    import {startTransition} from "react"
    startTransition(() => {
      // update state
    })
    ```
    startTransition 与 useTransition 非常相似，但它不提供 isPending 标志来跟踪一个 Transition 是否正在进行。

# componentDidCatch

在 react 16 之后，使用 componentDidCatch 捕获错误

```javascript
componentDidCatch(error, info) {
  // 捕获错误
  console.log(error, info)
}
```

# profile

profile 是 react 16 之后的一个 api，用于记录 react 的性能，使用方法如下

```javascript
ReactDOM.startProfileEventLogging()
ReactDOM.stopProfileEventLogging()
```

# react18 新特性

1. 通过 concurrent 模式，使用新特性如 useDeferredValue，useTransition，useId 等
2. 自动批量处理，合并更新，而 react17 在 Promise 链、异步代码、原生事件处理函数中失效，导致同步更新,即可能 render 多次
3. Suspense 组件，用于在组件加载时显示 fallback 组件，在加载完成后显示组件内容，在 react18 中支持 ssr
4. startTransition 用于标记一个状态更新为过渡状态，当状态更新时，react 会先执行过渡状态的更新，当过渡状态执行完成后，再执行非过渡状态的更新,即降低更新优先级
5. const [isPending, startTransition] = useTransition()，然后在需要低优先级的逻辑外包裹 startTransition。
6. useDeferredValue 和 useTransition 一样，都是标记了一次非紧急更新。useTransition 是处理一段逻辑，而 useDeferredValue 是产生一个新状态，它是延时状态
7. 给第三方的 hook

# react19 新特性

1. ref 直接作为 props 传递；
2. 组件中可直接写 meta，title，link 标签，react 会将它们自动提升至 head 里
3. 新钩子 useActionState，用于处理 action 和 state 的关系，类似于 useReducer，但是更加灵活，可以自定义 action 和 state 的关系；
