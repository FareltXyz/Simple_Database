const fs = require('fs')

function create(key, value, file) {
if(!fs.existsSync(file)) {
   fs.writeFileSync(file, "{}"
  }
const json = JSON.parse(fs.readFileSync(file).toString())
json[key] = value;
fs.writeFileSync(file, JSON.stringify(json))
const yes = 'yes'
return yes
}

function get(key, file) {
 const jason = JSON.parse(fs.readFileSync(file).toString())
return jason[key]
}
