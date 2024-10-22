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
