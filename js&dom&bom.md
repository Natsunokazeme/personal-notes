这是一个 javascript 和 DOM 结合的一个简单例子

使用外部 js 文件
和 css 一样,当 javascript 代码特别多,并且都写在 html 里的时候,会显得比较繁杂,难以维护。
这个时候可以采用和 css 一样的手段,把 javascript 代码剥离出来,单独放在一个文件里,在 html 中引用该文件即可。

类型转换
伪对象
伪对象概念：javascript 是一门很有意思的语言,即便是基本类型,也是伪对象,所以他们都有属性和方法。

作用域：一个参数的作用域就在这个函数内部,超出函数就看不见该参数了
全局变量：定义在函数之外,即全局变量,所有函数都可以访问
事件：事件是 javascript 允许 html 与用户交互的行为。用户任何对网页的操作,都会产生一个事件。事件有很多种,比如鼠标移动,鼠标点击,键盘点击等等。

Javascript 对象
常见的对象有数字 Number,字符串 String,日期 Date,数组 Array 等。

在 js 的单线程中,调用一个函数会生成一帧,并把帧压入栈中,当函数执行完毕后,会把帧弹出栈,并销毁。

BOM
BOM 即 浏览器对象模型(Browser Object Model)
浏览器对象包括
Window(窗口)
Navigator(浏览器)
Screen (客户端屏幕)
History(访问历史)
Location(浏览器地址)

Window(窗口)

获取文档显示区域的高度和宽度.
一旦页面加载,就会自动创建 window 对象,所以无需手动创建 window 对象。
通过 window 对象的属性可以获取文档显示区域的高度和宽度.
window.innerWidth；window.innerHeight；

获取外部窗体的宽度和高度
所谓的外部窗体即浏览器
window.outerWidth；window.outerHeight；

打开一个新的窗口
通过 window 的 open 方法做到的
不建议使用,如果需要打开一个新的网站,应该通过超级链接等方式让用户主动打开,在没有告知用户的前提下就打开一个新的网站会影响用户的体验
window.open("/");//打开目前网站主页,即根目录

Navigator(浏览器)
Navigator 即浏览器对象,提供浏览器相关的信息
浏览器产品名称:navigator.appName
浏览器版本号：navigator.appVersion
浏览器内部代码：navigator.appCodeName
操作系统：navigator.platform
是否启用 Cookies：navigator.cookieEnabled
浏览器的用户代理报头：navigator.userAgent

Screen (客户端屏幕)
Screen 对象表示用户的屏幕相关信息
用户的屏幕分辨率:screen.width + "_" + screen.height
可用区域大小:screen.availWidth + "_" + screen.availHeight
//如果是在台式电脑上,通常看到的可用区域的高度会比屏幕高度小一点,因为有任务栏的存在。

History(访问历史)
History 用于记录访问历史
history.back();//返回上次访问
history.go(-2); //-1 表示上次,-2 表示上上次,以次类推

Location(浏览器地址)
Location 表示浏览器中的地址栏
location.reload();//刷新当前页面
跳转页面：方法 1：location="/";方法 2：location.assign("/");
Location 的其他属性
协议 location.protocol
主域名 location.hostname
端口号 (默认是 80,没有即表示 80 端口)location.port
主域名加端口号 location.host
访问的路径 location.pathname
锚点 location.hash
参数列表 location.search

弹出框
浏览器上常见的弹出框有
警告框,确认框,提示框 这些都是通过调用 window 的方法实现的。
比如警告框用的是 window.alert("警告内容"),因为很常用,所以就把 window 省略掉,直接使用 alert
Alert() 警告框 //警告框 alert,常用于消息提示,比如注册成功等等
Confirm() 确认框 //常用于危险性操作的确认提示。 比如删除一条记录的时候,弹出确认框
confirm 返回基本类型的 Boolean true 或者 false
prompt 输入框//输入框 prompt,用于弹出一个输入框,供用户输入相关信息。 因为弹出的界面并不好看,很有可能和网站的风格不一致,所以很少会在实际工作中用到。

计时器
setTimeout 只执行一次 setTimeout(函数名, 延迟毫秒数 ); 返回一个计时器 ID,正整数
setInterval 不停地重复执行 setInterval(函数名, 间隔毫秒数 ); 返回一个计时器 ID,正整数
clearInterval 终止重复执行
document.write() 不要在 setInterval 调用的函数中使用 document.write();
注意：在 HTML 文档完全加载后使用 document.write() 将删除所有已有的 HTML

JavaScript
javascript 放置位置
在 HTML 中,JavaScript 代码必须位于 <script> 与 </script> 标签之间。
head

body
把脚本置于 <body> 元素的底部,可改善显示速度,因为脚本编译会拖慢显示。

外置
外部 JavaScript 的优势
在外部文件中放置脚本有如下优势：
分离了 HTML 和代码
使 HTML 和 JavaScript 更易于阅读和维护
已缓存的 JavaScript 文件可加速页面加载

JavaScript 输出
使用 window.alert() 写入警告框
使用 document.write() 写入 HTML 输出
使用 innerHTML 写入 HTML 元素
使用 console.log() 写入浏览器控制台

JavaScript 赋值
用 var 再次声明时,若第二次未赋值,其值将仍为之前的值。因为 var
js 中**为幂运算,var x = x** 2; 令 x=x 平方。结果与 Math.pow(x,2)相同
运算符优先级

9 & 按位与 x & y
8 ^ 按位 XOR x ^ y
7 | 按位或 x | y
6 && 逻辑与 x && y
5 || 逻辑否 x || y
4 ? : 条件 ? "Yes" : "No"

JavaScript 数据类型
数字会省略可省略的小数,即 34.00 变成 34。
任何变量均可通过设置值为 undefined 进行清空。其类型也将是 undefined。
然后 js 的垃圾回收机制会标识出这个变量,并在下一次垃圾回收时将其回收。
person = undefined;
在 JavaScript 中,null 的数据类型是对象,可以通过设置值为 null 清空对象
Undefined 与 null 的值相等,但类型不相等
JavaScript object
以属性:值的方式来书写,JavaScript 对象是被命名值的容器。
例：var person = {firstName:"Bill", lastName:"Gates", age:62, eyeColor:"blue"};
对象也可以有方法,方法是在对象上执行的动作。方法以函数定义被存储在属性中
例：var person = {
firstName: "Bill",
lastName : "Gates",
id : 678,
fullName : function() {
return this.firstName + " " + this.lastName;
}
};

this 引用该函数的“拥有者”,此处为 fullname 的拥有者 person 对象

有两种访问属性的方式；objectName.propertyName 或者 objectName["propertyName"]
访问方法则用 objectName.methodName()

注：如果通过关键词 "new" 来声明 JavaScript 变量,则该变量会被创建为对象

JavaScript 数组
使用[]创建数组或 new Array();的方式创建数组。
数组类型是 array,属于引用类型。
数组元素可以是对象,函数,甚至数组。

向数组添加新元素的最佳方法是使用 push() 方法。
也可以直接 arr[index],但在 0 到 index 之间未被定义的区域为 undefined。

数组和对象的区别
在 JavaScript 中,数组使用数字索引。
在 JavaScript 中,对象使用命名索引。
数组是特殊类型的对象,具有数字索引。

