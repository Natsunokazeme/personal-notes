const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"

export class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    this.resolved = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
      }
    }

    this.rejected = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
      }
    }

    this.race = (promises) => {
      return new MyPromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
          if (promises[i] instanceof MyPromise) {
            promises[i].then(resolve, reject)
          } else {
            resolve(promises[i])
          }
        }
      })
    }

    this.all = (promises) => {
      return new MyPromise((resolve, reject) => {
        const result = []
        for (let i = 0; i < promises.length; i++) {
          if (promises[i] instanceof MyPromise) {
            promises[i].then(
              (value) => {
                result.push(value)
                if (result.length === promises.length) {
                  resolve(result)
                }
              },
              (reason) => {
                reject(reason)
              }
            )
          } else {
            result.push(promises[i])
            if (result.length === promises.length) {
              resolve(result)
            }
          }
        }
      })
    }

    this.allSettled = (promises) => {
      return new MyPromise((resolve, reject) => {
        const res = []
        const addRe = (value) => {
          res.push({
            status: FULFILLED,
            value: value,
          })
          if (res.length === promises.length) {
            resolve(res)
          }
        }
        for (let i = 0; i < promises.length; i++) {
          if (promises[i] instanceof MyPromise) {
            promises[i].then(addRe, (reason) => {
              res.push({
                status: REJECTED,
                reason: reason,
              })
              if (res.length === promises.length) {
                resolve(res)
              }
            })
          } else {
            addRe(promises[i])
          }
        }
      })
    }

    this.any = (promises) => {
      return new MyPromise((resolve, reject) => {
        const reasons = []
        for (let i = 0; i < promises.length; i++) {
          if (promises[i] instanceof MyPromise) {
            promises[i].then(resolve, (reason) => {
              reasons.push(reason)
              if (reasons.length === promises.length) {
                reject(reasons)
              }
            })
          } else {
            resolve(promises[i])
          }
        }
      })
    }

    try {
      executor(this.resolved, this.rejected)
    } catch (error) {
      this.rejected(error)
    }

    this.then = (onFulfilled, onRejected) => {
      if (this.status === FULFILLED) {
        onFulfilled(this.value)
      }
      if (this.status === REJECTED) {
        onRejected(this.reason)
      }
      return this
    }

    this.catch = (onRejected) => {
      if (this.status === REJECTED) {
        onRejected(this.reason)
      }
      return this
    }
  }
}

new MyPromise()
  .race([
    new MyPromise((resolve) => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    }),
    new MyPromise((resolve) => {
      setTimeout(() => {
        resolve(2)
      }, 2000)
    }),
    new MyPromise((resolve) => {
      setTimeout(() => {
        resolve(3)
      }, 3000)
    }),
  ])
  .then((value) => {
    console.log(value)
  })

class NewPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.resolved = (value) => {
      if (this.status == PENDING) {
        this.value = value
        this.status = FULFILLED
        return this.value
      }
    }
    this.rejected = (reason) => {
      if (this.status == PENDING) {
        this.reason = reason
        this.status = REJECTED
        return this.reason
      }
    }

    try {
      executor(this.resolved, this.rejected)
    } catch (e) {
      this.rejected(e)
    }

    this.then = (valueAction, reasonAction) => {
      if ((this.status = FULFILLED)) {
        valueAction(this.value)
      }
      if ((this.status = REJECTED)) {
        reasonAction(this.reason)
      }
      return this
    }

    this.catch = (reasonAction) => {
      if ((this.status = REJECTED)) {
        reasonAction(this.reason)
      }
      return this
    }

    this.all = (promises) => {
      // 检查输入是否为可迭代对象
      if (!Array.isArray(promises)) {
        return NewPromise.reject(new TypeError("Argument must be an array"))
      }

      // 处理空数组情况
      if (promises.length === 0) {
        return NewPromise.resolve([])
      }
      //all要么报出最先reject的要么所有成功的
      const len = promises.length
      const res = new Array(len)
      let remain = len
      return new NewPromise((resolve, reject) => {
        for (let i = 0; i < len; i++) {
          if (promises[i] instanceof NewPromise) {
            promises[i].then(
              (value) => {
                res[i] = value
                remain--
                if (remain === 0) {
                  resolve(res)
                }
              },
              (reason) => {
                reject(reason)
              }
            )
          } else {
            NewPromise.resolved(promises[i]).then((value) => {
              res[i] = value
              remain--
              if (remain === 0) {
                resolve(res)
              }
            })
          }
        }
      })
    }

    this.race = (promises) => {
      return new NewPromise((resolve, reject) => {
        for (const promise of promises) {
          return NewPromise.resolve(promise).then(
            (value) => {
              resolve(value)
            },
            (reason) => {
              reject(reason)
            }
          )
        }
      })
    }
  }
}
