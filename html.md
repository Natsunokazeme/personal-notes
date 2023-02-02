HTML
一个完整的HTML文件，应该至少包含html元素，body元素，以及里面的内容

中文乱码问题，在html的最前面加上编码设置
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head> 
注释格式用<! This is a comment >//即括号加一个感叹号

标签
<!DOCTYPE>
<!DOCTYPE> 声明必须是 HTML 文档的第一行，位于 <html> 标签之前。
<!DOCTYPE> 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。
提示：请始终向 HTML 文档添加 <!DOCTYPE> 声明，这样浏览器才能获知文档类型。

<a>
属性：最重要的属性是 href 属性，它指示链接的目标。
提示：如果不使用 href 属性，则不可以使用如下属性：download, hreflang, media, rel, target 以及 type 属性。
rel	text	规定当前文档与被链接文档之间的关系。 
target属性规定在何处打开被链接文档：
_self：默认值，在当前窗口打开URL
_blank：在一个新的窗口中打开URL
_parent：在父窗口中打开URL
_top：在顶层窗口中打开URL
某个iframe的name值：在某个frame中打开URL
去掉下划线可用css里的text-decoration:none;
框架
通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。每份HTML文档称为一个框架，并且每个框架都独立于其他的框架。每一个window对应一个框架
fra框架结构标签（<frameset>）定义如何将窗口分割为框架
每个 frameset 定义了一系列行或列
frame
Frame 标签定义了放置在每个框架中的 HTML 文档。
不能将 <body></body> 标签与 <frameset></frameset> 标签同时使用
html5不支持该功能
iframe
iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。
必须放在body中间

