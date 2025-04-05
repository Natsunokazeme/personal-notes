CSS

# 背景及尺寸

背景大小：background-size；值：auto，cover，contain，100px 100px，100% 100%;
背景色：background-color；值有预定义的颜色名字，rgb 格式，16 进制三种方式
背景图片： background-image:url(/study/background.jpg);
背景重复：background-repeat 属性，将设置好的部分背景一直重复直至完全占满背景
其值有 repeat; 水平垂直方向都重复 repeat-x,repeat-y,no-repeat
背景展示方式：background-clip: border-box; //背景会延伸到边框 text; //背景只替换文字区域 padding-box; //背景会延伸到内边距 content-box; //背景会延伸到内容区域
背景定位：background-position: 0|center|right|left|top|bottom|px|em|%
背景与视窗关系：background-attachment:fixed; //背景图片固定不动 scroll; //背景图片随着视窗滚动 local; //背景图片随着元素滚动

# 文本

文字颜色：属性名 color
文字对齐：属性:text-align；值：left,right,center
文本修饰：属性：text-decoration；
值： overline（上划线）；line-through（中划线）；underline（下划线）；blink（闪烁效果，大部分浏览器已取消）;none（去掉划线，对超链默认的划线有用）
行间距：属性：line-height；值：数字或者百分比
字符间距：属性：letter-spacing；值： 数字
单词间距：属性：word-spacing；值： 数字//即改变单个空格长短实现
首行缩进：属性：text-indent 值： 数字
大小写属性：text-transform
值：uppercase 全部大写；capitalize 首字母大写；lowercase 全部小写
空白格：属性：white-space
值：
normal 默认。多个空白格或者换行符会被合并成一个空白格
pre 有多少空白格，显示多少空白格，相当于 pre 标签,如果长度超出父容器也不会换行。
pre-wrap 有多少空白格，显示多少空白格，相当于 pre 标签,如果长度超出父容器，会换行。
nowrap 一直不换行，直到使用<br/>。

# 字体

字体尺寸：属性：font-size 值：数字或者百分比或数字+em（1em 为标准大小）
风格：属性 font-style:值：normal 标准字体；italic 斜体
字体粗细：属性 font-weight 值：normal 标准粗细；bold 粗一点
字体种类：属性 font-family
把大小，风格，粗细，字库都写在一行里面：顺序依次为：1.风格(normal italic) 2.粗细(normal bold) 3.尺寸 4.字库
不按照这个顺序就没办法显示想要的效果
font:italic bold 30px "Times New Roman"

# 鼠标样式：属性 cursor

值与样式：default,默认鼠标样式；auto，文本框选样式；crosshair，十字准星样式；
Pointer，点击样式；text，文本框选样式；wait，加载样式；help，疑问样式；not-allowed，禁止样式；

# 表格

表格布局：属性：table-layout
值：automatic，单元格的大小由 td 的内容宽度决定；fixed，单元格的大小由 td 上设置的宽度决定。
注：只对连续的英文字母起作用，如果使用中文就看不到效果
即前者单元格最小恰好能框住 td 内容，后者单元格过小 td 内容会超出单元格。
表格边框：
属性：border-collapse
值：separate:边框分隔；collapse:边框合并

# 边框：

边框风格：属性： border-style
值：solid: 实线
dotted:点状
dashed:虚线
double:双线
边框颜色：属性：border-color 值：red,#ff0000,rgb(255,0,0)
边框宽度：属性：border-width；值：数字
边框总和：属性：border；值：颜色 风格 宽度
通过制定位置，可以只给一个方向设置边框风格，颜色和宽度
border-top-style:solid;
border-top-color:red;
border-top-width: 50px;
top,bottom,left,right 分别对应上下左右
它们的交界同时出现边框的时候，就会以倾斜的形式表现交界线。

# 元素内边距 padding

