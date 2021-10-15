1.clone github上远程项目时，把https改为git(该协议不支持push，建议还是改为http/https+取消代理)
2.git commit只是提交修改到本地，要提交修改到远程还需git push
    commit的时候需要git commit -m"message" 添加message说明
3.idea的branch选择在右下角
git bash 选择git 运行的目录位置
git merge name1 合并分支name1到当前分支后的一个新节点上
git rebase name1    将name1分支的提交复制到当前分支上(即将当前分支移到name1后)
git remote remove origin之后本地分支就没有远程主分支了，需要添加origin并设置当前origin为main
    即git push --set-upstream origin main
