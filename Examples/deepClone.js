function deepClone(obj, seen = new WeakSet()) {
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
  for (let key in obj) {
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
