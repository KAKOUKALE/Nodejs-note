/**
 * 核心步骤
 * 1、导入需要的fs文件系统模块
 * 2、使用fs.readFile()方法，读取素材目录下的成绩.txt文件
 * 3、判断文件是否读取失败
 * 4、文件读取成功后，处理成绩数据
 * 5、将处理完的成绩数据调用fs.writeFile()方法，写入到新文件成绩-ok.txt中
 */

const fs = require('fs')
fs.readFile('成绩.txt', 'utf-8', function(err, dataStr) {
    if(err) {
        console.log('文件读取失败！' + err.message)
    } else {
        console.log('文件读取成功！')
        // console.log(dataStr)

        /**
         * 处理数据
         * 1、先把成绩的数据按照空格进行分割
         * 2、循环分割后的数据，对每一项数据进行字符串的替换操作
         * 3、把新数组中的每一项进行合并，得到一个新的字符串
         */
        let arrOld = dataStr.split(' ')
        // console.log(arrOld)
        let arrNew = []
        arrOld.forEach(item => {
            arrNew.push(item.replace('=', ':'))
        })
        // console.log(arrNew)
        let newStr = arrNew.join('\r\n')
        // console.log(newStr)

        fs.writeFile('成绩-ok.txt', newStr, function(err) {
            if(err) {
                console.log('成绩写入失败！' + err.message)
            } else {
                console.log('文件写入成绩-ok.txt成功！')
            }
        })
    }
})