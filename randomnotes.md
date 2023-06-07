1.clone henkel 项目到本地时,先在 devops 上生成 credentials,再复制其并插入到 clone 给定的 https 的 henkel 后,并在之间加上：
2.git 不包括 npm modules,所以 clone 或 rebase 等操作之后都需要 npm install
3.nerd 的 commit 提交时 message 有格式要求 feat(): XXXXXXX
4.ng lint 的 string 不能用+相连,而是通过`$`更新 string,空行不能连续 2 行以上,同一等级的变量名按字母排序,并且在最开始声明,
5.branch 命名格式 feature/#{num}-xxxx_xxx_xx 6.将一个 pbi 拆分成多个 task,并且每完成一个 task 提一次 pr
7.cmd 取消/终止当前操作 crtl+c
8.scss 的 mixin 适用于多个属性绑定到一起 9.提 pr 时,若有 conflict 先本地解决再提 pr 10.代码里不要有中文,注释里也不行,ngOnInit 为空时直接删除（提 pr 时）
11.PBI,feature 和 task 都以动词开头,组件名不能用动词 12.字符串首尾空格删除
13.margin-bottom 采用 margin-top 替代

100. proxy 代理设置, target 将 location 的 origin 替代为 target,pathrewrite 将 origin 之后的 path 部分替换
101. packege.json 里的 script 定义 npm 执行脚本, 用 npm run xxx 运行 xxx 对应的脚本

102. 设置 pipeline：1.需从 azure 上读值,先在 pipeline 的 library 上设置变量的 key 和 value(前端 library 叫 frontend-deploy)；2. 在代码库里设置 environment3.将设置的 environment 的值与 library 上的 key 在代码库里的 pipeline yml 文件中对应,如：echo "##vso[task.setvariable variable=api_community_bebaseurl]$(api_community_bebaseurl_dev)" //api_community_bebaseurl_dev 是 library 上的 key,api_community_bebaseurl 是代码库里的 key,这样就可以在代码库里的 environment 中使用了
103. fetch mode: cors, no-cors, same-origin,填 cors\*无效
104. 浏览器会根据用户设置和偏好自动将请求头的 accept-language 设置为对应的值。当服务器接收到请求时,会根据请求头的 accept-language 来决定返回的语言。如果服务器没有对应的语言,会返回默认语言。如果服务器没有设置默认语言,会返回第一个语言或者在一些字段上返回空值。（1h）
105. css 默认继承的属性有 color,font-size 等和文字相关的属性以及 visibility,cursor 等和显示相关的属性
106. js array flat 会去空。在非数组对象上调用 flat 需要对象有 length 属性,否则会报错,并根据 length 从键 0 开始按序读键值,当键值不为数组时,会直接将其加入到新数组中,当键值为数组时,会根据 flat 参数 depth 将其展开后加入到新数组中。
107. video 的 videoHeight 和 videoWidth 属性是只读的,且只有在视频加载完成后才能获取到正确的值,即原生视频的大小
108. react 的 useRef 返回一个可变的 ref 对象,其 current 属性被初始化为传入的参数(initialValue),ref 对象的 current 不会随着组件的重新渲染而改变,并且改变 ref 对象的 current 不会引发组件的重新渲染。
109. img 渲染到 canvas,canvas.getContext('2d').drawImage(img,0,0)会报错,因为 img 没有加载完成,可以在 img.onload 里执行 drawImage
110. canvas 的 toDataURL 方法会将 canvas 转换为 base64 格式的图片
111. file 类型, file 继承自 blob, input type file
112. readOnly 的属性无法通过...展开
113. 泛型类型参数,如 T,类似 unknown,但是 unknown 不能赋值给其他类型,而 T 可以,因为 T 是类型参数,而 unknown 是类型,在定义时用 T 占位,实际使用时再传确定的 type
114. session storage 新页面会深拷贝父页面的 session storage,但是 local storage 不会。每一个页面的 session storage 都是独立的,但是 local storage 是共享的
115. 前端模糊查询, 通过 string.includes()判断是否包含来过滤
116. 提升单元测试分支覆盖率技巧 若顶级的template显示未覆盖，可能是shallowMount导致子组件未渲染，子组件的if else分支未覆盖，可以通过mount解决,还可以写多个describe,每个describe里的it都是独立的,可以提升分支覆盖率
