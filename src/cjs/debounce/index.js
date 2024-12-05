/**
 * @author - lordly<lordly0426@163.com>
 * 
 * 防抖函数
 * 
 * @param { Function } fn 需要防抖的函数
 * @param { number } delay 防抖的延迟时间，单位毫秒，默认200
 * @returns { Function } 返回一个经过防抖后的新函数
 */
function debounce(fn, delay = 200) {
    let debounceTimer
    return function (...args) {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => fn.apply(this, args), delay)
    }
}

module.exports = debounce