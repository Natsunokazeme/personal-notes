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
13. 深度学习:输入原始数据,通过多层神经网络,从底层到高层,自动逐渐提取特征,最终得到判断结果.该特征可能是人类无法理解的,但是确实有效的,是算法从原始数据分析并提取出来的.因此,输入的数据越大,神经网络越深,最终得到的结果越准确.
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
