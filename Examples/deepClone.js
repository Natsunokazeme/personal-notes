function deepClone(obj, seen = new WeakSet()) {
  //推荐用WeakSet，防止内存泄露
  if (obj === null || typeof obj !== "object") {
    return obj
  }
  if (seen.has(obj)) {
    throw new Error("Circular reference detected")
  }
  seen.add(obj)
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item, seen))
  }

  const cloned = {}
  //此处还可以进一步注意原型链。推荐用Object.Keys或者Object.getOwnPropertyNames，Reflect.ownKeys()
  for (let key in obj) {
    // 会遍历原型链上的可枚举属性
    cloned[key] = deepClone(obj[key], seen)
  }
  return cloned
}
// 循环引用
const obj = {a: 1}
obj.b = obj
const cloned = deepClone(obj)
console.log(cloned) // { a: 1, b: [Circular] }
//去除循环引用
const map = new Map()
