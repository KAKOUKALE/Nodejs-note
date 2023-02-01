const path = require('path')
const fs = require('fs')

/* // 注意：  ../ 会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr)  // \a\b\d\e

// 取代fs.readFile(__dirname + '/files/1.txt', ...)
fs.readFile(path.join(__dirname, 'files/1.txt'), 'utf8', function(err, dataStr) {
  if (err) {
    return console.log(err.message)
  }
  console.log(dataStr)
}) */

let fpath = 'a/b/c/index.html'
let fullName = path.basename(fpath)
console.log(fullName)
let nameExt = path.basename(fpath, '.html')
console.log(nameExt)

let fExt = path.extname(fpath)
console.log(fExt)
