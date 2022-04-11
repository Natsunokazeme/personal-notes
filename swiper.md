1.swiper 要先在 module 中引入

2.使用时还要在 css 里单独引入对应的样式，否则不显示
3.angular 中，把 encapsulation: ViewEncapsulation.None，加在@component 下
注意：此语句 swiper 教程里未提到，但不加导致 swiper 引入的 css 无效
(https://angular.io/api/core/ViewEncapsulation#viewencapsulation)

踩坑 3.5h
