// call bind apply
Function.prototype.call = function (context, ...args) {
  context = context || window
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.apply = function (context, args) {
  context = context || window
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.bind = function (context, ...args) {
  const fn = this
  return function (...newArgs) {
    // 如果没有传入 context，则默认指向 window
    context = context || window
    context.fn = fn
    return context.fn(...args, ...newArgs)
  }
}
