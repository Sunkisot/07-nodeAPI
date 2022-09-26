
// 同步读取文件
// const fs = require("fs");
// const path = require('path')

// let buf = fs.readFileSync(path.resolve(__dirname, "1.txt"));
// let data = fs.readFileSync(path.resolve(__dirname, "1.txt"), "utf8");

// console.log(buf); // <Buffer 48 65 6c 6c 6f>
// console.log(data); // Hello复制代码

// 异步读取文件
const fs = require("fs");
const path = require('path')

fs.readFile(path.resolve(__dirname, "12.txt"), "utf8", (err, data) => {
  console.log(data)
  console.log(err)
});