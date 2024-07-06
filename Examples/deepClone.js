function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  }

  const cloned = {}
  for (let key in obj) {
    cloned[key] = deepClone(obj[key])
  }
  return cloned
}
// 循环引用
const obj = {a: 1}
obj.b = obj
const cloned = deepClone(obj)
console.log(cloned) // { a: 1, b: [Circular] }
