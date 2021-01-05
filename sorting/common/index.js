const DEFAULT_SIZE = 10, STRING_TYPE = 'B';

function getRandomIndex(L) {
	return Math.floor(L.length * Math.random());
}

function generateNumberList(size = DEFAULT_SIZE, min, max) {
	const DELTA = max - min;
	return Array.from({length: size}, () => {
		return Math.floor(min + (DELTA * Math.random()));
	});
}

function generateCharsList(size = DEFAULT_SIZE, type = STRING_TYPE) {
	const UPPER_MIN = 65, UPPER_MAX = 90, UPPER_DELTA = UPPER_MAX - UPPER_MIN;
	const LOWER_MIN = 97, LOWER_MAX = 122, LOWER_DELTA = LOWER_MAX - LOWER_MIN;

	switch (type) {
		case 'U':
			return Array.from({length: size}, () => {
				return String.fromCharCode(Math.floor(UPPER_MIN + (UPPER_DELTA * Math.random())));
			});
		case 'L':
			return Array.from({length: size}, () => {
				return String.fromCharCode(Math.floor(LOWER_MIN + (LOWER_DELTA * Math.random())));
			});
		case 'B':
			return Array.from({length: size}, () => {
				const isUpper = Math.random() < .5;
				const charDec = isUpper ? (UPPER_MIN + (UPPER_DELTA * Math.random())) : LOWER_MIN + (LOWER_DELTA * Math.random())
				return String.fromCharCode(Math.floor(charDec));
			});
	}
}

function swap(L, i, j) {
	let tmp = L[i];
	L[i] = L[j];
	L[j] = tmp;
}

module.exports = {
	swap,
	getRandomIndex,
	generateNumberList,
	generateCharsList,
}
