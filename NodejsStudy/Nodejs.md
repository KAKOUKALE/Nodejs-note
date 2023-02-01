<a name="YTWHi"></a>
### 1.初识 Node.js
> 浏览器中的 JavaScript 的组成部分

![image.png](https://cdn.nlark.com/yuque/0/2023/png/32917541/1675131066730-56c45578-a060-4b1f-aff5-aee918234ed9.png#averageHue=%23efe9e5&clientId=u82150007-f75c-4&from=paste&id=GUFfZ&name=image.png&originHeight=466&originWidth=861&originalType=url&ratio=1&rotation=0&showTitle=false&size=73471&status=done&style=none&taskId=udf8d0f50-b5a1-487a-a8ba-ccd06055484&title=)
> 为什么 JavaScript 可以操作 DOM 和 BOM

- 每个浏览器都内置了 DOM、BOM 这样的 API 函数，因此，浏览器中的 JavaScript 才可以调用它们
> 浏览器中的 JavaScript 运行环境

- 运行环境是指代码正常运行所需的必要环境

![](https://cdn.nlark.com/yuque/0/2023/png/32917541/1675131331767-107ed2e6-d103-4e78-aac2-e97dc3b95684.png#averageHue=%23fafcfa&clientId=u82150007-f75c-4&from=paste&id=ud5153c0f&originHeight=413&originWidth=759&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u901b92bc-1297-4ca1-a4f7-505bc150651&title=)

- V8 引擎负责解析和执行 JavaScript 代码
- 内置 API 是由运行环境提供的特殊接口，只能在所属的运行环境中被调用
<a name="ISH1z"></a>
#### Node.js 简介

1. 什么是 Node.js
   - Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境
2. Node.js 中的 JavaScript 运行环境
   - 浏览器是 JavaScript 的前端运行环境
   - Node.js 是 JavaScript 的后端运行环境
   - Node.js 中无法调用 DOM 和 BOM 等浏览器内置 API
3. Node.js 可以做什么
   - 基于 Express 框架，可以快速构建 Web 应用
   - 基于 Electron 框架，可以构建跨平台的桌面应用
   - 基于 restify 框架，可以快速构建 API 接口项目
   - 读写和操作数据库、创建实用的命令行工具辅助前端开发。。。
4. shift+鼠标右键 可以在该目录下打开powershell窗口【快捷键如下】
   - ⬆，可以快速定位到上一次执行的命令。
   - tab键，可以快速补全文件的路径（先输入第一个字，然后使用tab键，可以快速补全路径）
   - ESC，可以快速清空已输入的命令
   - cls，清空powershell面板
<a name="GIOGH"></a>
### 2.fs 文件系统模块
<a name="J20JO"></a>
#### 什么是 fs 文件系统模块
> fs 模块是 Node.js 官方提供的、用来操作文件的模块。提供了一系列的方法和属性，用来满足对文件的操作需求。如果要在 JavaScript 代码中，使用 fs 模块来操作文件，则需要使用如下的方式先导入它

`const fs =require("fs")`

- **fs.readFile(path[, option], callback)**读取指定文件中的内容<br />	path 必选参数，字符串，文件路径<br />	option 可选参数，设置字符集<br />	callback 必选参数，文件读取完成后的回调函数
```javascript
const fs = require('fs')
fs.readFile('test1.txt', 'utf-8', function (err, dataStr) {//设置字符集，否则为二级制数据
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
```

- **fs.writeFile(path, data[, option], callback) **向指定的文件中写入内容

 path 必选参数，字符串，文件路径<br />	data 必选参数，写入的内容<br />	option 可选参数，设置字符集，默认值是 utf8<br />	callback 必选参数，文件写入完成后的回调函数<br />😀注意：

   - 写入会覆盖文件里面的所有内容
   - fs.writeFile()方法只能用来创建文件，不能用来创建路径
```javascript
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
```

- 成绩整理案例
```javascript
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
```
<a name="Ro5Ye"></a>
#### 路径动拼接的问题
> 使用fs模块操作文件时，如果提供的操作路径是以./或…/开头的**相对路径**时，很容易出现路径动态拼接错误的问题。原因：代码在运行的时候，**会以执行node命令时所处的目录**，动态拼接出被操作文件的完整路径。

解决方案：

- 在使用fs模块操作文件时，直接提供完整的路径**【**js中写完整路径要用//，不然会被当成转义字符处理】
- **__dirname** 表示当前文件所处的目录,不会根据打开node目录变化而变化
```javascript
fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
    if (err) {
      return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！')
  })
```
<a name="FMSPQ"></a>
### 3.path 路径模块
> path 模块是 Node.js 官方提供的、用来处理路径的模块。提供一系列的方法和属性，用来满足对路径的处理需求

`const path =require("path")`

- path.join(...paths) 可以把多个路径片段拼接为完整的路径字符串
- 凡是涉及到路径拼接的操作，都要使用 path.join() 方法进行处理。不直接使用 + 进行字符串的拼接
```javascript
const path = require('path')
const fs = require('fs')

// 注意：  ../ 会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr)  // \a\b\d\e

// 取代fs.readFile(__dirname + '/files/1.txt', ...)
fs.readFile(path.join(__dirname, 'files/1.txt'), 'utf8', function(err, dataStr) {
  if (err) {
    return console.log(err.message)
  }
  console.log(dataStr)
})
```

- path.basename(path[, ext]) 可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名

**path **必选参数，表示一个路径的字符串<br />**ext **可选参数，表示文件扩展名<br />返回 路径的最后一部分
```javascript
const path = require('path')
let fpath = 'a/b/c/index.html'
let fullName = path.basename(fpath)
console.log(fullName)
let nameExt = path.basename(fpath, '.html')
console.log(nameExt)
```

- path.extname(path) 可以获取路径中的扩展名部分

**path** 必选参数，表示一个路径的字符串<br />返回 得到的扩展名字符串
```javascript
const path = require('path')
let fpath = 'a/b/c/index.html'
let fExt = path.extname(fpath)
console.log(fExt)
```
<a name="k1joG"></a>
### 4.http 模块
> http 模块是 Node.js 官方提供的用来创建 web 服务器的模块
> 通过 http 模块提供的 `http.createServer()`方法，就能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务。
> 在 Node.js 中，不需要使用 IIS、Apache（针对php） 等第三方 web 服务器软件（普通的电脑常常安装这些），而是基于 Node.js 提供的 http 模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供 web 服务.

`const http =require("http")`
<a name="ffRY2"></a>
#### 创建最基本的 web 服务器
创建 web 服务器的基本步骤

1. 导入 http 模块
2. 创建 web 服务器实例
3. server.on() 为服务器实例绑定 request事件，监听客户端的请求
4. 启动服务器
```bash
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
```
<a name="NpcaX"></a>
#### req请求对象
只要服务器接收到了客户端的请求，就会调用通过` server.on()` 为服务器绑定的 request 事件处理函数
```bash
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
```
<a name="PVBTe"></a>
#### res响应对象
在服务器 request 事件处理函数中，如果想访问与服务器相关的数据或属性，通过`res.end(data)`方法响应。
```bash
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
```
<a name="S6jQK"></a>
#### 解决中文乱码问题
当调用 res.end() 方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式
```bash
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
```
<a name="DeBPU"></a>
#### **实例1**
根据不同的 url 响应不同的 html 内容
```bash
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
```
<a name="B4R4F"></a>
#### 实例2
时钟web服务器
```bash
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
```
<a name="QSPAH"></a>
### 5.模块化
> **模块化**：是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程。对于整个系统来说，模块是可组合、分解和更换的单元编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块。

把代码进行模块化拆分的好处

- 提高代码的复用性
- 提高了代码的可维护性
- 可以实现按需加载
<a name="YWFjc"></a>
#### Node.js 中的模块化
<a name="vQKwy"></a>
##### Node.js 中模块的分类

- 内置模块（内置模块是由 Node.js 官方提供的，例如 fs、path、http 等）
- 自定义模块（用户创建的每个 .js 文件，都是自定义模块）
- 第三方模块（由第三方开发出来的模块，使用前需要先下载
<a name="o6gIS"></a>
##### 加载模块
`require()`方法
```bash
// 导入自定义模块
const ms = require('./0700moduleSelf')
console.log(ms)

// 注意：在使用require加载用户自定义模块期间可以省略 .js 的后缀名
```
<a name="pNQ6J"></a>
##### Node.js 中的模块作用域

- 模块作用域：和函数作用域类似，在自定义模块中定义的变量、方法等成员，**只能在当前模块内被访问**，这种模块级别的访问限制
- 模块作用域的好处：防止了全局变量污染的问题
```bash
// 导入自定义模块
const People = require('./0800moduleArea')
console.log(People)		//输出空对象
```
<a name="HfxmA"></a>
##### 向外共享模块作用域中的成员

- module对象

在每个 .js 自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息
```bash
console.log(module)

/* Module {
    id: '.',
    path: 'C:\\Users\\LYH\\Desktop\\Leah\\NodeCode\\day02',
    exports: {},
    filename: 'C:\\Users\\LYH\\Desktop\\Leah\\NodeCode\\day02\\0802moduleObj.js',
    loaded: false,
    children: [],
    paths: [
      'C:\\Users\\LYH\\Desktop\\Leah\\NodeCode\\day02\\node_modules',
      'C:\\Users\\LYH\\Desktop\\Leah\\NodeCode\\node_modules',
      'C:\\Users\\LYH\\Desktop\\Leah\\node_modules',
      'C:\\Users\\LYH\\Desktop\\node_modules',
      'C:\\Users\\LYH\\node_modules',
      'C:\\Users\\node_modules',
      'C:\\node_modules'
    ]
  } */
```

- module.exports 对象
   - 在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用
   - 外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象，而一般默认该属性是{}即空对象。
- exports 和 module.exports 的使用误区
   - 由于 module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node 提供了 exports 对象。默认情况下，exports 和 module.exports 指向同一个对象。最终共享的结果，还是以 module.exports 指向的对象为准。
   - 时刻谨记，require() 模块时，得到的永远是 module.exports 指向的对象，若出现exports 和 module.exports，最终不管exports怎么指向，都输出module.exports。注意挂载属性和指向新对象的区别。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/32917541/1675225141157-c3bf19e5-adec-4fa7-8d58-3dce7c8d60af.png#averageHue=%23729b8d&clientId=u10a079ec-a804-4&from=paste&id=u52268a19&name=image.png&originHeight=221&originWidth=741&originalType=url&ratio=1&rotation=0&showTitle=false&size=42793&status=done&style=none&taskId=u4a7f5eba-fbee-4021-9874-2a435c3287b&title=)

   - 注意：为了防止混乱，建议不要在同一个模块中同时使用 exports 和 module.exports
<a name="O1oEU"></a>
##### Node.js 中的模块化规范
Node.js 遵循了 CommonJS 模块化规范，CommonJS 规定了模块的特性和各模块之间如何相互依赖

- 每个模块内部，module 变量代表当前模块
- module 变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口
- 加载某个模块，其实是加载该模块的 module.exports 属性。require() 方法用于加载模块
<a name="X0CpU"></a>
### npm与包
> Node.js 中的第三方模块又叫做包

不同于 Node.js 中的内置模块与自定义模块，包是由第三方个人或团队开发出来的，免费供所有人使用。Node.js 中的包都是免费且开源的

- 由于 Node.js 的内置模块仅提供了一些底层的 API，导致在基于内置模块进行项目开发的时，效率很低
- 包是基于内置模块封装出来的，提供了更高级、更方便的 API，极大的提高了开发效率
- 包和内置模块之间的关系，类似于 jQuery和 浏览器内置 API 之间的关系
- 从 https://www.npmjs.com/网站上搜索自己所需要的包
- 从 https://registry.npmjs.org/ 服务器上下载自己需要的包
> 工具的名字叫做 Node Package Manager（简称 npm 包管理工具）

<a name="yJN9D"></a>
##### 在项目中安装包的命令
```bash
npm install 包的完整名称
npm i 包的完整名称
npm i 包的完整名称 包的完整名称（加空格可以安装多个包）
```
> 初次装包完成后，在项目文件夹下多一个叫做 node_modules 的文件夹和 package-lock.json 的配置文件。

- node_modules 文件夹用来存放所有已安装到项目中的包。require() 导入第三方包时，从这个目录中查找并加载
- package-lock.json 配置文件用来记录 node_modules 目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等
- npm install 命令默认安装最新版本的包。如需安装指定版本的包，在包名之后，@

`npm i 包的完整名称@版本号`

   - 版本号
      - 包的版本号以“点分十进制”形式进行定义，总共有三位数字，如 2.24.0。其中每一位数字所代表的的含义如下
      - 第1位数字：大版本
      - 第2位数字：功能版本
      - 第3位数字：Bug修复版本
      - 版本号提升的规则：只要前面的版本号增长了，则后面的版本号归零
<a name="tolQm"></a>
##### 时间格式化包安装和使用实例
```bash
/**
 * 1、使用npm包管理工具，在项目中安装格式化时间的包 moment
 * 2、使用require()导入格式化时间的包
 * 3、参考 moment 的官方 API 文档对时间进行格式化
 */

/**
 * 装包
 *  npm install 包名
 *  npm i 包名
 */

// 导入 moment
const moment = require('moment')
let dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)
```
<a name="bI0KI"></a>
##### 包管理配置文件
> npm规定，在项目根目录中，必须提供一个叫做 package.json 的包管理配置文件。用来记录与项目有关的一些配置信息。如

- 项目的名称、版本号、描述等
- 项目中都用到了哪些包
- 哪些包只在开发期间会用到
- 那些包在开发和部署时都需要用到
1. 多人协作的问题
   - 遇到的问题：第三方包的体积过大，不方便团队成员之间共享项目源代码。
   - 解决方案：共享时剔除 node_modules
2. 如何记录项目中安装了哪些包
   - 在项目根目录 package.json 的配置文件用来记录项目中安装了哪些包。从而方便剔除 node_modules 目录之后，在团队成员之间共享项目的源代码
   - 注意：今后在项目开发中，一定要把 node_modules文件夹，添加到 .gitignore 忽略文件中
3. package.json 文件中的 dependencies 节点，专门用来记录使用 npm install 命令安装了哪些包
<a name="fptji"></a>
##### 卸载包
`npm uninstall 包名`<br />npm uninstall 命令执行成功后，会把卸载的包，自动从 package.json 的 dependencies 中移除掉<br />**devDependencies节点**<br />如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到 devDependencies节点中。如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到 dependencies 节点中。
```bash
//包名和--save-dev顺序不重要
npm install 包名 --save-dev     

//常用简写
npm i 包名 -D
```
<a name="hN6za"></a>
##### 解决下包速度慢的问题

- npm 下包的时候，默认从国外的 https://registry.npmjs.org/ 服务器进行下载，可能会慢
- 使用国内镜像服务器-淘宝，大幅改善下载速度

**切换npm 的下包镜像源**
```bash
npm config get registry 	# 查看当前包镜像源
npm config set registry=http://registry.npm.taobao.org/ # 切换源头
```
为了方便的切换下包的镜像源，安装nrm小工具，利用 nrm 提供的终端命令，快速查看和切换下包的镜像源
```bash
npm install nrm -g	# -g 全局可用
nrm ls							# 查看当前可用的镜像源地址list
nrm use taobao			# 切换镜像源
```
**i5ting_toc**
> i5ting_toc 是一个可以把 md 文档转为 html 页面的小工具

```bash
npm i i5ting_toc -g						# 安装
i5ting_toc -f sample.md -o		# 转换
```
<a name="c0Rfm"></a>
##### 规范的包结构
一个规范的包，它的组成结构，必须符合以下 3 点要求

- 包必须以单独的目录而存在
- 包的顶级目录（点进去的目录）下要必须包含 package.json 这个包管理配置文件
- package.json 中必须包含 name，version，main这三个属性，分别代表包的名字、版本号、包的入口(.js文件)（require()加载的文件）
<a name="klCl1"></a>
##### 发布包
> 在终端登录，终端中执行 npm login 命令，依次输入用户名、密码、邮箱后，即可登录成功

- 注意：执行命令前，必须先把下包的服务器地址切换为 npm 的官方服务器。否则会导致发布包失败！先用nrm命令检查一下，nrm use 命令切换。

终端切换到包的根目录之后，运行 npm publish 命令，即可将包发布到 npm 上（注意：不能有大写字母）<br />运行 npm unpublish 包名 --force命令，即可从 npm 删除已发布的包

- npm unpublish 命令只能删除 72 小时以内发布的包
- npm unpublish 删除的包，在 24 小时内不允许重复发布
<a name="n42e0"></a>
##### 模块的加载机制
> 模块在第一次加载后会被缓存，多次调用 require() 模块的代码只会被执行一次。不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。

**内置模块的加载机制**

- 内置模块的加载优先级最高（当第三方模块和内置模块同名时）

**自定义模块的加载机制**

- 使用 require() 加载自定义模块时，必须指定以 ./ 或 …/ 开头的路径标识符。在加载自定义模块时，如果没有指定 ./ 或 …/ 这样的路径标识符，则 node 会把它当作内置模块或第三方模块进行加载。
- 在使用 require() 导入自定义模块时，如果省略了文件的扩展名，Node.js 会按顺序分别尝试加载以下的文件
   1.  按照确切的文件名进行加载
   2. 补全 .js 扩展名进行加载
   3. 补全 .json 扩展名进行加载
   4. 补全 .node 扩展名进行加载
   5. 加载失败，终端报错
