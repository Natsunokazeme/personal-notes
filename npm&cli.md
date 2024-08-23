save 和 save-dev 的区别
npm install --save-dev 会把依赖包信息添加到 package.json 文件 devDependencies 节点下，而 npm install --save 会把依赖包信息添加到 package.json 文件 dependencies 节点下。
devDependencies 里面的包只用于开发环境，不用于生产环境，而 dependencies 是需要发布到生产环境的。
npm install --save-dev 安装的包是不会被提交到 git 仓库的，而 npm install --save 会被提交到 git 仓库。

npm 是 Node.js 的默认包管理工具，随同 Node.js 一起安装。npm 的全称是 Node Package Manager，意为 Node 包管理器。
yarn 比 npm 更快，因为它会并行下载依赖包，而 npm 是串行下载依赖包。yarn 会缓存所有下载过的依赖包，下次安装时直接从缓存中读取，而 npm 没有缓存机制，每次都需要重新下载。

peerDependencies
peerDependencies 是指依赖包的依赖包，即依赖包的使用者可以安装指定版本范围内的依赖包而不是特一版本的。

在 npm3 之前，node_modules 的结构是 nested 的形式，即依赖包的依赖包会放在依赖包的 node_modules 目录下。这种结构会导致依赖包的依赖包可能会被多次安装，造成磁盘空间的浪费，以及 windows 系统下路径过长的问题。
在 npm3 及之后和 yarn 中，node_modules 的结构是 flat 的形式，即所有依赖包都会采用 hoist 机制被安装到项目的 node_modules 目录下，不会出现 nested 的情况。这种结构解决了磁盘空间的浪费和路径过长的问题。但对于同一个包的不同依赖版本(不同包依赖了同一个包的不同版本)，npm 只会将第一次遍历到的版本 flat 到顶层，而后续安装的版本只会在对应的依赖包下安装，类似 nested 的结构，也会导致 nested 出现的问题。同时会产生幽灵依赖问题。

Phantom dependencies 幽灵依赖

即用户没有直接安装的依赖包 a，但是由于用户安装了其他依赖包 b 依赖于 a，导致这个依赖包 a 被 flat 安装到了 node_modules 顶层目录下。由于 nodejs 的寻径原理，用户可以直接引用该依赖包 a，这种依赖包称为幽灵依赖。当依赖包 b 变更依赖或有 break change 时，依赖包 a 可能会被移除，导致用户引用了 a 的原有代码出现问题。

pnpm
为了解决以上 flat 产生的问题，出现了 pnpm。 即 performance npm，是一个快速、节省磁盘空间的 npm 替代品。pnpm 先将所有模块安装到一个全局共享的目录中并获取对应的硬连接。通过.pnpm 目录保存硬连接，再根据 node_modules 依赖关系生成 nested 的软连接结构。
对于 peerDependencies，pnpm 会将 所有符合 peerDependencies 规则的不同版本的依赖包进行全部下载，然后在 nested 结构里进行排列组合，以满足所有依赖包的 peerDependencies 规则。
