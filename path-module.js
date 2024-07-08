const path = require('path')

//sepator
console.log(path.sep);

//join method
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

//resolve 
const absolute = path.resolve(_dirname, 'content','subfolder','test.txt')
console.log(absolute)