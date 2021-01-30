const { swap } = require('../common');


function sift(L, node, size, sort) {
	let k = node, j = 2 * k;
	while (j <= size) {
		let isAscending = sort === 'ASC' && L[j] < L[j+1];
		let isDescending = sort === 'DESC' && L[j] > L[j+1];
		if (j < size && (isAscending || isDescending)) {
			j++;
		}

		isAscending = sort === 'ASC' && L[k] < L[j];
		isDescending = sort === 'DESC' && L[k] > L[j];
		if (isAscending || isDescending) {
			swap(L, k, j);
			k = j;
			j = 2 * k;
		} else {
			j = size + 1;
		}
	}
}

function heapSort(L, size, sort = 'ASC') {
	let mid = Math.floor(size/2);
	for (let i = mid; i >= 0; i--) {
		sift(L, i, size, sort);
	}
	for (let i = size; i >= 1; i--) {
		swap(L, i, 0);
		sift(L, 0, i-1, sort);
	}
	return L;
}


module.exports = {
	heapSort
}
