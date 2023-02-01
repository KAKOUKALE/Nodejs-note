// 这是包的入口文件

/**
 * 将不同功能进行模块化拆分
 * 1、将格式化时间的功能拆分到src->dateFormat.js中
 * 2、将处理HTML字符串的功能拆分到src->htmlEscape.js中
 * 3、在index.js中导入两个模块，得到需要向外共享的方法
 * 4、在index.js中使用module.exports把对应的方法共享出去
 */
const dateFormat = require('./src/dateFormat')
const htmlEscape = require('./src/htmlEscape')

// 向外暴露需要的成员
module.exports = {
    // 利用ES6新特性，将对象所有属性展开
    ...dateFormat,
    ...htmlEscape
}

