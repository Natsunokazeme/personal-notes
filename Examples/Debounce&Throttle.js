// 防抖函数 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
const debounce = (fn, delay, immediate = false) => {
  let timer = null
  if (immediate) {
    return function (...args) {
      const callNow = !timer
      if (timer) clearTimeout(timer)
      if (callNow) fn.apply(this, args)
      timer = setTimeout(() => {
        timer = null
      }, delay)
    }
  } else {
    return function (...args) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
  }
}

// 示例使用
const log = debounce((message) => {
  console.log(message)
}, 1000)

log("Hello") // 如果在1秒内没有再次调用，将会输出 'Hello'
log("World")

//节流函数，每隔一段时间，只执行一次函数
const throttle = (fn, delay) => {
  let flag = true
  return function (...args) {
    if (!flag) return
    flag = false
    fn.apply(this, args)
    //立即执行
    setTimeout(() => {
      flag = true
    }, delay)
  }
}