指的是元素里的内容与边框之间的距离
属性：
padding-left: 左内边距
padding-right: 右内边距
padding-top: 上内边距
padding-bottom: 下内边距
padding: 上 右 下 左
//写 1 个值时默认上下左右全为该值，否则按照上 右 下 左,依顺时针的方向依次赋值。如果缺少左内边距的值，则使用右内边距的值。
如果缺少下内边距的值，则使用上内边距的值。
如果缺少右内边距的值，则使用上内边距的值。
padding 的百分比是相对于父元素的宽度计算的

# 元素外边距 margin

指的是元素边框和元素边框之间的距离
属性：
margin-left: 左外边距
margin-right: 右外边距
margin-top: 上外边距
margin-bottom: 下外边距
注：像 span 这样的内联元素，默认情况下，只有左右外边距，没有上下外边距。 为了观察上下外边距的效果，可以采用块级元素，比如 div.
边框模型打包
.box{
width:70px;
padding:5px;
margin: 10px;
}
注：外边距上下重叠

# 超链状态

伪类，所谓的伪类即被选中的元素处于某种状态的时候
超链状态有 4 种伪类
link - 初始状态，从未被访问过
visited - 已访问过
hover - 鼠标悬停于超链的上方
active - 鼠标左键点击下去，但是尚未弹起的时候

