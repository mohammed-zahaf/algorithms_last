function buildRandomList(size, min, max) {
	return Array.from({length: size}, () => {
		return Math.floor(min + ((max - min) * Math.random()));
	});
}

function getRandomPivotIndex(L) {
	return Math.floor(L.length * Math.random());
}

function swap (L, i, j) {
	let tmp = L[i];
	L[i] = L[j];
	L[j] = tmp;
}

function partition(L, low, high) {

	// pivot - Element at right most position
	let pivot = L[high];
	let i = (low - 1);  // Index of smaller element
	for (let j = low; j <= high; j++)
	{
		// If current element is smaller than the pivot, swap the element with pivot
		if (L[j] < pivot) {
			i++;    // increment index of smaller element
			swap(L, i, j);
		}
	}
	swap(L, i + 1, high);
	return (i + 1);
}

function qsort(L, low, high) {
	if (low < high) {
		const P = partition(L, low, high);
		qsort(L, low, P-1);
		qsort(L, P+1, high);
	}
	return L;
}

module.exports = {
	buildRandomList,
	getRandomPivotIndex,
	partition,
	swap,
	qsort
}
