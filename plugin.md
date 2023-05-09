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

  bootstrap
  1.collapse 用于折叠 可直接加css  展开的css为 .collapse.show，折叠的css为.collapse, 期间的动画css为.collapsing
  2.collapse 通过js控制，需要先引入jquery，然后通过 $('#id').collapse('show')来控制，否则通过getElementsByClassName等方法取的dom，再通过
   var bsCollapse = new bootstrap.Collapse(el, {
            toggle: false
          })
    bsCollapse.hide();
  控制。
  3.可以使用带有href属性的连接或是带有data-bs-target属性的按钮。在这两种情形下， data-bs-toggle="collapse"都是必要的。
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-bs-target
  </button>
 它们一起控制id为collapseExample的元素

husky 用于在执行git 命令时执行script脚本命令

