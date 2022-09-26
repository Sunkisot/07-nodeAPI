const http = require('http') // 1.1 版本协议 默认端口 80

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' }) // html
  // res.writeHead(200, {'Content-Type': 'text/plain'}) // 文本
  // res.writeHead(200, {'Content-Type': 'text/css'}) // css
  // res.writeHead(200, {'Content-Type': 'application/x-javascript'}) // js
  res.write('<h1>Node.js</h1>')
  res.end('<p>hello world</p>')
}).listen(8001, () => {
  console.log("HTTP服务正在监听8001.");
})