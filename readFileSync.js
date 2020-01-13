const fs = require('fs');

let data = fs.readFileSync('./data/hello_world.txt');

console.log(data.toString());