1.clone henkel 项目到本地时,先在 devops 上生成 credentials,再复制其并插入到 clone 给定的 https 的 henkel 后,并在之间加上：
8.scss 的 mixin 适用于多个属性绑定到一起
13.margin-bottom 采用 margin-top 替代

1.  proxy 代理设置, target 将 location 的 origin 替代为 target,pathrewrite 将 origin 之后的 path 部分替换
2.  packege.json 里的 script 定义 npm 执行脚本, 用 npm run xxx 运行 xxx 对应的脚本

3.  设置 pipeline：1.需从 azure 上读值,先在 pipeline 的 library 上设置变量的 key 和 value(前端 library 叫 frontend-deploy)；2. 在代码库里设置 environment3.将设置的 environment 的值与 library 上的 key 在代码库里的 pipeline yml 文件中对应,如：echo "##vso[task.setvariable variable=api_community_bebaseurl]$(api_community_bebaseurl_dev)" //api_community_bebaseurl_dev 是 library 上的 key,api_community_bebaseurl 是代码库里的 key,这样就可以在代码库里的 environment 中使用了
4.  fetch mode: cors, no-cors, same-origin,填 cors\*无效
5.  浏览器会根据用户设置和偏好自动将请求头的 accept-language 设置为对应的值。当服务器接收到请求时,会根据请求头的 accept-language 来决定返回的语言。如果服务器没有对应的语言,会返回默认语言。如果服务器没有设置默认语言,会返回第一个语言或者在一些字段上返回空值。（1h）

6.  提升单元测试分支覆盖率技巧 若顶级的 template 显示未覆盖，可能是 shallowMount 导致子组件未渲染，子组件的 if else 分支未覆盖，可以通过 mount 解决,还可以写多个 describe,每个 describe 里的 it 都是独立的,可以提升分支覆盖率
7.  element.offsetHight 只读属性，返回该元素高度，不包含外边距，单位 px。
8.  Linux top , 查看进程信息
