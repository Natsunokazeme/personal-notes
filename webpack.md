# 常见 loader 有哪些？

svgr-loader：将 SVG 转换成 React 组件
sass-loader：将 SCSS/SASS 代码转换成 CSS
css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
postcss-loader：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀
resolve-url-loader：处理 css 文件中的相对路径
file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)
url-loader：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)
source-map-loader：从现有源文件提取现有的 Source Map 文件(即没有编译的源文件)，以方便断点调试
babel-loader：把 ES6+的 js 代码 转换成 ES5 兼容的 js 代码，需配合 babel 工具链
eslint-loader：通过 ESLint 检查 JavaScript 代码
tslint-loader：通过 TSLint 检查 TypeScript 代码
ts-loader: 将 TypeScript 转换成 JavaScript
image-loader：加载并且压缩图片文件
svg-inline-loader：将压缩后的 SVG 内容注入代码中
raw-loader：加载文件原始内容（utf-8）
json-loader 加载 JSON 文件（默认包含）
handlebars-loader: 将 Handlebars 模版编译成函数并返回
awesome-typescript-loader：将 TypeScript 转换成 JavaScript，性能优于 ts-loader
mocha-loader：加载 Mocha 测试用例的代码
coverjs-loader：计算测试的覆盖率
vue-loader：加载 Vue.js 单文件组件
i18n-loader: 国际化
cache-loader: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里

# 常见 plugin 有哪些？

webpack-bundle-analyzer: 可视化 Webpack 输出文件的体积,依赖关系,引用次数 (业务组件、依赖第三方模块)
uglifyjs-webpack-plugin：不支持 ES6 压缩 (Webpack4 以前)
terser-webpack-plugin: 支持压缩 ES6 (Webpack4)
mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代 extract-text-webpack-plugin)
css-minimizer-webpack-plugin: 压缩 CSS，支持 CSS 压缩工具 cssnano
html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader),自动注入生成的 script 和 link 标签
clean-webpack-plugin: 目录清理，每次打包时清理上一次打包文件
注:webpack5 有 output.clean 这个功能，无需再引入
define-plugin：定义环境变量 (Webpack4 之后指定 mode 会自动配置)
ignore-plugin：忽略部分文件
web-webpack-plugin：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用
webpack-parallel-uglify-plugin: 多进程执行代码压缩，提升构建速度
serviceworker-webpack-plugin：为网页应用增加离线缓存功能
ModuleConcatenationPlugin: 开启 Scope Hoisting
speed-measure-webpack-plugin: 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)

# _Loader 和 Plugin 的区别？_

Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。
因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。
Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。
Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

# _Webpack 的构建流程是什么？从读取配置到输出文件这个过程尽量说全_

初始化参数：从配置文件和命令行语句中读取与合并参数，得出最终的参数
开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译
确定入口：根据配置中的 entry 找出所有的入口文件
编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。
简单说

初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler
编译：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理
输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中

# Babel 原理

Babel 将代码分为两个阶段：parse 和 transform。
parse 阶段将代码解析成抽象语法树 AST，这个阶段又分为两个阶段：词法分析和语法分析。
transform 阶段对 AST 进行转换处理，最后再将 AST 转换成代码。
Babel 的配置项主要分为以下几类：
语言环境：指定要解析的 ECMAScript 版本，以及要使用的 ECMAScript 提案阶段
插件：用于支持某些新语法的解析，比如箭头函数、类、装饰器等
预设：一组插件的集合，比如 @babel/preset-env 包含了解析所有 ECMAScript 提案阶段的插件
其他配置项：比如是否生成 source map、是否生成注释等

## AST 是啥

AST (abstract syntax tree )就是抽象语法树，是用树状结构表示源代码的形式。通过遍历这个树，可以获取到源代码中的每个语法节点。如函数调用，变量声明，循环等.浏览器会把 js 源码通过解析器转为抽象语法树，再进一步转化为字节码或直接生成机器码。

## babel-polyfill 和 babel-runtime 的区别

babel-polyfill 是对浏览器不支持的新 API 进行垫片，比如 Promise、Set、Map 等，会污染全局环境
babel-runtime 是对工具函数进行垫片，比如 \_extends、\_classCallCheck 等，不会污染全局环境

## babel-preset-env 的作用是什么？

通过配置 targets 参数，告诉 babel 要支持的浏览器环境，babel 会根据 targets 自动将代码转换成当前环境所支持的代码。

## babel-plugin-transform-runtime 的作用是什么？

