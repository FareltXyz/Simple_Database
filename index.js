const fs = require('fs')

function create(key, value, file) {
   if(!key) return "Invalid Key! Use: create('key', 'value', './data.json')"
   if(!value) return "Invalid Value! Use: create('key', 'value', './data.json')"
   if(!file) return "enter the file name! Use: create('key', 'value', './data.json')"
if(!fs.existsSync(file)) {
   fs.writeFileSync(file, "{}"
  }
const json = JSON.parse(fs.readFileSync(file).toString())
json[key] = value;
fs.writeFileSync(file, JSON.stringify(json))
const yes = 'yes'
return yes
}

function set(key, value, file) {
   if(!key) return "Invalid Key! Use: create('key', 'value', './data.json')"
   if(!value) return "Invalid Value! Use: create('key', 'value', './data.json')"
   if(!file) return "enter the file name! Use: create('key', 'value', './data.json')"
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
   if(!key) return "enter key string! Use: get('key', './data.json')"
   if(!file) return "enter file path! Use: get('key', './data.json')"
 const jason = JSON.parse(fs.readFileSync(file).toString())
return jason[key]
}

module.exports = {
   create,
   set,
   get
}
