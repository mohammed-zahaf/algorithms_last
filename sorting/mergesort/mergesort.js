
function merge(L, start, mid, end, flow = 'ASC') {
	let tmp = [], i = start, j = mid+1, k = 0;

	// get all lower value
	while (i <= mid && j <= end) {
		if (flow === 'ASC' && L[i] <= L[j]) {
			tmp[k++] = L[i++];
		} else if (flow === 'DESC' && L[i] >= L[j]) {
			tmp[k++] = L[i++];
		} else {
			tmp[k++] = L[j++];
		}
	}

	// go through the first middle array
	while (i <= mid) {
		tmp[k++] = L[i++];
	}

	// go through the second middle array
	while (j <= end) {
		tmp[k++] = L[j++];
	}

	for (let l = start; l <= end; l++) {
		L[l] = tmp[l - start];
	}
}

function mergesort(L, start, end, flow) {
	if (start < end) {
		const mid = Math.floor((start + end) / 2);
		mergesort(L, start, mid, flow);
		mergesort(L, mid+1, end, flow);
		merge(L, start, mid, end, flow);
	}
	return L;
}


module.exports = {
	mergesort
}