babel-plugin-transform-runtime 会将代码中的工具函数替换成 babel-runtime 下的对应模块，从而减少打包后的代码体积。会污染全局环境

# 代码打包优化实践

## 查看模块依赖关系

1. 通过 resolver 这个库可以查看模块之间的依赖关系，可以通过这个库来查看模块之间的依赖关系,当打包模块时，webpack 使用 enhanced-resolve 来解析文件路径。
   module.exports = {
   //...
   resolve: {
   // configuration options
   },
   };

2. bundle 分析工具 webpack-bundle-analyzer
   通过 webpack-bundle-analyzer 可以可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)
   module.exports = {
   //...
   plugins: [new BundleAnalyzerPlugin()],
   };

## 代码分割

1. 在入口配置项里配置 dependOn,可以将多个入口模块的公共模块抽出来单独打包

   ```javascript
   entry: {
      index: {
         import: './src/index.js',
         dependOn: 'shared',
      },
      another: {
         import: './src/another-module.js',
         dependOn: 'shared',
      },
      shared: 'lodash',
   },
   ```

2. SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。通过 optimization.splitChunks.cacheGroups 来自定义单独打包的模块及其规则,splitChunks.chunks 有 all async init

async 仅处理异步加载的 chunk (通过 import() 动态导入的模块)，默认值。 减少初始加载时间，提升首屏性能 同步代码中的公共模块不会被提取，可能导致重复打包
initial 仅处理同步加载的 chunk (入口文件直接引入的模块) 可能造成重复打包
all 同时处理同步和异步的 chunk，允许他们共享公共模块

```javascript
optimization: {
 splitChunks: {
   chunks: 'async',
   minSize: 20000,//生成 chunk 的最小体积（以 bytes 为单位）。
   minRemainingSize: 0,
   minChunks: 1,//拆分提取前必须被不同模块引用的最小 chunks 数。
   maxAsyncRequests: 30,
   maxInitialRequests: 30,
   enforceSizeThreshold: 50000,
   cacheGroups: {
     defaultVendors: {
       test: /[\\/]node_modules[\\/]/,
       priority: -10,
       reuseExistingChunk: true,
     },
     default: {
       minChunks: 2,
       priority: -20,
       reuseExistingChunk: true,
     },
   },
 },
},
```

# chunks

打包好 chunks 后，加载页面时会请求 chunks，如果未优化会一次请求很多 chunks 造成加载速度变慢

# manifest 是什么，它的作用是什么？

manifest 是 webpack 在打包过程中，用于追踪所有模块以及模块与模块之间的 hash 映射关系的数据文件。webpack 会对每个模块和每个 chunk 生成一个唯一的 hash 值，通过这个 hash 值来管理模块和 chunk。
manifest 的作用是用来管理模块之间的交互，当一个模块需要引用另一个模块时，会通过 manifest 中的映射关系找到对应的模块。

# 指定依赖包的版本

1. 通过 package.json 的 dependencies 字段指定依赖包的版本，这种方式会锁定依赖包的版本，当依赖包的版本发生变化时，需要手动更新 package.json 文件。
2. 通过 webpack 的 resolve.alias 配置项指定依赖包的版本，这种方式不会锁定依赖包的版本，当依赖包的版本发生变化时，不需要手动更新 package.json 文件。
   resolve: {
   alias: {
   react: 'react-16.8.6',
   },
   },

# tree shaking

删除未引用的代码减少打包体积

1. 通过 package.json 的 sideEffects 字段来标记哪些文件是有副作用的，哪些文件是没有副作用的，这样 Webpack 在打包时就可以安全地删除未引用并且没有副作用的代码。
   "sideEffects": []｜ boolean
2. 标记未引用的代码
   通过 UglifyJSPlugin 插件的 warningsFilter 选项可以标记未引用的代码
   new UglifyJSPlugin({
   uglifyOptions: {
   warningsFilter: (src) => {
   if (/Dropping unused/.test(src)) {
   return true;
   }
   },
   },
   }),

## 解释 tree shaking 和 sideEffects

sideEffects 和 usedExports（更多被认为是 tree shaking）是两种不同的优化方式。
sideEffects 更为有效 是因为它允许跳过整个模块/文件和整个文件子树。
usedExports 依赖于 terser 去检测语句中的副作用。它是一个 JavaScript 任务而且没有像 sideEffects 一样简单直接。而且它不能跳转子树/依赖由于细则中说副作用需要被评估。尽管导出函数能运作如常，但 React 框架的高阶函数（HOC）在这种情况下是会出问题的。通过添加 /_#**PURE**_/ 到函数声明，标识函数没有副作用。

