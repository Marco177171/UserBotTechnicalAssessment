import {readFileSync} from 'fs';
import {count} from 'letter-count';
import {wordsCount} from 'text-word-count';
import {join} from 'path';
import axios from 'axios';

async function main(filePath: string) {
	let fileString : string;

	if (checkUrlValidity(filePath)) {
		try {
			const response = await axios.get(filePath);
			fileString = response.data;
			console.log("file successfully fetched from url");
		}
		catch {
			console.error("error fetching from URL", Error);
			return ;
		}
	}
	else {
		try {	
			fileString = readFileSync(filePath, 'utf-8');
			console.log("file content converted to string");
		}
		catch {
			console.error("error reading the file from local system", Error);
			return ;
		}
	}
	const lettersAmount = count(fileString, '-l'); // letters amount
	const wordsAmount = count(fileString, '-w'); // words amount
	const spacesAmount = count(fileString, '-s'); // spaces amount
	const repetitions = wordsCount(fileString);
	console.log("letters: ", lettersAmount.letters);
	console.log("words: ", wordsAmount.words);
	console.log("spaces: ", spacesAmount.spaces);
	console.log("words appearing more than 10 times:")
	for (var key in repetitions)
		if (repetitions[key] > 10)
			console.log(key, repetitions[key]);
}

function checkUrlValidity(filePath: string) {
	try {
		new URL(filePath);
		return true;
	}
	catch (_) {
		return false;
	}
}

const args = process.argv.slice(2);

if (args.length !== 1) {
	console.error("ERROR | usage: node analysis.js *path_to_file*");
	process.exit(1)
}

const filePath = join(__dirname, args[0]);
main(filePath);
