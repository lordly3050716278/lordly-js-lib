class EventBus {
    constructor() {
        this.events = {} // 存储事件及其订阅者
    }

    // 订阅事件
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(listener)
    }

    // 取消订阅事件
    off(event, listener) {
        if (!this.events[event]) return
        const index = this.events[event].indexOf(listener)
        if (index !== -1) {
            this.events[event].splice(index, 1)
        }
    }

    // 发布事件
    emit(event, ...args) {
        if (!this.events[event]) return
        this.events[event].forEach(listener => {
            listener(...args) // 触发每个监听器
        })
    }

    // 只触发一次的事件监听
    once(event, listener) {
        const wrapper = (...args) => {
            listener(...args)
            this.off(event, wrapper) // 执行完后移除事件监听
        }
        this.on(event, wrapper)
    }
}

module.exports = new EventBus()