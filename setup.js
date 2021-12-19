const fs = require("fs");
const path = require("path");

const scriptOldPath = "openTabs.js";
const scriptNewPath = path.join(__dirname, "..", "..", "..", "openTabs.js");

const txtOldPath = "tabs.txt";
const txtNewPath = path.join(__dirname, "..", "..", "..", "tabs.txt");

fs.copyFile(__dirname + "/" + scriptOldPath, scriptNewPath, (err) => {
  if (err) {
    throw err;
  }
  console.log(`${scriptOldPath} was copied to ${scriptNewPath}`);
});

fs.copyFile(__dirname + "/" + txtOldPath, txtNewPath, (err) => {
  if (err) {
    throw err;
  }
  console.log(`${txtOldPath} was copied to ${txtNewPath}`);
});
