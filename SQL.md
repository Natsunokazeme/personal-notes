1. SQL keywords uppercase, table name and column name lowercase
2. SELECT \* FROM table WHERE column = 'value';
3. SELECT DISTINCT column FROM table; // Returns unique values 即去重
4. SELECT COUNT(\*) FROM table; // Returns the number of selected rows
5. WHERE <> // Not equal to; != // Not equal to;
6. BETWEEN // Between a certain range;IN // Within a set;
7. LIKE // Search for a pattern;
8. AND // Both conditions are true;OR // Either condition is true;NOT // Reverse the result, equals to "!=";
9. use () to group conditions
10. ORDER BY column1,column2 ASC|DESC; // Sort the result by first column1, then column2
11. UPDATE table SET column1 = value1, column2 = value2 WHERE condition; //warning: no WHERE clause, all rows will be updated
12. DELETE FROM table WHERE condition; //warning: no WHERE clause, all rows will be deleted
13. SELECT TOP number/percents column(s) FROM table WHERE condition; // Select top number/percents rows that meet the condition
14. COUNT // Count the number of rows;SUM // Sum the values in a column;AVG // Return the average value;MAX // Return the largest value;MIN // Return the smallest value;
15. WHERE column LIKE patten // patten: % // Match any string;\_ // Match any single character;[charlist] // Match any single character in charlist;[^charlist] // Match any single character not in charlist;
16. WHERE column IN (value1,value2,value3,...) // Match any value in the list
17. WHERE column BETWEEN value1 AND value2 // Match any value within the range
18. SELECT column1 AS alias1, column2 AS alias2 FROM table; // Use AS to set alias
19. SELECT column1+','+ column2 AS alias FROM table; // set alias for a calculated column
20. GROUP BY column1,column2 HAVING condition; // Group the result by column1 and column2, then apply the condition
21. HAVING // equals to WHERE, used to be combined with functional conditions that WHERE can't be combined with.
22. 模糊查询 select \* from table where column like '%value%'; value 是要查询的值, %表示任意字符, %value%表示包含 value 的值 和 15 条意义相同
23. where 和 on 的区别,on 只能用于连接查询,where 可以用于连接查询和普通查询,where 是对查询结果进行过滤,而 on 是对连接的表进行过滤,未找到匹配的行不会出现在结果中,where 是对查询结果进行过滤,未找到匹配的行会出现在结果中

MySQL

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