# uglifyjs-webpack-plugin

uglifyjs-webpack-plugin 插件可以在单文件内删除未引用的代码和不可达的代码，减少打包体积。
new UglifyJSPlugin({
uglifyOptions: {
warningsFilter: (src) => {
if (/Dropping unused/.test(src)) {
return true;
}
},
},
}),

# devDependencies

通过 package.json 的 devDependencies 字段指定在开发环境下需要依赖的包，这些包不会被打包到最终的输出文件中，只会在开发环境下使用。

# terser-webpack-plugin

对 ES6+语法支持更好，压缩算法更好
u 和 glifyjs-webpack-plugin 插件类似，可以在单文件内删除未引用的代码和不可达的代码，减少打包体积

# _打包体积优化_

1. 静态引用，只引用需要的模块，而不是通过 `import * from xxx `的形式动态引入
2. 通过 include exclude 来限制 loader 的作用范围,避免不必要的 loader 的执行
3. 将一些不常变化的第三方库通过 cdn 的形式引入，减少打包体积
4. 合理使用 plugin，例如 moment 库，可以通过 webpack 的 IgnorePlugin 来忽略掉 moment 的 locale 文件，减少打包体积
5. 通过 terser-webpack-plugin 插件来压缩代码，减少打包体积
6. 将小型图片转换成 base64 的形式，减少 http 请求，提升页面加载速度(打包体积会变大但页面更流畅)
7. optimization 配置，提取公用代码
8. 压缩资源 gzip 压缩算法 brotli 压缩算法 compression-webpack-plugin

_单页面应用开启动态路由_ 2days
_在 devServer 中配置 historyApiFallback: true, 使得单页面应用开启动态路由，也可以自定义要重定向的页面_
刷新页面时服务器会直接请求对应 url 的文件，而这个文件并不存在，导致 404 错误。当 historyApiFallback 为 true 时，所有的 404 都会重定向到 index.html 并且不改变 history，之后 index.html 里的代码会解析 history 并返回对应路由的资源。

webpack tips

1. webpack 默认是将所有的模块打包成一个 js 文件，这样会造成初次加载时 js 文件过大，等待时间过长，所以需要将 js 文件分割成多个文件，这样可以实现按需加载，提高加载速度。
2. webpack svg 可通过 svgr 转化为 react 组件引入,但 typescript 里需要声明 svg 模块,否则会报错
   `typescript
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}
`
3. webpack 打包后的 dist 是在浏览器而不是 node 环境下运行的，所以不能使用 node 的模块
4. webpack 的 definePlugin 插件可以定义全局变量，如 process.env.NODE_ENV，这样可以传递 node 环境变量到浏览器环境

# webpack 的 hash chunkhash contenthash 分别是什么

hash 所有文件哈希值相同； chunkhash 根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的哈希值； contenthash 计算与文件内容本身相关，主要用在 css 抽取 css 文件时

# 为什么有了 babel 还需要 polyfill

babel 只是一个转码器，只能转换新的语法，而不能转换新的 API，比如 Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。这时就需要 polyfill 来解决这个问题

# webpack 打包 css 原理

1. 通过 css-loader 将 css 文件转换成 style-loader 能识别的对象
2. 通过 style-loader 生成 style 标签并将对象插入到该标签中

# webpack 打包优化实例

1. 代码分割（Code Splitting）
   场景：单页应用（SPA）首屏加载慢，主包过大。
   优化方案：
   动态导入（Dynamic Imports）：将非首屏代码拆分为异步块。

```javascript
// 异步加载组件
const Home = () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
```

加快首屏加载速度，按需加载其他页面。

2. Tree Shaking
   ES6 模块化：确保使用 import { map } from 'lodash-es' 而非 import \_ from 'lodash'。
   Lodash 体积从 500KB→50KB（仅保留使用的方法）。

3. 缓存组（Cache Groups）

   ```javascript
   optimization: {
   splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
   },
   }
   ```

   提取公共依赖模块，减少重复打包。

4. 图片压缩（Image Minimization）
   使用 image-minimizer-webpack-plugin 减少图片体积，无损视觉质量。
5. 持久化缓存（Persistent Caching）
   二次构建时全量重新编译，耗时较长。设置 cache，仅编译变更的模块。
   ```javascript
   module.exports = {
     cache: {
       type: "filesystem", // 使用文件系统缓存
       buildDependencies: {config: [__filename]},
     },
   }
   ```
