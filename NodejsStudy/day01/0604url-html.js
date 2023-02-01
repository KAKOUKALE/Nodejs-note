/**
 * 根据不同的url响应不同的html内容
 * 
 * 核心步骤
 * 1、获取请求的url地址
 * 2、设置默认的响应内容为404Not found
 * 3、判断用户请求是否为/或index.html页面
 * 4、判断用户请求是否为/about.html关于页面
 * 5、设置Content-Type响应头，防止中文乱码
 * 6、使用res.end()把内容响应给客户
 */

const http = require('http')
let server = http.createServer()
server.on('request', (req, res) => {
    // 1、获取请求的url地址
    let url = req.url
    // 2、设置默认的响应内容为404Not found
    let content = '<h1>404 Not found!</h1>'
    // 3、判断用户请求是否为/或index.html页面
    if(url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    // 4、判断用户请求是否为/about.html关于页面
    } else if(url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    // 5、设置Content-Type响应头，防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8') 
    // 6、使用res.end()把内容响应给客户
    res.end(content)
})
server.listen(8080, () => {
    console.log('Server is running at http://127.0.0.1:8080')
})