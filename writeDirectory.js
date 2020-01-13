const fs = require('fs');

fs.mkdir('./data/chris_hawkes_tuts', function () {
    console.log('direcory was made async');
})