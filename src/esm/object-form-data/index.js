
/**
 * @author - <lordly0426@163.com>
 * 
 * 将一个对象封装成为一个表单数据对象 FormData
 * 
 * @param { object } obj 原对象
 * @returns { FormData } 原对象中的数据添加到表单对象后的新的表单对象
 * 
 * @note
 * 1. 对于对象中的值为 null 和 undefined 的情况不会将该字段添加到表单中
 * 2. 如果对象中的值是数组，那么会直接添加该数组JSON序列化后的值到表单中
 * 3. 如果对象中的值是文件对象，会直接将该对象添加到表单中
 */
function buildObjFormData(obj) {
    const fd = new FormData()

    Object.entries(obj).forEach(([key, value]) => {
        if (value === null || value === undefined) return

        if (Array.isArray(value)) {
            fd.append(key, JSON.stringify(value))
            return
        }

        fd.append(key, value)
    })

    return fd
}

export default buildObjFormData