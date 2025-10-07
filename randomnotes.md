8.scss 的 mixin 适用于多个属性绑定到一起

1.  proxy 代理设置, target 将 location 的 origin 替代为 target,pathrewrite 将 origin 之后的 path 部分替换
2.  packege.json 里的 script 定义 npm 执行脚本, 用 npm run xxx 运行 xxx 对应的脚本

3.  设置 pipeline：1.需从 azure 上读值,先在 pipeline 的 library 上设置变量的 key 和 value(前端 library 叫 frontend-deploy)；2. 在代码库里设置 environment3.将设置的 environment 的值与 library 上的 key 在代码库里的 pipeline yml 文件中对应,如：echo "##vso[task.setvariable variable=api_community_bebaseurl]$(api_community_bebaseurl_dev)" //api_community_bebaseurl_dev 是 library 上的 key,api_community_bebaseurl 是代码库里的 key,这样就可以在代码库里的 environment 中使用了

4.  提升单元测试分支覆盖率技巧 若顶级的 template 显示未覆盖,可能是 shallowMount 导致子组件未渲染,子组件的 if else 分支未覆盖,可以通过 mount 解决,还可以写多个 describe,每个 describe 里的 it 都是独立的,可以提升分支覆盖率

5.  H.264 是一种视频压缩算法,虽然有损但压缩比大,视频质量损失不大,被广泛使用.H.265 是 H.264 的升级版,压缩比更大,视频质量更好,但是编码速度慢,解码速度快,目前大部分设备不支持 H.265,所以 H.264 仍然是主流.

6.  机械学习:人为设定判断标准作为参数,通过不断调整参数,使得判断结果与实际结果越来越接近,从而达到自动判断的目的.
7.  深度学习:输入原始数据,通过多层神经网络,从底层到高层,自动逐渐提取特征,最终得到判断结果.该特征可能是人类无法理解的,但是确实有效的 zu,是算法从原始数据分析并提取出来的.因此,输入的数据越大,神经网络越深,最终得到的结果越准确.

8.  组件上的单向绑定属性的相对位置会影响组件内属性更新的先后顺序
9.  创建基础组建时样式不重要，可以通过 deep selector 来覆盖
10. sdk：软件开发工具包，用于提供软件开发所需的工具和接口，简化开发流程，提高开发效率
11. tdk：标题、关键词、描述，是网页的三大核心元素，用于提高网页在搜索引擎中的排名
12. git merge 代码时还需注意 merge 方式，Squash 合并会多个提交压缩成一个单一提交的合并方式，不会关联目标分支； Fast-forward 合并后，提交历史会按序保留下来并关联目标分支。所以从 master 合到自己的分支时推荐 fast forward，方便看更改记录和提交历史，从自己分支合到 master 时推荐 squash，这样使 master 分支简化提交历史，避免这些中间提交过于杂乱。(3h)
13. nvm 和 n 都是管理 node 版本的工具，nvm 是 node 版本管理工具，n 是 nodejs 包管理工具。n 切换版本时不会更改全局模块，可能造成兼容性影响。而 nvm 切换版本会更改全局模块。

14. 为了防止页面崩溃，在获取后端数据时都应该加?来防止抛出异常，如：data?.name?.age
15. ES6 模块<script type="module">默认具有 defer 行为。
16. 断点续传如何具体实现
17. jwt
18. react key
19. vite 和 webpack 区别
20. 安全与攻击
21. setTimeout 等 timer 在 await 后的用法并不会等到 timer 执行完才完成 await，而是获取到 timer 的 Id 也就是注册好任务之后就完成 await 了
22. react server component
23. ISR
24. streaming SSR
25. zustand 实现原理
