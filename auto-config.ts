const fs = require('fs') // 引入fs模块

fs.readFile('./src/locale/zh-CN.ts', 'utf-8', function(err, data) {
  if(err) {
    throw err
  }
  console.log('zh-CN.ts的内容: ', data, typeof data)
  fs.writeFile('./src/locale/en-US.ts', data, function(err) {
    if(err) {
      throw err
    }
    console.log('write success...')
  })
})