const { swap } = require('../common');

function insertionSort(L, flow = 'ASC') {
	for (let i = 1; i < L.length; i++) {
		for (let j = i; j > 0; j--) {
			if (L[j] < L[j-1] && flow === 'ASC') swap(L, j, j-1);
			if (L[j] > L[j-1] && flow === 'DESC') swap(L, j, j-1);
		}
	}
	return L;
}


module.exports = {
	insertionSort
}
