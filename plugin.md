# _Swiper_

1.swiper 要先在 module 中引入

2.使用时还要在 css 里单独引入对应的样式，否则不显示
3.angular 中，把 encapsulation: ViewEncapsulation.None，加在@component 下
注意：此语句 swiper 教程里未提到，但不加导致 swiper 引入的 css 无效
(https://angular.io/api/core/ViewEncapsulation#viewencapsulation)

踩坑 3.5h

# _tailwindcss_

1. tailwindcss 的基本用法，可以通过 tailwindcss.config.js 来自定义，是一种写在 html 上的 css 样式集合
2. tailwind 推荐用 float-right:boolean 而不是 float-{{right}}.

插件 gray-matter 可以解析 md 文件的头部信息,如 title，date，tags 等;clsx 可以根据条件更改 class;
styled()是 mui 等 UI 库调用的 js 生成 class 的 API，可以用来生成 class，也可以用来生成组件
代理软件无法在 terminal 里代理，所以得单独在 terminal 里设置代理
启用本机 ip 访问，react: HTTPS=true npm start;angular: ng serve --host 0.0.0.0
node 版本管理可通过 npm i -g n 实现控制 切换 node 时需要 sudo
nx dep-gragh 用于查看依赖关系

# _bootstrap_

1.collapse 用于折叠 可直接加 css 展开的 css 为 .collapse.show，折叠的 css 为.collapse, 期间的动画 css 为.collapsing
2.collapse 通过 js 控制，需要先引入 jquery，然后通过 $('#id').collapse('show')来控制，否则通过 getElementsByClassName 等方法取的 dom，再通过
var bsCollapse = new bootstrap.Collapse(el, {
toggle: false
})
bsCollapse.hide();
控制。 3.可以使用带有 href 属性的连接或是带有 data-bs-target 属性的按钮。在这两种情形下， data-bs-toggle="collapse"都是必要的。
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Link with href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
Button with data-bs-target
</button>
它们一起控制 id 为 collapseExample 的元素

# _husky_

用于在执行 git 命令时执行 script 脚本命令

# _immer.js_

通过 proxy 实现不可变数据，可以直接修改 state，不用再通过深拷贝的方式修改 state。只有修改过的地方才会被拷贝，其他地方还是指向原来的地址。但 proxy 是 es6 新特性，在之前的版本中会通过 Object.defineProperty 实现。因此未修改过的地方是===的

# _tanstack react query_

是一个用于数据获取、缓存、同步和更新的库，专门用于管理 React 应用中的服务器状态。它的主要功能包括：

1. 数据获取（Fetching）
   提供 useQuery 和 useMutation 钩子来处理数据请求和提交。
   支持基于 queryKey 的自动缓存和数据同步。
2. 缓存与自动更新（Caching & Syncing）
   内置缓存机制，避免重复请求相同数据。
   根据 staleTime 和 cacheTime 控制数据的过期和回收。
3. 后台自动刷新（Background Refetching）
   支持 refetchInterval 进行定期数据刷新。
   refetchOnWindowFocus 选项在窗口重新聚焦时自动刷新数据。
4. 乐观更新（Optimistic Updates）
   允许在请求完成前先更新 UI，提高用户体验。
   onMutate 进行本地状态更新，onSuccess 进行回滚处理。
5. 错误重试（Error Handling & Retry）
   失败请求会自动重试，可配置重试间隔和次数。
   结合 useErrorBoundary 进行错误处理。
6. 并行和依赖查询（Dependent & Parallel Queries）
   useQueries 可以批量请求多个 API。
   enabled 选项可控制是否发起查询（如等另一个请求完成后再执行）。
7. SSR & Hydration
   在 Next.js 这样的 SSR 框架中支持服务端预取数据并在客户端复用。

   优点：
   ✅ 简化数据请求逻辑：用 useQuery 代替 useEffect + useState + fetch 组合，代码更简洁。
   ✅ 自动缓存和更新：避免不必要的 API 请求，提高性能。
   ✅ 错误处理更直观：内置错误重试机制，减少手动处理请求失败的负担。
   ✅ 优化用户体验：支持乐观更新、后台数据同步，使交互更流畅。
   ✅ 与 React 生态兼容：能很好地结合 Zustand、Redux、Recoil 等状态管理库使用。

   缺点
   ❌ 学习成本较高：相比传统的 fetch 或 axios 直接请求，多了一层抽象，需要学习 queryClient、queryKey、mutation 等概念。
   ❌ 客户端侧为主：虽然支持 SSR，但需要手动处理数据的 hydrate，SSR 体验相比 SWR 稍复杂。
   ❌ 全局缓存管理：如果数据流较为复杂，管理 queryClient 可能会带来一定的额外成本。
   ❌ 不适用于所有场景：适用于 REST API、GraphQL，但如果是 WebSocket 这类实时通信方式，可能需要额外的逻辑支持。

# svgr

1. 打包时会将 svg 转化为 react 组件，可以通过 override 配置文件进行配置，如是否压缩等，默认会压缩但会去掉 viewBox 等属性，可更改配置保留原始 viewBox(3h)
2. svgr 里的 svgo 会将 svg 中的 id 进行压缩转化，可能造成 id 冲突，可采用 minify：false 阻止这一默认行为

# react-hooks-form

1. react hook form 的 register 方法只适用于能直接绑定到 input 的表单，如 input, select, textarea 等，而 controller 方法功能更强大，能用于自定义组件等。(1h)
2. react hook form 的 reset 部分 reset form 时会导致其他 field 为 undefined
3. react hook form 获取 ArrayFields 的 field 值时，需要通过 getValue 方法获取，而不是直接通过 field.value 获取，因为 react 的更新机制，field.value 不会立即更新，而是在下一次 render 时才会更新，而 getValue 方法会立即获取最新值 (1h)
4. 因为 field.value 不会立即更新，所以 watch 也不会立即获取到最新值，而是会在下一次 render 时才会获取到最新值，所以如果需要立即获取最新值，可以通过 getValue 方法获取。（0.5h）
5. react hook form 的 useFieldArray 的 update 和 reset 方法会导致 field 的 unmount 和 remount,会导致相应的组件重新触发生命周期，如果不想 unmount 和 remount，可以通过 setValue(`fields${index}.xxx`,value) 方法设置值。
6. react hook form getValue 虽然能同步获取最新值，但不会触发重新渲染，建议通过 watch 的方式获取最新值，watch 会在值改变时触发重新渲染
7. react hook form 的 useWatch 方法可以监听值的同时不触发重新渲染，适用于监听值的同时不需要重新渲染的场景。
8. react hook form setValue 不会标记 field 为 dirty
9. react hook form 的 formState 的 isDirty 会根据初始值和当前值进行比较，如果初始值和当前值相同，则 isDirty 为 false，否则为 true。
10. react hook form 的 formState 的 isTouched 是异步的，不会获取到最新值。
11. react hook form 的 field.onChange(undefined) 并不会将字段的值设置为 undefined。相反，RHF 会将字段的值重置为其 defaultValue，这是由于 RHF 的内部机制将 undefined 视为触发默认值回退的信号，而不是一个有效的字段值。

# zustand

1. zustand 因为 react 的优先调度更新机制，可能不会立即更新值，要获取最新值可通过 store.getState()拿到

# mui

1. mui datePicker 的 slot 设置 textfield 时会导致 slotProp 的 textfield 失效
2. mui data grid 要用 flex container 包起来，否则会一直增加高度
3. mui 中, click calendar input 会触发两次 focus，后面一次可能比较晚导致触发 popper 的 blur，可用 setTimeout 解决。原理未知
4. mui 中， textField 的 label 并没有垂直居中，而是写死了 transform，一旦更改 TextField 的高度，label 就会偏移
5. mui 可直接在 sx 中设置不同断点的样式，如：

```js
sx={{
  display: { xs: "none", sm: "block" },
  backgroundColor: { xs: "red", sm: "blue" },
}}
```

# react-pdf

1. react pdf View 组件内报错会导致整个 View 组件为空，因此推荐每个 Text 包一个 View 组件，防止因为一个组件报错导致所有区域为空(2 days)

# dotenv

可以覆盖 build 时的环境变量
