const fs = require('fs');

let data = fs.readFile('./data/hello_world.txt', function (err, fileData) {

    console.log("callback is executed");

    if (err) {
        console.log(error);
        return;
    }

    console.log(fileData.toString());
});

// this is executed before the file is read!!
console.log(data);