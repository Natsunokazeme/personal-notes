**react 组件渲染时会重新创造函数和变量**

# tailwind css 优缺点

1. 优点
   1. 体积小，只有 20kb
   2. 可以快速构建页面
   3. 可以自定义主题
   4. 可以通过配置文件来自定义
   5. 可以通过 jit 来按需加载
2. 缺点
   css 优先级低，通过 css 里 apply tailwind 来提高优先级

# _Webpack 的构建流程是什么？从读取配置到输出文件这个过程尽量说全_

初始化参数：从配置文件和命令行语句中读取与合并参数，得出最终的参数
开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译
确定入口：根据配置中的 entry 找出所有的入口文件
编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。
简单说

初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler
编译：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理
输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中

**useEffect 原理**
接受 2 个参数，一个是 callback，一个是 dep,每次 render 时检查 dep 是否更新，如果更新了就执行 callback 的销毁函数再执行 callback

**useState 基本实现**

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

## redux 原理

redux 是一个状态管理库，用于管理 react 应用的状态，redux 的核心是 store，store 是一个对象，包含了所有的状态，store 通过 reducer 来更新状态，reducer 是一个函数，接收当前的 state 和一个 action 对象，必要时决定如何更新状态，并返回新状态。

# **web workers**

用于 js 的多线程处理，但是 workers 和主代码运行在完全分离的环境中，只有通过相互发送消息来进行交互。特别是，这意味着 workers 不能访问 DOM（窗口、文档、页面元素等等,一般用于处理一些耗时的任务，比如计算。

