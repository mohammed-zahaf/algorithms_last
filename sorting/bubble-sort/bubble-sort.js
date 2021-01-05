const { swap } = require('../common');

function bubbleSort(L, sort = 'ASC') {
	for (let i = 0; i < L.length-1; i++) {
		let isSorted = true;
		for (let j = 0; j < L.length-1; j++) {
			if (sort === 'ASC' && L[j] > L[j+1]) {
				swap(L, j + 1, j);
				isSorted = false;
			}

			if (sort === 'DESC' && L[j] < L[j+1]) {
				swap(L, j + 1, j);
				isSorted = false;
			}
		}
		if (isSorted) break;
	}
	return L;
}

module.exports = {
	bubbleSort
}
