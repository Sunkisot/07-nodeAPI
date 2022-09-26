const dgram = require('dgram');
const { Buffer } = require('buffer')

const message = Buffer.from('一些字节');
const client = dgram.createSocket('udp4');
client.send(message, 41234, 'localhost', (err) => {
  client.close();
});