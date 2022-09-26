// 同步copy写入(覆盖操作)
// const fs = require('fs')
// const path = require('path')

// fs.copyFileSync(path.join(__dirname, '1.txt'), path.join(__dirname, '2.txt'))


// let data = fs.readFileSync(path.join(__dirname, '2.txt'), 'utf8')

// console.log(data)

// 异步copy写入(覆盖操作)
const fs = require('fs')
const path = require('path')

fs.copyFile(path.join(__dirname, '1.txt'), path.join(__dirname, '2.txt'), (err) => {
  if(err) return
  fs.readFile(path.join(__dirname, '2.txt'), 'utf8', (err, data) => {
    console.log(data)
  })
})