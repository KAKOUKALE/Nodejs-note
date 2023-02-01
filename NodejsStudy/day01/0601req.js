const http = require('http')
let server = http.createServer() 
server.on('request', (req, res) => {
    // req是请求对象，它包含与客户端相关的数据和属性，例如：
    // req.url是客户端请求的 URL 地址
    // req.method是客户端 method 请求类型
    let url = req.url
    let method = req.method
    console.log(url)
    console.log(method)
})
server.listen(8080,() => {
    console.log('server running at http://127.0.0.1:8080')
})