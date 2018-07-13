let parser = require('mhtml-parser')

parser.loadFile(__dirname + '/recording.mht', {
  // charset: "gbk"
}, function (err, data) {
  if (err) console.log('err', err)
  console.log('data', data)
})
