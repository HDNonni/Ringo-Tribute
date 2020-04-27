
// 1. List all of the images in a directory
const path = require('path');
const fs = require('fs');

const directory = "images";
const outputFile = "imagesDatabase.js";

const directoryContents = fs.readdirSync(path.resolve(directory));

const jsonArray = JSON.stringify(directoryContents);


// 2. Write them to a JS file

const jsFileContents = "let ringoImages = " + jsonArray;

fs.writeFileSync(path.resolve(outputFile), jsFileContents);


