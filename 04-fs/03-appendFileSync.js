// 同步追加写入
// const fs = require('fs')
// const path = require('path')

// fs.appendFileSync(path.join(__dirname, '1.txt'), 'yes')

// let data = fs.readFileSync(path.join(__dirname, '1.txt'), 'utf8')

// console.log(data)

// 异步追加写入
const fs = require('fs')
const path = require('path')

fs.appendFile(path.join(__dirname, '1.txt'), 'append yes', err => {
  if(err) return
  fs.readFile(path.join(__dirname, '1.txt'), 'utf8', (err, data) => {
    console.log(data)
  })
})