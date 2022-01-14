// minimist：轻量级的命令行参数解析引擎
// 使用方法:
// node src/utils/changeIP.js -h 10.121.218.333 -p 5000 -s
// 接收参数 -h ip
// -p port
// -s 是否使用 https, 使用http时不需要此参数
console.log(process.argv);
var argv = require('minimist')(process.argv.slice(2));
console.log('argv: ', argv);
const fs = require('fs');

// 读取命令行参数
let _addr = argv.h || '127.0.0.1';
let _port = argv.p || 8080;
let _protocol;
if (argv.s) {
  _protocol = 'https';
} else {
  _protocol = 'http';
}

let configLines = `window.g = {
  'protocol': '${_protocol}',
  'address': '${_addr}',
  'port': ${_port}
};`;

fs.writeFile('./base.js', configLines, 'utf-8', () => {
  console.log('complete');
});
