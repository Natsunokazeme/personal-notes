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
  }
}

new MyPromise(())
