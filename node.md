1. app.enableCors() 会自动设置 Access-Control-Allow-Origin: \*,Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE,Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization

2. nodejs 事件循环
   1. timers -> setImmediate -> I/O callbacks -> idle, prepare -> poll -> check -> close callbacks
   2. 在每个阶段中，会先执行 同步代码执行完毕，执行微任务队列，执行完之后，执行宏任务队列，执行完之后，再次执行微任务队列，直到微任务队列为空，才执行宏任务队列。
   3. 宏任务队列：setTimeout,setInterval,setImmediate,I/O,UI 渲染,
   4. 微任务队列：process.nextTick,promise.then,promise.catch,async function,await
