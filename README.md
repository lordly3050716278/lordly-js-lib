# lordly-js-lib
ES Module 和 Common JS的js库

## 安装
```shell
npm i lordly-js-lib
```

## 使用
```javascript
// Common JS
const { randomHash } = require('lordly-js-lib')
// ES Module
import { randomHash } from 'lordly-js-lib'

const hash =randomHash()
console.log(hash)
```

## 项目结构
```markdown
lordly-js-lib/
├── src/                              # 源代码
|   ├── cjs/                          # CommonJS
|   |   ├── convert-case/             # 小驼峰和下划线相互转换
|   |   ├── debounce/                 # 防抖函数
|   |   ├── diff/                     # different函数
|   |   ├── event-bus/                # 发布订阅模式的事件总线
|   |   ├── random-hash/              # 随机hash
|   |   ├── sha256/                   # hash sha256 加密
|   |   └── throttle/                 # 节流函数
|   |
|   └── esm/                          # ESModule
|       ├── browser-fingerprint/      # 浏览器指纹
|       ├── convert-case/             # 小驼峰和下划线相互转换
|       ├── copy-to-clipboard/        # 复制到剪切板
|       ├── debounce/                 # 防抖函数
|       ├── diff/                     # different函数
|       ├── event-bus/                # 发布订阅模式的事件总线
|       ├── object-form-data/         # 对象转表单对象
|       ├── random-hash/              # 随机hash
|       ├── sha256/                   # hash sha256 加密
|       └── throttle/                 # 节流函数
|
└── package.json                      # 项目配置
```