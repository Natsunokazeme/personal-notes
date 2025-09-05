1. nextjs 有自带的 Image 组件，可以实现图片懒加载，但是需要在 next.config.js 中配置；有自带的 Header 组件，可修改 header 内容；自带的 Link 组件(与 a 的区别是 Link 是局部刷新，a 是整个页面刷新)；自带 Script 组件，可在页面中引入 js 文件，可懒加载以及加载成功后的回调函数；
2. nextjs 的路由是基于文件系统的，所以在 pages 目录下的文件都是路由，比如 pages/index.js 对应的路由是/，pages/about.js 对应的路由是/about
3. nextjs 的 css 是基于 css modules 的，所以在 css 文件中的类名都是局部的，不会影响其他组件的样式，如果想要全局的样式，可以在\_app.js 中引入 css 文件，组件引用 css module 文件的时候需要使用 import styles from './index.css'，然后在组件中使用 styles.className 的方式来使用 css module 中的样式
4. pages/\_app.js 是全局的组件，可以在这个组件中引入全局的 css 文件以及 keep state，比如登录状态
5. nextjs 都是 pre-rendering 生成 html 的(即在 server 端生成 html 后再传给 client 端)，这能显著提高 seo。pre-rendering 分为 static generation 和 server-side rendering，static generation 是在 build 的时候生成 html，server-side rendering 是在每次请求的时候生成 html。nextjs 默认是 static generation，如果想要 server-side rendering，可以在 getInitialProps 中返回数据，然后在页面中使用 props 来使用数据
6. getStaticProps 和 getServerSideProps 是 nextjs 的两个新的 api，可以在页面中使用，都只在 server 端执行，getStaticProps 是在 build time 内运行的一个异步函数，将得到的 data 作为 props 传给 html，只能在 page 内使用，getServerSideProps 是在每次请求的时候生成 html
7. getStaticPaths 是 nextjs 的一个新的 api，可以在 page 中使用，只在 server 端执行，getStaticPaths 是在 build time 内运行的一个异步函数，返回一个对象，对象中包含 paths 和 fallback，paths 是一个数组，数组中包含了所有需要预渲染的路径，fallback 是一个布尔值，如果是 false，表示当访问的路径不在 paths 中时，会返回 404，如果是 blocking，表示当访问的路径不在 paths 中时，会返回 404，但是会在后台生成 html，当再次访问时，会返回生成的 html
8. 动态路由：在 pages 目录下创建一个 page 如[id].js，然后在组件中配置 getStaticPaths 的 path，path 是一个包含 id 的对象的数组，如：
   [{
   params: {
   id: '1',
   },
   }]
   然后通过 getStaticProps 获取 id；
9. layout,template,page,not-found,loading，这 5 个文件是 nextjs 的默认文件，可以路由目录下创建，如 layout.js，template.js，page.js，not-found.js，loading.js，layout.js 是页面的布局，template.js 是页面的模板，page.js 是页面的内容，not-found.js 是 404 页面，loading.js 是页面加载时的 loading 页；
10. _layout 和 template 是当前页及其子页面的外层布局，在进入当前路由及其子路由时，都会将 page 作为 children 传入给 layout 和 template。layout 和 template 的区别是进入子路由时，layout 会保持状态不会重新渲染，而 template 会重新渲染；_
11. next js 页面级组件没有 props，否则会在 build 报错，只能通过 url 或其他方式传入数据(1.5h)
12. next build 默认用生产环境，且不能修改，如果想 build 时使用 dev 环境可配合 dotenv
13. next dev 默认用开发环境，next build 默认用生产环境
14. _next 基于 page router 用 getServerSideProps*和*getStaticProps，基于 app router 用 async/await + fetch_
15. next _getServerSideProps_ 获取 serverside render 时的 动态 props
16. next _getStaticProps_ 获取 static render 时的异步 props,都只在 server 上运行，且 build 后不会有代码给 client 端
17. next ssr 和 ssg 生成完整的 html 分 2 种情况，
    1. 直接在页面中使用 getStaticProps 或 getServerSideProps，生成的 html 会在 build 时生成，且不会在 client 端运行
    2. 在页面中使用 getInitialProps，生成的 html 会在每次请求时生成，且会在 client 端运行
18. next 的 server 组件可以直接用 async await 来获取数据，且不需要在页面中使用 getStaticProps 或 getServerSideProps，直接在组件中使用即可，甚至可以直接用 sql 语句来获取数据，且不会在 client 端暴露
