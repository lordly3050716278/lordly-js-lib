/**
 * @author - <lordly0426@163.com>
 * 
 * 获取新旧两个对象中变化过的内容
 * @param { object } oldObj 原对象
 * @param { object } newObj 新对象
 */
function diff(oldObj, newObj) {
    const diffObj = {}

    // 遍历新对象的所有键
    for (const key in newObj) {

        const newVal = newObj[key]
        const oldVal = oldObj[key]

        // 数组
        if (Array.isArray(newVal)) {
            // 原始数据不是数组
            if (!Array.isArray(oldVal)) {
                diffObj[key] = newVal
                continue
            }
            // 原始数据是数组
            // 排序后进行比较
            if (JSON.stringify(newVal.sort()) !== JSON.stringify(oldVal.sort())) {
                diffObj[key] = newVal
            }
            continue
        }

        // 对象
        if (typeof newVal === 'object') {
            // 原数据不是对象
            if (typeof oldVal !== 'object') {
                diffObj[key] = newVal
                continue
            }
            // 原数据是对象
            if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                diffObj[key] = newVal
            }
            continue
        }

        // 其他类型
        if (newVal !== oldVal) {
            diffObj[key] = newVal
        }
    }

    // 最终结果是空对象则返回null
    if (Object.keys(diffObj).length <= 0) return null

    return diffObj
}

export default diff