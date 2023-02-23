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

16.setState 会把它的多次调用合成一次，只 render 一次
17.useEffect 第二个参数[value]表示该值改变且处于 update 时执行
若为[]则表示只在 mount 和 unmount 时执行
若无表每一次 update 都执行 

24.angular 的 rxjs 的 observable 与 promise 不兼容
25.observable 方法，pipe 用于管道，subscribe 用于订阅，switchMap 用于切换,需要返回 observable,map 用于映射,take 用于取前几个,takeUntil 用于取直到某个时间点,takeWhile 用于取直到某个条件为 false, 

32.ngOnchanges 参数 changes:SimpleChanges 可以查看改变的属性，可以用来判断是否改变了某个属性
33.ngFor 可以根据值动态渲染

36.forkJoin(observable1, observable2, ...) 用于等待多个 observable 发送完成，然后执行一个函数 

49.react里hashroute不能使用useHistory,可以用useLocation
50.react里，route的element是一个组件，可以用children来获取其子组件，也可以用子route来继承其route，冒号后表params，可以用match.params来获取

56.react 没有样式穿透，只有引入css-module包才能用 :global(.className)
65.refresh 不会销毁组件

100. proxy代理设置， target将location的origin替代为target，pathrewrite将origin之后的path部分替换

101. getElementsByClassName() 方法返回NodeList 对象,不是数组

102. scrollHeight 元素全部高度;clientHeight:包括padding的可见区域高度;offsetHeight:包括border，滚动条的可见区域高度;scrollTop:滚动条向下滚动的距离，也就是元素被遮住的高度;scrollLeft:滚动条向左滚动的距离，也就是元素被遮住的宽度;
103. will-change: css-key-word; 会让浏览器提前开启 GPU 加速，提高css关键字的性能 
      补充知识:一般来说,元素在进行一些操作如3D变换时会被单独处理到一个图层渲染，并在之后合成到主图层.此时通过GPU而不是CPU渲染的话,性能会得到提升.因此，之前我们会用transform: translate3d(0, 0, 0);之类的语句欺骗浏览器加速该元素渲染

104. css属性选择器
     a[title='1'] // title为1的a标签
      a[title^='1'] // title以1开头的a标签
      a[title$='1'] // title以1结尾的a标签
      a[title*='1'] // title包含1的a标签
      a[title~='1'] // title是一个以空格作为分隔的值列表，其中至少有一个值  为1的a标签
      a[title|='1'] // title是一个以连字符作为分隔的值列表，其中至少有一个值 为1的a标签

105. 双层slot 
      <slot name="curent" slot='son-slot' ></slot>



