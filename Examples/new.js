function myNew(constructor, ...args) {
  // 1. 创建一个新对象，并将其原型指向构造函数的prototype
  const obj = Object.create(constructor.prototype)

  // 2. 调用构造函数，将this绑定到新创建的对象
  const result = constructor.apply(obj, args)

  // 3. 如果构造函数返回了一个对象，则返回该对象
  // 否则返回新创建的对象
  return typeof result === "object" && result !== null ? result : obj
}
