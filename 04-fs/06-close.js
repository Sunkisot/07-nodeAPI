const fs = require('fs')
const path = require('path')

fs.open(path.join(__dirname, '1.txt'), 'r', (err, fd) => {
  console.log(fd)
  fs.close(fd, (err) => {
    console.log('关闭成功！')
  })
})