a:link {color: #FF0000}
a:visited {color: #00FF00}
a:hover {color: #FF00FF}
a:active {color: #0000FF}

去除超链的下划线
默认状态下，超链是有下划线的，但是现在网站上的超链普遍采用无下划线风格。
使用 text-decoration: none 文本修饰的样式来解决

# CSS 文件 link

如果把所有的 css 都写在 html 文件里面，一旦样式比较多的时候，就会显得不易维护
这个时候就会选择把所有的 css 内容，放在一个独立文件里
然后在 html 中引用该文件
通常这个文件会被命名为 style.css
并在 html 中引用该文件

<link rel="stylesheet" type="text/css" href="https://how2j.cn/study/style.css" />
//引用how2j的style.css文件
注：style.css文件里，就不要再使用style标签了
当html内部style标签与外部文件style.css样式重复属性矛盾时，内容由最后出现的决定
如果样式上增加了!important，则优先级最高，甚至高于style属性
<style>
.p1{
  color:green !important;
}
 
</style>

# 定位

绝对定位
属性：position；值： absolute
通过指定 left,top 绝对定位一个元素
设置了绝对定位的元素，相当于该元素被从原文档中删除了然后新建了一个有该元素的图层。
绝对定位定位的是父容器的位置，若没有则默认 body 为父容器
通过绝对定位可以把一个元素放在另一个元素上，这样位置就重复了。
此时用 z-index 属性， 当 z-index 的值越大，就表示图层在越上面，z-index:越小就表示图层在越下面。Body 主体 z-index 值默认为 0。

相对定位
属性：position；值： relative
与绝对定位不同的是，相对定位不会把该元素从原文档删除掉，而是在原文档的位置的基础上，移动一定的距离。原文档位置保留为空白
若把空白填上则对下一元素进行绝对引用，并把 left 赋值 auto。

fixed
生成绝对定位的元素，相对于浏览器窗口进行定位。
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

inherit
规定应该从父元素继承 position 属性的值。

static
默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

sticky
需要指定 top，bottom，left，right 任意一个，当前位置相对于视窗大于对应值时表现为 relative，等于时表现为 fixed

# 浮动

浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。
属性：float；值： left,right
浮动后，原来的“坑”就让出来了。并且是在原来的高度的基础上，向右浮动
但是，文字向左浮动时“浮动的文字”并没有走，还在原位置，结果，后一个元素就只好接在它后面。
因此，当图片设为浮动却没有离开原位置时，下一个元素就围着图片摆放。
不允许出现浮动元素：若不想下一个元素接着浮动的对象，需设置属性:clear；值: left right both none。此时该值前面达到不允许浮动元素出现的效果，就会继续向下排。
默认的 div 排列是会换行的
如果连续使用 float 就可以达到水平排列的效果，通常会用在菜单，导航栏等地方
如果超出了父容器，还会有自动换行的效果

# 清除浮动

1、 使用伪元素来应用 clear:both 清除浮动(::after,注意：作用于浮动元素的父亲）
2、 flex 或 grid
3、 父级定义 overflow:hidden
//在添加 overflow 属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果。当元素设置了 overflow 样式且值不位 visible 时，该元素就构建了一个 BFC，BFC 在计算高度时，内部浮动元素的高度也要计算在内，也就是说技术 BFC 区域内只有一个浮动元素，BFC 的高度也不会发生塌缩，所以达到了清除浮动的目的，

# overflow

overflow 属性规定当内容溢出元素框时发生的事情。
值：
visible 默认值。内容不会被修剪，会呈现在元素框之外。
hidden 内容会被修剪，并且其余内容是不可见的。
scroll 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
auto 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
inherit 规定应该从父元素继承 overflow 属性的值。

overflow-x
规定当内容溢出水平元素框时发生的事情。
overflow-y
当内容溢出垂直元素框时发生的事情。

# 元素的显示方式

元素的 display 显示方式有多种，隐藏、块级、内联、内联-块级
display:none 隐藏
display:none; 使得被选择的元素隐藏，并且不占用原来的位置
display:block 块级
display:block; 表示块级元素
块级元素会自动在前面和后面加上换行，并且在其上的 width 和 height 也能够生效
display:inline 内联
display:inline; 表示内联元素
内联元素前后没有换行，并且在其上的 width 和 height 也无效。 其大小由其中的内容决定
display:inline-block 内联-块级
有时候，需要元素处于同一行，同时还能指定大小，这个时候，就需要用到内联-块级 inline-block，但 inline-block 会造成元素排列比如 img 位置变化
display:flex
display:inline-flex
display:grid,inline-gird
display:table,inline-table
display:flow-root 直接建立 BFC

# CSS 盒模型

包括 IE 盒子模型和标准的 W3C 盒子模型。
box-sizing：border-box,content-box.
IE 盒子模型：width 表示 content+padding+border 这三个部分的宽度
标准 W3C 盒子模型： width 只表示 content 宽度
水平居中
内容居中
通过设置属性 align="center" 居中的内容
通过样式 style="text-align:center" 居中的内容

# 弹性布局

display:flex 布局
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。
flex 的六个属性
flex-direction //容器内元素的排列方向(默认横向排列)
flex-direction:row; 沿水平主轴让元素从左向右排列
flex-direction:column; 让元素沿垂直主轴从上到下垂直排列
flex-direction:row-reverse;沿水平主轴让元素从右向左排列

flex-wrap //容器内元素的换行(默认不换行)
1：flex-wrap: nowrap; (默认)元素不换行,比如：一个 div 宽度 100%，设置此属性，2 个 div 宽度就自动变成各 50%；
2：flex-wrap: wrap; 元素换行,比如：一个 div 宽度 100%，设置此属性，第二个 div 就在第二行了；

justify-content //元素在主轴（页面）上的排列
justify-content : center;元素在主轴（页面）上居中排列
justify-content : flex-start;元素在主轴（页面）上由左或者上开始排列
justify-content : flex-end;元素在主轴（页面）上由右或者下开始排列
justify-content : space-between;元素在主轴（页面）上左右两端或者上下两端开始排列
justify-content : space-around;每个元素两侧的间隔相等。所以，元素之间的间隔比元素与边框的间隔大一倍。
justify-content: space-evenly 绝对平均分配

align-items 元素在主轴（页面）当前行的横轴（纵轴）方向上的对齐方式

gap: 子元素的间距

# CSS transform

语法 transform: none|transform-functions;
transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。
translate()
translate() 方法从其当前位置移动元素（根据为 X 轴和 Y 轴指定的参数）。
例：transform: translate(50px, 100px);//向右移 50px,向下移 100px.
rotate()
rotate() 方法根据给定的角度顺时针或逆时针旋转元素。
例：transform: rotate(20deg);//顺时针旋转 20°
scale()
scale() 方法增加或减少元素的大小（根据本元素给定的宽度和高度参数）。
例：transform: scale(2, 3);// 元素增大为其原始宽度的两倍和其原始高度的三倍。
scaleY()
scaleX()
skewX()//沿 x 轴旋转度数
skewY()//沿 y 轴旋转度数
skew()
matrix()

# CSS 动画

@keyframes
animation-name
animation-duration
animation-delay
animation-iteration-count
animation-direction
animation-timing-function
animation-fill-mode
animation

CSS 可实现 HTML 元素的动画效果
如需使用 CSS 动画，您必须首先为动画指定一些关键帧。
关键帧包含元素在特定时间所拥有的样式。
@keyframes
在 @keyframes 规则中指定 CSS 样式，动画将在特定时间逐渐从当前样式更改为新样式。@keyframes example {
from {background-color: red;}
to {background-color: yellow;}
}
div {
width: 100px;
height: 100px;
background-color: red;
animation-name: example;
animation-duration: 4s;
}
在上面的例子中，通过使用关键字 "from" 和 "to"（代表 0％（开始）和 100％（完成）），设置了样式何时改变。也可以使用百分比值。通过使用百分比，可以根据需要添加任意多个样式更改。
例：@keyframes example {
0% {background-color:red; left:0px; top:0px;}
25% {background-color:yellow; left:200px; top:100px;}
50% {background-color:blue; left:200px; top:200px;}
75% {background-color:green; left:0px; top:200px;}
100% {background-color:red; left:0px; top:0px;}
}//将在 duration 的 25%时变成相应样式
animation-duration
规定动画的持续时间，默认为 0s,即不发生动画。
animation-delay 规定动画开始的延迟时间。
animation-iteration-count
指定动画应运行的次数。infinite 表示无限持续
animation-direction
指定是向前播放、向后播放还是交替播放动画。
normal - 动画正常播放（向前）。默认值
reverse - 动画以反方向播放（向后）
alternate - 动画先向前播放，然后向后
alternate-reverse - 动画先向后播放，然后向前
animation-timing-function
规定动画的速度曲线。
ease - 指定从慢速开始，然后加快，然后缓慢结束的动画（默认）
linear - 规定从开始到结束的速度相同的动画
ease-in - 规定慢速开始的动画
ease-out - 规定慢速结束的动画
ease-in-out - 指定开始和结束较慢的动画
cubic-bezier(n,n,n,n) - 运行您在三次贝塞尔函数中定义自己的值

# link 与@import 引入 css 的区别

link 是 html 自带标签，@import 是 css 特有语法，link 不会暂停解析，@import 会暂停解析直到下载完 css
选择器选择 prop="test"的元素
[prop="test"]{}

# CSS3 有哪些新特性？

新增选择器 p:nth-child（n）{color: rgba（255, 0, 0, 0.75）}
弹性盒模型 display: flex;
多列布局 column-count: 5;
媒体查询 @media （max-width: 480px） {.box: {column-count: 1;}}
个性化字体 @font-face{font-family:BorderWeb;src:url（BORDERW0.eot）；}
颜色透明度 color: rgba（255, 0, 0, 0.75）；
圆角 border-radius: 5px;
渐变 background:linear-gradient（red, green, blue）；
阴影 box-shadow:3px 3px 3px rgba（0, 64, 128, 0.3）；右，下，阴影尺寸
倒影 box-reflect: below 2px;
文字装饰 text-stroke-color: red;
文字溢出 text-overflow:ellipsis;省略号
背景效果 background-size: 100px 100px;
边框效果 border-image:url（bt_blue.png） 0 10;
转换 transform
旋转 transform: rotate（20deg）；
倾斜 transform: skew（150deg, -10deg）；
位移 transform:translate（20px, 20px）；
缩放 transform: scale（.5）；
平滑过渡 transition: all .3s ease-in .1s;
动画 @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;

# css 引入方式有哪些？CSS 选择符有哪些?哪些属性可以继承?优先级算法如何计算?内联和 important 哪个优先级高?css 的基本语句构成

1.css 引入方式：内链 导入 外链

2.css 选择符：id>class>标签>\*

3.内联和 important 中 important 优先级高

4.选择器｛属性 1：值 1；属性 2：值 2；....｝

盒模型
CSS 盒子模型(Box Model)
所有 HTML 元素可以看作盒子，在 CSS 中，"box model"这一术语是用来设计和布局时使用。
box
CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括：边距，边框，填充，和实际内容。边框(border)、边界/边距(margin)、补白/填充(padding)、内容区(content)
盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

画一个三角形
div {
width:0px;
height:0px;
border-top:10px solid red;
border-right:10px solid transparent;
border-bottom:10px solid transparent;
border-left:10px solid transparent;
}//transparent 在 css 颜色属性中代表透明黑色，即一个类似 rgba(0,0,0,0)这样的值。

画一个半圆形
div{
width: 100px;
height: 50px;
border:1px solid black;
background-color: blue;
border-radius: 100px 100px 0 0;//从左上开始顺时针，右上，右下，左下
}

# 画一条 0.5px 的线

先画一条 1px 的线再缩放 transfrom：scale（0.5）； 2. 渐变 background-image: linear-gradient(0deg, #f00 50%, transparent 50%);

# css animation 和 transition 的区别

Animation 和 transition 大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是 transition 需要触发一个事件才能改变属性，而 animation 不需要触发任何事件的情况下能随时间改变属性值，并且 transition 为 2 帧，从 from .... to，而 animation 可以一帧一帧的。

# visibility=hidden, opacity=0，display:none 的区别

opacity=0 只是变透明了，还会响应
visibility=hidden 只是隐藏该元素，不能响应，但不改变布局
display:none 则相当于从原来的渲染树中删除该元素。改变了布局，导致重排
// z-index 涂层遮盖只是遮盖了该元素(无法响应)

# opacity 和 rgba 的 a 的区别

opacity 会应用到当前元素整个区域的显示，不会继承，rgba 的 a 则只用于当前元素，子元素可在其之上正常显示

# BFC

（block formatting context，用于清除浮动，防止 margin 重叠等）
直译成：块级格式化上下文，是一个独立的渲染区域，并且有一定的布局规则。
BFC 区域不会与 float box 重叠
BFC 是页面上的一个独立容器，子元素不会影响到外面
计算 BFC 的高度时，浮动元素也会参与计算

哪些元素会生成 BFC：
根元素
float 不为 none 的元素
position 为 fixed 和 absolute 的元素
display 为 inline-block、table-cell、table-caption，flex，inline-flex 的元素
overflow 不为 visible 的元素

# 元素在容器中居中

1.父元素固定宽高，利用定位及设置子元素 margin 值为自身的一半。 2.父元素固定宽高，子元素设置 position: absolute，margin：auto 平均分配 margin
3.css3 属性 transform。子元素设置 position: absolute; left: 50%; top: 50%;transform: translate(-50%,-50%);即可。 4.将父元素设置成 display: table, 子元素设置为单元格 display: table-cell。 5.弹性布局 display: flex。设置 align-items: center; justify-content: center

1. 父元素弹性布局 display: flex, 子元素设置 margin：auto
   垂直水平居中 1.绝对定位+margin:auto
   把要垂直居中的元素相对于父元素绝对定位，
   {
   margin: auto;//使元素自动居中
   width: 150px;//任意
   height: 50px;//任意
   //规定了元素外边距的边界与父元素边界(就是原来默认位置)的距离值。
   left: 0;
   right: 0;//去掉则变为垂直居中
   top: 0;
   bottom: 0;//去掉则变为水平居中
   position: absolute;//继承父元素的边界
   } 2.弹性盒模型+margin: auto
   {
   //父类 display：flex;
   //子类直接 margin：auto
   }
   3.transform
   {
   // transform 属性允许你旋转，缩放，倾斜或平移给定元素。本质上这种居中技巧是建立在平移量的精准计算之上的。即需要知道父类长度和宽度和子类的长度和宽度。
   transform: translate(, )
   } 4.硬算
   //需要知道父类长度和宽度和子类长度和宽度
2. 弹性盒模型+align-item:center+justify-content:center

# advanced css

1. :is() css 伪类 匹配列表中任意一个选择器可以选择的元素,但不能匹配伪元素; :where() css 伪类 优先级为 0 匹配列表中任意一个选择器可以选择的元素; :has() css 伪类 匹配列表中任意一个选择器的父元素; :not() css 伪类 匹配不满足列表中任意一个选择器的元素。除 not 外都是可容错的选择器。
2. ::placeholder 是设置 placeholder 样式的伪元素，只能设置字体并且 inspect 里看不到。
3. height 不在 transition 里，会导致 transition 失效，可用 max-height 代替
4. background: url() no-repeat left 10px top 10px; 可以设置背景图片的位置
5. transform 设置元素的变换，如 translate(x,y)平移，scale(x,y)缩放，roate(x)旋转，skew(x,y)倾斜，matrix(a,b,c,d,e,f)矩阵变换
6. transition 规定过渡效果，第一个参数是属性，第二个参数是过渡时间，第三个参数是过渡函数，第四个参数是延迟时间;例如 transition: width 2s linear 1s;
7. 巧用兄弟选择器，如.a+.a{margin-top:10px}，可用来设置相邻元素的间距
8. 多列布局：column-count: 3; column-gap: 10px; column-rule: 1px solid #ccc; column-span: all; column-width: 200px; 可直接将元素分成多列，可设置间距，边框，跨列，列宽
9. word-break: break-all; 可以让单词在任意位置断开,方便折行显示
10. _在移动端浏览器中，100vh 包含了 top search bar 高度。会影响布局,可用 innerHeight 代替_
11. rpx,规定手机屏幕宽度为 750rpx，然后根据手机实际宽度计算出 1rpx 的宽度，如 375px 的屏幕，1rpx=0.5px
12. translate 以当前位置为出发点进行移动，但还是推荐 animation
13. _image 经常有 3px margin at bottom 是因为 the image behaving like a character of text。可设置 vertical-align;_ (节省一次时间
14. _padding 使用百分比时是按照宽度来计算的_
15. 宽高相等，1 使用 vw，vh,2 使用 js,3 aspect-ratio: 1/1;
16. grid 的 1fr 可代替高和宽部分 calc
17. input type 为 number 时右侧会有按钮，影响布局，可通过 input[type='number']::-webkit-inner-spin-button {-webkit-appearance: none;}隐藏掉
18. clear:both 清除 float
19. input 和 select 都自带 outline
20. aspect-ratio 可以设置宽高比，可以用 css 来设置宽高比，可以用 style 来设置宽高比，可以用 className 来设置宽高比
21. _为使 overflow 有效果，块级容器必须有一个指定的高度（height 或者 max-height）或者将 white-space 设置为 nowrap。_
22. display:flex-root ,将该元素变成 block formatting context
23. box-shadow: x y fuzzy-r diffusion-r color
24. overflow:hidden 是根据父元素的 border 内边距来计算的，可通过 position absolute 来跳出父元素的 border
25. overflow:clip 类似于 overflow:hidden，但是 hidden 可通过 js 设置 scroll，clip 不能设置 scroll
26. font awesome 可以用字体的特殊符号表示 icon
27. _pointer-events:none;可以使元素及其子元素不响应鼠标事件,但也会造成 cursor 样式失效_
28. _触摸屏的浏览器自带下拉刷新，可通过 touch-action 来设置为 none 来禁止触摸屏下当前元素区域(不能继承)的触摸效果来禁止下拉刷新_
29. _overscroll-behavior:滚动到该 scroll 的边界时的滚动溢出效果，为 auto 时，会继续滚动相邻的 scroll 或触发页面触底效果甚至下拉刷新，为 contain 时，页面效果不变，但不会滚动相邻 scroll，为 none 时，不滚动也不触发。_
30. _阻止页面下拉刷新，在 body 里设置 css overscroll-behavior:none 和 overflow:hidden_
31. background-clip 基于当前元素设置 background 的 延伸距离，text 是基于文字，padding-box 是基于 padding，border-box 是基于 border，content-box 是基于 content;
32. _flex: 1; == flex: 1 1 0; flex:auto == flex: 1 1 auto;flex:none==flex:0 0 auto;flex: initial == flex:0 1 auto flex:0==flex:0 1 0_
33. order: 1; 该属性规定了弹性容器中的可伸缩项目在布局时的顺序。元素按照 order 属性的值的升序进行布局，可以为负值。
34. will-change: css-key-word; 会让浏览器提前开启 GPU 加速，提高 css 关键字的性能
    _补充知识:一般来说,元素在进行一些操作如 3D 变换时会被单独处理到一个图层渲染，并在之后合成到主图层.此时通过 GPU 而不是 CPU 渲染的话,性能会得到提升.因此，之前我们会用 transform: translate3d(0, 0, 0);之类的语句欺骗浏览器加速该元素渲染_
35. css 属性选择器
    a[title='1'] // title 为 1 的 a 标签
    a[title^='1'] // title 以 1 开头的 a 标签
    a[title$='1'] // title 以 1 结尾的 a 标签
    a[title*='1'] // title 包含 1 的 a 标签
    a[title~='1'] // title 是一个以空格作为分隔的值列表，其中至少有一个值 为 1 的 a 标签
    a[title|='1'] // title 是一个以连字符作为分隔的值列表，其中至少有一个值 为 1 的 a 标签
36. _accent-color:#fff ; // 设置 checkbox 勾选颜色_
37. sticky 要求父元素高度比自身高，且 overflow 不为 hidden。
38. inline-flex 让元素 flex 的同时可指定宽高
39. fill:currentColor 使 svg 和 path 的颜色继承父元素的颜色，但只能用与 html 标签，不能用于 image url 和 background-image
40. _input 不是一个 container，不能有子元素，因此伪元素不会生效_
41. 推荐用 last-of-type:mr-0 来替代 first-of-type:ml-0,因为换行后下一行元素第一个元素会有 margin-left
42. _选择器权重:权重是相加比较的，id 永远 > class 永远 > 标签 .权重大小比较只在同级之间比较，不同级之间不比较..权重相同的情况下，后面的样式会覆盖前面的样式.伪类和属性选择器权重和类相同，伪元素权重和标签相同。组合选择器不更改权重规则。级与级之间的权重差根据浏览器实现而不同，因此当级的权重差为 1 个字节时，256 个 class 累计的权重就会超过 1 个字节，发生溢出，进而可能覆盖 id 的权重。_
43. background-image 可以设置多个，用逗号隔开，前一个会覆盖后一个，可使用 linear-gradient()设置渐变色
44. linear-gradient()设置渐变色，可设置角度，颜色，渐变点位置和颜色
45. :target 选择器，选中当前页面的锚点，可用于锚点跳转
46. css 变量 用--xxx: value;使用 var(--xxx)调用 value
47. _css 默认继承的属性有 color,font-size 等和文字相关的属性以及 visibility,cursor 等和显示相关的属性_
48. video 的 videoHeight 和 videoWidth 属性是只读的,且只有在视频加载完成后才能获取到正确的值,即原生视频的大小
49. css clamp(min,val,max) 将值限制在 min 和 max 之间, val 为期望值 可用于动态改变 font-size;font-size: clamp(1rem, 10vw, 2rem); 根据窗口大小改变字体大小
50. transform 里的 scale 会把元素整体缩放，但 Event Listener 不会改变监听区域
51. 子元素若不想受父元素 scale 影响，可以设置 transform:scale(1/scale)，或者将父元素和子元素都设置 transform-style:preserve-3d;这样他们不会在同一图层上，或者直接想办法取出来
52. _:first-of-type,伪类 当匹配到的元素是父元素中其类型的第一个元素时生效;:first-child 伪类 当匹配到的元素是父元素中的第一个元素时生效_
53. :nth-of-type(an+b) 伪类 当匹配到的元素是父元素中其类型的第 an+b 个元素时生效，n 从 0 开始计数;:nth-of-type(2n+1)可直接写为:nth-of-type(odd)
54. css outline-offset, 控制 outline 相对于边框的偏移
55. css 属性 tabindex 设置该元素能否通过 tab 键 focus，小于 0 不能，0 可以，大于 0 按 tabindex 值优先级 focus
56. _css padding-inline 根据文本方向(direction)和书写模式(writing-mode)设置 padding. 在日文的竖直书写模式和阿拉伯文的从右到左文本方向下比较有用。_
57. css animation pause 可以暂停动画,通过 animation-play-state 属性设置为 paused 来暂停动画,设置为 running 来继续动画, 通过设置 animation-delay 结合 animation-play-state 来实现动画的暂停位置
58. css backdrop 伪元素,用于设置模态框背景,通过 backdrop-filter 属性设置背景模糊效果,通过 backdrop-background-color 设置背景颜色,通过 backdrop-filter 设置背景滤镜效果
59. css @layer 规则：将 css 规则写入一个 layer 内，不同 layer 之间的 css 选择器权重不会相互影响，可以提高 css 的可维护性，layer 可嵌套，注意：non-layered css 会应用在 layer 层级后,也就是会覆盖 layer 层级的 css；layer 之间按照初次声明时的先后顺序确定优先级，越后优先级越高； 常用于创建公共组件的基本样式
60. css line-clamp 用于限制文本行数，正整数，最小值为 1，文本内容超过限制行数时会自动显示省略号。注意需要设置 display: -webkit-box 以及-webkit-box-orient: vertical 才能生效。这是为了兼容以前的浏览器。
    原理：子元素高度超过规定文本行数\*字体大小时，超出元素高度的内容会被隐藏掉，如果小于规定文本行数\*字体大小时，会自动调整高度，不会有任何影响。(移动端 safari 会出现子元素超出高度的问题 2h)
    总之就是慎用，不建议元素内再套元素

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

SCSS

1. @if 当@if 后的条件不返回 false 或者 null 时，@if 后的代码块会被执行，否则不会被执行
2. @for 从一个数字开始，到另一个数字结束，每次循环增加一个数字，然后执行代码块
3. @while 当@while 后的条件不返回 false 或者 null 时，@while 后的代码块会被执行，否则不会被执行
4. 变量 $xxx: value; 用$xxx 调用 value
5. @mixin 定义一个类似方法的混合器，用@include xxx;调用 例：@mixin xxx($xxx){xxx: $xxx;} @include xxx(value);
6. scss 变量可以在 css 规则块定义之外存在(全局变量).当变量定义在 css 规则块内,那么该变量只能在此规则块内使用,局部变量转换为全局变量可以在变量后添加 !global 如:$width: 5em !global;变量名以$开头,变量可以直接进行运算

tailwindcss

1. dark: hover:xxx 用于 dark 模式下的 hover 效果, 启用 dark 模式需要在上层元素上加上 class="dark"
2. 响应式设计 sm md lg xl 2xl //默认最小值 sm: 640px md: 768px lg: 1024px xl: 1280px 2xl: 1536px
3. custom theme 可以通过在 tailwind.config.js 中添加 theme 来自定义主题覆盖 tailwind 默认主题

# tailwind css 优缺点

1. 优点
   1. 体积小，只有 20kb
   2. 可以快速构建页面
   3. 可以自定义主题
   4. 可以通过配置文件来自定义
   5. 可以通过 jit 来按需加载
2. 缺点
   css 优先级低，通过 css 里 apply tailwind 来提高优先级

据说 tailwind 就是通过 layer 来实现 css 的隔离
