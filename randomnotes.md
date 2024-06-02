1.clone henkel 项目到本地时,先在 devops 上生成 credentials,再复制其并插入到 clone 给定的 https 的 henkel 后,并在之间加上：
8.scss 的 mixin 适用于多个属性绑定到一起
13.margin-bottom 采用 margin-top 替代

1.  proxy 代理设置, target 将 location 的 origin 替代为 target,pathrewrite 将 origin 之后的 path 部分替换
2.  packege.json 里的 script 定义 npm 执行脚本, 用 npm run xxx 运行 xxx 对应的脚本

3.  设置 pipeline：1.需从 azure 上读值,先在 pipeline 的 library 上设置变量的 key 和 value(前端 library 叫 frontend-deploy)；2. 在代码库里设置 environment3.将设置的 environment 的值与 library 上的 key 在代码库里的 pipeline yml 文件中对应,如：echo "##vso[task.setvariable variable=api_community_bebaseurl]$(api_community_bebaseurl_dev)" //api_community_bebaseurl_dev 是 library 上的 key,api_community_bebaseurl 是代码库里的 key,这样就可以在代码库里的 environment 中使用了

4.  提升单元测试分支覆盖率技巧 若顶级的 template 显示未覆盖,可能是 shallowMount 导致子组件未渲染,子组件的 if else 分支未覆盖,可以通过 mount 解决,还可以写多个 describe,每个 describe 里的 it 都是独立的,可以提升分支覆盖率
5.  element.offsetHight 只读属性,返回该元素高度,不包含外边距,单位 px.

6.  H.264 是一种视频压缩算法,虽然有损但压缩比大,视频质量损失不大,被广泛使用.H.265 是 H.264 的升级版,压缩比更大,视频质量更好,但是编码速度慢,解码速度快,目前大部分设备不支持 H.265,所以 H.264 仍然是主流.

7.  机械学习:人为设定判断标准作为参数,通过不断调整参数,使得判断结果与实际结果越来越接近,从而达到自动判断的目的.
8.  深度学习:输入原始数据,通过多层神经网络,从底层到高层,自动逐渐提取特征,最终得到判断结果.该特征可能是人类无法理解的,但是确实有效的 zu,是算法从原始数据分析并提取出来的.因此,输入的数据越大,神经网络越深,最终得到的结果越准确.

9.  组件上的单向绑定属性的相对位置会影响组件内属性更新的先后顺序
10. 创建基础组建时样式不重要，可以通过 deep selector 来覆盖
