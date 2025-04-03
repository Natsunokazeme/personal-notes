8.scss 的 mixin 适用于多个属性绑定到一起

1.  proxy 代理设置, target 将 location 的 origin 替代为 target,pathrewrite 将 origin 之后的 path 部分替换
2.  packege.json 里的 script 定义 npm 执行脚本, 用 npm run xxx 运行 xxx 对应的脚本

3.  设置 pipeline：1.需从 azure 上读值,先在 pipeline 的 library 上设置变量的 key 和 value(前端 library 叫 frontend-deploy)；2. 在代码库里设置 environment3.将设置的 environment 的值与 library 上的 key 在代码库里的 pipeline yml 文件中对应,如：echo "##vso[task.setvariable variable=api_community_bebaseurl]$(api_community_bebaseurl_dev)" //api_community_bebaseurl_dev 是 library 上的 key,api_community_bebaseurl 是代码库里的 key,这样就可以在代码库里的 environment 中使用了

4.  提升单元测试分支覆盖率技巧 若顶级的 template 显示未覆盖,可能是 shallowMount 导致子组件未渲染,子组件的 if else 分支未覆盖,可以通过 mount 解决,还可以写多个 describe,每个 describe 里的 it 都是独立的,可以提升分支覆盖率

5.  H.264 是一种视频压缩算法,虽然有损但压缩比大,视频质量损失不大,被广泛使用.H.265 是 H.264 的升级版,压缩比更大,视频质量更好,但是编码速度慢,解码速度快,目前大部分设备不支持 H.265,所以 H.264 仍然是主流.

6.  机械学习:人为设定判断标准作为参数,通过不断调整参数,使得判断结果与实际结果越来越接近,从而达到自动判断的目的.
7.  深度学习:输入原始数据,通过多层神经网络,从底层到高层,自动逐渐提取特征,最终得到判断结果.该特征可能是人类无法理解的,但是确实有效的 zu,是算法从原始数据分析并提取出来的.因此,输入的数据越大,神经网络越深,最终得到的结果越准确.

8.  组件上的单向绑定属性的相对位置会影响组件内属性更新的先后顺序
9.  创建基础组建时样式不重要，可以通过 deep selector 来覆盖
10. sdk：软件开发工具包，用于提供软件开发所需的工具和接口，简化开发流程，提高开发效率
11. tdk：标题、关键词、描述，是网页的三大核心元素，用于提高网页在搜索引擎中的排名
12. new Date(xxx)其实是调用了 new Date(Date.parse(xxx));
13. new Date(num1,...nums) 其实是隐藏的调用 new Date(Date.UTC(num1,...nums));num1 是年份，num2 是月份，num3 是日期，num4 是时，num5 是分，num6 是秒，num7 是毫秒，如果省略，则默认为 0；
14. 原始数据类型可以直接调用方法如 xxx.split();这是因为 js 在访问 xxx 时会根据 xxx 创建一个临时对象(new String(xxx))，然后再调用方法，得到结果后销毁临时对象
15. 前端鉴权方式：1.token 2.cookie 3.session.4.单点登录 5.OAuth2.0
16. requestAnimationFrame 和 requestIdleCallback 区别：1.requestAnimationFrame 是浏览器原生的 api，requestIdleCallback 是 web-api，2.requestAnimationFrame 是异步的，requestIdleCallback 是同步的，3.requestAnimationFrame 是 60 帧，requestIdleCallback 是 1 帧，4.requestAnimationFrame 是浏览器原生的 api，requestIdleCallback 是 web-api，5.requestAnimationFrame 是浏览器原生的 api，requestIdleCallback 是 web-api，6.requestAnimationFrame 是浏览器原生的 api，requestIdleCallback 是 web-api，
17. requestIdleCallback 的回调函数会在浏览器当前帧空闲时执行，若果当前帧没有空闲时间，则回调函数会在下一帧空闲时执行
18. 防止内存泄露，用 weakSet 和 weakMap，尤其是将绑定了监听事件的 dom 放进 weakMap，防止内存泄露。
19. vdom 比 dom 更快，因为 vdom 是虚拟的，不需要真实 dom，而 dom 是真实的，需要操作真实 dom，所以 vdom 更快，而且减少了重排和重绘的次数
20. next js 页面级组件没有 props，否则会在 build 报错，只能通过 url 或其他方式传入数据(1.5h)
21. git merge 代码时还需注意 merge 方式，Squash 合并会多个提交压缩成一个单一提交的合并方式，不会关联目标分支； Fast-forward 合并后，提交历史会按序保留下来并关联目标分支。所以从 master 合到自己的分支时推荐 fast forward，方便看更改记录和提交历史，从自己分支合到 master 时推荐 squash，这样使 master 分支简化提交历史，避免这些中间提交过于杂乱。(3h)
22. nvm 和 n 都是管理 node 版本的工具，nvm 是 node 版本管理工具，n 是 nodejs 包管理工具。n 切换版本时不会更改全局模块，可能造成兼容性影响。而 nvm 切换版本会更改全局模块。
23. beforeUnload 通过 window.addEventListener('beforeunload', warnUserBeforeUnload);监听浏览器关闭事件，在用户关闭浏览器之前，弹出一个警告框，询问用户是否真的要关闭浏览器。
24. react hook form 的 register 方法只适用于能直接绑定到 input 的表单，如 input, select, textarea 等，而 controller 方法功能更强大，能用于自定义组件等。(1h)

