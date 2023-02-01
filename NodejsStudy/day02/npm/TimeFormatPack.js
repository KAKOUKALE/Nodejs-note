/**
 * 1、使用npm包管理工具，在项目中安装格式化时间的包 moment
 * 2、使用require()导入格式化时间的包
 * 3、参考 moment 的官方 API 文档对时间进行格式化
 */

/**
 * 装包
 *  npm install 包名
 *  npm i 包名
 */

// 导入 moment
const moment = require('moment')
let dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)