// console.log(exports)
// console.log(module.exports)
// console.log(exports === module.exports)

exports.name = "Leah"
exports.age = 23
exports.sayHello = function() {
    console.log('Hello!')
}
module.exports.job = '前端'

// 一下输出的是空对象

/* exports = {
    name: 'Leah',
    age: 23,
    sayHello: function() {
        console.log('Hello!')
    }
} */

// 最终向外共享的结果永远都是 module.exports 所指向的对象