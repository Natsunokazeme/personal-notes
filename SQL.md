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
