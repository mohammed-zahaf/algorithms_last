const { generateNumberList } = require('../common');
const { quickSort } = require('./quick-sort');

// Init and build a random array
const SIZE = 15, MIN_VALUE = 100, MAX_VALUE = 150;
const L = generateNumberList(SIZE, MIN_VALUE, MAX_VALUE);

// Sort the list
const F_INDEX = 0, L_INDEX = SIZE-1;
const QUICK_NUMBER_SORTED_LIST = quickSort(L.slice(), F_INDEX, L_INDEX);
const DESC_QUICK_NUMBER_SORTED_LIST = quickSort(L.slice(), F_INDEX, L_INDEX, 'DESC');
console.log("ZM:: Initial list", L);
console.log("ZM:: Sorted list", QUICK_NUMBER_SORTED_LIST);
console.log("ZM:: Descending sorted list", DESC_QUICK_NUMBER_SORTED_LIST);
