1. nextjs有自带的Image组件，可以实现图片懒加载，但是需要在next.config.js中配置；有自带的Header组件，可修改header内容；自带的Link组件(与a的区别是Link是局部刷新，a是整个页面刷新)；自带Script组件，可在页面中引入js文件，可懒加载以及加载成功后的回调函数；
2. nextjs的路由是基于文件系统的，所以在pages目录下的文件都是路由，比如pages/index.js对应的路由是/，pages/about.js对应的路由是/about
3. nextjs的css是基于css modules的，所以在css文件中的类名都是局部的，不会影响其他组件的样式，如果想要全局的样式，可以在\_app.js中引入css文件，组件引用css module文件的时候需要使用import styles from './index.css'，然后在组件中使用styles.className的方式来使用css module中的样式
4. pages/_app.js是全局的组件，可以在这个组件中引入全局的css文件以及keep state，比如登录状态
5. nextjs都是pre-rendering生成html的(即在server端生成html后再传给client端)，这能显著提高seo。pre-rendering分为static generation和server-side rendering，static generation是在build的时候生成html，server-side rendering是在每次请求的时候生成html。nextjs默认是static generation，如果想要server-side rendering，可以在getInitialProps中返回数据，然后在页面中使用props来使用数据
6. getStaticProps和getServerSideProps是nextjs的两个新的api，可以在页面中使用，都只在server端执行，getStaticProps是在build time内运行的一个异步函数，将得到的data作为props传给html，只能在page内使用，getServerSideProps是在每次请求的时候生成html
7. getStaticPaths是nextjs的一个新的api，可以在page中使用，只在server端执行，getStaticPaths是在build time内运行的一个异步函数，返回一个对象，对象中包含paths和fallback，paths是一个数组，数组中包含了所有需要预渲染的路径，fallback是一个布尔值，如果是false，表示当访问的路径不在paths中时，会返回404，如果是blocking，表示当访问的路径不在paths中时，会返回404，但是会在后台生成html，当再次访问时，会返回生成的html
8. 动态路由：在pages目录下创建一个page 如[id].js，然后在组件中配置getStaticPaths的path，path是一个包含id的对象的数组，如：
   [{
      params: {
        id: '1',
      },
    }]
然后通过getStaticProps获取id；