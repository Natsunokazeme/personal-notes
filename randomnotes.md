1.clone henkel 项目到本地时,先在 devops 上生成 credentials,再复制其并插入到 clone 给定的 https 的 henkel 后,并在之间加上：
8.scss 的 mixin 适用于多个属性绑定到一起
13.margin-bottom 采用 margin-top 替代

1.  proxy 代理设置, target 将 location 的 origin 替代为 target,pathrewrite 将 origin 之后的 path 部分替换
2.  packege.json 里的 script 定义 npm 执行脚本, 用 npm run xxx 运行 xxx 对应的脚本

3.  设置 pipeline：1.需从 azure 上读值,先在 pipeline 的 library 上设置变量的 key 和 value(前端 library 叫 frontend-deploy)；2. 在代码库里设置 environment3.将设置的 environment 的值与 library 上的 key 在代码库里的 pipeline yml 文件中对应,如：echo "##vso[task.setvariable variable=api_community_bebaseurl]$(api_community_bebaseurl_dev)" //api_community_bebaseurl_dev 是 library 上的 key,api_community_bebaseurl 是代码库里的 key,这样就可以在代码库里的 environment 中使用了
4.  浏览器会根据用户设置和偏好自动将请求头的 accept-language 设置为对应的值.当服务器接收到请求时,会根据请求头的 accept-language 来决定返回的语言.如果服务器没有对应的语言,会返回默认语言.如果服务器没有设置默认语言,会返回第一个语言或者在一些字段上返回空值.（1h）

5.  提升单元测试分支覆盖率技巧 若顶级的 template 显示未覆盖,可能是 shallowMount 导致子组件未渲染,子组件的 if else 分支未覆盖,可以通过 mount 解决,还可以写多个 describe,每个 describe 里的 it 都是独立的,可以提升分支覆盖率
6.  element.offsetHight 只读属性,返回该元素高度,不包含外边距,单位 px.
7.  图像加载太慢
    1.  可以使用懒加载,即当图像进入可视区域时,再加载图像(html5 中 img 标签 有 loading lazy 直接实现) 前端级别
    2.  预加载,即提前加载图像 前端级别
    3.  预览图,即先加载一张缩略图,然后再加载完整图像 后端级别
    4.  调整图像分辨率,即根据显示图像的大小,加载合适的图像
    5.  图像压缩,即减少图像的大小
    6.  图像 CDN 加速,即使用 CDN 加速图像加载 后端级别
    7.  图像缓存,即使用浏览器缓存图像,通过设置响应头的 Cache-Control 和 Expires 字段来实现(该方法能缓存比 localStorage 更多的数据并且加载更快)
