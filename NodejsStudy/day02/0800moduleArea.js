// 这是一个自定义模块
const name = 'Leah'
let age = 23
let address = '江西南昌'

Introduce(name, age, address)
function Introduce(name, age, address) {
    this.name = name
    this.age = age
    this.address= address
    console.log(`My name is ${name}, I'm ${age} years old, I'm from ${address}`)
}
