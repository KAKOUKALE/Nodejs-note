const http = require('http')
let serve = http.createServer()
serve.on('request', (req, res) => {
    // res是响应对象，它包含了与服务器相关的数据和属性，例如：
    // 要发送到客户端的字符串
    let str =  `You request url is ${req.url}, and request method is ${req.method}`
    // req.end()方法的作用：
    // 向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str)
})
serve.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
})