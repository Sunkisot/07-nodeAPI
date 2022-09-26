const fs = require("fs");
const path = require('path')
let buf = Buffer.alloc(6);

// 打开文件
fs.open(path.join(__dirname, '1.txt'), "r", (err, fd) => {
    // 读取文件
    fs.read(fd, buf, 0, 3, 0, (err, bytesRead, buffer) => {
        console.log(bytesRead);
        console.log(buffer);

        // 继续读取
        fs.read(fd, buf, 3, 3, 3, (err, bytesRead, buffer) => {
            console.log(bytesRead);
            console.log(buffer);
            console.log(buffer.toString());
        });
    });
});

