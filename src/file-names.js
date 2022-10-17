const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let files = [];
  names.forEach(name => {
    if (files.includes(name)) {
      let index = 0;
      let nameIndex = [];
      files.forEach((file, i) => {
        if (file.indexOf(name) > -1) {
          nameIndex.push(i);
        }
      })
      let temp = files[nameIndex[nameIndex.length - 1]];
      let rest = temp.replace(name, "");
      if (rest !== "") {
        index = Number(rest.match(/\d+/)[0]);
      }
      files.push(name + "(" + (index + 1) + ")");
    } else {
      files.push(name);
    }
  })
  return files;
}

module.exports = {
  renameFiles
};
