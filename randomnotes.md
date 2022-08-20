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
