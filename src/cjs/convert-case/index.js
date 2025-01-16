// 小驼峰转下划线
function camelToSnake(str) {
    return str.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
}

// 下划线转小驼峰
function snakeToCamel(str) {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

/**
 * @author - <lordly0426@163.com>
 * 
 * 根据输入的数据类型来选择转换方式
 * 下划线转为小驼峰或者小驼峰转为下划线
 * 
 * @param { string } str 需要转换类型的字符串
 * @returns { string } 转换过后的字符串
 */
function convertCase(str) {
    // 下划线命名转小驼峰
    if (str.includes('_')) return snakeToCamel(str)
    // 小驼峰命名转下划线
    return camelToSnake(str)
}

module.exports = convertCase