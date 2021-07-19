const { copyFile, constants } = require('fs');
const { copySync } = require('fs-extra');

function callback(err) {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
}

// destination.txt will be created or overwritten by default.
copyFile('source.txt', 'destination.txt', callback);

// // By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
// copyFile('source.txt', 'destination.txt', constants.COPYFILE_EXCL, callback);

// copySync('source.txt', 'destination.txt', {overwrite: true})