const http = require('http')
let server = http.createServer()
server.on('request', (req, res) => {
    // 发送的内容包含中文
    let str = `您请求的 url 地址是 ${req.url}, 请求的 method 类型是 ${req.method}`
    // 为了防止中文显示乱码的问题，需要设置响应头 Content-Type 的值为 text/html; charset = utf-8
    res.setHeader('Content-Type', 'text/html;charset=utf-8')//里面不能有空格，否则还是乱码
    res.end(str)
})
server.listen(8080, () => {
    console.log('Server is running at http://127.0.0.1:8080')
})