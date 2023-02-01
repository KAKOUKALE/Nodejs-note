/**
 * 1、导入http模块
 * 2、创建web服务器实例
 * 3、为服务器实例绑定request事件，监听客户端的请求
 * 4、启动服务器
 */

// 导入http模块
const http = require('http')
// 创建web服务器实例
let server = http.createServer()
// 为服务器实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => {
    console.log('Someone visit out web server')
})
// 启动服务器
server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080')
})