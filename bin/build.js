const fs = require('fs-extra');

fs.emptyDirSync('./dist');
fs.copySync('./src/index.html', './dist/index.html');
