const { swap } = require('../common');


function partition(L, low, high, sort) {
	// pivot - Element at right most position
	let pivot = L[high];
	for (let j = low; j <= high; j++)
	{

		// If current element is smaller than the pivot, swap the element with pivot
		if (sort === 'ASC' && L[j] < pivot) {
			swap(L, low++, j);
		}

		// If current element is smaller than the pivot, swap the element with pivot
		if (sort === 'DESC' && L[j] > pivot) {
			swap(L, low++, j);
		}
	}

	swap(L, high, low);
	return (low);
}

function quickSort(L, low, high, sort = 'ASC') {
	if (low < high) {
		const P = partition(L, low, high, sort);
		quickSort(L, low, P-1, sort);
		quickSort(L, P+1, high, sort);
	}
	return L;
}

module.exports = {
	quickSort
}
