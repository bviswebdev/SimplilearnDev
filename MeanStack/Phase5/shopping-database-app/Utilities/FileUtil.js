var fs = require("fs");
var path = require("path");

// Buffer mydata
//var BUFFER = bufferFile("../Public/PRDABC123DEFX.jpg");

function bufferFile(relPath) {
  return fs.readFileSync(path.join(__dirname, relPath)); // zzzz....
}

function bufferFileBase64(relPath) {
  return fs.readFileSync(path.join(__dirname, relPath), "base64"); // zzzz....
}

function writeFile(relPath, data) {
  return fs.writeFileSync(path.join(__dirname, relPath), data); // zzzz....
}

function readStats(relPath) {
  return fs.statSync(path.join(__dirname, relPath));
}

module.exports = { bufferFile, writeFile, readStats, bufferFileBase64 };
