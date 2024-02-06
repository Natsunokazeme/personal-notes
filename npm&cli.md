save 和 save-dev 的区别
npm install --save-dev 会把依赖包信息添加到 package.json 文件 devDependencies 节点下，而 npm install --save 会把依赖包信息添加到 package.json 文件 dependencies 节点下。
devDependencies 里面的包只用于开发环境，不用于生产环境，而 dependencies 是需要发布到生产环境的。
npm install --save-dev 安装的包是不会被提交到 git 仓库的，而 npm install --save 会被提交到 git 仓库。
