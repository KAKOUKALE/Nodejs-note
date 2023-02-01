const tools = require('./leah-tools/index')
let t = new Date()
let str = '<h1 class="abc">Good luck to you!<span>&nbsp;</span></h1>'
// console.log(tools)
console.log(tools.dateFormat(t))

console.log(tools.htmlEscape(str))

/**
 * 可以开发
 * 去字符串空格API
 * 大写转小写API
 */