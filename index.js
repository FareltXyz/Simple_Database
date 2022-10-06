const fs = require('fs')

function create(key, value, file) {
if(!fs.existsSync(file)) {
   fs.writeFileSync(file, "{}"
  }
const json = fs.readFileSync(file).toString()
json[key] = value;
fs.writeFileSync(file, JSON.stringify(json))

}

function get(key) {

}
