Swiper 
1.swiper 要先在 module 中引入

2.使用时还要在 css 里单独引入对应的样式，否则不显示
3.angular 中，把 encapsulation: ViewEncapsulation.None，加在@component 下
注意：此语句 swiper 教程里未提到，但不加导致 swiper 引入的 css 无效
(https://angular.io/api/core/ViewEncapsulation#viewencapsulation)

踩坑 3.5h

tailwindcss
1. tailwindcss 的基本用法，可以通过 tailwindcss.config.js 来自定义，是一种写在 html 上的 css 样式集合
2. tailwind 推荐用 float-right:boolean 而不是 float-{{right}}.


  插件 gray-matter 可以解析md文件的头部信息,如title，date，tags等;clsx 可以根据条件更改class;
  styled()是mui等UI库调用的js生成class的API，可以用来生成class，也可以用来生成组件
  代理软件无法在terminal里代理，所以得单独在terminal里设置代理
  启用本机ip访问，react: HTTPS=true npm start;angular: ng serve --host 0.0.0.0
  node 版本管理可通过 npm i -g n 实现控制 切换node时需要sudo
  nx dep-gragh 用于查看依赖关系



