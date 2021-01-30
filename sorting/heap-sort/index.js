const { generateNumberList, generateCharsList } = require('../common');
const { heapSort } = require('./heap-sort');

// Init and build a random array
const SIZE = 15, MIN_VALUE = 100, MAX_VALUE = 150;
const L = generateNumberList(SIZE, MIN_VALUE, MAX_VALUE);
const CHARS_LIST = generateCharsList(SIZE);
const STRINGS_LIST = ["ddd", "eee", "bca", "aaa", "zzz", "bbb"];

// Sort the list
const L_INDEX = SIZE-1;
const HEAP_NUMBER_SORTED_LIST = heapSort(L.slice(), L_INDEX);
const DESC_HEAP_NUMBER_SORTED_LIST = heapSort(L.slice(), L_INDEX, 'DESC');

// Sort chars list
const HEAP_CHARS_SORTED_LIST = heapSort(CHARS_LIST.slice(), L_INDEX);
const DESC_HEAP_CHARS_SORTED_LIST = heapSort(CHARS_LIST.slice(), L_INDEX, 'DESC');

// Sort string list
const STRING_L_INDEX = STRINGS_LIST.length-1;
const HEAP_STRING_SORTED_LIST = heapSort(STRINGS_LIST.slice(), STRING_L_INDEX);
const DESC_HEAP_STRING_SORTED_LIST = heapSort(STRINGS_LIST.slice(), STRING_L_INDEX, 'DESC');



console.log("ZM:: Initial list", L);
console.log("ZM:: Sorted list", HEAP_NUMBER_SORTED_LIST);
console.log("ZM:: Descending sorted list", DESC_HEAP_NUMBER_SORTED_LIST);

console.log("ZM:: Initial chars list", CHARS_LIST);
console.log("ZM:: Sorted chars list", HEAP_CHARS_SORTED_LIST);
console.log("ZM:: Descending sorted chars list", DESC_HEAP_CHARS_SORTED_LIST);

console.log("ZM:: Initial string list", STRINGS_LIST);
console.log("ZM:: Sorted string list", HEAP_STRING_SORTED_LIST);
console.log("ZM:: Descending sorted chars list", DESC_HEAP_STRING_SORTED_LIST);
