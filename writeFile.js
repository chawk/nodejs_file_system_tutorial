const fs = require('fs');

fs.writeFile('./data/writingFile.txt', 'testing 1, 2, 3', function () {
    console.log('the file was written!');
})