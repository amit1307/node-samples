const fs = require('fs');

var fileName = process.argv[2];

if (!fileName) {
   throw Error("A file to watch must be provided");
}
//Watching a file passed as an argument
fs.watchFile('./watchedFiles/' + fileName , function () {
   console.log(`File ${fileName} just changed`);
});

console.log(`Now watching ${fileName} for any changes`);