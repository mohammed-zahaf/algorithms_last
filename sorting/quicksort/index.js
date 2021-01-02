const { buildRandomList, qsort } = require('./quicksort');

// Init and build a random array
const SIZE = 15, MIN_VALUE = 100, MAX_VALUE = 150;
const L = buildRandomList(SIZE, MIN_VALUE, MAX_VALUE);

// Sort the list
const F_INDEX = 0, L_INDEX = SIZE-1;
const QSL = qsort(L.slice(), F_INDEX, L_INDEX);
console.log("ZM:: Initial list", L);
console.log("ZM:: Sorted list", QSL);
