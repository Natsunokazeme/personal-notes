# proxy

proxy 是用来修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”，即对编程语言进行编程。
proxy 是用于对象的代理，所以直接对对象操作不会经过 proxy，而是通过 proxy 对对象进行操作，所以 proxy 可以理解为对对象的一层封装。proxy 对象可以被继承

## 用法

const proxyA = new Proxy(target, handler);
target: 要使用 proxy 包装的目标对象
handler: 一个对象，用来定制拦截行为,其中有 13 种拦截方法

## 拦截方法

### get(target, propKey, receiver)

拦截对象属性的读取，比如 proxy.foo 和 proxy['foo']
target: 目标对象
propKey: 要读取的属性
receiver: proxy 实例本身

### set(target, propKey, value, receiver)

拦截对象属性的设置，比如 proxy.foo = v 或 proxy['foo'] = v，返回一个布尔值
target: 目标对象
propKey: 要设置的属性
value: 要设置的值
receiver: proxy 实例本身

### has(target, propKey)

拦截 propKey in proxy 的操作，返回一个布尔值
target: 目标对象
propKey: 要查询的属性

### deleteProperty(target, propKey)

拦截 delete proxy[propKey]的操作，返回一个布尔值
target: 目标对象
propKey: 要删除的属性

### ownKeys(target)

拦截 Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in 循环，返回一个数组
target: 目标对象

### getOwnPropertyDescriptor(target, propKey)

拦截 Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象
target: 目标对象
propKey: 要查询的属性

### defineProperty(target, propKey, propDesc)

拦截 Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值
target: 目标对象
propKey: 要定义的属性
propDesc: 要定义的属性描述对象

### preventExtensions(target)

拦截 Object.preventExtensions(proxy)，返回一个布尔值
target: 目标对象

### getPrototypeOf(target)

拦截 Object.getPrototypeOf(proxy)，返回一个对象
target: 目标对象

### isExtensible(target)

拦截 Object.isExtensible(proxy)，返回一个布尔值
target: 目标对象

### setPrototypeOf(target, proto)

拦截 Object.setPrototypeOf(proxy, proto)，返回一个布尔值
target: 目标对象
proto: 要设置的原型对象

### apply(target, object, args)

拦截 Proxy 实例作为函数调用的操作，比如 proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
target: 目标对象
object: this 对象
args: 调用参数

### construct(target, args)

拦截 Proxy 实例作为构造函数调用的操作，比如 new proxy(...args)
target: 目标对象
args: 调用参数

## 例子

const proxy = new Proxy({}, {
get: function(target, key, receiver) {
return receiver;
}
});
proxy.getReceiver === proxy // true
//get 方法的第三个参数的例子，它总是指向原始的读操作所在的那个对象，一般情况下就是 Proxy 实例。

# reflect

Reflect 对象与 Proxy 对象一样，也是 ES6 为了操作对象而提供的新 API。

## Reflect 对象的设计目的有这样几个。

（1）将 Object 对象的一些明显属于语言内部的方法（比如 Object.defineProperty），放到 Reflect 对象上。
现阶段，某些方法同时在 Object 和 Reflect 对象上部署，未来的新方法将只部署在 Reflect 对象上。
也就是说，从 Reflect 对象上可以拿到语言内部的方法。
（2）修改某些 Object 方法的返回结果，让其变得更合理。
比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，
而 Reflect.defineProperty(obj, name, desc)则会返回 false。
（3）让 Object 操作都变成函数行为。
某些 Object 操作是命令式，比如 name in obj 和 delete obj[name]，
而 Reflect.has(obj, name)和 Reflect.deleteProperty(obj, name)让它们变成了函数行为。
（4）Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法。
这就让 Proxy 对象可以方便地调用对应的 Reflect 方法，完成默认行为，
作为修改行为的基础。也就是说，不管 Proxy 怎么修改默认行为，
你总可以在 Reflect 上获取默认行为。

## 静态方法

和 proxy 一样有 13 个静态方法
Reflect.get 方法查找并返回 target 对象的 name 属性，如果没有该属性，则返回 undefined。
如果第一个参数不是对象，Reflect.get 方法会报错。
如果 Proxy 对象和 Reflect 对象联合使用，Reflect.set 会触发 Proxy.defineProperty 拦截。

## 与 proxy 结合实现观察者模式

观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行。
需实现 observable 和 observe 这两个函数。思路是 observable 函数返回一个原始对象的 Proxy 代理，拦截赋值操作，触发充当观察者的各个函数。
const queuedObservers = new Set();
const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});
function set(target, key, value, receiver) {
const result = Reflect.set(target, key, value, receiver);
queuedObservers.forEach(observer => observer());
return result;
}

# JS runtime

JS 栈储存的是函数调用的帧，每个帧包含了函数的参数和局部变量等信息。
JS 堆储存的是对象和数组等复杂数据结构。
JS 任务队列储存的是异步任务的回调函数。

