# Simple Nodejs Database
Status Building..

**How to Use Database?**

*Clone*
```shell
git clone https://github.com/Testerbens/Simple_Database
```
*Use*
```javascript
const database = require('./Simple_Database/index.js')
```
**Function**

*Create & set*
```javascript
database.set('key', 'value', './data.json')
/*data.json
{"key": "value"}*/
```
*get*
```javascript
database.get('key', './data.json')
//return " value "
```
*delete*
```javascript
database.delete('key', './data.json')
```
*has*
```javascript
database.has('key', './data.json')
// return "yes" / "no"
```
*all*
```javascript
database.all('./data.json')
// return all string in this file
```
Malas ngerjain nya gw njir 🤓
