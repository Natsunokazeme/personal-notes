1.clone henkel 项目到本地时，先在 devops 上生成 credentials，再复制其并插入到 clone 给定的 https 的 henkel 后，并在之间加上：
2.git 不包括 npm modules，所以 clone 或 rebase 等操作之后都需要 npm install
3.nerd 的 commit 提交时 message 有格式要求 feat(): XXXXXXX
4.ng lint 的 string 不能用+相连，而是通过`$`更新 string，空行不能连续 2 行以上，同一等级的变量名按字母排序，并且在最开始声明，
5.branch 命名格式 feature/#{num}-xxxx_xxx_xx 
6.将一个 pbi 拆分成多个 task，并且每完成一个 task 提一次 pr
7.cmd 取消/终止当前操作 crtl+c
8.scss 的 mixin 适用于多个属性绑定到一起 
9.提 pr 时，若有 conflict 先本地解决再提 pr 
10.代码里不要有中文，注释里也不行，ngOnInit 为空时直接删除（提 pr 时）
11.PBI，feature 和 task 都以动词开头，组件名不能用动词 
12.字符串首尾空格删除
13.margin-bottom 采用 margin-top 替代
14.transation 以当前位置为出发点进行移动，但还是推荐 animation
15.image 经常有 3px margin at bottom 是因为 the image behaving like a character of text。可设置 vertical-align; (节省一次时间
16.setState 会把它的多次调用合成一次，只 render 一次
17.useEffect 第二个参数[value]表示该值改变且处于 update 时执行
若为[]则表示只在 mount 和 unmount 时执行
若无表每一次 update 都执行 
18.下载功能实现
const link = document.createElement('a')
link.download = fileName
link.style.display = 'none'
link.href = src
document.body.appendChild(link)
link.click()
document.body.removeChild(link)
19.padding 使用百分比时是按照宽度来计算的 
20.宽高相等，1 使用 vw，vh,2 使用 js
21.grid 的 1fr 可代替高和宽部分 calc 
22.可通过 js 内字符串拼接来实现 calc
23.node 版本管理可通过 npm i -g n 实现控制
24.angular 的 rxjs 的 observable 与 promise 不兼容
25.observable 方法，pipe 用于管道，subscribe 用于订阅，switchMap 用于切换,需要返回 observable,map 用于映射,take 用于取前几个,takeUntil 用于取直到某个时间点,takeWhile 用于取直到某个条件为 false, 
26.在浏览器 debug(未编译的代码)，直接打开控制台的 source，在里面直接加断点，通过 cmd+shift+p 搜索文件
27.tailwindcss 的基本用法，可以通过 tailwindcss.config.js 来自定义，是一种写在 html 上的 css 样式集合
28.input type 为 number 时右侧会有按钮，影响布局，可通过 input[type='number']::-webkit-inner-spin-button {
-webkit-appearance: none;
}隐藏掉
29.clear:both 清除 float
30.tailwind 推荐用 float-right:boolean 而不是 float-{{right}}.
31.nx dep-gragh 用于查看依赖关系
32.ngOnchanges 参数 changes:SimpleChanges 可以查看改变的属性，可以用来判断是否改变了某个属性
33.ngFor 可以根据值动态渲染
34.customEvent
document.dispatchEvent(new CustomEvent('customEvent', { detail: { name: 'value' } }))
全局发送特殊事件
35.input 和 select 都自带 outline
36.forkJoin(observable1, observable2, ...) 用于等待多个 observable 发送完成，然后执行一个函数
37.select 和 option 的 value 必须是字符串，不能是数字，否则会报错,如果是对象，可以用 JSON.stringify 来转换成字符串
38.unit test 中，获取元素的方法，可以用 querySelector 或者 querySelectorAll，也可以用 getElementById 或者 getElementsByClassName 或者 getElementsByTagName 39.比较两个对象是否相等时，最好用 JSON.stringify 来转换成字符串，因为对象的属性是引用类型，如果用 === 比较，会出现不相等的情况。但注意的是，转换成字符串时，会按照字符串的排序来比较，所以如果属性的顺序不一致，就会出现不相等的情况。 
40.可通过$any($event.target).value 来规避$event.target.value 的问题 
41.直接 spyOn localStorage 无法监听，可以用监听原型 jest.spyOn(Storage.prototype, 'setItem');的方式监听 
42. eventListener 在跳转前一定要销毁，否则可能导致二次进入页面时，一次触发事件多次执行监听函数(5h) 
43.console台里不出现后端请求原因分析：1.mocked http request。2特殊的http请求不被console台获取 3.network做了筛选
44. string.prototype.search(regex);会将参数自动转化为regex，若找到返回index，否则返回-1
45.array.prototype.join()会将数组中的每个元素转化为字符串，然后用逗号拼接起来，返回一个字符串。
46.array.prototype.toString()会将数组去掉中括号直接转化为字符串，返回一个字符串。
47.可用解构来定义interface并使用，例如{ data }: { data: {successList: GoodsList[]} } 等于 res：{data:{successList:GoodsList[]} }
48. 原生select无法用js打开下拉框
49.react里hashroute不能使用useHistory,可以用useLocation
50.react里，route的element是一个组件，可以用children来获取其子组件，也可以用子route来继承其route，冒号后表params，可以用match.params来获取
51.function里传的值是基本值的复制值或引用值的复制值，即object时传的是object的指针的复制，该复制也指向object真实值
52. aspect-ratio 可以设置宽高比，可以用css来设置宽高比，可以用style来设置宽高比，可以用className来设置宽高比
53.为使 overflow 有效果，块级容器必须有一个指定的高度（height或者max-height）或者将white-space设置为nowrap。
54. display:flex-root ,将该元素变成block formatting context
55.box-shadow: x y fuzzy-r diffusion-r color
56.react 没有样式穿透，只有引入css-module包才能用 :global(.className)
57.overflow:hidden是根据父元素的boder内边距来计算的，可通过position absolute来跳出父元素的border
58.overflow:clip类似于overflow:hidden，但是hidden可通过js设置scroll，clip不能设置scroll
59.font awesome 可以用字体的特殊符号表示icon
60.pointer-events:none;可以使元素及其子元素不响应鼠标事件,但也会造成cursor样式失效
61.触摸屏的浏览器自带下拉刷新，可通过touch-action来设置为none来禁止触摸屏下当前元素区域(不能继承)的触摸效果来禁止下拉刷新
62.overscroll-behavior:滚动到该scroll的边界时的滚动溢出效果，为auto时，会继续滚动相邻的scroll或触发页面触底效果甚至下拉刷新，为contain时，页面效果不变，但不会滚动相邻scroll，为none时，不滚动也不触发。
63.阻止页面下拉刷新，在body里设置css overscroll-behavior:none和overflow:hidden
64.在移动端浏览器中，100vh包含了top search bar 高度。会影响布局,可用innerHeight代替
65.refresh 不会销毁组件
66.process.env 获取定义在.env文件内的变量，.env有test，production，development及以上三个环境的变量，可用cross-env来设置环境变量
67.代理软件无法在terminal里代理，所以得单独在terminal里设置代理
68.表单里第一个button的type默认为submit，所有可能误触发表单提交
69.requestAnimFrame(callback) 下一次重绘前调用回调函数
70. styled()是mui等UI库调用的js生成class的API，可以用来生成class，也可以用来生成组件
71. background-clip 基于当前元素设置background的index，text是基于文字，padding-box是基于padding，border-box是基于border，content-box是基于content
72.word-break: break-all; 可以让单词在任意位置断开,方便折行显示
73.在safari里video 不能在js里play，必须在用户交互事件里play。
74.在safari里 canvas 不能在js里toDataURL，必须在用户交互事件里toDataURL.
75.在safari的graphies里，canvas的toDataURL会导致内存泄漏，所以在safari里不要用canvas的toDataURL
76.video的src未加载时调用play会报错，所以要先判断video的src是否加载完成，可直接用video.oncanplaythrough来进行加载好后的回调
77.巧用兄弟选择器，如.a+.a{margin-top:10px}，可用来设置相邻元素的间距
78.多列布局：column-count: 3; column-gap: 10px; column-rule: 1px solid #ccc; column-span: all; column-width: 200px; 可直接将元素分成多列，可设置间距，边框，跨列，列宽
79.启用本机ip访问，react: HTTPS=true npm start;angular: ng serve --host 0.0.0.0
80. array.at(index) 返回数组中指定位置的元素，如果index为负数，则从数组末尾开始计算,可用来代替array[array.length+index]
81. select 不能在js里打开droplist，必须在用户交互事件里打开
82. background: url() no-repeat left 10px top 10px; 可以设置背景图片的位置
83. transform 设置元素的变换，如translate(x,y)平移，scale(x,y)缩放，roate(x)旋转，skew(x,y)倾斜，matrix(a,b,c,d,e,f)矩阵变换
84. transition 规定过渡效果，第一个参数是属性，第二个参数是过渡时间，第三个参数是过渡函数，第四个参数是延迟时间
85. height 不在transition里，会导致transition失效，可用max-height代替
86.  document.getElementsByTagName('xxx')得到的是一个类数组，不是数组，所以不能用数组的方法，如map，filter，forEach等，可用Array.from()转换成数组。并且必须在dom加载完成后才能获取到dom，否则获取到的是空数组
87.  addEventListener('DOMContentLoaded',()=>{}) 可以在dom加载完成后执行回调函数
88.  ::placeholder 是设置placeholder样式的伪元素，只能设置字体并且inspect里看不到。
89.  vue 的 css scoped 只能作用于当前组件，不能作用于子组件，所以如果要作用于子组件，需要在子组件里再写一遍样式