25. part time 时 workhours 字段
26. Compensation 到底是 ends on day of the month 还是 annual，monthly，hourly（ui）
27. Add  fixed allowance 的 payment type
28. time off 可用天数 类型
29. element.contains(target) // target 是否为 element 子元素
30. useEffect 销毁阶段拿到的 useState 值是初始值，不会随着 update 更新值，因此用 useRef 替代 useState
31. dotenv，可以覆盖 build 时的环境变量
32. next build 默认用生产环境，且不能修改，如果想 build 时使用 dev 环境可配合 dotenv
33. next dev 默认用开发环境，next build 默认用生产环境
34. next getServerSideProps 获取 serverside render 时的 动态 props
35. next getStaticProps 获取 static render 时的异步 props,都只在 server 上运行，且 build 后不会有代码给 client 端
36. swr 更好的异步获取方式
37. svgr 转化 svg 为 react 组件时会通过 svgo 进行压缩，svgo 会去掉 viewBox 等一些 svg 属性，可通过 override 阻止这一默认行为，保留原始 viewBox(3h)
38. react hook form 的 reset 部分 reset form 时会导致其他 field 为 undefined
39. mui datePicker 的 slot 设置 textfield 时会导致 slotProp 的 textfield 失效
40. mui data grid 要用 flex container 包起来，否则会一直增加高度
41. zustand 因为 react 的优先调度更新机制，可能不会立即更新值，要获取最新值可通过 store.getState()拿到
42. svgr 里的 svgo 会将 svg 中的 id 进行压缩转化，可能造成 id 冲突，可采用 minify：false 阻止这一默认行为
43. html type 为 number 的 input 时，浏览器会校验输入值是否合法，若不合法就会变成 previousValue,例如 e.target.value 从 123 变成 '111.'会变成 123
44. input pattern，校验输入是否符合 pattern
45. input step 控制值的步进间隔，默认 1
46. input setSelectionRange 方法，控制选中的区域，也就是光标，不能用于 type number
47. react hook form setValue 不会标记 field 为 dirty
48. 工厂方法模式 抽出公共类，公共类中规定了通用方法以及其返回类型，新实例通过公共类创建并且重写其中的通用方法来满足特定逻辑，但返回的类型得基于公共类中规定的返回
49. 原型方法模式 在原型中实现 clone 方法，生成新实例时通过原型的 clone 方法复制当前实例的属性
50. react 中, click calendar input 会触发两次 focus，后面一次可能比较晚导致触发 popper 的 blur，可用 setTimeout 解决。原理未知
51. 抽象工厂模式 只规定了接口，具体实现由子类实现，子类实现了接口的方法，但是返回的类型是子类自己的类型。与工厂模式相比，抽象工厂模式更加抽象，适合创建一组相关或相互依赖的对象
52. 生成器模式 将一整个对象的创建过程拆分成多个步骤，每个步骤都有一个生成器，最后将这些生成器组合成一个对象，控制生成器组合顺序直至生产完成的类称为主管类。可以按需控制生成器的组合顺序，重点关注如何分步生成复杂对象
53. 单例模式 保证一个类只有一个实例(初始化时生成，之后都用该实例)，为该实例提供一个全局访问节点，适用于需要严格地控制全局变量的场景
54. 适配器模式 将原本不兼容的接口转换成兼容的接口，适用于需要复用一些现有的类，但是接口与现有系统不兼容的场景，例如 dto(data transfer object)转换,将自定义结构对象和 sql 数据对象转换
55. 责任链模式 将请求沿着树的深度方向传递处理形成一条链，每个步骤都可以处理请求，也可以拒绝请求，不再处理后续步骤。
56. 命令模式 命令通常是一个封装了抽象操作的类或对象，不参与具体业务处理，负责请求的传递和添加额外参数，可以实现撤销和恢复功能，适用于需要将请求发送者和请求接收者解耦的场景，如 addEventListener。先定义命令接口，再实现具体命令并调用接受者，接受者执行具体命令。
57. 迭代器模式 提供一种方法顺序访问一个集合中的各个元素，而又不暴露该对象的内部表示，适用于需要解耦遍历集合的场景，如数组，链表等。先定义迭代器接口，再声明集合接口以及其中一个获取迭代器的方法，再实现具体迭代器并调用集合迭代器，聚合对象执行具体迭代器。
58. react pdf View 组件内报错会导致整个 View 组件为空，因此推荐每个 Text 包一个 View 组件，防止因为一个组件报错导致所有区域为空(2 days)
59. 为了防止页面崩溃，在获取后端数据时都应该加?来防止抛出异常，如：data?.name?.age
60. 正则表达式 $1 的作用是引用正则表达式中第一个捕获的分组（即 (\..\*?) 匹配到的内容），并将匹配的部分替换为这个分组的内容。
61. 正则表达式 注意 new RegExp()中的字符串需要转义，如：new RegExp('\\$1')，而不是 new RegExp('\$1')(3h)
62. react useImperativeHandle,暴露组件的内部方法给父组件。 父组件通过 ref 获取子组件的实例，可以通过 ref.current 调用子组件的方法
63. react react19 部分新特性， 1.ref 直接作为 props 传递；2.组件中可直接写 meta，title，link 标签，react 会将它们自动提升至 head 里
64. react react19 新钩子 useActionState，用于处理 action 和 state 的关系，类似于 useReducer，但是更加灵活，可以自定义 action 和 state 的关系；
65. docker docker 默认会限制 node 内存大小为 2G，可以通过 ENV NODE_OPTIONS="--max-old-space-size=4096"
    来设置内存大小
