1. 下载,直接下载社区版,不用 oracle 账号就行.
2. 创建账号，默认 root 账号，密码为空，不安全，建议修改密码。
3. docker 镜像 配置，启动 mysql 容器。

连表查询
left join right join inner join outer join
left join 以 left 为主表
right join 以 right 为主表
inner join 以两个表的交集为主表
outer join 以两个表的并集为主表
select xxx from table1 left join table2 on table1.id = table2.id
以 table1 为主表，table2 为从表，如果 table2 中的数据没有，那么就显示 null
