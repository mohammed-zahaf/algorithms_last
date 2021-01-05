const { swap } = require('../common');

function bubbleSort(L) {
	for (let i = 0; i < L.length-1; i++) {
		let isSorted = true;
		for (let j = 0; j < L.length-1; j++) {
			if (L[j] > L[j+1]) {
				swap(L, j + 1, j);
				isSorted = false;
			}
		}
		if (isSorted) break;
	}
	return L;
}

function descendingBubbleSort(L) {
	for (let i = L.length-1; i >= 0; i--) {
		let isSorted = true;
		for (let j = L.length-1; j >= 0; j--) {
			if (L[j] < L[j+1]) {
				swap(L, j + 1, j);
				isSorted = false;
			}
		}
		if (isSorted) break;
	}
	return L;
}

module.exports = {
	bubbleSort,
	descendingBubbleSort
}