JavaScript 数组方法
数组转字符串
方法 toString() 把数组转换为数组值（逗号分隔）的字符串。
join() 方法也可将所有数组元素结合为一个字符串并且还可以规定分隔符。
例：var fruits = ["Banana", "Orange","Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" _");
//Banana_ Orange _Apple_ Mango

添加和删除数组元素
pop():删除末尾并返回最后一个元素
push()：添加到末尾并返回该数组的长度。
shift():删除开头并返回第一个元素
unshift():添加到开头并返回该数组长度
delete,将元素修改为 undefined
例：delete fruits[0]; // 把 fruits 中的首个元素改为 undefined

拼接数组
splice() 方法返回一个包含已删除项的数组。
splice(fromindex,deletenum,newelement,..).
例：fruits.splice(2, 0, "Lemon", "Kiwi");
从 fruits 的第三个元素开始拼接,删除之后的 0 个元素,接上“Lemon”,“Kiwi”新元素。
可通过设置不加入新元素达到删除原有元素的效果。

合并（连接）数组
concat() 方法通过合并（连接）现有数组来创建一个新数组。
concat() 方法不会更改现有数组。它总是返回一个新数组。
concat() 方法可以使用任意数量的数组参数。
var myChildren = arr1.concat(arr2, arr3); // 将 arr1、arr2 与 arr3 连接在一起
也可以直接带入数组值为参数。[]

裁剪数组
slice() 方法用数组的某个片段切出新数组。
slice() 可接受两个参数,比如 (1, 3)。
该方法会从开始参数选取元素,直到结束参数（不包括）为止。

如果需要原始值,则 JavaScript 会自动把数组转换为字符串。
JavaScript 数组排序

sort() 方法照字符串顺序对值进行排序,因此 25>100。只适用于字符串排序。
可通过定义比值函数进行排序,如 function(a, b){return a-b}。返回负,0,正值。
当 sort() 函数比较两个值时,会将值发送到比较函数,并根据所返回的值（负、零或正值）对这些值进行排序。
例：points.sort(function(a, b){return a - b});

reverse()方法反转数组中的元素,也是按照字符串顺序对值排序,但不能通过定义比值函数排序。
还可以随机排序
例：points.sort(function(a, b){return 0.5 - Math.random()});

Javascript for-each 循环
for-in
使用 for-in 可以遍历数组,但是会存在以下问题：
1.index 索引为字符串型数字（注意,非数字）,不能直接进行几何运算。 2.遍历顺序有可能不是按照实际数组的内部顺序（可能按照随机顺序）。 3.使用 for-in 会遍历数组所有的可枚举属性,包括原型。
所以 for-in 更适合遍历对象,通常是建议不要使用 for-in 遍历数组。
for-of
for-of 可以简单、正确地遍历数组（不遍历原型 method 和 name）。 1.这是最简洁、最直接的遍历数组元素的语法。 2.这个方法避开了 for-in 循环的所有缺陷。 3.与 forEach()不同的是,它可以正确响应 break、continue 和 return 语句。
for-in 是 ES5 标准,遍历的是 key（可遍历对象、数组或字符串的 key）；for-of 是 ES6 标准,遍历的是 value（可遍历对象、数组或字符串的 value）。
因此建议是使用 for-of 遍历数组,因为 for-of 遍历的只是数组内的元素,而不包括数组的原型属性 method 和索引 name。
…
JavaScript 正则表达式
正则表达式是构成搜索模式（search pattern）的字符序列。正则表达式可用于执行所有类型的文本搜索和文本替换操作。
语法/pattern/modifiers;//pattern 是搜索内容,modifiers 是修饰符

在 JavaScript 中,正则表达式常用于两个字符串方法：search() 和 replace()。
search() 方法使用表达式来搜索匹配,然后返回匹配的位置。
var str = "Visit W3School!";
var n = str.search(/W3School/i);//返回 n=6,即在 str 中出现的位置。
replace() 方法返回模式被替换处修改后的字符串。
var res = str.replace("Microsoft", "W3School");//将 Microsoft 替换为 W3School

修饰符
i 执行对大小写不敏感的匹配。
g 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
m 执行多行匹配。
JavaScript 作用域
JavaScript 拥有函数作用域：每个函数创建一个新的作用域。
作用域决定了这些变量的可访问性（可见性）。
函数内部定义的变量从函数外部是不可访问的（不可见的）。
在函数开始时会创建局部变量,在函数完成时会删除它们。
自动全局
如果您为尚未声明的变量赋值,此变量会自动成为全局变量。
比如在函数内部直接给 carname 赋值,会默认为 carname 在外部定义为全局变量。
function myFunction() {
carName = "porsche";
}

在 HTML 中,全局作用域是 window。所有全局变量均属于 window 对象。
JavaScript 提升（Hoisting）
提升（Hoisting）是 JavaScript 将声明移至顶部的默认行为。
即可以先使用再声明（先上车后买票？）
为了避免 bug,请始终在每个作用域的开头声明所有变量。

JavaScript 严格模式
通过在脚本或函数的开头添加 "use strict"; 来声明严格模式。
"use strict"; 的作用是指示 JavaScript 代码应该以“严格模式”执行。
在严格模式中,您无法,例如,使用未声明的变量。
严格模式中不允许的事项
在不声明变量的情况下使用变量,是不允许的
对象也是变量,在不声明对象的情况下使用对象也是不允许的
删除变量（或对象）是不允许的：
删除函数是不允许的：
重复参数名是不允许的
八进制数值文本是不允许的：
转义字符是不允许的：
写入只读属性是不允许的：
写入只能获取的属性是不允许的：
删除不可删除的属性是不允许的：
字符串 "eval" 不可用作变量
字符串 "arguments" 不可用作变量：
with 语句是不允许的：
处于安全考虑,不允许 eval() 在其被调用的作用域中创建变量：
在类似 f() 的函数调用中,this 的值是全局对象。在严格模式中,现在它成为了 undefined。

JavaScript this
JavaScript this 关键词指的是它所属的对象。
它拥有不同的值,具体取决于它的使用位置：
在方法中,this 指的是所有者对象。
单独的情况下,this 指的是全局对象。
在函数中,this 指的是全局对象。
在函数中,严格模式下,this 是 undefined。
在事件中,this 指的是接收事件的元素。

javascript 版本
版本 官方名称 描述
1 ECMAScript 1 (1997) 第一版。
2 ECMAScript 2 (1998) 只改变编辑方式。
3 ECMAScript 3 (1999) • 添加了正则表达式。
• 添加了 try/catch。
4 ECMAScript 4 从未发布过。
5 ECMAScript 5 (2009)
阅读更多：JS ES5
• 添加了“严格模式”。
• 添加了 JSON 支持。
• 添加了 String.trim()。
• 添加了 Array.isArray()。
• 添加了数组迭代方法。
5.1 ECMAScript 5.1 (2011) 编辑改变。
6 ECMAScript 2015
阅读更多：JS ES6
• 添加了 let 和 const
• 添加了默认参数值
• 添加了 Array.find()
• 添加了 Array.findIndex()
7 ECMAScript 2016 • 添加了指数运算符（\*\*）。
• 添加了 Array.prototype.includes。
8 ECMAScript 2017 • 添加了字符串填充。
• 添加了新的 Object 属性。
• 添加了异步功能。
• 添加了共享内存。
9 ECMAScript 2018 • 添加了 rest / spread 属性。
• 添加了异步迭代。
• 添加了 Promise.finally()。
• 增加 RegExp。

ECMAScript 通常缩写为 ES。
所有浏览器都完全支持 ECMAScript 3。
所有现代浏览器都完全支持 ECMAScript 5。

**JavaScript 版本 ES5 新特性**
• "use strict" 指令
• String.trim()
• Array.isArray()
• Array.forEach()
• Array.map()
• Array.filter()
• Array.reduce()
• Array.reduceRight()
• Array.every()
• Array.some()
• Array.indexOf()
• Array.lastIndexOf()
• JSON.parse()
• JSON.stringify()
• Date.now()
• 属性 Getter 和 Setter
• 新的对象属性和方法

**ES6 新特性**
• let
• const
• 幂 (\*\*)
• 默认参数值
• Array.find()
• Array.findIndex()
• set 和 map 数据结构
• _promise 对象_
• Generator 函数
• symbol
• _箭头函数_
• Class（类）
• module（模块）

箭头函数
箭头函数表达式的语法比函数表达式更简洁,并且没有自己的 this,arguments,super 或 new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方,并且它不能用作构造函数。
基础语法：(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
//相当于：(param1, param2, …, paramN) =>{ return expression; }
当只有一个参数时（）可省略。
高级语法：//加括号的函数体返回对象字面量表达式：params => ({foo: bar})
this：箭头函数不会创建自己的 this,它只会从自己的作用域链的上一层继承 this。

# promise

Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。
本质上 Promise 是一个函数返回的对象,我们可以在它上面绑定回调函数,这样我们就不需要在一开始把回调函数作为参数传入这个函数了。
var promise = new Promise(function(resolve, reject) {
// 同步处理
// 处理结束后、调用 resolve 或 reject
});
promise.then()
即使异步操作已经完成（成功或失败）,在这之后通过 then() 添加的回调函数也会被调用。
如果之前的 promise 返回的结果是一个新的 promise,会等到新的 promise 结束后才开始调用 then 内的函数。//传递到 then() 中的函数被置入到一个微任务队列中,而不是立即执行,这意味着它是在 JavaScript 事件队列的所有运行时结束了,且事件队列被清空之后,才开始执行。
并且可通过后接 then 形成链式调用
Promise.catch 方法：捕捉错误
Promise.prototype.catch 方法是 Promise.prototype.then(null, rejection) 的别名,用于指定发生错误时的回调函数。
Promise.all 方法
var p = Promise.all([p1,p2,p3]);
Promise.all 方法用于接收多个 promise 的 iterable 类型,包装成一个新的 Promise 实例。这样可以进行多个异步操作,
只要 p1、p2、p3 之中有一个被 rejected,p 的状态就变成 rejected,此时第一个被 reject 的实例的返回值,会传递给 p 的回调函数。
Promise.race 方法同样是将多个 Promise 实例,包装成一个新的 Promise 实例。
promise.finally()
无论如何最终都会执行的语句,类似 Java 多线程
promise.allSettled() 方法返回一个在所有给定的 promise 已被决议或被拒绝后决议的 promise,并带有一个对象数组,每个对象表示对应的 promise 结果。

# JavaScript 函数

匿名函数（没有名称的函数）
存放在变量中的函数不需要函数名。他们总是使用变量名调用。
使用表达式定义的函数不会被提升。即 var x = function(){};用等号定义的函数。

自调用函数
函数表达式会自动执行,假如表达式后面跟着 ()。
(function () {
var x = "Hello!!"; //我会调用我自己
})();

函数参数
JavaScript 函数不会对参数值进行任何检查。
当参数不足时默认传递的 undefined
当参数过多时可使用 arguments 对象
JavaScript 函数有一个名为 arguments 对象的内置对象。
arguments 对象将传入的参数视为一个数组。
参数的改变在函数之外是不可见的。
对象属性的改变在函数之外是可见的。

函数 call
call()函数能够调用另一个函数的方法,并应用到作为参数传入的对象上。
object1.fuctionName.call(object2);//将 object1 中的函数调用到 object2 上。
例：var person = {
fullName: function() {
return this.firstName + " " + this.lastName;
}
}
var person1 = {
firstName:"Bill",
lastName: "Gates",
}
person.fullName.call(person1);
call 的参数还需要根据调用的函数所需参数决定。

函数 apply
类似 call, 用于不同对象的方法调用,但 call() 方法分别接受参数。apply() 方法接受数组形式的参数。如果要使用数组而不是参数列表,则 apply() 方法非常方便。
func.call(this, "eat", "bananas") == func.apply(this, ["eat", "bananas"])。
注：call 和 apply 存在于每一个方法中。

function.prototype.bind
类似 call，但返回的是改变 this 之后的函数，需要调用函数才执行

# DOM

DOM 是 Document Object Model( 文档对象模型 )的缩写。
DOM 是把 html 里面的各种数据当作对象进行操作的一种思路。
比如一个超链,作为一个 DOM 对象,就可以使其隐藏,修改其 href 指向的地址。

获取节点
document.getElementById 通过 id 获取元素节点
document.getElementsByTagName 通过标签名称获取元素节点
document.getElementsByClassName 通过类名获取元素节点
document.getElementsByName 通过表单元素的 name 获取元素节点
document.querySelector 通过 css 选择器获取第一个匹配的元素节点
_document.querySelectorAll 通过 css 选择器获取所有匹配的元素节点_
返回类型则是 HTMLCollection，后者是 NodeList

表单元素都有 name 属性,通过 getElementsByName 可以根据 name 属性的值,获取元素节点。
获取属性节点
获取元素节点,然后通过元素节点的 attributes 获取其下所有的属性节点。
因为属性节点是多个,所以是以数组的形式返回出来的,接着通过 for 循环遍历,查看每个节点的 nodeName 和 nodeValue
如果要获取一个指定属性的值,可以采用如下风格,as 表示所有的属性,as["id"]取出名称是 id 的属性
as["id"].nodeValue

获取内容节点
获取元素节点,然后通过 childNodes 获取其所有的子节点。 其中第一个子节点,就是其内容节点。然后借助 nodeName 和 nodeValue 把内容节点的名称和值打印出来。

节点属性
nodeName 节点名称
nodeValue 节点值
nodeType 节点类型
innerHTML 元素的文本内容
id
value
className 元素上的属性

节点类型
nodeType 表示一个节点的类型
不同的节点类型,对应的节点类型值是不一样的

元素文本内容
修改与获取内容的值可以通过 childNodes[0].nodeValue 进行；还有个简便办法就是通过 innerHTML 进行。 效果是一样的。

元素属性
元素上的属性,比如 id,value 可以通过 . 直接访问
如果是自定义属性,那么可以通过如下两种方式来获取
getAttribute("test")
attributes["test"].nodeValue
注: class 需要通过 className 获取
DOM 元素样式 1.一个元素节点的 style 属性即对应的 css,通过获得一个 DOM,并用 DOM.style.~的格式修改对应 CSS 属性
例：d.style.display="none";//隐藏代号为 d 的 DOM 2.或者直接修改 DOM 的 CSS,
例：d1.css("background-color","green");//修改代号为 d1 的 DOM 的背景颜色
注：Javascript 并不提供这样的解决方案,但是到了 JQuery 就提供了这样的解决方案

# DOM 事件

onfocus 获取焦点事件
onblur 失去焦点事件
onmousedown 鼠标按下事件
onmouseup 鼠标弹起事件
onmousemove 鼠标经过事件 注：每次移动都会触发
onmouseover 鼠标进入事件
onmouseout 鼠标离开事件
onkeydown 键盘按下事件
onkeypress 键盘按下事件
onkeyup 键盘弹起事件
onclick 单击事件 注 1：在组件上,按下空格或则回车键也可以造成单击的效果,但是却不能造成双击的效果
ondblclick 双击事件
onchange 变化事件 注：对于输入框而言,只有在失去焦点的时候,才会触发
onsubmit 提交事件
onload 加载事件
this 当前组件 this 表示触发事件的组件,可以在调用函数的时候,作为参数传进去
return false 阻止事件的发生

# DOM 节点关系

<div id="parentDiv">
 <div id="d1">第一个div</div>
 <div id="d2">第二个div</div>
 <div id="d3">第三个div</div>
</div>
假设html代码如实例中,那么各个元素节点的关系如下:
d1 d2 d3 的parentNode是parentDiv,再往上是body,再往上是html,再往上是document
parentDiv的firstNode是 d1
parentDiv的lastNode是d3
d2的previousSibling是d1
d2的nextSibling是d3
parentDiv的children是 d1 d2 d3
元素节点的属性：parentNode父节点、previousSibling,nextSibling同胞节点、childNodes子节点
注意不是紧挨着的标签之间有任何字符、空白、换行都会产生文本元素。 所以获取到的节点名称是#text.

childNodes 和 children 的区别
childNodes 和 children 都可以获取一个元素节点的子节点。
childNodes 会包含文本节点；children 会排除文本节点
创建节点
createElement 创建元素节点 例：var hr=document.createElement("hr");注：标签类型用双引号
appendChild 添加子节点 div1.appendChild(hr);
createTextNode 创建文本节点 可加入到文本型节点如<p>里作为值
createAttribute 创建属性节点 然后用 setAttributeNode 把该属性设置到元素节点 a 上
var href = document.createAttribute("href");
href.nodeValue="<http://12306.com>";
a.setAttributeNode(href);

删除节点
removeChild 删除 子节点
removeAttribute 删除属性节点
要删除某个元素节点有两步
第一：先获取该元素的父节点
第二：通过父节点,调用 removeChild 删除该节点
要删除某个属性节点有两步
第一：先获取该元素节点
第二：元素节点,调用 removeAttribute 删除指定属性节点
删除文本节点

1. 通过 childNodes[0] 获取文本节点
   注:children[0] 只能获取第一个子元素节点,不能获取文本节点
2. 通过 removeChild 删除该文本节点
   但是这种方式比较麻烦,一般都是直接通过 innerHTML 设置为空即可。
   注: 通过 innerHTML=""的方式,同样会导致文本子节点被删除。
   parentDiv.innerHTML="";

替换节点
替换节点也需要先获取父节点,然后通过父节点替换子节点。

1. 获取父节点
2. 创建子节点
3. 获取被替换子节点
4. 通过 replaceChild 进行替换
   注: replaceChild 第一个参数是保留的节点,第二个参数是被替换的节点
   parentNode.replaceChild(kept,replaced);

_插入节点_
_appendChild 追加节点 只能加在最后面_

_insertBefore 在前方插入节点 在指定位置插入节点_

parentNode.insertBefore(d25,d3); //将 d25 节点插入到 d3 节点前

# JSON

JSON JavaScript 对象表示法（JavaScript Object Notation） 是一种存储数据的方式。JSON 格式是纯文本
var gareen = {"name":"盖伦","hp":616};
这样就创建了一个 JSON 对象
JSON 对象由 名称/值对组成 名称和值之间用冒号:隔开
名称必须用双引号" 包含起来
值可以是任意 javascript 数据类型,字符串,布尔,数字 ,数组甚至是对象
不同的名称/值对之间用 逗号 , 隔开
JSON 数组
JSON 数组在方括号中书写。
var array = ‘{“arrayname”:[‘+'{"firstName":"Bill","lastName":"Gates" },' +
'{"firstName":"Steve","lastName":"Jobs" },' +
'{"firstName":"Elon","lastName":"Musk" }]}';

# _cookie 和 session 的区别和用法_

存储位置：cookie 数据存放在客户的浏览器上,session 数据放在服务器上。
安全性：cookie 不是很安全,是明文,别人可以分析存放在本地的 COOKIE 并进行 COOKIE 欺骗。考虑到安全应当使用 session
限制：单个 cookie 保存的数据不能超过 4K,很多浏览器都限制一个站点最多保存 20 个 cookie。session 会在一定时间内保存在服务器上。当访问增多,会比较占用你服务器的性能考虑到减轻服务器性能方面,应当使用 COOKIE。

# cookie,localstorage 和 sessionstorage 的区别

单个 cookie 保存的数据不能超过 4K ,webstorage 包含了 localstorage 和 sessionstorage,大小无限制,随浏览器而变,大多数最大储存 5m 信息,保存在本地。
localstorage 生命周期无限,除非清除缓存。
sessionstorage 当关闭当前页面时被清除,不同页面之间不能共用，从当前页面打开新页面时，新页面会深拷贝一份 sessionstorage
cookie 能设置生命周期,生命周期一到则无效,默认关闭页面时清除。

# token

Token,其实就是服务端生成的一串加密字符串,储存在本地用于认证客户端身份,_由服务端设定失效时间_。
优势：无状态、防 csrf(跨域请求攻击)、多站点使用,支持移动平台、性能快

# _浏览器渲染过程_

浏览器渲染的过程主要包括以下五步：

1. 浏览器将获取的 HTML 文档解析成 DOM 树。
2. 处理 CSS 标记,构成层叠样式表模型 CSSOM(CSS Object Model)。
3. 将 DOM 和 CSSOM 合并为渲染树(rendering tree),代表一系列将被渲染的对象。
   渲染树的每个 renderer 包含一个 dom 对象和计算过的样式规则,它被称之为布局 layout。具体显示的时候，每一个 renderer 都相当于一个矩形区域，即 css 盒子模型的概念
4. 布局阶段 浏览器使用一种流式处理的方法,只需要一次绘制操作就可以布局所有的元素，此阶段所有相对值都会转化为屏幕上的绝对值。
5. 绘制 将渲染树的各个节点绘制到屏幕上,这一步被称为绘制 painting。

# 重排与重绘

重绘（repaint 或 redraw）：当盒子的位置、大小以及其他属性,例如颜色、字体大小等都确定下来之后,浏览器便把这些原色都按照各自的特性绘制一遍,将内容呈现在页面上。重绘是指一个元素外观的改变所触发的浏览器行为,浏览器会根据元素的新属性重新绘制,使元素呈现新的外观。
触发重绘的条件： 1.改变字体 2.增加或者移除部分样式表如颜色 3.内容变化（input 框输入文字） 4.激活部分 css 伪类（例如 :hover） 5.计算 offsetWidth、offsetHeigth 属性（浏览器的可见高度）6. opacity 改变
注意：table 及其内部元素可能需要多次计算才能确定好其在渲染树中节点的属性值,比同等元素要多花两倍时间,这就是我们尽量避免使用 table 布局页面的原因之一。
重排（重构/回流/reflow）：当渲染树中的一部分(或全部)因为元素的规模尺寸,布局,隐藏等改变而需要重新构建, 这就称为回流(reflow)。每个页面至少需要一次回流,就是在页面第一次加载的时候。
重绘和重排的关系：在回流的时候,浏览器会使渲染树中受到影响的部分失效,并重新构造这部分渲染树,完成回流后,浏览器会重新绘制受影响的部分到屏幕中,该过程称为重绘。所以,重排必定会引发重绘,但重绘不一定会引发重排。

# 减少重绘重排的方法

不在布局信息改变时做 DOM 查询,
使用 csstext,className 一次性改变属性
const stylesheet = document.styleSheets[0];//CSSOM
stylesheet.cssRules[0].style.backgroundColor = "aqua";
使用 fragment
少用 table 布局

# _强缓存和协商缓存_

HTTP Cache 是我们开发中接触最多的缓存,它分为强缓存和协商缓存。
强缓存：直接从本地副本比对读取,不去请求服务器,返回的状态码是 200。
协商缓存：会去服务器比对,若没改变才直接读取本地缓存,返回的状态码是 304。
强缓存：expires,cache-control(未设置 no-cache 和 no-store),
协商缓存：pragma(只有 no-cache),cache-control(设置 no-cache),last-modified,etag。
no-store：不缓存,直接请求最新资源。
优先级：pragma>cache-control>expires>last-modified&&etag
expires：是一个缓存字段,以格林尼治时间表示过期时间点,与客户端时间相比是否过期,受客户端时间影响。
cache-control：HTTP1.1 新增,值有 max-age,s-maxage（是一个时间长度字段,表示还有多少秒过期,且 s-maxage 的优先级高于 max-age）；还有 public 和 private（前者表示客户端和服务器端都能缓存,后者只能客户端缓存,默认值是 private,当设置了 s-maxage 的时候表示允许代理服务器缓存,相当于 public）；no-cache 和 no-store,no-cache 表示向服务器验证当前资源是否更新,no-store 则直接请求服务器的当前资源,不询问是否更新。
last-modified: ,以格林尼治时间记录资源最后修改的时间,启用后会在请求头中返回 if-modified-since 字段（记录上一次修改的时间）,若两者不一致则更新 last-modified 并返回修改后的资源。
etag: 是基于资源的内容编码生成的一串唯一的标识字符串,启用后请求头会带有 if-none-match 字段,对比两者即可。
浏览器刷新：F5 刷新,刷新按钮,网页右键刷新；CTRL+F5 刷新（硬性重新加载）,清空其他缓存并强行设置 no-cache,直接重新请求资源

# 跨域

源：如果两个页面（接口）的协议,端口或者域名都相同,那么两个页面就有相同的源。
浏览器为了安全会限制跨域 http 请求
解决方案
1、 CORS
（Cross-Origin Resource Sharing）,跨域资源共享
当使用 XMLHttpRequest 发送请求时,如果浏览器发现请求违反了同源策略就会自动加上一个额外的 http 请求头 origin；后端在接受到请求后确定响应后会在 Response Headers 中加入一个属性 Access-Control-Allow-Origin；浏览器判断响应中的 Access-Control-Allow-Origin 值是否和当前的地址相同,匹配成功后才继续响应处理,否则报错
缺点：忽略 cookie,浏览器版本有一定要求
2、 代理
服务端请求不会跨域的特性；
前端向服务器发送请求,经过代理,请求需要的服务器资源,让接口和当前站点同域。
缺点：需要额外的代理服务器
3、 JSONP 等
标签能跨域加载资源的特性,但是 js 读不到其中的内容。<script src="..."></script>,<img>,<link>,<iframe>等。代表为 JSONP：通过动态创建<script src=”anotherOrigin”>,再请求一个带参网址实现跨域通信。缺点：易受 xss 攻击,只能用 get 请求
例：<script>
var script = document.createElement('script');
script.type = 'text/javascript';
// 传参并指定回调执行函数为 onBack
script.src = 'http://www.domain2.com:8080/
login?user=admin&callback=onBack';
document.head.appendChild(script);
// 回调执行函数
function onBack(res) {
alert(JSON.stringify(res));
} </script>
4、 websocket
客户端和服务器之间存在持久的连接,而且双方都可以随时开始发送数据,绕过 http 协议。发送给后端,利用后端代理
5、 location.href location.href 不受浏览器跨域限制
6、 postMessage
window.postMessage(message,targetOrigin) 方法是 html5 新引进的特性,可以使用它来向其它的 window 对象发送消息,无论这个 window 对象是属于同源或不同源,接受的 window 通过 addEventListener('message',function(){})来监听消息事件,接受到消息后可以对数据进行处理。

# js 内存泄漏

1. 闭包
2. 全局变量
3. 定时器如 setInterval
4. 递归的终止条件
5. while(true)等代码终止条件

# router 实现原理

1. Hash 路由 利用 url 上 hash 的改变,以#开头
2. history 路由 基于 html5 规范,利用 history.pushState || history.replaceState 来进行路由控制。

# ES6 中 let、const 和 var 的区别

一,var 定义的变量,作用域是整个封闭函数,是全域的；let 和 const 声明形成块作用域;作用域是在块级或者字块中；
二,变量提升：不论通过 var 声明的变量处于当前作用于的第几行,都会提升到作用域的最顶部。而 let 声明的变量不会在顶部初始化,凡是在 let 声明之前使用该变量都会报错（引用错误 ReferenceError）；即 var 可以先使用再定义
三,只要块级作用域内存在 let,它所声明的变量就会绑定在这个区域；
四,let 和 const 不允许在相同作用域内重复声明（报错同时使用 var 和 let,两个 let）。
const 用来专门声明一个常量,它跟 let 一样作用于块级作用域,没有变量提升,重复声明会报错,
五． const 声明的常量不可改变,声明时必须初始化（赋值）当声明的是复合类数据时可以修改复合属性,即当前对象的指针不可变；
如 const list = [];
list[0] = 10;

# 会改变原数组的方法

push()
pop()
shift()
unshift()
splice()
sort()
reverse()
forEach()

# 不会改变原数组的方法,即返回新数组

filter()
concat()
slice()
map()
xxxed()

# 深拷贝与浅拷贝

浅拷贝（shallowCopy）只是增加了一个指针指向已存在的内存地址,深拷贝（deepCopy）是增加了一个指针并且申请了一个新的内存,使这个增加的指针指向这个新的内存, 使用深拷贝的情况下,释放内存的时候不会因为出现浅拷贝时释放同一个内存的错误。

# 防抖和节流

防抖(debounce)是控制触发次数,节流(Throttle)是控制执行频率
防抖即在一定时间内只能执行一次的函数,如果在该时间内又触发了该函数会重新计算时间
分为立即执行版和非立即执行版。
非立即执行版的意思是触发事件后函数不会立即执行,而是在 n 秒后执行,如果在 n 秒内又触发了事件,则会重新计算函数执行时间。
例：content.onmousemove = debounce(count,1000);//触发后 1s 内执行一次
立即执行版的意思是触发事件后函数会立即执行,然后 n 秒内不触发事件才能继续执行函数的效果。

节流指能连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。
对于节流,一般有两种方式可以实现,分别是时间戳版和定时器版。
content.onmousemove = throttle(count,1000);//
时间戳版的函数触发是在时间段内开始的时候,而定时器版的函数触发是在时间段内结束的时候。

# 块作用域和函数作用域的区别

块作用域是 ES6 新添加的。块作用域由 { } 包括,if 语句和 for 语句里面的{ }也属于块作用域。

# 如何让事件先冒泡后捕获

如果要实现先冒泡后捕获的效果,对于同一个事件,同时监听捕获和冒泡,分别对应相应的处理函数,监听到捕获事件,先暂缓执行,直到冒泡事件被捕获后再执行捕获之间。

# mouseover 和 mouseenter 的区别

mouseover：当鼠标移入元素或其子元素都会触发事件,所以有一个冒泡时重复触发的过程。对应的移除事件是 mouseout
mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件,也就是不会冒泡,对应的移除事件是 mouseleave

# element 的各种位置,比如 clientHeight,scrollHeight,offsetHeight ,以及 scrollTop, offsetTop,clientTop 的区别？

clientHeight：表示的是元素的内部高度,不包含 border 和滚动条，单位 px，特例：body 的 clientHeight 返回视口高度
offsetHeight：表示可视区域的高度,包含了 border 和滚动条，单位 px
scrollHeight：表示了所有区域的高度,包含了因为滚动被隐藏的部分。单位 px
clientTop：表示边框 border 的厚度,在未指定的情况下一般为 0
scrollTop：滚动后被隐藏的高度,获取对象相对于由 offsetParent 属性指定的父坐标(css 定位的元素或 body 元素)距离顶端的高度。
offsetTop: 当前元素相对于 offset 顶部内边距的距离

# JS 的语言特性

运行在客户端浏览器上；
不用预编译,直接解析执行代码；
是弱类型语言,较为灵活；
与操作系统无关,跨平台的语言；
脚本语言、解释性语言

# 生成没有原型的对象

Object.create(null) 生成没有原型的对象,即没有继承 Object.prototype 的属性和方法,但是可以使用 hasOwnProperty 等方法。

# this 的指向

在非严格模式下使用 call 和 apply 时,如果用作 this 的值不是对象,则会被尝试转换为对象。null 和 undefined 被转换为全局对象。原始值如 7 或 'foo' 会使用相应构造函数转换为对象。因此 7 会被转换为 new Number(7) 生成的对象,字符串 'foo' 会转换为 new String('foo') 生成的对象。
当函数作为对象里的方法被调用时,this 被设置为调用该函数的对象。
如果该方法存在于一个对象的原型链上,那么 this 指向的是调用这个方法的对象
当一个函数用作构造函数时（使用 new 关键字）,它的 this 被绑定到正在构造的新对象。
当函数被用作事件处理函数时,它的 this 指向触发事件的元素。
当代码被内联 on-event 处理函数 调用时,它的 this 指向监听器所在的 DOM 元素

# _获取所有节点_

1. 获取根节点 html,递归遍历获取 html 的所有子节点
2. 通配符获取 const allNodes = document.querySelectorAll('\*');

# img 加载失败时显示默认图片

<img src="图片的url地址" alt="图片XX" onerror="this.src='默认图片的url地址'"/>
除此之外,还可通过 onerror 设置各种 img 样式,方法等问题,也可以通过 <picture>和source标签来实现类似switch功能的替换图片

# Webpack

webpack 是一个前端模块化方案,更侧重模块打包,我们可以把开发中的所有资源（图片、js 文件、css 文件等）都看成模块,通过 loader（加载器）和 plugins（插件）对资源进行处理,打包成符合生产环境部署的前端资源。

# js 隐式转换数据

· 1.1 隐式转换介绍
· 1.2 隐式转换规则
· 1.3 坑一：字符串连接符与算术运算符隐式转换规则混淆
· 1.4 坑二：关系运算符：会把其他数据类型转换成 number 之后再比较关系
· 1.5 坑三：复杂数据类型在隐式转换时会先转成 String,然后再转成 Number 运算
· 1.6-坑四：逻辑非隐式转换与关系运算符隐式转换搞混淆
值 转换为字符串 转换为数字 转换为布尔值 转换为对象
undefined “undefined” NaN false throw TypeError
null “null” 0 false throw TypeError
true “true” 1 new Boolean(“true”)
false “false” 0 new Boolean(“false”)
“” 0 false new String("")
“1.2” 1.2 true new String(“1.2”)
“1.2a” NaN true new String(“1.2a”)
“aaa” NaN true new String(“aaa”)
0 “0” false new Number(0)
-0 “0” false new Number(-0)
1 “1” true new Number(1)
NaN “NaN” false new Number(NaN)
Infinity “Infinity” true new Number(Infinity)
[] “” 0 true
[9] “9” 9 true
[“a”, “b”] “a,b” NaN true

# prototype、constructor、**proto**

①**proto**和 constructor 属性是对象所独有的；② prototype 属性是函数所独有的,因为函数也是一种对象,所以函数也拥有**proto**和 constructor 属性。
**proto**属性的作用就是当访问一个对象的属性时,如果该对象内部不存在这个属性,那么就会去它的**proto**属性所指向的那个对象（父对象）里找,一直找,直到**proto**属性的终点 null,再往上找就相当于在 null 上取值,会报错。通过**proto**属性将对象连接起来的这条链路即我们所谓的原型链。
prototype 属性的作用就是让该函数所实例化的对象们都可以找到公用的属性和方法,即 f1.**proto** === Foo.prototype。
constructor 属性的含义就是指向该对象的构造函数,所有函数（此时看成对象了）最终的构造函数都指向 Function。

# JS 继承的实现方式

每个构造函数都有一个 prototype 属性,指向函数的原型对象；原型对象中又有一个 constructor 属性,重新指向构造函数。
原型链继承
核心： 通过 prototype 将父类的实例设为子类的原型
优点：非常纯粹的继承关系,实例是子类的实例,也是父类的实例
父类新增原型方法/原型属性,子类都能访问到
简单,易于实现
缺点：要想为子类新增属性和方法,必须要在创建子类之后执行,不能放到子类的构造器中
且无法实现多继承。
来自原型对象的所有属性被所有实例共享（来自原型对象的引用属性是所有实例共享的）
创建子类实例时,无法向父类构造函数传参

构造继承
核心：通过 call()函数等构造函数获取父类给子类
使用父类的构造函数来增强子类实例,等于是复制父类的实例属性给子类（没用到原型）
优点：能多继承,可传参
缺点：无法函数复用,每次都会新建方法。

组合继承
核心：结合构造继承与原型链继承。借用构造函数来继承属性,原型链来继承方法。由于是先原型链,所以构造时又重新覆盖了原型的属性。

拷贝继承（原型式继承）
function object(o){
function F(){};
F.prototype = o;
return new F();

}
以一个对象为基础,通过 object()函数进行浅复制,再将得到的对象实例加以修改。
特点：支持多继承
缺点：改动一个实例的引用类型则所有实例的该引用类型改变。

寄生继承
核心：封装原型式继承,并在原型式继承返回实例后在实例上修改。最后返回实例
例：
function createAnother(original){
var clone = object(original);//object()函数创建对象
clone.sayHi = function(){ //增强这个对象
alert("hi");
};
return clone; //返回这个对象
}
寄生组合继承
核心：通过寄生方式,砍掉父类的实例属性,这样,在调用两次父类的构造的时候,就不会初始化两次实例方法/属性,避免的组合继承的缺点

# **闭包**

一个函数和对其周围状态（lexical environment,词法环境）的引用捆绑在一起（或者说函数被引用包围）,这样的组合就是闭包（closure）。也就是说,闭包让你可以在一个内层函数中访问到其外层函数的作用域。当内层函数在其他地方被调用时,就可以继续访问到外层函数的作用域,而不是被立即释放。
在 JavaScript 中,每当创建一个函数,闭包就会在函数创建的同时被创建出来。闭包包含在函数创建时作用域中的所有变量。
函数在定义时的词法作用域以外的地方被调用就会形成闭包。闭包使得函数可以继续访问定义时的词法作用域

# 原型链

每个实例对象（ object ）都有一个私有属性（称之为 **proto** ）指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象( **proto** ) ,层层向上直到一个对象的原型对象为 null。根据定义,null 没有原型,并作为这个原型链中的最后一个环节。

# 作用域

每个函数都有自己独立的执行环境,在代码完成的时候就确定了自己的作用域。
执行函数前,会对函数中的关键字 var 和 function 进行预解析。就是对变量和函数的声明提前,此时不会给变量赋值,当函数与变量同名时,函数会覆盖掉变量；待变量执行了之后,那个名字才会代表变量。
作用域链：当所需要的变量在所在的作用域中查找不到的时候,它会一层一层向上查找,直到找到全局作用域还没有找到的时候,就会放弃查找。这种一层一层的关系,就是作用域链。
JavaScript 单线程和异步
JavaScript 是单线程的。

# _任务分为宏任务和微任务_

宏任务即处理完之后会将控制权交给浏览器,浏览器再将控制权交给下一个宏任务,、
微任务即当前正在处理的任务
宏任务按照任务队列依次将任务传进微任务处理
遇到 new Promise()的需要立即执行
async 相当于一个 promise 的语法糖,但不会立即执行,而是等到使用后才执行。await 会执行完当前语局并将其后的任务存入微任务队列,then 里面的函数则是存放进微任务队列,等待执行
requestAnimationFrame()指的是下一次浏览器重绘之前执行的函数,在 settimeout 之前执行
settimeout 是在任务队列清空之后才开始执行,settimeout 之间主要看设定时间参数来先后输出,其次才是 context 的先后顺序。

# yield 与生成器

生成器为一种可以用来控制迭代器（iterator）的函数,它可以随时暂停,并可以在任意时候恢复。
创建生成器：在函数关键词后加*,如 function* generator () {}、let generator = function _() {}。
yield 就是生成器中独特的 return,只会返回一次,再次调用时继续执行函数并返回下一个 yield。其返回的是一个对象,有两个属性,value 和 done,value 代表应该返回的值,done 代表所有 yield 是否执行完毕,若是则 done=true；
例：function_ generator() {
yield 5;
}
const gen = generator();
gen.next(); // {value: 5, done: false}
gen.next(); // {value: undefined, done: true},之后再执行下一步还是返回同样的对象。
当然也可以用 return 返回对象,但 return 之后的将不再执行。

# yield 委托迭代

yield 加*可将它的工作委托给另一个生成器。通过这种方式,你就能将多个生成器连接在一起。
yield* 是一个表达式,不是语句,所以它会有自己的值。
yield*g1();//执行并获取 g1()中的 yield 结果,
yield 也可以在 next() 方法调用后返回传递的值
例：gen.next('A'); // {value: "A", done: false} 执行了 yield（yield）；代码
我们不仅可以用 next() 来迭代生成器,还可以用 for of 循环来一次得到生成器所有的值（而不是对象）。
例：function* generator(arr) {
for (const el in arr)
yield el;
}
const gen = generator([0, 1, 2]);
for (const g of gen) {
console.log(g); // 0 -> 1 -> 2
}

# _Async_

ES7 提供的 async 函数相当于 generator 函数的语法糖(即高效简化版)
创建语法：async function(){};//相当于把 function 后的\*换成 function 前 async,将 yield 替换成 await。
最终会返回成一个 promise。

1. async 函数内部 return 语句返回的值,会成为 then 方法回调函数的参数。
2. 只有 async 函数内部的异步操作执行完,才会执行 then 方法指定的回调函数。
3. 正常情况下,await 命令后面是一个 Promise 对象。如果不是,会被转成一个立即 resolve 的 Promise 对象。
4. 只要一个 await 语句后面的 Promise 变为 reject,那么整个 async 函数都会中断执行。_可通过 try catch 捕获错误_。
   await
   await 的语句执行完才执行后面的语句

# JavaScript 操作 http

fetch
fetch()方法提供了一种简单,合理的方式来跨网络异步获取资源。取代原生的 XMLHttpRquest
fetch 接受两个参数,url 和 init,其中 url 参数是必须的,而 init 参数是可选的, init 是一个对象,在里面可以对这个请求进行配置,例如设置请求方法(默认 GET 方法)设置请求头等；如果不传入 init 参数,将会采用默认的配置.
返回一个包含 Promise 对象,在这个对象的 resolve 方法中可以访问到请求的结果,是一个 Response 对象。在之后的 then 中对 response 进行进一步操作
javascript 模块（modules）

# 事件传播

一般情况下,事件会从根元素往下传播直到目标元素,这个阶段称为捕捉。到达目标元素之后触发事件,称为目标阶段,之后事件再从目标元素传导到根元素,称为冒泡阶段。事件的默认触发机制为冒泡触发。
event.stopPropagation()
阻止事件在 DOM 中继续传播,即取消进一步的事件捕获或冒泡,防止再触发定义在别的节点上的监听函数,但是不包括在当前节点上新定义的事件监听函数。
event.target //事件触发的起源对象
event.currentTarget //事件触发的当前对象
event.srcElement //event.target 的 IE 版本

# 事件冒泡

事件冒泡是 HTML DOM API 中事件传播的一种
方式,当一个事件发生在另一个元素中的一个元素中,并且两个元素都注册了该事件的句柄时。通过冒泡,事件首先由最内部的元素捕获和处理,然后传播到外部元素。执行从该事件开始,并转到其父元素。然后执行传递给父元素,以此类推,直到 body 元素。

# 事件捕捉

当鼠标点击或者触发 dom 事件时,浏览器会从根节点开始由外到内进行事件传播,即点击了子元素,如果父元素通过事件捕获方式注册了对应的事件的话,会先触发父元素绑定的事件。

# 事件监听

addEventListener()方法,用于向指定元素添加事件句柄,它可以更简单的控制事件,语法为
element.addEventListener(event, function, useCapture);
第一个参数是事件的类型(如 "click" 或 "mousedown").
第二个参数是事件触发后调用的函数。
第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。false 冒泡,true 捕获,默认 false。在 DOM 标准事件模型中,是先捕获后冒泡。

# 事件委托

事件委托指的是,不在事件的发生地（直接 dom）上设置监听函数,而是在其父元素上设置监听函数,通过事件冒泡,父元素可以监听到子元素上事件的触发,通过判断事件发生元素 DOM 的类型,来做出不同的响应。
好处：比较合适动态元素的绑定,新添加的子元素也会有监听函数,也可以有事件触发机制。
事件触发
当一个事件传播到目标元素上并且被监听到时,产生一个消息进入消息队列；
当事件被连续触发时,按照同步先执行完事件 1 再 zhix1 事件 2

# _事件循环(Event Loop)_

JS 是单线程的,即同一时间只能执行一个任务,但是 JS 可以通过事件循环来实现异步操作。
node 和浏览器的事件循环机制是不同的,但是都是基于事件循环机制的。
就浏览器的事件循环而言，主要分为宏任务队列和微任务队列。浏览器自身还有渲染周期。
浏览器会先执行一个宏任务，然后执行微任务，然后再执行下一个宏任务。所有任务结束之后执行渲染。
_浏览器自身带有智能调度机制确保页面渲染不会被完全阻塞_(如 setInternal 0 会在下一个宏任务执行)。

JS 会首先判断代码是同步还是异步,同步进入主线程,异步进入任务队列；
同步任务进入主线程后一直执行,直到主线程空闲后,才会去任务队列中查看是否有可执行的异步任务,如果有就推入主线程中执行；
异步任务分为微任务和宏任务，当微任务执行完之后执行宏任务，宏任务可能包含异步代码，先将宏任务的同步代码执行完之后再执行任务队列中的微任务，然后再执行下一个宏任务
事件循环是一个先进先出（FIFO）队列,这说明回调是按照它们被加入队列的顺序执行的。

# advanced js

1. _structuredClone(A, { transfer }) 可以用来深拷贝对象,第二个参数还可以指定从原对象转移属性至新对象_
2. 下载功能实现
   const link = document.createElement('a')
   link.download = fileName
   link.style.display = 'none'
   link.href = src
   document.body.appendChild(link)
   link.click()
   document.body.removeChild(link)
3. customEvent
   document.dispatchEvent(new CustomEvent('customEvent', { detail: { name: 'value' } }))
   全局发送特殊事件
4. 可通过$any($event.target).value 来规避$event.target.value 的问题
5. event.target 对应的 type 是 EventTarget,只有转化为 HTMLInputElement 才能使用 value 属性
6. eventListener 在跳转前一定要销毁,否则可能导致二次进入页面时,一次触发事件多次执行监听函数(5h)
7. string.prototype.search(regex);会将参数自动转化为 regex,若找到返回 index,否则返回-1
8. 可用解构来定义 interface 并使用,例如{ data }: { data: {successList: GoodsList[]} } 等于 res：{data:{successList:GoodsList[]} }
9. array.at(index) 返回数组中指定位置的元素,如果 index 为负数,则从数组末尾开始计算,可用来代替 array[array.length+index]
10. document.getElementsByTagName('xxx')得到的是一个 NodeList 对象,是类数组,不是数组,所以不能用数组的方法,如 map,filter,forEach 等,可用 Array.from()转换成数组。并且必须在 dom 加载完成后才能获取到 dom,否则获取到的是空数组
11. addEventListener('DOMContentLoaded',()=>{}) 可以在 dom 树加载完成后执行回调函数
12. video 的 src 未加载时调用 play 会报错,所以要先判断 video 的 src 是否加载完成,可直接用 video.oncanplaythrough 来进行加载好后的回调
13. _比较两个对象是否相等时,先比较 prototype，再创建图，遍历对象看结果_
14. process.env 获取定义在.env 文件内的变量,.env 有 test,production,development 及以上三个环境的变量,可用 cross-env 来设置环境变量
15. scrollHeight 元素全部高度;clientHeight:包括 padding 的可见区域高度;offsetHeight:包括 border,滚动条的可见区域高度;scrollTop:滚动条向下滚动的距离,也就是元素被遮住的高度;scrollLeft:滚动条向左滚动的距离,也就是元素被遮住的宽度;
16. Element.getBoundingClientRect() // 返回 DOMRect 对象，包含相对于视图窗口的左上角来计算的 x,y,top,right,left,bottom,width,height,其中 width 和 height 属性是包含了 padding 和 border-width；
17. requestAnimationFrame(callback) 下一次重绘前调用回调函数,返回一个 id,可用 cancelAnimationFrame(id) 来取消回调函数
18. 在 safari 里 video 不能在 js 里 play,必须在用户交互事件里 play。
19. 在 safari 里 canvas 不能在 js 里 toDataURL,必须在用户交互事件里 toDataURL.
20. 在 safari 的 graphies 里,canvas 的 toDataURL 会导致内存泄漏,所以在 safari 里不要用 canvas 的 toDataURL
21. console 台里不出现后端请求原因分析：1.mocked http request。2 特殊的 http 请求不被 console 台获取 3.network 做了筛选
22. 在浏览器 debug(未编译的代码),直接打开控制台的 source,在里面直接加断点,通过 cmd+shift+p 搜索文件
23. Array.prototype.flatMap() 会先使用映射函数映射每个元素,然后将结果压缩成一个新数组。它与 map 和 深度值 1 的 flat 几乎相同,但 flatMap 通常在合并成一种方法的效率更高。
24. _number.toString(2) 将 number 转化为二进制字符串_
25. function.length 返回函数的参数个数
26. lambda 演算 ℷx.x+1(1) 表示对 x 的 ℷ 演算,ℷx 声明这是参数为 x 的 ℷ 演算,ℷx.x+1 表示传入 x 后返回 x+1,ℷx.x(1)表示传入 1 后返回 2
27. 柯利化,将函数作为参数传入另一个函数。
28. _parseInt 第二个参数表示进制,2-36,默认为 0(根据字符串前缀判断)_
29. _虚拟滚动,只渲染可视区域的 dom,其他的 dom 不渲染,可用于大数据量的渲染。为此,父元素即为可视区域 overflow:scroll,需要一个子元素撑起实际滚动的高度,虚拟滚动通过监听滚动距离来计算出真实滚动情况下刚好位于可视区域的 dom 进行渲染_
30. 函数是一等公民,会自动变量提升至顶部,且函数声明优先于变量声明,后命名的会覆盖前命名的函数
31. var let const, var 会变量提升,但仅仅是声明提升,赋值不会,var 可重复声明,并且会覆盖前面的声明,let 和 const 不会变量提升,且不可重复声明,const 声明的变量不可修改,但是如果是引用类型,引用的值是可以修改的, let const 都是 es6 新增的
32. MutationObserver(callback())
    在指定的 DOM 发生变化时被调用。
    例：// 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback());
    // 以上述配置开始观察目标节点
    observer.observe(targetNode, config);

# JS 新约

1. javascript 代码必须放在 script 标签中
   script 标签可以放在 html 的任何地方,一般建议放在 head 标签里
   如果有多段 script 代码,会按照从上到下,顺序执行,因此引入第三方库的时候,一定要注意顺序
2. document 代表浏览器的文档部分, window 代表浏览器的窗口部分,Document 对象是 Window 对象的一部分,可通过 window.document 属性对其进行访问。同理,history 也是 window 的属性
3. 完整的 javascript 由语言基础,BOM 和 DOM 组成。
4. _js 内存管理的垃圾回收算法，最初是引用计数垃圾收集，即当一个对象没有被引用时被回收。现在主流的是标记清除算法，即当一个对象从 root 不可达时被回收。即全局对象作为 root。这样可以避免循环引用的问题。当两个对象相互引用为属性时，他们的引用计数都不为 0，但是他们都不可达，所以会被回收。_
5. js 内存模型分为堆，栈，队列，堆用来存储对象，栈用来存储帧，队列用来存储消息。当消息被处理时会被移出队列，并且会创建一个帧，帧中包含了函数的参数，局部变量，返回地址等信息。当函数执行完毕时，帧会被移出栈。若帧中的函数调用了其他函数，则会创建新的帧并压入栈中。直到所有帧都被移出栈，函数执行完毕。开始处理下一个消息。
6. string.padStart(a,b) 在 string 前添加字符串 b 直到整个 string 长度大于等于 a
7. JavaScript 基本数据类型 undefined,Boolean,Number,String,null,symbol,bigint
   undefined 声明了但未赋值
   Boolean 布尔
   Number 数字
   String 字符串
   null 空对象/对象不存在
   symbol 独一无二的符号,作标识用,当作对象的属性名时,无法被遍历,可以用 Object.getOwnPropertySymbols()方法获取,也可以 private 属性
   BigInt 大整数 可表示 2^53-1 以上的整数,和 number 宽松相等,但是不能混用,需要加 n,在 json 里不能直接转化为 string,需要加 toString()
   undefined
   当一个变量被声明了,却没有赋值的时候,叫做 undefined

8. Number 数字
   javascript 中的 Number 可以表示十进制,八进制,十六进制整数,浮点数,科学记数法
   var a=10; //十进制
   var b=012;//第一位是 0,表示八进制
   var c=0xA;//0x 开头表示十六进制
   var d=3.14;//有小数点表示浮点数
   var e=3.14e2;//使用 e 的幂表示科学计数法

9. 4 种变量类型判断

   1. 使用 typeof 来进行判断数据类型

   typeof 可以识别出基本类型 boolean,number,undefined,string,symbol,bigInt 但是不能识别 null。不能识别引用数据类型,会把 null、array、object 统一归为 object 类型,但是可以识别出 function。
   例：console.log(typeof bool); //Boolean

   2. instanceof

   instanceof 不能识别出基本的数据类型 number、boolean、string、undefined、null、symbol。
   但是可以检测出引用类型,如 array、object、function,同时对于是使用 new 声明的类型,它还可以检测出多层继承关系。
   instanceof 一般用来检测对象类型,以及继承关系。
   arrname instanceof Array;// return true

   3. constructor

   null、undefined 没有 construstor 属性,因此 constructor 不能判断 undefined 和 null。
   console.log(arr.constructor === Array);// true
   必须通过 构造函数声明的对象,才有 constructor 属性,否则没有。

   4. Object.prototype.toString.call

   console.log(Object.prototype.toString.call(num));//[object Number]
   该方法直接返回对应类型的字符串,但无法判断是 Number()还是直接赋值生成的

10. 数字转换为字符串
    const a = 123;
    a.toString(); //默认模式为 10 进制
    a.toString(2)；//将数字 a 转换为基模式下二进制。
    注意,不能直接用 123.toString(),因为这样会被当成小数点,所以要用 123..toString()或者 123 .toString()或者(123).toString()

11. 转换为数字
    Number()和 parseInt()的区别
    Number()和 parseInt()一样,都可以用来进行数字的转换
    区别在于,当转换的内容包含非数字的时候,Number() 会返回 NaN(Not a Number)
    parseInt() 要看情况,如果以数字开头,就会返回开头的合法数字部分,如果以非数字开头,则返回 NaN,并且第二个参数是进制,默认 10 进制,2-36 的整数

12. 数组 Array
    在非数组对象上调用数组方法时，一般会获取对象的 length 属性,若无则初始化为 0，然后根据 length 来进行遍历。但是如果对象的 length 属性不是一个有效的数字，那么就会导致数组方法无法正常运行。

稀疏数组:数组中的某些位置没有任何值,这时候我们说这个数组是稀疏数组。如[,1,] 有两个元素,第一个元素是一个空槽,即 empty;
_map 方法会跳过空槽_

push,unshift 用于在数组的末尾或者开头插入 n 个元素,并且返回数组的长度,会修改原数组.
注意:push 和 unshift 可通过 Array.prototype 作用在非数组对象上,它会先读取对象的 length 属性,若没有就设为 0,若有则加上新添加的元素长度,然后将新元素加到对应的 key 为 index 的属性上(若已存在则覆盖),最后返回新的 length 属性值。
例:onst plainObj = {length:5};
const newlen = Array.prototype.push.call(plainObj, 1, 2); // plainObj: {5: 1, 6: 2, length: 7}; newLen: 7

方法 shift,pop 分别在最开始或末尾的位置删除一个元素,并且返回该元素,会修改原数组
注意:shift 和 pop 可通过 Array.prototype 作用在非数组对象上,它会先读取对象的 length 属性,若没有就设为 0,若有则 length-1,然后将对应的在 length 区间内的 key-1,最后返回删除的元素(可能为 undefined)。
例:const arrayLike = {
length: 3,
unrelated: "foo",
3: 4,
1:2,  
};
Array.prototype.shift.call(arrayLike) // undefined
console.log(arrayLike); // {0: 2, 3: 4, length: 2, unrelated: 'foo'}

连接数组
var z = x.concat(y); //x 必须是数组 返回一个新的数组,包含 x 和 y 的所有元素 通过浅复制实现,会保留稀疏数组(null 和 undefined 元素),可 concat(y1,y2)同时连接多个数组

分割数组为字符串
方法 join 通过指定分隔符,返回一个数组的字符串表达,其中空槽被当作 undefined,null 和 undefined 元素会被当做空字符串,默认分隔符是逗号
const x =[3,1,4] y = x.join("@") //3@1@4
注意:toString()也会将空槽当作 undefined,但是不会将 null 和 undefined 元素当作空字符串,默认分隔符是逗号

对数组的内容进行排序
x.sort();//默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。undefined 会被排到末尾并且在空槽前。
//sort 调用了 toString()方法,所以排序 10 及以上的数字需要自定义排序函数
自定义排序算法
调用 sort 函数的时候,把这个比较器函数 comparator 作为参数传递进去即可,原地排序,不会返回新的数组
x.sort(comparator);
compareFunction(a, b) 返回一个 number, 小于 0 交换,>=0 不变;

对数组的内容进行反转
方法 reverse,对数组的内容进行反转,保留空槽,返回数组引用
x.reverse();

获取子数组
var z = x.slice(1,3); 浅拷贝,支持负数,空槽一视同仁,返回子数组,左闭右开

删除和插入元素
方法 splice(拼接) 用于删除数组中的元素,它还能用于向数组中插入元素,空槽一视同仁,并且返回被删除的元素组成的数组。
例如：数组 x 是:3,1,4,1,5,9,2,6
x.splice (3,2) 表示从位置 3 开始 ,删除 2 个元素:3,1,4,9,2,6
x.splice(3,0,1,5) 从位置 3 开始,删除 0 个元素,但是插入 1 和 5,最后得到:3,1,4,1,5,9,2,6

创建新数组
Array.from() 从类数组对象或者可迭代对象中创建一个新的数组实例,返回一个新的数组实例. 第二个参数是一个 map 函数,用于对每个元素进行处理,返回新的元素,第三个参数是 this 指向

展开数组
array flat 会去空槽。在非数组对象上调用 flat 需要对象有 length 属性,否则会报错,并根据 length 从键 0 开始按序读键值,当键值不为数组时,会直接将其加入到新数组中,当键值为数组时,会根据 flat 参数 depth 将其展开后加入到新数组中。

14. this 指向,在普通函数和匿名内部,this 是在函数内的,在箭头函数中,this 只能向外查找的,且不可修改
15. readOnly 的属性无法通过...展开,只存在于对象中
16. 前端模糊查询, 通过 string.includes()判断是否包含来过滤
17. array.fill(val)是浅拷贝,如果 val 是对象,则每个元素都指向同一个对象,会造成修改一个元素,其他元素也会改变
18. img 渲染到 canvas,canvas.getContext('2d').drawImage(img,0,0)会报错,因为 img 没有加载完成,可以在 img.onload 里执行 drawImage
19. canvas 的 toDataURL 方法会将 canvas 转换为 base64 格式的图片
20. file 类型, file 继承自 blob, input type file
21. 泛型类型参数,如 T,类似 unknown,但是 unknown 不能赋值给其他类型,而 T 可以,因为 T 是类型参数,而 unknown 是类型,在定义时用 T 占位,实际使用时再传确定的 type
22. session storage 新页面会深拷贝父页面的 session storage,但是 local storage 不会。每一个页面的 session storage 都是独立的,但是 local storage 是共享的
23. localStorage 只支持存储字符串，如果要存储对象，需要先将对象转换为字符串，再存储。sessionStorage 也是如此。
24. Number 对象
    注: 这里讲的 Number 是对象 Number,和基本数据类型中的基本类型 Number 是不一样的 Number。通过 new Number 创建
    与基本类型的数字不同,对象类型的数字,拥有更多的属性和方法
    new Number 创建一个数字对象
    var x = new Number(123);//此时它的值虽然是 123,但它的类型是 object。

    Number 边界
    Number.MIN_VALUE//Number 对象的最小值:5e-324
    Number.MAX_VALUE//Number 对象的最大值:1.7976931348623157e+308

    返回一个数字的小数表达
    a. toFixed(2)//返回保留 2 位小数的 string a
    返回一个 Number 对象的科学计数法表达 string
    a.toExponential ()
    返回一个数字对象的基本数字类型
    var b = a.valueOf()// 将 a 的 类型从 Number 类变为 number 并赋值给 b

25. setInterval(function,interval,[arg1,arg2,......argn])//默认语法,interval 设置间隔时间。_之后的参数为传入 function 的值。_
26. script 标签的 defer 属性，表示脚本会在文档解析完毕后执行，但是在 DOMContentLoaded 事件之前执行，如果有多个 defer 脚本，会按照顺序执行，不会阻塞 DOM 解析，但是会阻塞 DOMContentLoaded 事件。async 属性表示脚本会在文档解析完毕后立即执行，但是不会阻塞 DOM 解析，也不会阻塞 DOMContentLoaded 事件，如果有多个 async 脚本，会按照加载完成的顺序执行，不一定是顺序执行，async 脚本不会阻塞其他资源的加载，比如图片，css 等，但是会阻塞其他 async 脚本的执行，async 脚本一定会在页面的 load 事件之前执行，但是不一定在 DOMContentLoaded 事件之前执行。
27. _script 默认是会阻碍 HTML 解析的，只有下载好并执行完脚本才会继续解析 HTML，defer 就是下载不阻碍 html 解析，执行会等到 html 解析完再执行，async 是下载不阻碍，执行可能阻碍解析，一旦下载好就立即执行_
28. js _任何不在函数内部的代码的上下文都是全局上下文，谁最后调用的函数，函数里 this 就指向谁_
29. js _箭头函数中 this 的值总是等于外部作用域的 this_
30. js _普通函数在调用时产生上下文，箭头函数没有上下文,会去外部作用域找，找不到就是 undefined_
31. js 把一个函数当成参数传递到另一个函数的时候，也会发生隐式丢失的问题，且与包裹着它的函数的 this 指向无关。在非严格模式下，会把该函数的 this 绑定到 window 上，严格模式下绑定到 undefined。settimeout 的回调函数也是如此。
32. 定时器的调用对象是 window，所以定时器里的 this 指向 window，严格模式下指向 undefined
33. var 会挂在到 window 上，let 和 const 不会，var 在上下文里初始化为 undefined，let 和 const 在上下文里初始化为 uninitialized
34. this 例题

```javascript
var obj2 = {
  a: 2,
  foo1: () => {
    console.log(this.a) //3
  },
  foo2: function () {
    console.log(this) //obj2
    function inner() {
      console.log(this) //window
      console.log(this.a) //3
    }
    inner()
  },
}
var a = 3
obj2.foo1() //箭头函数的this指向外层作用域,作用域只有window和function,所以this指向window
obj2.foo2()
// inner()被调用时没有指定调用对象，所以this指向window，window.a为3
```

35. js **new ,通过该方法会创建一个对象实例，原理如下:**
    在内存中创建一个新对象。
    这个新对象内部的 proto 特性被赋值为构造函数的 prototype 属性。
    构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
    执行构造函数内部的代码（给新对象添加属性）。
    如果构造函数有返回，则返回该值；否则，返回刚创建的新对象(空对象)
36. js Symbol Symbol.hasInstance 就是 instanceof 的原理
37. js **typeof 的原理是判断二进制，二进制前三位储存类型信息**
38. js BigInt()或数字后加 n 表示大数，向下取整，和 number 类型宽松相等，可以和 number 类型比较
39. js Symbol.for(key),查找全局里键为 key 的 symbol，若没有则会新建一个 symbol 并返回
40. js Symbol.keyFor(symbol),如果全局注册表中查找到该 symbol，则返回该 symbol 的 key 值，返回值为字符串类型。否则返回 undefined
41. bom cookie 也受跨域限制
42. js Object.assign(target,source1,source2...)，将 source1,source2...的属性浅复制到 target 上，若属性名相同，则后面的会覆盖前面的
43. js Object.defineProperty(obj,prop,descriptor),用于给对象添加属性，descriptor 为属性描述符，包含 value,writable(false),enumerable(false),configurable(false),get,set 等属性
44. **bom 不同页面间通信，可以通过 localStorage,sessionStorage,cookie,postMessage,iframe,websocket,service worker,IndexedDB,SharedWorker,broadCastChannel API 广播等方式**
45. js Object.is(a,b)用于判断两个值是否相等，ES6 新特性，与===唯二不同的是，Object.is(0,-0)为 false,Object.is(NaN,NaN)为 true
46. dom shadow Dom 是一种浏览器技术，用于将一个 DOM 节点和其子节点封装起来，使其与外部的 DOM 节点隔离，外部的 DOM 节点无法访问 shadowDom 里的节点，shadowDom 里的节点也无法访问外部的 DOM 节点.video 这个元素就曾用 shadow Dom 封装内部结构的一系列的按钮和其他控制器。 通过 Element.attachShadow()生成一个 shadow Root 并添加到指定元素上
47. _js websocket 在 js 内通过 new WebSocket(url)得到一个 websocket 对象，通过该对象的 onopen,onmessage,onclose,onerror 等方法来监听 websocket 的连接，消息，关闭，错误等事件，通过该对象的 send 方法来发送消息，通过该对象的 close 方法来关闭连接_
48. js json 解析出错会抛异常
49. js 通过 json 深拷贝对象，可以通过 JSON.parse(JSON.stringify(obj))来实现，但是该方法有缺陷，会忽略 undefined，symbol，函数，正则等类型，还有循环引用的问题，并且字符串转化会带来额外性能开销
50. js == 会进行类型转换，=== 不会进行类型转换
51. bom 一帧的时间不固定，一帧指的是浏览器渲染一次页面所需要的时间，如果一帧的时间过长，那么就会导致掉帧，掉帧会导致页面卡顿
52. bom cookie 可记录用户行为，停留时间等用户特征，还可以保存登录状态，也可以记录当前协议或 ip 等，若发生异常可要求用户二次验证，防止 csrf 攻击
53. js removeEventListener 的第二个参数必须和 addEventListener 的第二个参数一致，指向同一内存地址，否则无法移除事件。匿名函数无法移除
54. js json 深拷贝坏处 1.忽略 undefined,symbol,函数,正则等类型 2.循环引用报错 3.Date,类型转化为字符串 4.error,正则,set,map 等类型转化为空对象 5.原型链丢失
55. js _structuredClone 不能拷贝函数,且是新语法,有对应的 polyfill 可支持旧版本浏览器_
56. js 赋值也是先取值再赋值, let object.child = object = {child:1} //object.child 为 undefined.
57. bom localStorage 坏处: 1.存储容量小,浏览器一般 5m 2.存储的数据不安全,都能访问 3.只能同步操作 4.只能存储字符串类型 5.不支持 web worker
58. js debugger 时，所有代码都会暂停，包括异步代码，所有的事件也不会被触发。
59. js string.charCodeAt() 返回指定索引处的 UTF-16 代码单元值,string.codePointAt() 返回指定索引处的字符的 Unicode 编码点//ascii 码表被包含于 UTF-16 编码中
60. js string.substr(start,len)已被废弃,不传 len 时,默认为到末尾,推荐使用 string.substring(start,end)替换
61. js object 属性名只能是字符串或 symbol 类型,若不是,会自动转化为字符串,并且非数字属性名会按添加顺序被排序，数字属性名会按升序排序
62. bom _navigator.sendBeacon(url,data)用于发送数据到服务器,该方法会在页面卸载时发送数据,即使页面卸载了,也会发送数据,该方法会返回一个布尔值,表示是否发送成功, post 请求,常与 visibilitychange 事件一起使用,当页面不可见时,发送数据_
63. bom navigator.online 用于判断当前是否联网,返回一个布尔值,表示是否联网 也可以在 window 上监听 online 和 offline 事件来判断联网变更
64. bom navigator.connection 用于获取网络连接信息,返回一个 connection 对象,包含 downlink,downlinkMax,rtt,saveData 等属性,用于获取网络连接信息
65. js 宏任务执行完会把控制权交给浏览器,微任务执行完会继续执行下一个微任务,从这个角度看,requestAnimationFrame 是宏任务
66. bom scrollTo 用于滚动到指定位置,scrollTo(x,y)滚动到指定位置,scrollTo(options)滚动到指定位置,scrollTo(options)包含 top,left,behavior 等属性,用于设置滚动位置,滚动行为等,behavior 有 auto,smooth 两种,auto 为瞬间滚动,smooth 为平滑滚动
67. bom audio window.AudioContext 创建一个音频上下文,通过该对象的 createMediaElementSource(audio)来创建一个音频源,通过该对象的 createAnalyser()来创建一个音频分析器,通过该对象的 createGain()来创建一个音频增益器,通过该对象的 createBiquadFilter()来创建一个音频滤波器,通过该对象的 createOscillator()来创建一个音频振荡器；通过该对象的 createBufferSource()来创建一个音频缓冲源,通过该对象的 createBuffer()来创建一个音频缓冲区,通过该对象的 decodeAudioData()来解码音频数据;其中音频源,音频分析器,音频增益器,音频滤波器,音频振荡器,音频缓冲源,音频缓冲区,音频数据都可以通过 connect()和 disconnect()来连接和断开连接; audioCtx.destination 为音频输出目标,audioCtx.currentTime 为当前时间,audioCtx.state 为音频上下文状态,audioCtx.sampleRate 为音频采样率,audioCtx.suspend()暂停音频上下文,audioCtx.resume()恢复音频上下文
68. SSE, webRTC 也可用于服务端和客户端双向传输数据
69. **intersectionObserver 是浏览器提供的 api,用于监听元素是否进入视口,从而实现懒加载,接受两个参数，一个成功后的 callback 一个 options 对象,其中 root 为监听的根元素,默认为 null(即浏览器视口),rootMargin 为根元素的边距,threshold 为元素进入视口的比例,0 到 1 之间，默认为 0,即只要有一个像素可见，回调就会运行,可以设置为 0.1,即元素进入视口 10% 时触发;root 必须为监听目标的祖先元素,否则会报错**

    ```javascript
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // do something
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    )
    ```

70. bom DOMParser 浏览器自带的原生解析 html 字符串为 dom 的 api，解析错误不会抛异常，而是返回一个 body 内为空的 document 对象,解析成功则返回一个 body 包含解析后 dom 的 document 对象

    ```javascript
    const parser = new DOMParser()
    const doc = parser.parseFromString("<div>hello world</div>", "text/html")
    ```

71. js _weakMap 是一种弱引用的 map，其键值对中的键是弱引用，当键被垃圾回收时，值也会被回收，可以用来存储一些临时数据，防止内存泄漏，也因此不能遍历，不能清空，不能获取大小，不能判断是否为空；只有 set，get，has，delete 方法_
72. js 每个函数调用都有自己的上下文，上下文里包含了函数内定义的所有变量和函数；执行函数时，函数上下文会被推入栈中，函数执行完毕后，函数上下文会被弹出栈，函数上下文的生命周期与函数的执行过程一致;
73. js 代码执行时，访问变量的顺序是按作用域链来的,当访问变量时，会从当前作用域开始查找，如果找不到，会沿着作用域链向上查找，直到全局上下文或者找到，如果找不到，会报错
74. js 函数的参数被认为是当前上下文；
75. 临时上下文，在 try/catch 的 catch 和 with 语句中，会创建一个临时上下文，用于存储异常信息和 with 语句中的对象，当 try/catch 和 with 语句执行完毕后，临时上下文会被销毁；
76. js with(xxx){} 语句会创建一个临时上下文，将 xxx 对象作为临时上下文，当 with 语句执行完毕后，临时上下文会被销毁，不推荐使用，会导致代码可读性降低，性能降低，容易出错
77. js 块级作用域：在块级作用域由{}界定
78. js 由于变量提升，for(var xxx)中的变量 xxx 会被提升到 for 循环外部，所以在循环外部也可以访问到 xxx，但是在循环外部 xxx 的值是循环结束后的值
79. js Object.freeze() 方法可以冻结一个对象，使其不可修改，不可扩展，不可删除，不可配置，但是修改时不报错，只是不生效
80. js 垃圾回收 标记清理 的原理就是变量是否在上下文中被引用，如果没有引用，就会被标记为可回收

# JavaScript 日期

new Date() 创建日期对象,默认是当前时间,如果想创建一个特定的时间,可以传入参数,参数可以是日期字符串,也可以是时间戳;参数无效时,返回 Invalid Date
需要注意的是,getMonth()返回的月数,是基零的,0 代表 1 月份
所以需要+1
通过 getDay()获取,今天是本周的第几天。与 getMonth()一样,返回值是基 0 的。0 代表星期天,1 代表星期一,以此类推。
new Date(xxx)其实是调用了 new Date(Date.parse(xxx));
new Date(num1,...nums) 其实是隐藏的调用 new Date(Date.UTC(num1,...nums));num1 是年份，num2 是月份，num3 是日期，num4 是时，num5 是分，num6 是秒，num7 是毫秒，如果省略，则默认为 0；

# JavaScript 字符串

转义字符：为了防止字符串中的’,”,\等特殊符号被误解
\' ' 单引号
\" " 双引号
\\ \ 反斜杠
尽量别用 new 构造字符串,它会拖慢执行速度甚至
var x = new String("Bill");
var y = new String("Bill");
// (x == y) 为 false,因为 x 和 y 是不同的对象,而 JavaScript 对象无法进行对比,比较两个对象将始终返回 false。

JavaScript 字符串方法
属性 length 字符串长度
方法 indexOf lastIndexOf 子字符串出现的位置 未找到返回-1
而且接受第二个参数作为查找的起始位置
方法 search()搜索特定字符串的位置

提取字符串
slice(start, end) 若*参数为负*代表从最后一位往前计数
substring(start, end) 0<start,end<length
substr(start, length) 第二个参数代表截取的长度,如果首个参数为负,则从字符串的结尾计算位置。(已废弃)

替换子字符串
方法 replace() //方法不会改变调用它的字符串。它返回的是新字符串。

字符串拼接
方法 concat() 字符串拼接,可拼接多个字符串

trim() 方法删除字符串两端的空白符：

方法 split 根据分隔符,把字符串转换为数组

返回指定位置的字符
charAt 返回指定位置的字符,找不到返回空字符串
charCodeAt 返回指定位置的字符对应的 Unicode 码

比较两段字符串是否相同
localeCompare(compareString, locales, options)
locales 表示语言代码,比如"zh-CN"表示中文
options 表示比较选项,可以是 ignoreCase,numeric,caseFirst
x.localeCompare(y)
返回 0 表示相等,>=1 表示 x 字母顺序靠后,<=-1 表示 x 字母顺序靠前

根据分隔符,把字符串转换为数组
var y = x.split(" ");//通过空格分隔 split(" "),得到数组
var z = x.split(" ",2);//通过空格分隔 split(" ",2),得到数组,并且只保留前两个
注： 第二个参数可选,表示返回数组的长度

_实操不行_
原始数据类型可以直接调用方法如 xxx.split();这是因为 js 在访问 xxx 时会根据 xxx 创建一个临时对象(new String(xxx))，然后再调用方法，得到结果后销毁临时对象

# JavaScript 数字

JavaScript 数值始终是 64 位的浮点数,此格式用 64 位存储数值,其中 0 到 51 存储数字（片段）,52 到 62 存储指数,63 位存储符号。
在所有数字运算中,JavaScript 会尝试将字符串转换为数字。

NaN 的含义是 not a number,但它的 type 是 number,它参与的数学运算结果也是 NaN.
isNaN() 来确定某个值是否是数.

Infinity 的含义是超出最大值时返回的值。也是 number 型。

使用 toString() 方法把数输出为十六进制、八进制或二进制。
myNumber.toString(16)//返回 myNumber 的 16 进制值 80

JavaScript 数字方法
toFixed() 返回字符串值,指定保留几位小数。
3.64. toFixed(1); //返回 3.6
toPrecision() 返回字符串值,指定保留几位有效数字。

parseInt(string, radix) 2<=radix<=36
parseFloat(string) 转换为浮点数  
Number() 可安全转换 BigInt 为数字(BigInt 过大丢失精度)

# BOM 储存大数据

indexedDB 是浏览器提供的本地数据库,可以存储大量数据,但是不支持 sql 查询,类似 nosql,只能通过游标来查询,游标是一个指针,指向数据库中的某个位置,可以通过游标来遍历数据库中的数据,限制同源策略,只能在同源网站下访问同源数据库
web sql 和 indexedDB 类似，都是储存在浏览器的方式，更像关系型数据库，目前只有 chrome 支持,已被 deprecated

通过 react 和 angular 等框架加载的网站最开始都只有一个 root 节点，不利于 SEO，所以需要在服务端渲染，将所有的节点都渲染出来，这样搜索引擎就能爬取到所有的节点，提高 SEO。但 ssr 也有缺点，首屏加载速度慢，因为需要在服务端渲染，所以需要等待服务端渲染完毕才能返回给客户端，因此可以通过 SSG 来解决这个问题，SSG 是在构建时就将所有的节点都渲染出来，这样就不需要等待服务端渲染了，提高了首屏加载速度。适用于内容不经常变化的网站或页面。

# requestIdleCallback

requestIdleCallback(callback, options) 是浏览器提供的 api，用于在浏览器空闲时执行回调函数，若果当前帧没有空闲时间，则回调函数会在下一帧空闲时执行。callback 函数会在浏览器空闲时被调用，options 对象可以设置 timeout 属性，表示超时时间，单位为毫秒，如果超时，则会强制执行 callback 函数，若不设置可能会导致 callback 函数一直不执行。

```javascript
requestIdleCallback(
  (deadline) => {
    while (deadline.timeRemaining() > 0) {
      // do something
      //如果deadline.timeRemaining() > 0,表示当前帧还有空闲时间,可以继续执行
    }
  },
  {timeout: 1000}
)
```

# requestAnimationFrame 和 requestIdleCallback 区别

| 特性         | requestAnimationFrame        | requestIdleCallback        |
| ------------ | ---------------------------- | -------------------------- |
| 触发时机     | 每帧渲染前（高优先级）       | 浏览器空闲时（低优先级）   |
| 频率         | 与屏幕刷新率同步（如 60fps） | 不固定，依赖主线程空闲时间 |
| 用途         | 动画、视觉更新               | 后台任务埋点等非关键逻辑   |
| 是否阻塞渲染 | 是（在渲染前执行）           | 否（在渲染后执行）         |
| 自动节流     | 页面隐藏时暂停               | 无自动节流，但依赖空闲时间 |
| 超时控制     | 无                           | 支持 timeout 参数强制执行  |

# http

在响应体没完全返回时,浏览器会一直等待,_如果采用的是 fetch 请求_，此时可使用 response.body.getReader()来获取响应体的 reader 对象,通过 reader.read()来读取响应体,reader.read()返回一个 promise 对象,通过该对象的 then 方法来获取响应体的数据,通过 reader.cancel()来取消读取响应体。这样就可以在响应体没完全返回时就开始处理响应体的数据,达到 GPT 的效果

# weakSet 和 weakMap

Map 和 Set 会阻止垃圾回收，如果键或值不再使用但仍然被 Map/Set 引用，会导致内存泄漏。
WeakMap 和 WeakSet 不会阻止垃圾回收，一旦健或值没有强引用就可以被垃圾回收掉，适用于临时数据存储或私有数据管理。如检测循环引用和 DOM 节点关联数据(在操作 DOM 时，可以用 WeakMap 存储与 DOM 节点关联的数据，当 DOM 被移除时，没有强引用，数据自动回收。)
。但是 WeakMap 和 WeakSet 不能遍历，不能获取大小，不能清空，不能判断是否为空；只有 set/add，get，has，delete 方法

# 虚拟 dom

虚拟 dom 是对真实 dom 的抽象表示。

1. 减少直接 DOM 操作（批量更新）
   Diff 算法：虚拟 DOM 会先计算新旧 DOM 树的差异（Diffing），然后 只更新变化的部分（批量更新），而不是直接操作整个 DOM。
2. 提高性能
   虚拟 DOM 的 diff 算法会尽量减少对真实 DOM 的操作，避免频繁的重排和重绘，提高性能。
3. 兼容性
   虚拟 DOM 可以在不同的浏览器和平台上运行，避免了服务器/native 没有 dom 的缺陷。
4. **缺点** 额外的内存开销：需要维护虚拟 DOM 树。
   首次渲染可能稍慢：需要先构建虚拟 DOM，再渲染真实 DOM。
   不适用于超高性能场景：如 60FPS 游戏，仍需直接操作 DOM/Canvas。

# BOM beforeUnload

通过 window.addEventListener('beforeunload', warnUserBeforeUnload);监听浏览器关闭事件，在用户关闭浏览器之前，弹出一个警告框，询问用户是否真的要关闭浏览器，并可以执行相应逻辑。
注：一般会添加 event.preventDefault(); // 阻止默认行为 才可以弹窗

# BOM element.contains(target)

//判断 target 是否为 element 子元素
