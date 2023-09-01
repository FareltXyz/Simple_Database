const fs = require('fs')

function create(key, value, file) {
   if(!key) return new Error("Invalid Key! Use: create('key', 'value', './data.json')")
   if(!value) return new Error("Invalid Value! Use: create('key', 'value', './data.json')")
   if(!file) return new Error("enter the file name! Use: create('key', 'value', './data.json')")
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
   if(!key) return new Error("Invalid Key! Use: create('key', 'value', './data.json')")
   if(!value) return new Error("Invalid Value! Use: create('key', 'value', './data.json')")
   if(!file) return new Error("enter the file name! Use: create('key', 'value', './data.json')")
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
   if(!key) return new Error("enter key string! Use: get('key', './data.json')")
   if(!file) return new Error( "enter file path! Use: get('key', './data.json')")
   if(!fs.existsSync(file)) return new Error(" file not found ")
 const jason = JSON.parse(fs.readFileSync(file).toString())
return jason[key]
}
function delete(name, file) {
   if(!name) return new Error("enter key name! Use: delete('key', 'data.json')")
   if(!file) return new Error("enter file path! Use: delete('key', './data.json')")
   if(!fs.existsSync(file)) new Error(" file not found ")
   let jason = JSON.parse(fs.readFileSync(file, "utf8"));
delete jason[name];
fs.writeFileSync(file, JSON.stringify(jason));
return "";
  },
  function all(file) {
     if(!file) return new Error("enter file path! Use: all('./data.json')")
     if(!fs.existsSync(file)) return new Error(" file not found ")
return JSON.parse(fs.readFileSync(file, "utf8"));
  },

  function has(name, file) {
     if(!name) return new Error("enter key name! Use: has('key', './data')")
     if(!file) return new Error("enter file path! Use: has('key', './data.json')")
     if(!fs.existsSync(file)) return new Error(" file not found ")
    let content = JSON.parse(fs.readFileSync(file, "utf8"));
    return content[name] ? true : false;
                 }
module.exports = {
   create,
   set,
   get,
   delete,
   all,
   has
}