元素
<html>	HTML <html> 元素 表示一个HTML文档的根（顶级元素），所以它也被称为根元素。所有其他元素必须是此元素的后代。
<head>	HTML head 元素 规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。
<body> 元素定义了 HTML 文档的主体。这个元素拥有一个开始标签 <body>，以及一个结束标签 </body>。
<link>	HTML外部资源链接元素 (<link>) 规定了当前文档与外部资源的关系。该元素最常用于链接样式表，此外也可以被用来创建站点图标(比如PC端的“favicon”图标和移动设备上用以显示在主屏幕的图标) 。
<meta>	HTML <meta> 元素表示那些不能由其它 HTML 元相关（meta-related）元素（(base、link, script、style 或 title）之一表示的任何Metadata信息。
<style>	HTML的<style>元素包含文档的样式信息或者文档的部分内容。默认情况下，该标签的样式信息通常是CSS的格式。
<title>	HTML <title> 元素 定义文档的标题，显示在Browser的标题栏或标签页上。它只应该包含文本，若是包含有标签，则它包含的任何标签都将被忽略。
<nav>	HTML <nav>元素表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。导航部分的常见示例是菜单，目录和索引。
文本内容
<li>	HTML <li> 元素 （或称 HTML 列表条目元素） 用于表示列表里的条目。它必须包含在一个父元素里：一个有序列表(ol)，一个无序列表(ul)，或者一个菜单 (menu)。在菜单或者无序列表里，列表条目通常用点排列显示；在有序列表里，列表条目通常在左边显示按升序排列的计数，例如数字或者字母。
<div>	HTML <div> 元素 (或 HTML 文档分区元素) 是一个通用型的流内容容器，在不使用CSS的情况下，其对内容或布局没有任何影响。
<ol>	HTML <ol> 元素表示有序列表，通常渲染为一个带编号的列表。
内联文本语义
使用 HTML 内联文本语义（Inline text semantics）定义一个单词、一行内容，或任意文字的语义、结构或样式。
<a>	HTML <a> 元素（或称锚元素）可以创建通向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL 的超链接。
<b>	HTML提醒注意（Bring Attention To）元素（<b>）用于吸引读者的注意到该元素的内容上（如果没有另加特别强调）。这个元素过去被认为是粗体（Boldface）元素，并且大多数浏览器仍然将文字显示为粗体。尽管如此，你不应将 <b> 元素用于显示粗体文字；替代方案是使用 CSS font-weight 属性来创建粗体文字。
<br>	HTML <br> 元素在文本中生成一个换行（回车）符号。此元素在写诗和地址时很有用，这些地方的换行都非常重要。
<code>	HTML <code> 元素呈现一段计算机代码. 默认情况下, 它以浏览器的默认等宽字体显示.
<i>	HTML元素 <i> 用于表现因某些原因需要区分普通文本的一系列文本。例如技术术语、外文短语或是小说中人物的思想活动等，它的内容通常以斜体显示。
<span>	HTML <span> 元素是短语内容的通用行内容器，并没有任何特殊语义。可以使用它来编组元素以达到某种样式意图（通过使用类或者Id属性），或者这些元素有着共同的属性，比如lang。应该在没有其他合适的语义元素时才使用它。<span> 与 div 元素很相似，但 div 是一个 块元素 而 <span> 则是 行内元素 .
<strong>	Strong 元素 (<strong>)表示文本十分重要，一般用粗体显示。
图片和多媒体
<img>	HTML <img> 元素将一份图像嵌入文档
<video>	HTML <video> 元素 用于在HTML或者XHTML文档中嵌入媒体播放器，用于支持文档内的视频播放。
<audio>	HTML <audio> 元素用于在文档中嵌入音频内容。 <audio> 元素可以包含一个或多个音频资源， 这些音频资源可以使用 src 属性或者source 元素来进行描述：浏览器将会选择最合适的一个来使用。也可以使用 MediaStream 将这个元素用于流式媒体。
内嵌内容
frame框架
iframe框架
表格内容
表单

<button>	HTML <button> 元素表示一个可点击的按钮，可以用在表单或文档其它需要使用简单标准按钮的地方。
<form>	HTML <form> 元素表示文档中的一个区域，此区域包含交互控件，用于向 Web 服务器提交信息。
<input>	HTML <input> 元素用于为基于Web的表单创建交互式控件，以便接受来自用户的数据; 可以使用各种类型的输入数据和控件小部件，具体取决于设备和user agent。
<label>	HTML <label> 元素（标签）表示用户界面中某个元素的说明。
<output>	HTML <output> 标签表示计算或用户操作的结果。

HTML 提示：使用小写标签
HTML 标签对大小写不敏感：<P> 等同于 <p>。许多网站都使用大写的 HTML 标签。



旧约
属性用来修饰标签的，比如要设置一个标题居中
<h1 align="center">居中标题</h1>
写在开始标签里的 align="center" 就叫属性，align 是属性名，center 是属性值
属性值应该使用双引号括起来

html使用<!--输入内容 --> 进行注释

标题会自动粗体，大写其中的内容，并且带有换行效果
一般会使用<h1> 到 <h6> 分别表示不同大小的标题
<h1>标题1</h1>
<h2>标题2</h2>
<h3>标题3</h3>
<h4>标题4</h4>
<h5>标题5</h5>
<h6>标题5</h6>

<p>标签即表示段落是paragraph的缩写，自带换行效果.。在p标签中的文本会自动换行，不在p标签中的，不会自动换行

<b><strong>都可以用来实现粗体的效果
区别：
b是bold的缩写，仅仅表示该文本是粗体的，并不暗示这段文字的重要性
strong虽然也是粗体，但是更多的是强调语义上的加重，提醒用户该文本的重要性。 在SEO（搜索引擎优化）的时候，也更加容易帮助用户找到重点的内容
推荐使用strong

特殊元素：
<br/>表示换行
<hr/>表示一行水平线

<i>和<em>都可以表示斜体效果
区别：
i是italic的缩写，仅仅表示该文本是斜体的，并不暗示这段文字的重要性
em 是 Emphasized的缩写，虽然也是斜体，但是更多的是强调语义上的加重，提醒用户该文本的重要性。 常常用于引入新的术语的时候使用。

通过嵌套实现多种效果
嵌套即标签中有标签
<strong><i>同时有粗体和斜体</i></strong>

有时候，需要在网页上显示代码，比如java代码就需要用到pre

<del>即删除标签delete的缩写
注：<s>也有删除效果，但很多浏览器不支持。

<ins>即下划线标签

图像引用
若是同一目录下图片<img src="example.gif"/>
若是上上一级目录下图片<img src="../../example.gif"/>
若使用绝对路径在前面加上file://<img src="file://c:/example.gif"/>

图像大小
如果设置的大小比原图片大，则会产生失真效果
<img width="200" height="200" src="https://how2j.cn/example.gif"/>

图像居中
img不能够自己居中，需要放在其他能够居中的标签中实现这个效果，比如h1标签,p标签.
经常采用的手段是放在div中居中
<div align="center">
 <img src="example.gif"/>

如果图片不存在，默认会显示一个缺失图片，这是不友好的。所以可以加上alt属性。
当图片存在的时候，alt是不会显示的，当图片不存在的时候，alt就会出现
<img src="example_not_exist.gif" alt="这个是一个图片" />

超链
<a>标签即用来显示超链
完整元素是<a href="跳转到的页面地址">超链显示文本</a>

在新的页面打开超链
新增属性target
<a href="http://www.12306.cn" target="_blank">http://www.12306.cn</a>

超链上的提示文字
当鼠标放在超链上的时候，就会弹出提示文字
<a href="http://www.12306.com"
 title="跳转到http://www.12306.com">www.12306.com</a>

使用图片作为超链
<a href="http://www.12306.com">
<img src="https://how2j.cn/example.gif"/>
</a>

表格
<table>标签用于显示一个表格
<tr> 表示行
<td> 表示列又叫单元格
例：两行两列
<table>
  <tr>
      <td>1</td>
      <td>2</td>
  </tr>
  <tr>
      <td>3</td>
      <td>4</td>
  </tr>
 </table>
带边框的表格，设置table的属性border
<table border="1">
设置table宽度通过设置table的属性 width，px即像素的意思。
<table border="1" width="200px">
单元格宽度绝对值通过设置td的属性width，同一列自动继承该属性，另一列由table宽度和1单元格的宽度之差的平均值决定
 <td width="50px">1</td>
单元格宽度相对值通过设置td的属性width为百分数，该百分数为td占table的百分数
 <td width="80%">1</td>
单元格水平对齐用设置td的属性align
<td width="50%" align="lenter/right">1</td>
单元格垂直对齐用设置td的属性valign
<td width="50%" valign="top/middle/bottom" >1</td>
水平合并用设置td的属性colspan
横跨两行, 垂直合并用设置td的属性rowspan
<td rowspan="2">1,3</td>
背景色用设置tr或者td的属性bgcolor，以td属性决定最后效果
<tr bgcolor="gray">
<td  bgcolor="pink">b</td>
列表
列表分无序列表和有序列表
分别用<ul>标签和<ol>标签表示，有序列表自带顺序编号
<ul>
<li>DOTA</li>
<li>LOL</li>
</ul>
<div>，<span>这两种标签都是布局用的，这种标签本身没有任何显示效果，通常是用来结合css进行页面布局
div和span的区别
div是块元素，即自动换行。常见的块元素还有h1,table,p
span是内联元素，即不会换行。常见的内联元素还有img,a,b,strong
使用<font>标签表示字体
font常用的属性有 color和size, 分别表示颜色和大小
<font color="green">绿色默认大小字体</font>
<br>
<font color="blue" size="+2">蓝色大2号字体</font>
<br>
<font color="red" size="-2">红色小2号字体</font>
在html中，颜色通常使用两种方式来表示：
1. 颜色名，比如red, blue
2. 颜色对应的16进制，比如#ff0000 就表示红色

<iframe> 即内联框架，通过内联框架 可以实现在网页中“插入”网页
相当于浏览器里面有个小浏览器，在这个小浏览器中，打开另一个网页

<input type="text"> 即表示文本框
并且只能够输入一行
如果要输入多行
使用文本域<textarea>
用size属性设置文本框长度
用属性value设置文本框初始文字
用属性placeholder设置文本框背景文字
<input type="password"> 即表示密码框
输入的数据会自动显示为星号

表单form
action="/study/login.jsp" 表示把账号和密码提交到login.jsp这个页面去
例：
<form action="https://how2j.cn/study/login.jsp">
账号：<input type="text" name="name"> <br/>
密码：<input type="password" name="password" > <br/>
<input type="submit" value="登陆">
</form>

使用method="get" 提交数据 是常用的提交数据的方式
如果form元素没有提供method属性，默认就是get方式提交数据
get方式的一个特点就是，可以在浏览器的地址栏看到提交的参数，即便是密码也看得到
<form method="get" action="https://how2j.cn/study/login.jsp">
使用method="post" 也可以提交数据
post不会在地址栏显示提交的参数
如果要提交二进制数据，比如上传文件，必须采用post方式
get和post的区别
get是form默认的提交方式
如果通过一个超链访问某个地址，是get方式；如果在地址栏直接输入某个地址，是get方式。提交数据会在浏览器显示出来，不可以用于提交二进制数据，比如上传文件
post必须在form上通过 method="post" 显示指定
提交数据不会在浏览器显示出来，可以用于提交二进制数据，比如上传文件

<input type="radio" > 表示单选框
//此时两选项可以同时选，但选上还需设置可取消
单选1 <input type="radio" >
单选2 <input type="radio" >
设置默认选中<input type="radio" checked="checked" >
分组即，多个单选框，都在一个分组里，同一时间，只能选中一个单选框
将多个单选框的name属性设置相同即可
<input type="radio" name="sth" checked="checked" >

<input type="checkbox"> 即表示复选框
//即使name属性相同也不影响多选，可直接取消

下拉列表
<select> 即下拉列表，需要配合<option>使用
<select >
 <option >苍老师</option>
 <option >高树玛利亚</option>
 <option >遥美</option>
</select>
属性size设置下拉列表高度
<select size="3" multiple="multiple">
使用多选，用ctrl或者shift进行多选
对option元素设置selected="selected" 属性，默认选中该option
用style属性设置选项宽度style="width: 60px;"

<textarea> 即文本域
与文本框不同的是，文本域可以有多行，并且可以有滚动条
<textarea cols="30" rows="8">
使用属性cols(每行可容纳的字符)和rows设置宽度和行数

按钮
<input type="button"> 即普通按钮，普通按钮不具备提交form的效果  
<input type="submit"> 即为提交按钮，用于提交form，把数据提交到服务端 
<input type="reset"> 重置按钮 可以把输入框的改动复原
<input type="image" > 即使用图像作为按钮进行form的提交
<button></button>即按钮标签
与<input type="button">不同的是，<button>标签功能更为丰富；按钮标签里的内容可以是文字也可以是图像；如果button的type=“submit” ，那么它就具备提交form的功能。此时用图片提交则内容为图片，type为submit。
IE下button的type的默认值为button不具备提交功能，其他浏览器type的默认值是submit

新约
data属性
data-* 属性用于存储页面或应用程序的私有自定义数据。
data-* 属性赋予我们在所有 HTML 元素上嵌入自定义 data 属性的能力。
存储的（自定义）数据能够被页面的 JavaScript 中利用，以创建更好的用户体验（不进行 Ajax 调用或服务器端数据库查询）。
data-* 属性包括两部分：
属性名不应该包含任何大写字母，并且在前缀 "data-" 之后必须有至少一个字符
属性值可以是任意字符串
<element data-*="somevalue">

HTML
<!DOCTYPE>
用来声明html版本
html5：<!DOCTYPE html>
HTML4 三种文档类型：Strict、Transitional 以及 Frameset。
HTML5标准提供了哪些新的api
1.HTML5的新特性：
新的内容标签：header nav content footer article aside
更好的单元格体系:
音频、视频API:video audio
画布(Canvas) API//基于JavaScript
内联SVG//可伸缩矢量图形 (Scalable Vector Graphics)，基于xml
地理(Geolocation) API
网页存储(Web storage) API:localStorage,sessionStorage
拖拽释放(Drag and drop) API
新的表单控件calander date time email url search
新的input类型 color date datetime datetime-local email

html5有哪些新特性，如何处理html5新标签的浏览器兼容问题，如何区分html和html5？
1.h5不基于SGML，主要是关于图像、位置、存储、多任务等功能的增加；canvas、video、audio、本地离线存储：localStorage长期存储数据，浏览器关闭后数据不丢失；sessionStorage的数据在浏览器关闭后自动删除；语义化更好的内容元素：article/footer/header/nav/section;表单控件：calendar date、time、email、search；新的技术：webworker、websocket、geolocation
因此不需要对dtd进行引用，但是需要doctype来规范浏览器的行为，而html基于sgml，所以需要对dtd进行引用，才能告知浏览器文档使用的文档类型
2.ie8/7/6支持通过document.createElement方法产生的标签，可以利用这一特性让浏览器支持h5新标签，浏览器支持新标签后还需要添加标签默认的样式，当然也可以使用成熟的框架例
3.如何区分h5和html：doctype声明、新增的结构元素/功能元素
xhtml和html有什么区别
html是一种基本的web网页设计语言，xhtml是一个基于xml的置标语言；最主要的不同：xhtml元素必须被正确嵌套、必须关闭、标签必须小写、文档必须拥有根元素
简述一下src与href的区别
src用于替换当前元素；href用于在当前文档和引用资源之间确立联系。
src是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置，需要下载且下载时会暂停其他活动
href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，不会暂停其他活动
行内元素有哪些，块级元素有哪些？
行内元素：a b span img input select strong I em
块级元素：div ul li ol table p dl dt dd h1-h6 from
常见空元素：br hr img input link meta
常见的块级(block)元素和行内(inline)元素，以及它们有何不同？
行内：a,b,span,img,strong,i,input,br
块级：div,h1~h6,li,table,ol,ul,hr
不同：行内元素的默认宽度只与内容有关，块级元素默认宽度直接占满一行。
行内元素水平排列，块级元素垂直排列；块级元素可包含行内元素，反之不行。
请阐述table的缺点
a. 太深的嵌套，比如table>tr>td>h3，会导致搜索引擎读取困难，而且，最直接的损失就是大大增加了冗余代码量。
b. 灵活性差，比如要将tr设置border等属性，是不行的，得通过td
c. 代码臃肿，当在table中套用table的时候，阅读代码会显得异常混乱
d. 混乱的colspan与rowspan，用来布局时，频繁使用他们会造成整个文档顺序混乱。
e. table需要多次计算才能确定好其在渲染树中节点的属性 
f. 不够语义
对web标准以及w3c的理解和认识
标签闭合，标签小写，不乱嵌套，提高机器人搜索几率，使用外链css和js脚本，结构行为表现的分离，文件下载与页面速度更快，内容能被更多的用户访问，内容能被更广泛的设备所访问，更少的代码和组件，容易维护改版方便，不需要变动页面内容，提高网站易用性;语义化的html即直观的认识标签，对搜索引擎的抓取有好处
rem em	 rpx px fr vw vh ch
px像素，rpx微信独有，自适应屏幕，规定屏幕宽750rpx；em绑定当前字体大小；rem绑定html字体大小 fr 网格布局剩余宽度的分配	vw 自适应视口,1vw为视口宽度1%，vh代表视口高度1% 		ch 数字0的宽度

advanced HTML
1. 表单里第一个button的type默认为submit，可能误触发表单提交
2. select 和 option 的 value 必须是字符串，不能是数字，否则会报错,如果是对象，可以用 JSON.stringify 来转换成字符串
3. select标签 无法在js里打开droplist，必须在用户交互事件里打开
