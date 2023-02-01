// 定义转义HTML字符从函数
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g, match => {
         switch(match) {
             case '<':
                 return '&lt;'
             case '>':
                 return '&gt;'
             case '"':
                 return '&quot:'
             case '&':
                 return '&amp'
         }
     })
 }

 module.exports = {
    htmlEscape
 }