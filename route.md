router原理
“通过更改url更新视图但不重新请求页面”是前端路由原理的核心之一
vue-router通过hash与History interface两种方式实现前端路由
history分为HashHistory和HTML5History
HashHistory有push和replace方法来替换路由
HashHistory.push() //将新路由添加到浏览器访问历史的栈顶，然后通过监测
在全局的window对象上触发hashChange事件并更新路由location.hash
实现跳转
HashHistory.replace()//将当前路由替换
HTML5History
History interface是浏览器历史记录栈提供的接口，通过back(), forward(), go()等方法，我们可以读取浏览器历史记录栈的信息，进行各种跳转操作。
html5后：pushState(), replaceState()还可以对浏览器历史记录栈进行修改

设置mode参数决定实现模式，默认hash
例：const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
当请求路由不存在时返回404
