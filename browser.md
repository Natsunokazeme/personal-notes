
1. requestAnimFrame(callback) 下一次重绘前调用回调函数
2. 在safari里video 不能在js里play，必须在用户交互事件里play。
3. 在safari里 canvas 不能在js里toDataURL，必须在用户交互事件里toDataURL.
4. 在safari的graphies里，canvas的toDataURL会导致内存泄漏，所以在safari里不要用canvas的toDataURL
5. console台里不出现后端请求原因分析：1.mocked http request。2特殊的http请求不被console台获取 3.network做了筛选
6. 在浏览器 debug(未编译的代码)，直接打开控制台的 source，在里面直接加断点，通过 cmd+shift+p 搜索文件
