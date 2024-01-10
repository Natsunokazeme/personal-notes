1.clone henkel 项目到本地时,先在 devops 上生成 credentials,再复制其并插入到 clone 给定的 https 的 henkel 后,并在之间加上：
8.scss 的 mixin 适用于多个属性绑定到一起
13.margin-bottom 采用 margin-top 替代

1.  proxy 代理设置, target 将 location 的 origin 替代为 target,pathrewrite 将 origin 之后的 path 部分替换
2.  packege.json 里的 script 定义 npm 执行脚本, 用 npm run xxx 运行 xxx 对应的脚本

3.  设置 pipeline：1.需从 azure 上读值,先在 pipeline 的 library 上设置变量的 key 和 value(前端 library 叫 frontend-deploy)；2. 在代码库里设置 environment3.将设置的 environment 的值与 library 上的 key 在代码库里的 pipeline yml 文件中对应,如：echo "##vso[task.setvariable variable=api_community_bebaseurl]$(api_community_bebaseurl_dev)" //api_community_bebaseurl_dev 是 library 上的 key,api_community_bebaseurl 是代码库里的 key,这样就可以在代码库里的 environment 中使用了

4.  提升单元测试分支覆盖率技巧 若顶级的 template 显示未覆盖,可能是 shallowMount 导致子组件未渲染,子组件的 if else 分支未覆盖,可以通过 mount 解决,还可以写多个 describe,每个 describe 里的 it 都是独立的,可以提升分支覆盖率
5.  element.offsetHight 只读属性,返回该元素高度,不包含外边距,单位 px.

6.  H.264 是一种视频压缩算法,虽然有损但压缩比大,视频质量损失不大,被广泛使用.H.265 是 H.264 的升级版,压缩比更大,视频质量更好,但是编码速度慢,解码速度快,目前大部分设备不支持 H.265,所以 H.264 仍然是主流.
7.  nest 需要用 @Res() res: Response 来设置响应头,并且需要用 res.send(re) 来发送响应体 re
8.  app.enableCors() 会自动设置 Access-Control-Allow-Origin: \*,Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE,Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
9.  创建虚拟机后 要为虚拟机安装执行环境,我以 node 为例,node 版本不能太高,centOS7 不支持,node 版本不能太低,nest 无法执行,推荐 14 版本 node.node 下载安装之后要把 node 添加到环境变量方便所有目录下都能使用,node 版本控制工具 nvm
10. ping ls kill cd echo code yum node nvm git which Whereis vi sudo !! Mkdir rm ip wget tar service
11. Linux 分为很多版本,其中 centOS 是 red hat 发行的版本,不同版本的命令和资源库不同,我用的 centOS7
12. 机械学习:人为设定判断标准作为参数,通过不断调整参数,使得判断结果与实际结果越来越接近,从而达到自动判断的目的.
13. 深度学习:输入原始数据,通过多层神经网络,从底层到高层,自动逐渐提取特征,最终得到判断结果.该特征可能是人类无法理解的,但是确实有效的 zu,是算法从原始数据分析并提取出来的.因此,输入的数据越大,神经网络越深,最终得到的结果越准确.
14. angular 装饰器 HostListener,用于监听宿主元素上的事件
15. angular icon registry,用于注册 svg 图标为 mat-icon,并且可以设置图标的颜色,大小等属性.通过 MatIconRegistry 这个 service 的 addSvgIcon()方法注册图标,然后通过 MatIcon 组件的 svgIcon 属性使用图标.
16. angular sanitizer 用于过滤 html 标签,防止 xss 攻击；sanitizer.bypassSecurityTrustResourceUrl() 方法用于信任资源 url,防止 angular 报错.若不通过该方法,angular 会认为该 url 不安全,不会加载该资源.(踩坑 0.5day)
17. angular 里 pipeline 设置
18. enum 可以直接当类型用，也可以当值用，当值用时，可以通过 enum[key]来取值
19. web sql 和 indexedDB 类似，都是储存在浏览器的方式，更像关系型数据库，目前只有 chrome 支持,已被 deprecated
20. script 标签的 defer 属性，表示脚本会在文档解析完毕后执行，但是在 DOMContentLoaded 事件之前执行，如果有多个 defer 脚本，会按照顺序执行，不会阻塞 DOM 解析，但是会阻塞 DOMContentLoaded 事件。async 属性表示脚本会在文档解析完毕后立即执行，但是不会阻塞 DOM 解析，也不会阻塞 DOMContentLoaded 事件，如果有多个 async 脚本，会按照加载完成的顺序执行，不一定是顺序执行，async 脚本不会阻塞其他资源的加载，比如图片，css 等，但是会阻塞其他 async 脚本的执行，async 脚本一定会在页面的 load 事件之前执行，但是不一定在 DOMContentLoaded 事件之前执行。
21. _script 默认是会阻碍 HTML 解析的，只有下载好并执行完脚本才会继续解析 HTML，defer 就是下载不阻碍 html 解析，执行会等到 html 解析完再执行，async 是下载不阻碍，执行可能阻碍解析，一旦下载好就立即执行_
22. webpack 默认是将所有的模块打包成一个 js 文件，这样会造成初次加载时 js 文件过大，等待时间过长，所以需要将 js 文件分割成多个文件，这样可以实现按需加载，提高加载速度。
23. 通过 react 和 angular 等框架加载的网站最开始都只有一个 root 节点，不利于 SEO，所以需要在服务端渲染，将所有的节点都渲染出来，这样搜索引擎就能爬取到所有的节点，提高 SEO。但 ssr 也有缺点，首屏加载速度慢，因为需要在服务端渲染，所以需要等待服务端渲染完毕才能返回给客户端，因此可以通过 SSG 来解决这个问题，SSG 是在构建时就将所有的节点都渲染出来，这样就不需要等待服务端渲染了，提高了首屏加载速度。适用于内容不经常变化的网站或页面。
24. _任何不在函数内部的代码的上下文都是全局上下文，谁最后调用的函数，函数里 this 就指向谁_
25. 箭头函数中 this 的值总是等于外部作用域的 this
26. 普通函数在调用时产生上下文，箭头函数没有上下文,会去外部作用域找，找不到就是 undefined
27. 把一个函数当成参数传递到另一个函数的时候，也会发生隐式丢失的问题，且与包裹着它的函数的 this 指向无关。在非严格模式下，会把该函数的 this 绑定到 window 上，严格模式下绑定到 undefined。settimeout 的回调函数也是如此。
28. 定时器的调用对象是 window，所以定时器里的 this 指向 window，严格模式下指向 undefined
29. var 会挂在到 window 上，let 和 const 不会，var 在上下文里初始化为 undefined，let 和 const 在上下文里初始化为 uninitialized
30. this 例题

