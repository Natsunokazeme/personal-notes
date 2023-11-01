# 常见 loader 有哪些？

sass-loader：将 SCSS/SASS 代码转换成 CSS
css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
postcss-loader：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀
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

webpack-bundle-analyzer: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)
mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代 extract-text-webpack-plugin)
clean-webpack-plugin: 目录清理，每次打包时清理上一次打包文件
注:webpack5 有 output.clean 这个功能，无需再引入
html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)
define-plugin：定义环境变量 (Webpack4 之后指定 mode 会自动配置)
ignore-plugin：忽略部分文件
web-webpack-plugin：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用
uglifyjs-webpack-plugin：不支持 ES6 压缩 (Webpack4 以前)
terser-webpack-plugin: 支持压缩 ES6 (Webpack4)
webpack-parallel-uglify-plugin: 多进程执行代码压缩，提升构建速度
serviceworker-webpack-plugin：为网页应用增加离线缓存功能
ModuleConcatenationPlugin: 开启 Scope Hoisting
speed-measure-webpack-plugin: 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)

# Loader 和 Plugin 的区别？

Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。
因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。
Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。
Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

# Webpack 的构建流程是什么？从读取配置到输出文件这个过程尽量说全

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

# 代码打包优化实践

若有多个模块都依赖相同模块 a 时，可以将 a 模块抽出来作为公共模块单独打包，通过 optimization.splitChunks.cacheGroups 来自定义单独打包的模块及其规则
splitChunks.chunks 有 all async init

# manifest 是什么，它的作用是什么？

manifest 是 webpack 在打包过程中，用于追踪所有模块以及模块与模块之间的 hash 映射关系的数据文件。webpack 会对每个模块和每个 chunk 生成一个唯一的 hash 值，通过这个 hash 值来管理模块和 chunk。
manifest 的作用是用来管理模块之间的交互，当一个模块需要引用另一个模块时，会通过 manifest 中的映射关系找到对应的模块。