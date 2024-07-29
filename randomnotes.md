1.clone henkel 项目到本地时,先在 devops 上生成 credentials,再复制其并插入到 clone 给定的 https 的 henkel 后,并在之间加上：
8.scss 的 mixin 适用于多个属性绑定到一起
13.margin-bottom 采用 margin-top 替代

1.  proxy 代理设置, target 将 location 的 origin 替代为 target,pathrewrite 将 origin 之后的 path 部分替换
2.  packege.json 里的 script 定义 npm 执行脚本, 用 npm run xxx 运行 xxx 对应的脚本

3.  设置 pipeline：1.需从 azure 上读值,先在 pipeline 的 library 上设置变量的 key 和 value(前端 library 叫 frontend-deploy)；2. 在代码库里设置 environment3.将设置的 environment 的值与 library 上的 key 在代码库里的 pipeline yml 文件中对应,如：echo "##vso[task.setvariable variable=api_community_bebaseurl]$(api_community_bebaseurl_dev)" //api_community_bebaseurl_dev 是 library 上的 key,api_community_bebaseurl 是代码库里的 key,这样就可以在代码库里的 environment 中使用了

4.  提升单元测试分支覆盖率技巧 若顶级的 template 显示未覆盖,可能是 shallowMount 导致子组件未渲染,子组件的 if else 分支未覆盖,可以通过 mount 解决,还可以写多个 describe,每个 describe 里的 it 都是独立的,可以提升分支覆盖率
5.  element.offsetHight 只读属性,返回该元素高度,不包含外边距,单位 px.

6.  H.264 是一种视频压缩算法,虽然有损但压缩比大,视频质量损失不大,被广泛使用.H.265 是 H.264 的升级版,压缩比更大,视频质量更好,但是编码速度慢,解码速度快,目前大部分设备不支持 H.265,所以 H.264 仍然是主流.

7.  机械学习:人为设定判断标准作为参数,通过不断调整参数,使得判断结果与实际结果越来越接近,从而达到自动判断的目的.
8.  深度学习:输入原始数据,通过多层神经网络,从底层到高层,自动逐渐提取特征,最终得到判断结果.该特征可能是人类无法理解的,但是确实有效的 zu,是算法从原始数据分析并提取出来的.因此,输入的数据越大,神经网络越深,最终得到的结果越准确.

9.  组件上的单向绑定属性的相对位置会影响组件内属性更新的先后顺序
10. 创建基础组建时样式不重要，可以通过 deep selector 来覆盖
11. bom DOMParser 浏览器自带的原生解析 html 字符串为 dom 的 api
    ```javascript
    const parser = new DOMParser()
    const doc = parser.parseFromString("<div>hello world</div>", "text/html")
    ```
12. gpu 加速方法 transform 代替 top，left 等属性；will-change；position：fixed；animation；video；opacity;filter;
13. 精灵图：将多个小图合并成一张大图，通过 background-position 来显示不同的小图,可以减少 http 请求,提高页面性能
14. font-spider:字体压缩工具,可以将页面中用到的字体文件中未使用的字符删除,减少字体文件大小,提高页面性能
15. 自定义 font 压缩方案：针对 spa，首页采用 font-spider 静态压缩到打包到文件里，同时背后加载全量字体，这样 其他页也可以用
16. DNS 预解析：通过 link 标签的 rel="dns-prefetch" 属性，可以让浏览器在空闲时预先解析 DNS，提高网站的访问速度
17. Brotli 压缩：Brotli 是一种新的压缩算法，比 gzip 压缩率更高，可以减少文件大小，提高页面加载速度
18. 域名分片：由于浏览器限制了每个域（domain）的活动连接数，为了同时下载更多资源，将静态资源放在不同的域名下，可以提高并行下载的数量，加快页面加载速度；但是需要注意，域名分片会增加 DNS 查询次数，可能会影响页面加载速度
19. 流式加载：通过将页面分成多个区块，按需加载，可以提高页面加载速度，减少首屏加载时间
20. sdk：软件开发工具包，用于提供软件开发所需的工具和接口，简化开发流程，提高开发效率
21. tdk：标题、关键词、描述，是网页的三大核心元素，用于提高网页在搜索引擎中的排名
22. css @layer 规则：将 css 规则写入一个 layer 内，不同 layer 之间的 css 选择器权重不会相互影响，可以提高 css 的可维护性，layer 可嵌套，注意：non-layered css 会应用在 layer 层级后,也就是会覆盖 layer 层级的 css；layer 之间按照初次声明时的先后顺序确定优先级，越后优先级越高； 常用于创建公共组件的基本样式，

```css
p {
  color: rebeccapurple;
}

@layer type {
  .box p {
    font-weight: bold;
    font-size: 1.3em;
    color: green;
  }
}
```

23. js weakMap 是一种弱引用的 map，其键值对中的键是弱引用，当键被垃圾回收时，值也会被回收，可以用来存储一些临时数据，防止内存泄漏，也因此不能遍历，不能清空，不能获取大小，不能判断是否为空；只有 set，get，has，delete 方法
24. js 每个函数调用都有自己的上下文，上下文里包含了函数内定义的所有变量和函数；执行函数时，函数上下文会被推入栈中，函数执行完毕后，函数上下文会被弹出栈，函数上下文的生命周期与函数的执行过程一致;
25. js 代码执行时，访问变量的顺序是按作用域链来的,当访问变量时，会从当前作用域开始查找，如果找不到，会沿着作用域链向上查找，直到全局上下文或者找到，如果找不到，会报错
26. js 函数的参数被认为是当前上下文；
27. 临时上下文，在 try/catch 的 catch 和 with 语句中，会创建一个临时上下文，用于存储异常信息和 with 语句中的对象，当 try/catch 和 with 语句执行完毕后，临时上下文会被销毁；
28. js with(xxx){} 语句会创建一个临时上下文，将 xxx 对象作为临时上下文，当 with 语句执行完毕后，临时上下文会被销毁，不推荐使用，会导致代码可读性降低，性能降低，容易出错
29. js 块级作用域：在块级作用域由{}界定
30. js 由于变量提升，for(var xxx)中的变量 xxx 会被提升到 for 循环外部，所以在循环外部也可以访问到 xxx，但是在循环外部 xxx 的值是循环结束后的值
31. js Object.freeze() 方法可以冻结一个对象，使其不可修改，不可扩展，不可删除，不可配置，但是修改时不报错，只是不生效
32. js 垃圾回收 标记清理 的原理就是变量是否在上下文中被引用，如果没有引用，就会被标记为可回收
