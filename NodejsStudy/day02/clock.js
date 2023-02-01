/**
 * 实现clock时钟的web服务器
 * 
 * 实现步骤：
 * 1、导入需要的模块
 * 2、创建基本的web服务器
 * 3、将资源的请求url地址映射为文件的存放路径
 * 4、读取文件内容并响应给客户端
 * 5、优化资源请求路径
 */

// 导入模块
const fs = require('fs')
const path = require('path')
const http = require('http')

// 创建web服务器
const server = http.createServer()
server.on('request', (req, res) => {
    // console.log('Someone is visit our server')
    // 获取请求地址
    let url = req.url
    // 将资源的请求url地址映射为文件的存放路径
    // let fpath = path.join(__dirname, url)
    let fpath = ''
    if(url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, './clock', url)
    }

    //读取文件
    fs.readFile(fpath, 'utf-8', function (err, dataStr) {
        if (err) {
            return res.end('<h1>404 Not found</h1>')
        }
        // 设置Content-Type响应头，防止中文乱码
        // res.setHeader('Content-Type', 'text/html; charset=utf-8')
        // 使用res.end()把内容响应给用户
        res.end(dataStr)

    })
})
server.listen(8080, () => {
    console.log('server is running at http://127.0.0.1:8080')
})