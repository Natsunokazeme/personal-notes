1. app.enableCors() 会自动设置 Access-Control-Allow-Origin: \*,Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE,Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization

2. nodejs 事件循环

   1. timers -> setImmediate -> I/O callbacks -> idle, prepare -> poll -> check -> close callbacks
   2. 在每个阶段中，会先执行 同步代码执行完毕，执行微任务队列，执行完之后，执行宏任务队列，执行完之后，再次执行微任务队列，直到微任务队列为空，才执行宏任务队列。
   3. 宏任务队列：setTimeout,setInterval,setImmediate,I/O,UI 渲染,
   4. 微任务队列：process.nextTick,promise.then,promise.catch,async function,await

3. nodejs 与浏览器的区别
   1. nodejs 是一个运行在服务器端的 JavaScript 运行环境，浏览器是一个运行在客户端的 JavaScript 运行环境
   2. nodejs 没有 DOM 和 BOM 对象，浏览器有 DOM 和 BOM 对象
   3. nodejs 支持 CommonJS and ES module ，浏览器暂时只支持 CommonJS 模块化(只支持 import 引入不支持 require)
   4. nodejs 有自己的事件循环机制，浏览器有自己的事件循环机制
   5. nodejs 有自己的文件系统，浏览器没有文件系统
   6. nodejs 有自己的网络请求模块，浏览器有自己的网络请求模块