# arrayBuffer

ArrayBuffer 对象、TypedArray 视图和 DataView 视图是 JavaScript 操作二进制数据的一个接口。
这个接口的原始设计目的，与 WebGL 项目有关。所谓 WebGL，就是指浏览器与显卡之间的通信接口，为了满足 JavaScript 与显卡之间大量的、实时的数据交换，它们之间的数据通信必须是二进制的，而不能是传统的文本格式。文本格式传递一个 32 位整数，两端的 JavaScript 脚本与显卡都要进行格式转化，将非常耗时。这时要是存在一种机制，可以像 C 语言那样，直接操作字节，将 4 个字节的 32 位整数，以二进制形式原封不动地送入显卡，脚本的性能就会大幅提升。

二进制数组由三类对象组成。

（1）ArrayBuffer 对象：代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。
（2）TypedArray 视图：共包括 9 种类型的视图，比如 Uint8Array（无符号 8 位整数）数组视图, Int16Array（16 位整数）数组视图, Float32Array（32 位浮点数）数组视图等等。
（3）DataView 视图：可以自定义复合格式的视图，比如第一个字节是 Uint8（无符号 8 位整数）、第二、三个字节是 Int16（16 位整数）、第四个字节开始是 Float32（32 位浮点数）等等，此外还可以自定义字节序。

简单说，ArrayBuffer 对象代表原始的二进制数据，TypedArray 视图用来读写简单类型的二进制数据，DataView 视图用来读写复杂类型的二进制数据。

<table>
<tr>数据类型	字节长度	含义	对应的 C 语言类型

</tr>
Int8	1	8 位带符号整数	signed char
Uint8	1	8 位不带符号整数	unsigned char
Uint8C	1	8 位不带符号整数（自动过滤溢出）	unsigned char
Int16	2	16 位带符号整数	short
Uint16	2	16 位不带符号整数	unsigned short
Int32	4	32 位带符号整数	int
Uint32	4	32 位不带符号的整数	unsigned int
Float32	4	32 位浮点数	float
Float64	8	64 位浮点数	double
</table>

很多浏览器操作的 API，用到了二进制数组操作二进制数据，下面是其中的几个。

Canvas
Fetch API
File API
WebSockets
XMLHttpRequest

## ArrayBuffer 对象

ArrayBuffer 对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（TypedArray 视图和 DataView 视图)来读写，视图的作用是以指定格式解读二进制数据。

ArrayBuffer 也是一个构造函数，可以分配一段可以存放数据的连续内存区域。

const buf = new ArrayBuffer(n);// 分配了 n 个字节的内存区域,每个字节的值默认为 0
如果要分配的内存区域很大，有可能分配失败（因为没有那么多的连续空余内存），所以有必要检查是否分配成功。
可使用 ArrayBuffer.prototype.byteLength 得到实际分配的内存区域大小。
if (buffer.byteLength === n) {
// 成功
} else {
// 失败
}
//TODO

# SSR&&SSG

ssr 是服务端渲染，传统的客户端渲染是通过框架用 JS 生成 html，不利于爬虫抓取，SEO(搜索排名优化)以及首屏加载时间过长，ssr 是在服务端生成 html，然后返回给客户端，客户端直接渲染，这样就可以解决这些问题。
SSR 实现都是基于 Node，但 Node 原生不支持 ES6 的模块化也不能识别 JSX 语法，所以需要使用 babel 来转换代码，然后使用 webpack 打包，最后使用 express 来启动服务。
SSG(预渲染，Static Site Generation)是静态站点生成，是在构建时生成的，不需要服务端，所以不需要 express，只需要 webpack 打包，然后将打包后的文件放到服务器上就可以了。
因为是在构建时生成的，所以不支持动态数据，只能用静态数据，所以只适合一些不需要动态数据的网站如 policy 或一个相同的入口。但 SSG 的优点是首屏加载速度快，SEO 好，不需要服务端，所以成本低。

# web workers

用于 js 的多线程处理，但是 workers 和主代码运行在完全分离的环境中，只有通过相互发送消息来进行交互。特别是，这意味着 workers 不能访问 DOM（窗口、文档、页面元素等等,一般用于处理一些耗时的任务，比如计算。

const worker = new Worker('./generate.js');
worker.postMessage({
command: 'generate',
quota: quota
});
worker.addEventListener('message', message => {//todo}

# 序列化动画，即上一个动画结束后，下一个动画才开始。

animate1.animate().finished.then(()=>animate2.animate())
animate() 方法返回 Animation 对象。这个对象有一个 finished 属性，这是会在一个在动画播放结束时兑现（fulfilled）的 Promise。所以我们可以利用这个 Promise 获得开始下一个动画的时机。
也可以直接使用 animation.onfinish = (event) => { //todo }
