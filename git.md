1.clone github 上远程项目时，把 https 改为 git(该协议不支持 push，建议还是改为 http/https+取消代理)

git 将提交的修改保存为分支，分支名相当于指针指向某一个修改
每一个修改都有自己的 hash 值，用于该修改的绝对引用

2.git commit 只是提交修改到本地，要提交修改到远程还需 git push
commit 的时候需要 git commit -m"message" 添加 message 说明
3.idea 的 branch 选择在右下角
git bash 选择 git 运行的目录位置
git merge name1 合并分支 name1 到当前分支后的一个新节点上
git rebase name1 将 name1 分支的提交复制到当前分支上(即将当前分支移到 name1 后)
git remote remove origin 之后本地分支就没有远程主分支了，需要添加 origin 并设置当前 origin 为 main
即 git push --set-upstream origin main

git merge name1 //将 name1 分支合并到当前分支的下一个修改，并且当前分支指向下一个修改
git checkout name1 //切换到 name1 分支
git checkout -b name1 //新建一个 name1 分支指向当前修改并切换到该分支
git branch name2 //在当前修改处新建一个分支指向它
git branch -f name2 name1 //将 name2 分支指向 name1 分支所在修改
git rebase name1 //将当前分支指向的修改复制转移到 name1 分支后，并将当前分支指向该修改
git reset HEAD~1 //将当前分支移到上一个修改，即撤销修改 注：远程分支无效，只对本地有用
git revert HEAD //撤销当前修改，但方式是添加一个为 HEAD^的修改到 HEAD 后，使 HEAD 修改无效 能用于远程
name1^ // ^相对引用，指向 name1 分支的上一个修改
HEAD // 相对引用，表示当前修改
name1~3 // ~(num) ，表示 name1 分支的第前 3 个修改

git cherry-pick name1 name2 hash3 //将 name1 和 name2 指向的修改以及 hash3 修改按顺序复制到当前修改后，并将 hash3 设为该分支最新修改
git rebase -i name1 //将位于当前分支上且 name1 分支上没有的修改选中，弹出一个界面，可排序或删除修改们，并将结果 commit 到 name1 后面，当前分支指向该结果最新修改

git flow //一种规范格式
git fetch //从远程仓库下载本地仓库中缺失的提交记录并更新远程分支指针(如 o/main) 注意：只下载了缺少的远程修改，但并未改变本地分支指针
git pull //从远程仓库下载本地仓库中缺失的提交记录并更新远程分支指针(如 o/main)并将缺少的远程修改合并到本地分支
