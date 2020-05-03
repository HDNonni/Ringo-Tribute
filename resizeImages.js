// 1. List all of the images in a directory
const path = require('path');
const fs = require('fs');
const jimp = require('jimp');

const directory = "images";
const outputDirectory = "resizedImages";

const directoryContents = fs.readdirSync(path.resolve(directory));

async function main() {
	for(const imageName of directoryContents) {
		console.log("Resizing " + imageName);
	        const image = await jimp.read(path.resolve(directory + "/" + imageName));

		await image.resize(jimp.AUTO, 500);

		await image.writeAsync(path.resolve(outputDirectory + "/" + imageName));

	}


}

main();