const worker = new Worker('./generate.js');
worker.postMessage({
command: 'generate',
quota: quota
});
worker.addEventListener('message', message => {//todo})
worker.terminate()
worker.onerror()
worker.onmessage = (event) => {
console.log(event.data)
}

**JavaScript 版本 ES5 新特性**
• "use strict" 指令
• String.trim()
• Array.isArray()
• Array.forEach()
• Array.map()
• Array.filter()
• Array.reduce()
• Array.reduceRight()
• Array.every()
• Array.some()
• Array.indexOf()
• Array.lastIndexOf()
• JSON.parse()
• JSON.stringify()
• Date.now()
• 属性 Getter 和 Setter
• 新的对象属性和方法

**ES6 新特性**
• let
• const
• 幂 (\*\*)
• 默认参数值
• Array.find()
• Array.findIndex()
• set 和 map 数据结构
• _promise 对象_
• Generator 函数
• symbol
• _箭头函数_
• Class（类）
• module（模块）

# **闭包**

一个函数和对其周围状态（lexical environment,词法环境）的引用捆绑在一起（或者说函数被引用包围）,这样的组合就是闭包（closure）。也就是说,闭包让你可以在一个内层函数中访问到其外层函数的作用域。当内层函数在其他地方被调用时,就可以继续访问到外层函数的作用域,而不是被立即释放。
在 JavaScript 中,每当创建一个函数,闭包就会在函数创建的同时被创建出来。闭包包含在函数创建时作用域中的所有变量。
函数在定义时的词法作用域以外的地方被调用就会形成闭包。闭包使得函数可以继续访问定义时的词法作用域

# _任务分为宏任务和微任务_

宏任务即处理完之后会将控制权交给浏览器,浏览器再将控制权交给下一个宏任务,、
微任务即当前正在处理的任务
宏任务按照任务队列依次将任务传进微任务处理
遇到 new Promise()的需要立即执行
async 相当于一个 promise 的语法糖,但不会立即执行,而是等到使用后才执行。await 会执行完当前语局并将其后的任务存入微任务队列,then 里面的函数则是存放进微任务队列,等待执行
requestAnimationFrame()指的是下一次浏览器重绘之前执行的函数,在 settimeout 之前执行
settimeout 是在任务队列清空之后才开始执行,settimeout 之间主要看设定时间参数来先后输出,其次才是 context 的先后顺序。

**new ,通过该方法会创建一个对象实例，原理如下:**
在内存中创建一个新对象。
这个新对象内部的 proto 特性被赋值为构造函数的 prototype 属性。
构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
执行构造函数内部的代码（给新对象添加属性）。
如果构造函数有返回，则返回该值；否则，返回刚创建的新对象(空对象)

**bom 不同页面间通信，可以通过 localStorage,sessionStorage,cookie,postMessage,iframe,websocket,service worker,IndexedDB,SharedWorker,broadCastChannel API 广播等方式**

**onDrop 事件和 onDragOver 事件都是标准 html5 里的事件,前者是被拖拽元素释放到目标元素上触发的,后者是被拖拽元素在目标元素上移动时触发的.onDrop 事件只能在目标元素上触发,而 onDragOver 事件可以在任何元素上触发,所以在目标元素上触发 onDragOver 事件时,要阻止默认行为.**

_script 默认是会阻碍 HTML 解析的，只有下载好并执行完脚本才会继续解析 HTML，defer 就是下载不阻碍 html 解析，执行会等到 html 解析完再执行，async 是下载不阻碍，执行可能阻碍解析，一旦下载好就立即执行_

webpack SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。通过 optimization.splitChunks.cacheGroups 来自定义单独打包的模块及其规则,splitChunks.chunks 有 all async init

```javascript
optimization: {
 splitChunks: {
   chunks: 'async',
   minSize: 20000,//生成 chunk 的最小体积（以 bytes 为单位）。
   minRemainingSize: 0,
   minChunks: 1,//拆分前必须共享模块的最小 chunks 数。
   maxAsyncRequests: 30,
   maxInitialRequests: 30,
   enforceSizeThreshold: 50000,
   cacheGroups: {
     defaultVendors: {
       test: /[\\/]node_modules[\\/]/,
       priority: -10,
       reuseExistingChunk: true,
     },
     default: {
       minChunks: 2,
       priority: -20,
       reuseExistingChunk: true,
     },
   },
 },
},
```

**spa 和 mpa 的区别**

spa 是单页面应用，mpa 是多页面应用，spa 是一个 html 内通过 ajax 请求数据和 BOM 更改路由，动态更新页面内容，mpa 是多个 html 通过请求不同的页面实现 document 跳转，刷新整个页面；spa 优点是用户体验好，页面切换快，缺点是首屏加载慢，seo 不友好；mpa 优点是首屏加载快，seo 友好，缺点是页面切换慢，用户体验差

**cookie 跨域**

一般情况下，cookie 遵循同源策略，即 cookie 不能跨域访问。但是可以通过设置 cookie 的 domain 属性来实现跨域访问。domain 属性用于指定 cookie 的域名，当 domain 属性设置为顶级域名时，cookie 可以被该域名下的所有子域名访问。
也可以设置 sameSite 属性为 lax 或 none，来实现跨域访问。

**canvas 跨域**

canvas 是一个画布，可以画出各种图形，但是不能被跨域访问，可以通过 base64 转换为图片，再通过 img 标签显示，或者通过 canvas.toBlob() 转换为 blob 对象，再通过 URL.createObjectURL() 转换为 url，再通过 img 标签显示
同理，想要加载跨域资源到 canvas，则先设置好 cors，再通过 img 标签设置 crossOrigin 后加载，再通过 canvas.getContext('2d').drawImage(img,0,0)

# _如何优化页面的加载速度_

总结：1.网络原理 2.资源引入 3.代码
1、网络原理 服务器响应时间:有独立的服务器,提高 Web 服务器的质量,移除不必要的插件
2、网络原理 浏览器缓存 :减少 HTTP 请求,从而提高网站加载速度
3、资源引入 gzip 压缩:它的工作原理是在发送 HTML 和 CSS 文件到浏览器之前压缩文件大小
4、异步脚本:网页负载就不必依赖于这些异步脚本
5、网络原理 内容分发网络（CDN）:CDN 是位于不同地理位置的服务器组成的网络。每个服务器都拥有所有网站的文件副本。有网站访问者请求文件和网页时就可以直接从就近网站服务器发送过来（也可以是从负载最小的服务器）
6、优化 JavaScript、HTML 和 CSS:删除所有不必要的空 格和注释从而减小文件大小
7、资源引入 置于顶部的样式表和底部的脚本
8、资源引入 避免阻塞型的 JavaScript 和 CSS
9、资源引入 JavaScript 的延迟解析
10、启用 Keep Alive:用户请求网页时浏览器首先需访问 HTML 文件,然后它才读取这些文件,并请求与其他资料相关联。如果“Keep Alive”选项被禁止,下载网站的进程就会增加从而拖累网站速度。启用 KeepAlive 的另一个好处是,可以减少 CPU 使用
11、图像和文件格式:建议使用 JPEG 格式,而不是 GIF 和 PNG 图像,除非图像包含 Alpha 因子或者是透明的
12、优化代码：不使用内联 CSS
13、资源引入 文件分离:可以增加并行下载的数量
14、网络原理 尽量减少 HTTP 请求:减少网站上的对象数量；最小化网站上的重定向数量；使用 CSS Sprites 技术；结合 JavaScripts 和 CSS
15、资源引入 去掉不必要的插件
16、网络原理 减少 DNS 查询(DNS lookups)

# angular 和 react 区别

1. angular 是一个完整的框架,提供了一整套解决方案,包括模板引擎,路由,状态管理,依赖注入等,而 react 只是一个视图层框架,只提供了视图层的解决方案,其他功能需要通过第三方库来实现
2. angular 使用的是双向数据绑定,数据的变化会自动更新视图,而 react 使用的是单向数据流,数据的变化需要手动更新视图
3. angular 使用的是模板引擎,模板引擎是一种将数据和视图进行绑定的方式,而 react 使用的是 jsx,jsx 是一种将 html 和 javascript 结合在一起的语法
4. angular 使用的是依赖注入,依赖注入是一种将依赖关系注入到组件中的方式,而 react 使用的是 props,props 是一种将数据传递给组件的方式

# **Cookie**

HTTP 协议本身是无状态的。什么是无状态呢，即服务器无法判断用户身份。Cookie 实际上是一小段的文本信息（key-value 格式）。客户端向服务器发起请求，如果服务器需要记录该用户状态，就使用 response 向客户端浏览器颁发一个 Cookie。客户端浏览器会把 Cookie 保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该 Cookie 一同提交给服务器。服务器检查该 Cookie，以此来辨认用户状态。

cookie 机制
当用户第一次访问并登陆一个网站的时候，cookie 的设置以及发送会经历以下 4 个步骤：
客户端发送一个请求到服务器 --》 服务器发送一个 HttpResponse 响应到客户端，其中包含 Set-Cookie 的头部 --》 客户端保存 cookie，之后向服务器发送请求时，HttpRequest 请求中会包含一个 Cookie 的头部 --》服务器返回响应数据
Cookie 属性
NAME=VALUE 键值对，可以设置要保存的 Key/Value，注意这里的 NAME 不能和其他属性项的名字一样
Expires 过期时间，在设置的某个时间点后该 Cookie 就会失效
Domain 生成该 Cookie 的域名，如 domain="www.baidu.com"
Path 该 Cookie 是在当前的哪个路径下生成的，如 path=/wp-admin/
Secure 如果设置了这个属性，那么只会在 SSH 连接时才会回传该 Cookie

Cookie 中的 maxAge 用来表示 Cookie 的有效期, 单位为秒。Cookie 中通过 getMaxAge()和 setMaxAge(int maxAge)来读写该属性。maxAge 有 3 种值，分别为正数，负数和 0。
如果 maxAge 属性为正数，则表示该 Cookie 会在 maxAge 秒之后自动失效。
当 maxAge 属性为负数，则表示该 Cookie 只是一个临时 Cookie，关闭浏览器后立即失效、
当 maxAge 为 0 时，表示立即删除 Cookie
maxAge 只是一个只读属性

修改或者删除 Cookie
HttpServletResponse 提供的 Cookie 操作只有一个 addCookie(Cookie cookie)，所以想要修改 Cookie 只能使用一个同名的 Cookie 来覆盖原先的 Cookie。如果要删除某个 Cookie，则只需要新建一个同名的 Cookie，并将 maxAge 设置为 0，并覆盖原来的 Cookie 即可。

# _多路复用_

_http 请求演化历程 1. 1 个 tcp 发送一个请求,请求结束就断开链接(性能开销) 2. keep-alive 1 个 tcp 发送 1 个请求,请求结束后决定继续发送下一个请求或者断开链接(不能并发) 3.pipeline 1 个 tcp 同时发送多个请求,按照请求顺序依次返回结果(请求堵塞) 4. http2 多路复用 1 个 tcp 发送多个请求,不按照请求顺序返回结果._

# **网络攻击**

## _xss 攻击_

xss(cross-site scripting) 脚步注入攻击，是一种代码注入攻击。攻击者在网页中注入恶意脚本，当用户浏览网页时，脚本会被执行，从而达到攻击目的。xss 攻击分为存储型 xss 攻击、反射型 xss 攻击和 dom 型 xss 攻击。

## _csrf 攻击_

csrf(cross-site request forgery) 跨站请求伪造，是一种利用用户已登录的身份在用户不知情的情况下以用户的名义发送请求的一种攻击方式。攻击者可以在用户不知情的情况下以用户的名义发送请求，比如转账、发邮件等。

## sql 注入

sql 注入是一种利用 sql 语句传递并执行恶意 sql 代码的攻击方式。攻击者可以通过 sql 注入获取数据库中的数据，甚至可以获取数据库的控制权。