66. react lazy 用于懒加载组件 用法
    ```js
    import {lazy} from "react"
    const MarkdownPreview = lazy(() => import("./MarkdownPreview.js"))
    ```
67. react suspense 用于处理组件的加载状态以及捕获错误，用法
    ```js
    import {Suspense} from "react"
    ;<Suspense fallback={<div>Loading...</div>}>
      <MarkdownPreview />
    </Suspense>
    ```
68. react cache 用于服务端渲染时缓存数据，用法

    ```js
    import {cache} from "react"
    import calculateMetrics from "lib/metrics"

    const getMetrics = cache(calculateMetrics)

    function Chart({data}) {
      const report = getMetrics(data)
      // ...
    }
    ```

69. react memo 用于缓存组件，避免 props 未改变时重复渲染，用法

    ```js
    import {memo} from "react"
    const MemoizedComponent = memo(SomeComponent, arePropsEqual?)//默认是浅比较
    ```

70. react startTransition 用于在后台渲染 UI 的一部分，会将 action 内的 state 更新标记为 transition。用法
    ```js
    import {startTransition} from "react"
    startTransition(() => {
      // update state
    })
    ```
    startTransition 与 useTransition 非常相似，但它不提供 isPending 标志来跟踪一个 Transition 是否正在进行。
71. react createPortal 用于将组件渲染到指定的 dom 节点上，用法
    ```js
    import {createPortal} from "react"
    const Modal = ({children}) => {
      return createPortal(children, document.body)
    }
    ```
    portal 只改变 DOM 节点的所处位置。在其他方面，渲染至 portal 的 JSX 的行为表现与作为 React 组件的子节点一致。该子节点可以访问由父节点树提供的 context 对象、事件将从子节点依循 React 树冒泡到父节点。
72. css line-clamp 用于限制文本行数，正整数，最小值为 1，文本内容超过限制行数时会自动显示省略号。注意需要设置 display: -webkit-box 以及-webkit-box-orient: vertical 才能生效。这是为了兼容以前的浏览器。
    原理：子元素高度超过规定文本行数\*字体大小时，超出元素高度的内容会被隐藏掉，如果小于规定文本行数\*字体大小时，会自动调整高度，不会有任何影响。(移动端 safari 会出现子元素超出高度的问题 2h)
    总之就是慎用，不建议元素内再套元素
73. react hooks form 获取 ArrayFields 的 field 值时，需要通过 getValue 方法获取，而不是直接通过 field.value 获取，因为 react 的更新机制，field.value 不会立即更新，而是在下一次 render 时才会更新，而 getValue 方法会立即获取最新值 (1h)
74. react hooks form 的 useFieldArray 的 update 和 reset 方法会导致 field 的 unmount 和 remount,会导致相应的组件重新触发生命周期，如果不想 unmount 和 remount，可以通过 setValue(`fields${index}.xxx`,value) 方法设置值。
75. react hooks form getValue 虽然能同步获取最新值，但不会触发重新渲染，建议通过 watch 的方式获取最新值，watch 会在值改变时触发重新渲染
76. react hooks form 的 useWatch 方法可以监听值的同时不触发重新渲染，适用于监听值的同时不需要重新渲染的场景。
77. 移动端兼容问题 在 iOS 设备（Safari）上，如果输入框的 font-size 小于 16px，点击时 Safari 会自动放大页面，以提高可读性。可通过添加 Meta 标签来禁止缩放，如：
    ```html
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    ```
78. typescript 要么都有，要么都没有的类型可以通过交叉类型来实现，如：
    ```ts
    type A = B & (C | Partial<Record<keyof C, never>>)
    Partial<Record<keyof C, never>> //代表 所有 C 相关字段都不能出现。
    ```
