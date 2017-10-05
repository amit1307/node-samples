const fs = require('fs');
const spawn = require('child_process').spawn;

var fileName = process.argv[2];

if (!fileName) {
    throw Error("A file to watch must be provided");
}
//Watching a file passed as an argument
fs.watchFile('./watchedFiles/' + fileName , function () {
    console.log(`File ${fileName} just changed`);
    let dir = spawn('dir');
    dir.stdout.on('data', (data) => {
        console.log(data.toString());
    });
});

console.log(`Now watching ${fileName} for any changes`);