8.  H.264 是一种视频压缩算法,虽然有损但压缩比大,视频质量损失不大,被广泛使用.H.265 是 H.264 的升级版,压缩比更大,视频质量更好,但是编码速度慢,解码速度快,目前大部分设备不支持 H.265,所以 H.264 仍然是主流.
9.  浏览器默认不发送 cookie,需要在请求里设置 withCredentials:true 才会发送 cookie;如果是跨域请求,服务器也需要设置 Access-Control-Allow-Credentials: true, 才能接收到 cookie
10. nest 需要用 @Res() res: Response 来设置响应头,并且需要用 res.send(re) 来发送响应体 re
11. app.enableCors() 会自动设置 Access-Control-Allow-Origin: \*,Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE,Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
12. css clamp(min,val,max) 将值限制在 min 和 max 之间, val 为期望值 可用于动态改变 font-size;
13. 创建虚拟机后 要为虚拟机安装执行环境,我以 node 为例,node 版本不能太高,centOS7 不支持,node 版本不能太低,nest 无法执行,推荐 14 版本 node.node 下载安装之后要把 node 添加到环境变量方便所有目录下都能使用,node 版本控制工具 nvm
14. ping ls kill cd echo code yum node nvm git which Whereis vi sudo !! Mkdir rm ip wget tar service
15. Linux 分为很多版本,其中 centOS 是 red hat 发行的版本,不同版本的命令和资源库不同,我用的 centOS7
16. http 请求演化历程 1. 1 个 tcp 发送一个请求,请求结束就断开链接(性能开销) 2. keep-alive 1 个 tcp 发送 1 个请求,请求结束后决定继续发送下一个请求或者断开链接(不能并发) 3.pipeline 1 个 tcp 同时发送多个请求,按照请求顺序依次返回结果(请求堵塞) 4. http2 多路复用 1 个 tcp 发送多个请求,不按照请求顺序返回结果.
17. http 请求头 accept,accept-encoding,accept-language,authorization,expires,cache-control,connection,cookie,host,if-modified-since,user-agent,keep-alive,set-cookie,allow-access-control-origin,allow-access-control-methods,allow-access-control-headers,origin,content-type,content-language,date
18. indexedDB 是浏览器提供的本地数据库,可以存储大量数据,但是不支持 sql 查询,类似 nosql,只能通过游标来查询,游标是一个指针,指向数据库中的某个位置,可以通过游标来遍历数据库中的数据,限制同源策略,只能在同源网站下访问同源数据库
19. scss 变量可以在 css 规则块定义之外存在(全局变量).当变量定义在 css 规则块内,那么该变量只能在此规则块内使用,局部变量转换为全局变量可以在变量后添加 !global 如:$width: 5em !global;变量名以$开头,变量可以直接进行运算
20. 在 http 传输中,字符默认使用 utf-8 转换成字节传输
21. utf-8 是一种可变长度的编码方式,每个字符的长度不同,ascii 表中字符占一个字节,也就是 8bit,中文字符占三个字节.
22. 机械学习:人为设定判断标准作为参数,通过不断调整参数,使得判断结果与实际结果越来越接近,从而达到自动判断的目的.
23. 深度学习:输入原始数据,通过多层神经网络,从底层到高层,自动逐渐提取特征,最终得到判断结果.该特征可能是人类无法理解的,但是确实有效的,是算法从原始数据分析并提取出来的.因此,输入的数据越大,神经网络越深,最终得到的结果越准确.
24. onDrop 事件和 onDragOver 事件都是标准 html5 里的事件,前者是被拖拽元素释放到目标元素上触发的,后者是被拖拽元素在目标元素上移动时触发的.onDrop 事件只能在目标元素上触发,而 onDragOver 事件可以在任何元素上触发,所以在目标元素上触发 onDragOver 事件时,要阻止默认行为.
25. event.dataTransfer,用于拖拽期间传递存放数据.
26. angular 装饰器 HostListener,用于监听宿主元素上的事件
27. stopPropagation() 方法阻止事件冒泡到父元素,但是不会阻止事件传递到当前元素的其他监听器 preventDefault() 方法阻止事件的默认行为,如 a 标签的跳转;
28. angular icon registry,用于注册 svg 图标为 mat-icon,并且可以设置图标的颜色,大小等属性.通过 MatIconRegistry 这个 service 的 addSvgIcon()方法注册图标,然后通过 MatIcon 组件的 svgIcon 属性使用图标.
29. angular sanitizer 用于过滤 html 标签,防止 xss 攻击；sanitizer.bypassSecurityTrustResourceUrl() 方法用于信任资源 url,防止 angular 报错.若不通过该方法,angular 会认为该 url 不安全,不会加载该资源.(踩坑 0.5day)
30. transform 里的 scale 会把元素整体缩放，但 Event Listener 不会改变监听区域
31. 子元素若不想受父元素 scale 影响，可以设置 transform:scale(1/scale)，或者将父元素和子元素都设置 transform-style:preserve-3d;这样他们不会在同一图层上，或者直接想办法取出来
32. enum 可以直接当类型用，也可以当值用，当值用时，可以通过 enum[key]来取值
33. angular 里 pipeline 设置
