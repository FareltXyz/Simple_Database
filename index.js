const fs = require('fs')

function create(key, value, file) {
if(!fs.existsSync(file)) {
   fs.writeFileSync(file, "{}"
  }
const json = fs.readFileSync(file).toString()

}
