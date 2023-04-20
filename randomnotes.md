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


100. proxy代理设置， target将location的origin替代为target，pathrewrite将origin之后的path部分替换
109. packege.json 里的script定义 npm 执行脚本， 用 npm run xxx 运行 xxx对应的脚本

110. 设置pipeline：1.需从azure上读值，先在pipeline的library上设置变量的key和value(前端library叫frontend-deploy)；2. 在代码库里设置environment3.将设置的environment的值与library上的key在代码库里的pipeline yml文件中对应，如：echo "##vso[task.setvariable variable=api_community_bebaseurl]$(api_community_bebaseurl_dev)" //api_community_bebaseurl_dev是library上的key，api_community_bebaseurl是代码库里的key，这样就可以在代码库里的environment中使用了
111. event.target 对应的type是EventTarget,只有转化为HTMLInputElement才能使用value属性
112. fetch mode: cors, no-cors, same-origin,填cors*无效
113. which xxx. linux命令，查看xxx所在路径
114. number.toString(2) 将number转化为二进制字符串
115. sticky 要求父元素高度比自身高，且overflow不为hidden。
116. function.length 返回函数的参数个数
117. lambda演算 ℷx.x+1(1) 表示对x的ℷ演算，ℷx声明这是参数为x的ℷ演算，ℷx.x+1表示传入x后返回x+1，ℷx.x(1)表示传入1后返回2
118. 柯利化，将函数作为参数传入另一个函数。
119. parseInt 第二个参数表示进制,2-36,默认为0(根据字符串前缀判断)
120. ng-template 用于动态创建组件，ng-container 用于包裹元素，不会在dom中生成对应的标签，ng-content 用于slot，只有select属性,用于选择器匹配
121. elementRef 是对原生dom的封装，nativeElement是原生dom，viewContainerRef是对当前元素的视图宿主的引用，内部有各种方法来删除，插入，移动，替换视图等，viewRef是对当前元素的视图的引用，可以通过viewRef.rootNodes获取当前元素的所有子元素，templateRef是对模板的引用。
122. fill:currentColor 使svg和path的颜色继承父元素的颜色，但只能用与html标签，不能用于image url 和 background-image
123. inline-flex 让元素flex的同时不占据一行
124. 创建基础组建时样式不重要，可以通过deep selector来覆盖
125. angular中 [class.xxx]="boolean" 会在true时将xxx添加到class中，false时将xxx从class中删除
126. input不是一个container，不能有子元素，因此伪元素不会生效
127. 推荐用 last-of-type:mr-0 来替代first-of-type:ml-0,因为换行后下一行元素第一个元素会有margin-left
128.  selector无法指定value，只能通过option的value属性来指定
129.  angular animation tigger state transition style animate todo
130.  angular ngTemplateOutlet 指令 将对应的templateRef嵌入到宿主视图中，ngTemplateOutletContext 指令， 将宿主的context传给templateRef，使template可使用宿主内的变量