// 格式化时间函数
function dateFormat(dataStr) {
    let dt = new Date(dataStr)

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