const https = require('https');
const path = require('path')
const fs = require('fs');

const options = {
  key: fs.readFileSync(path.join(__dirname, 'privatekey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certificate.pem'))
};

https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }) // html
  // res.writeHead(200, {'Content-Type': 'text/plain'}) // 文本
  // res.writeHead(200, {'Content-Type': 'text/css'}) // css
  // res.writeHead(200, {'Content-Type': 'application/x-javascript'}) // js
  res.write('<h1>Node.js</h1>')
  res.end('<p>hello world</p>')
}).listen(8443);