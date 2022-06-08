1.clone henkel 项目到本地时，先在 devops 上生成 credentials，再复制其并插入到 clone 给定的 https 的 henkel 后，并在之间加上：
2.git 不包括 npm modules，所以 clone 或 rebase 等操作之后都需要 npm install
3.nerd 的 commit 提交时 message 有格式要求 feat(): XXXXXXX
4.ng lint 的 string 不能用+相连，而是通过`$`更新 string，空行不能连续 2 行以上，同一等级的变量名按字母排序，并且在最开始声明，
5.branch 命名格式 feature/#{num}-xxxx_xxx_xx 6.将一个 pbi 拆分成多个 task，并且每完成一个 task 提一次 pr
7.cmd 取消/终止当前操作 crtl+c
8.scss 的 mixin 适用于多个属性绑定到一起 9.提 pr 时，若有 conflict 先本地解决再提 pr 10.代码里不要有中文，注释里也不行，ngOnInit 为空时直接删除（提 pr 时）
11.PBI，feature 和 task 都以动词开头，组件名不能用动词 12.字符串首尾空格删除
13.margin-bottom 采用 margin-top 替代
14.transation 以当前位置为出发点进行移动，但还是推荐 animation
15.image 经常有 3px margin at bottom 是因为 the image behaving like a character of text。可设置 vertical-align;
16.setState 会把它的多次调用合成一次，只 render 一次
17.useEffect 第二个参数[value]表示该值改变且处于 update 时执行
若为[]则表示只在 mount 和 unmount 时执行
若无表每一次 update 都执行 18.下载功能实现
const link = document.createElement('a')
link.download = fileName
link.style.display = 'none'
link.href = src
document.body.appendChild(link)
link.click()
document.body.removeChild(link)
19.padding 使用百分比时是按照宽度来计算的 20.宽高相等，1 使用 vw，vh,2 使用 js
21.grid 的 1fr 可代替高和宽部分 calc 22.可通过 js 内字符串拼接来实现 calc
23.node 版本管理可通过 npm i -g n 实现控制
24.angular 的 rxjs 的 observable 与 promise 不兼容
25.observable 方法，pipe 用于管道，subscribe 用于订阅，switchMap 用于切换,需要返回 observable,map 用于映射,take 用于取前几个,takeUntil 用于取直到某个时间点,takeWhile 用于取直到某个条件为 false, 26.在浏览器 debug(未编译的代码)，直接打开控制台的 source，在里面直接加断点，通过 cmd+shift+p 搜索文件
27.tailwindcss 的基本用法，可以通过 tailwindcss.config.js 来自定义，是一种写在 html 上的 css 样式集合
28.input type 为 number 时右侧会有按钮，影响布局，可通过 input[type='number']::-webkit-inner-spin-button {
-webkit-appearance: none;
}隐藏掉
