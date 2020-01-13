const fs = require('fs');

if (!fs.existsSync('./data/ifDirectoryExist')) {
    fs.mkdirSync('./data/ifDirectoryExist');
} else {
    console.log('the directory already exists, not doing anything!')
}