1.clone henkel项目到本地时，先在devops上生成credentials，再复制其并插入到clone给定的https的henkel后，并在之间加上：
2.git不包括npm modules，所以clone或rebase等操作之后都需要 npm install
3.nerd的commit提交时message有格式要求 feat(): XXXXXXX
4.ng lint 的string不能用+相连，而是通过`$`更新string，空行不能连续2行以上，同一等级的变量名按字母排序，并且在最开始声明，
5.branch命名格式 feature/#{num}-xxxx_xxx_xx
6.将一个pbi拆分成多个task，并且每完成一个task提一次pr
7.cmd取消/终止当前操作 crtl+c
8.scss的mixin适用于多个属性绑定到一起
9.提pr时，若有conflict先本地解决再提pr
10.代码里不要有中文，注释里也不行，ngOnInit为空时直接删除（提pr时）
11.PBI，feature和task都以动词开头，组件名不能用动词
12.字符串首尾空格删除
13.margin-bottom采用margin-top替代
