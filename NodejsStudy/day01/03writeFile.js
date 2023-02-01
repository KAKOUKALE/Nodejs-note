const fs = require('fs')
fs.writeFile('tes2.txt', 'Today is a happy day!', function (err) {
    //参数1：表示文件的存放路径
    //参数2：表示要写入的内容
    //参数3：回调函数

    //如果文件写入成功，则 err 的值等于 null
    //如果文件写入失败，则 err 的值等于一个 错误对象
    if (err) {
        console.log('文件写入失败！' + err.message)
    } else {
        console.log('文件写入成功！')
    }
})