/**
 * @author - lordly<lordly0426@163.com>
 * 
 * 将文本复制到剪切板
 * 
 * @param { string } text 需要复制的文本
 * @returns { Promise } 
 */
function copyToClipboard(text) {
    return new Promise((resolve, reject) => {
        // 尝试使用 Clipboard API 进行复制
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                resolve('Text successfully copied using Clipboard API!')
            }).catch(err => {
                console.error('Clipboard API failed, falling back to textarea method.', err)
                fallbackCopyToClipboard(text).then(resolve).catch(reject)
            })
        } else {
            // 如果 Clipboard API 不可用，使用传统方法
            fallbackCopyToClipboard(text).then(resolve).catch(reject)
        }
    })
}

function fallbackCopyToClipboard(text) {
    return new Promise((resolve, reject) => {
        const textarea = document.createElement('textarea')
        textarea.value = text
        // 防止页面跳动
        textarea.style.position = 'absolute'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()

        try {
            const success = document.execCommand('copy')
            if (success) {
                resolve('Text successfully copied using textarea method!')
            } else {
                reject('Failed to copy text using textarea method.')
            }
        } catch (err) {
            reject(`Text copy failed: ${err}`)
        } finally {
            document.body.removeChild(textarea)
        }
    })
}

export default copyToClipboard