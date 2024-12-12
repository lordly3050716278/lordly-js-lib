const fs = require('fs')
const path = require('path')

/**
 * @author - lordly<lordly0426@163.com>
 * 
 * 同步创建文件，当文件路径上的目录缺失时会自动创建缺失的目录
 * 
 * @param { string } filePath 文件路径
 * @param { string } content 文件的内容
 */
function writeFileWithDirSync(filePath, content) {
    const dirPath = path.dirname(filePath)
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true })
    fs.writeFileSync(filePath, content)
}

module.exports = writeFileWithDirSync