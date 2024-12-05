import { v1 } from 'uuid'
import CryptoJS from 'crypto-js'

/**
 * @author - lordly<lordly0426@163.com>
 * 
 * 生成一个唯一的经过sha-256加密后的UUID-v1
 * 
 * @returns { string } 返回生成的 SHA-256 哈希值，格式为 64 位的十六进制字符串。 
 */
function randomHash() {
    const uuid = v1()
    const hash = CryptoJS.SHA256(uuid).toString(CryptoJS.enc.Hex)
    return hash
}

export default randomHash