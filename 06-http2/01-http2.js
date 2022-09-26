const http2 = require('http2') // 2.0版本协议 默认端口 80  https默认端口443
const path = require('path')
const fs = require('fs');

// http（2.0）+ ssl = https
// http2.0 一般情况下只支持https,但是也支持http协议

// 公钥   私钥
// #1、生成私钥key文件：
// openssl genrsa -out privatekey.pem 1024

// #2、通过私钥生成CSR证书签名  （需要填一些信息、可直接回车）
// openssl req -new -key privatekey.pem -out certrequest.csr

// #3、通过私钥和证书签名生成证书文件 
// openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem

// 谷歌空白处 thisisunsafe
const server = http2.createSecureServer({
  key: fs.readFileSync(path.join(__dirname, 'privatekey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certificate.pem'))
});
server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200
  });
  
  stream.end('<h1>Hello World</h1>');
});

server.listen(8443);
