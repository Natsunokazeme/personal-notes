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
