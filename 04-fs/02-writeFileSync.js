// 同步写入(覆盖操作)
// const fs = require('fs')
// const path = require('path')

// fs.writeFileSync(path.join(__dirname, '1.txt'), 'write hello world')

// let data = fs.readFileSync(path.join(__dirname, '1.txt'), 'utf8')

// console.log(data)


// 异步写入(覆盖操作)
const fs = require('fs')
const path = require('path')

fs.writeFile(path.join(__dirname, '1.txt'), 'write hello world1', err => {
  if(err) return
  fs.readFile(path.join(__dirname, '1.txt'), 'utf8', (err, data) => {
    console.log(data)
  })
})