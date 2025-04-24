1. app.enableCors() 会自动设置 Access-Control-Allow-Origin: \*,Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE,Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization

2. nodejs 事件循环

   1. Timers 阶段
      执行 setTimeout() 和 setInterval() 到期的回调
      注意：回调的实际执行时间可能晚于设定时间（取决于系统状态）

   2. Pending Callbacks 阶段
      执行操作系统级别的回调（如 TCP 错误、文件系统操作等）

   3. Idle/Prepare 阶段
      Node.js 内部使用的阶段（开发者无需关心）

   4. Poll 阶段（核心阶段）
      处理 I/O 事件（文件读写、网络请求等）
      执行到达阈值的 setImmediate() 回调
      如果 Poll 队列为空：
      检查是否有 setImmediate()，有则跳到 Check 阶段
      否则等待新的 I/O 事件（阻塞在此阶段）

   5. Check 阶段
      专门执行 setImmediate() 的回调

   6. Close Callbacks 阶段
      执行关闭事件的回调（如 socket.on('close', ...)）

3. 在每个阶段中，会先执行 同步代码执行完毕，执行微任务队列，执行完之后，执行宏任务队列，执行完之后，再次执行微任务队列，直到微任务队列为空，才执行宏任务队列。
4. 宏任务队列：setTimeout,setInterval,setImmediate,I/O,UI 渲染,
5. 微任务队列：process.nextTick,promise.then,promise.catch,async function,await

6. nodejs 与浏览器的区别
   1. nodejs 是一个运行在服务器端的 JavaScript 运行环境，浏览器是一个运行在客户端的 JavaScript 运行环境
   2. nodejs 没有 DOM 和 BOM 对象，浏览器有 DOM 和 BOM 对象
   3. nodejs 支持 CommonJS and ES module ，浏览器暂时只支持 CommonJS 模块化(只支持 import 引入不支持 require)
   4. nodejs 有自己的事件循环机制，浏览器有自己的事件循环机制
   5. nodejs 有自己的文件系统，浏览器没有文件系统
   6. nodejs 有自己的网络请求模块，浏览器有自己的网络请求模块

# Node 特有异步 api

1.  queueMicrotask() 在任何 I/O 事件或 timer 事件之前执行
2.  process.nextTick() 在当前操作完成后立即执行，类似于 Promise.resolve().then()，但是它会在微任务队列的最前面执行
3.  setImmediate() 在 I/O 事件之后，timer 事件之前执行。它会在 poll 状态执行完成之后立即执行，类似与 setTimeout(()=>{},0).但是如果是在同步脚本中触发，它们俩的执行顺序不确定
