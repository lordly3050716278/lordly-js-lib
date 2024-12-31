const debounce = require('./debounce')
const throttle = require('./throttle')
const sha256 = require('./sha256')
const randomHash = require('./random-hash')
const eventBus = require('./event-bus')
const diff = require('./diff')

module.exports = {
    debounce,
    throttle,
    sha256,
    randomHash,
    eventBus,
    diff
}