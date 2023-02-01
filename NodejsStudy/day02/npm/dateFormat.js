/**
 * 1、创建格式化事件的自定义模块
 * 2、定义格式化事件的方法
 * 3、创建补零函数
 * 4、从自定义模块中导出格式化事件的函数
 * 5、导入格式化时间的自定义模块
 * 6、调用格式化时间的函数
 */

// 定义格式化事件的方法
function dateFormat(dtStr) {
    let dt = new Date(dtStr)

    let y = dt.getFullYear()
    let m = addZero(dt.getMonth() + 1)
    let d = addZero(dt.getDate())

    let HH = addZero(dt.getHours())
    let mm = addZero(dt.getMinutes())
    let ss = addZero(dt.getSeconds())

    return `${y}-${m}-${d} ${HH}:${mm}:${ss}`
}

// 补零函数
function addZero(t) {
    return t > 9 ? t : '0' + t
}

module.exports = {
    dateFormat
}