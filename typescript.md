example:{
interface User {
name:string;
age:number;
gender:"woman"|"man"|string;
}
const user:User={
name:'前辈',
age:22,
gender:'man'
}
console.log(user);
}

interface 绑定到对象上时会在 runtime 之前仔细对比每一个类型，多了或者少了或者不符都会报错
可以用'|'来设置 union，

基本类型有 js 基本类型外还有
never any void enum

typescript 断言前！表示该类型为非空(undefined||null),?表示该类型如果存在则为？之后的类型

_函数重载：当希望根据函数的传入参数类型执行不同方法时进行的函数类型检查_
function pickCard(x: {suit: string; card: number; }[]): number;//重载 1
function pickCard(x: number): {suit: string; card: number; };//重载 2
function pickCard(x): any {
//function code
}
//先检查第一个重载，不符则第二个重载，再不符报错

1. ts enum 可以直接当类型用，也可以当值用，当值用时，可以通过 enum[key]来取值
2. typescript 要么都有，要么都没有的类型可以通过交叉类型来实现，如：
   ```ts
   type A = B & (C | Partial<Record<keyof C, never>>)
   Partial<Record<keyof C, never>> //代表 所有 C 相关字段都不能出现。
   ```
   相比于 type A = (B & C) | B ，A 不会在 B&Partial<C>时报错