```javascript
var obj2 = {
  a: 2,
  foo1: () => {
    console.log(this.a) //3
  },
  foo2: function () {
    console.log(this) //obj2
    function inner() {
      console.log(this) //window
      console.log(this.a) //3
    }
    inner()
  },
}
var a = 3
obj2.foo1() //箭头函数的this指向外层作用域,作用域只有window和function,所以this指向window
obj2.foo2()
// inner()被调用时没有指定调用对象，所以this指向window，window.a为3
```

31. new ,通过该方法会创建一个对象实例，原理如下:
    在内存中创建一个新对象。
    这个新对象内部的 prototype 特性被赋值为构造函数的 prototype 属性。
    构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
    执行构造函数内部的代码（给新对象添加属性）。
    如果构造函数返回对象，则返回该对象；否则，返回刚创建的新对象(空对象)
32. Symbol Symbol.hasInstance 就是 instanceof 的原理
33. typeof 的原理是判断二进制，二进制前三位储存类型信息
34. BigInt()或数字后加 n 表示大数，向下取整，和 number 类型宽松相等，可以和 number 类型比较
35. Symbol.for(key),查找全局里键为 key 的 symbol，若没有则会新建一个 symbol 并返回
36. Symbol.keyFor(key),如果全局注册表中查找到该 symbol，则返回该 symbol 的 key 值，返回值为字符串类型。否则返回 undefined
37. State hooks 原理：state hooks 是在 fiber 节点里以链表形式储存的，因此是按照顺序读取，若 state hooks 写在 if 或 for 里，某一次没执行的话，会造成之后所有的 state hooks 的读取位置错误
38. useReducer,用法类似 redux，是 useState 的基础，例: const [val,dispatch] = useReducer(reducer,initVal)
39. cookie 也受跨域限制
40. angular ngfor 的 trackFor 相当于 react 的 key，用于优化性能，trackFor 的值为 trackBy 的值，trackBy 的值为函数，函数的参数为 index 和 item，返回值为 trackFor 的值
41. Object.assign(target,source1,source2...)，将 source1,source2...的属性浅复制到 target 上，若属性名相同，则后面的会覆盖前面的
42. Object.defineProperty(obj,prop,descriptor),用于给对象添加属性，descriptor 为属性描述符，包含 value,writable(false),enumerable(false),configurable(false),get,set 等属性
43. 不同页面间通信，可以通过 localStorage,sessionStorage,cookie,postMessage,iframe,websocket,service worker,IndexedDB,SharedWorker,广播等方式
44. iframe 和宿主页面通信一般通过 postMessage API 通信，postMessage API 接收两个参数，第一个 x hu 参数为要发送的消息，第二个参数为接收消息的页面的 origin，origin 为协议+域名+端口，若不指定，则默认为\*，表示接收所有消息，但不推荐这样做，因为这样会有安全隐患，若 origin 不匹配，则会抛出异常，postMessage API 会返回一个 Promise 对象，可以通过该对象的 then 方法来接收消息，也可以通过监听 message 事件来接收消息，message 事件的 event 对象的 data 属性为接收到的消息，origin 属性为发送消息的页面的 origin，source 属性为发送消息的页面的 window 对象
45. Object.is(a,b)用于判断两个值是否相等，ES6 新特性，与===唯二不同的是，Object.is(0,-0)为 false,Object.is(NaN,NaN)为 true
46. shadow Dom 是一种浏览器技术，用于将一个 DOM 节点和其子节点封装起来，使其与外部的 DOM 节点隔离，外部的 DOM 节点无法访问 shadowDom 里的节点，shadowDom 里的节点也无法访问外部的 DOM 节点.video 这个元素就曾用 shadow Dom 封装内部结构的一系列的按钮和其他控制器。 通过 Element.attachShadow()生成一个 shadow Root 并添加到指定元素上
47. websocket 在 js 内通过 new WebSocket(url)得到一个 websocket 对象，通过该对象的 onopen,onmessage,onclose,onerror 等方法来监听 websocket 的连接，消息，关闭，错误等事件，通过该对象的 send 方法来发送消息，通过该对象的 close 方法来关闭连接
48. picture 标签,内部有 0 到多个 source 标签和一个 img 标签,source 标签有 srcset 属性,用于指定不同的图片的 url,还有一个 media,用来匹配符合的媒体查询.浏览器会根据当前 Z 设备的分辨率来选择合适的图片,若没有合适的图片,则会选择最后一个 source 标签的图片,若没有 source 标签,则会选择 picture 标签的子元素 img 的 src 属性的图片
49. json 解析出错会抛异常
50. svg 一般不会改变宽高比,可以通过 preserveAspectRatio 属性设置为 none 来达到拉伸自适应的效果
51. 组件上的单向绑定属性的相对位置会影响组件内属性更新的先后顺序
52. 通过 json 深拷贝对象，可以通过 JSON.parse(JSON.stringify(obj))来实现，但是该方法有缺陷，会忽略 undefined，symbol，函数，正则等类型，还有循环引用的问题，并且字符串转化会带来额外性能开销
53. 富文本 是一种可以设置字体，颜色，大小，样式，甚至可以插入图片，链接等的文本
54. 前端攻击方法：XSS，CSRF，点击劫持，SQL 注入，DDOS，DNS 劫持，中间人攻击。
55. == 会进行类型转换，=== 不会进行类型转换
56. 一帧的时间不固定，一帧指的是浏览器渲染一次页面所需要的时间，如果一帧的时间过长，那么就会导致掉帧，掉帧会导致页面卡顿
57. react hooks 为什么不能在循环，条件判断，嵌套函数中使用，因为 hooks 是按顺序读取的，如果在循环，条件判断，嵌套函数中使用，那么 hooks 的读取位置就会发生错误，导致读取到错误的值
58. react hooks 和 class 组件的区别
59. canvas 大量渲染优化

    1.  只渲染可视区域，通过监听滚动事件，判断滚动条的位置，只渲染可视区域的内容
    2.  图像压缩，通过 canvas 的 drawImage 方法的第三个参数，可以对图像进行压缩，第三个参数为一个对象，包含 width 和 height 属性，可以设置图像的宽高，若不设置，则默认为图像的原始宽高
    3.  GPU 加速
    4.  WebGL 绘制图形代替 canvas(类似开启 GPU 加速)

60. angular 对原生 html 元素的属性进行了封装，如 input 的 value 属性，angular 里用 ngModel 代替。
61. form 元素的 action 属性用于指定表单提交的地址，method 属性用于指定提交方式，若不指定，则默认将 method 属性设置为 get，若不指定 action 属性，则默认将 action 属性设置为当前页面的 url。因此当前页面的 url 会发生改变，通过 query params 传递 form 参数。(angular 阻止了 form 的 action 和 method)
62. 单页面应用和多页面应用的区别：单页面应用只有一个 html 页面，所有的页面都是在这个页面上切换，多页面应用有多个 html 页面，每个页面都是一个独立的页面，有自己的根模块。切换页面时，会重新加载页面，单页面应用的优点是页面切换快，用户体验好，缺点是首屏加载慢，多页面应用的优点是首屏加载快，缺点是页面切换慢，用户体验差。
