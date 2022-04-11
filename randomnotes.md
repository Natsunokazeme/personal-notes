1.clone henkel 项目到本地时，先在 devops 上生成 credentials，再复制其并插入到 clone 给定的 https 的 henkel 后，并在之间加上：
2.git 不包括 npm modules，所以 clone 或 rebase 等操作之后都需要 npm install
3.nerd 的 commit 提交时 message 有格式要求 feat(): XXXXXXX
4.ng lint 的 string 不能用+相连，而是通过`$`更新 string，空行不能连续 2 行以上，同一等级的变量名按字母排序，并且在最开始声明，
5.branch 命名格式 feature/#{num}-xxxx_xxx_xx 6.将一个 pbi 拆分成多个 task，并且每完成一个 task 提一次 pr
7.cmd 取消/终止当前操作 crtl+c
8.scss 的 mixin 适用于多个属性绑定到一起 9.提 pr 时，若有 conflict 先本地解决再提 pr 10.代码里不要有中文，注释里也不行，ngOnInit 为空时直接删除（提 pr 时）
11.PBI，feature 和 task 都以动词开头，组件名不能用动词 12.字符串首尾空格删除
13.margin-bottom 采用 margin-top 替代
14.transation 以当前位置为出发点进行移动，但还是推荐 animation
15.image 经常有 3px margin at bottom 是因为 the image behaving like a character of text。可设置 vertical-align;
16.setState 会把它的多次调用合成一次，只 render 一次
17.useEffect 第二个参数[value]表示该值改变且处于 update 时执行
若为[]则表示只在 mount 和 unmount 时执行
若无表每一次 update 都执行
18.下载功能实现
const link = document.createElement('a')
    link.download = fileName
    link.style.display = 'none'
    link.href = src
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
