const fs = require('fs')
fs.readFile('test1.txt', 'utf-8', function (err, dataStr) {
    //参数1：读取文件的存放路径
    //参数2：读取文件时候采用的编码格式，一般默认指定 utf8
    //参数3：回调函数，拿到读取失败和成功的结果  err  dataStr
    console.log(err)
    console.log('------')
    console.log(dataStr)
    // 如果读取成功，则 err 的值为 null
    // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined

    // 判断文件是否读取成功
    if(err) {
        console.log('文件读取失败！' + err.message)
    } else {
        console.log('文件读取成功！' + dataStr)
    }
})