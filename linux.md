1. cd 打开文件
2. mkdir 创建文件夹
3. touch 更新已存在的文件时间标签或创建新文件
4. ls 列出当前目录下的文件
5. alias 列出所有的别名或更改别名
6. echo 输出字符串
7. pkill 杀死指定进程
8. !! 返回上一条指令
9. which xxx. linux 命令，查看 xxx 所在路径 返回第一个查找到的路径
10. whereis xxx. linux 命令，查看 xxx 所在路径
11. ip addr. linux 命令，查看 ip 地址
12. ｜ : 管道符，将前面的命令的输出作为后面命令的输入, 例如：ls -l | grep "test" //将 ls -l 的输出作为 grep "test"的输入
13. grep : 搜索文件内容，例如：grep "test" test.txt //搜索 test.txt 中包含 test 的行
14. xargs : 将前面命令的输出作为后面命令的参数，例如：ls -l | grep "test" | xargs rm //将 ls -l | grep "test"的输出作为 rm 的参数
15. top 查看进程信息
16. clear 清屏
17. netstat 查看网络状态
18. ps 查看进程状态
19. cat 查看文件内容
20. linux 创建虚拟机后 要为虚拟机安装执行环境,我以 node 为例,node 版本不能太高,centOS7 不支持,node 版本不能太低,nest 无法执行,推荐 14 版本 node.node 下载安装之后要把 node 添加到环境变量方便所有目录下都能使用,node 版本控制工具 nvm
21. ping ls kill cd echo code yum node nvm git which whereis vi sudo !! mkdir rm ip wget tar service
22. Linux 分为很多版本,其中 centOS 是 red hat 发行的版本,不同版本的命令和资源库不同,我用的 centOS7
