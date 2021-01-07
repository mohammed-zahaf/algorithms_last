const { generateNumberList, generateCharsList } = require('../common');
const { mergesort, descendingMergeSort } = require('./mergesort');

// Variables
const SIZE = 15, MIN_VALUE = 100, MAX_VALUE = 150;
const NUMBER_LIST = generateNumberList(SIZE, MIN_VALUE, MAX_VALUE);
const CHARS_LIST = generateCharsList(SIZE);
const STRINGS_LIST = ["ddd", "eee", "bca", "aaa", "zzz", "bbb"];

// Sort number list
const MERGE_NUMBER_SORTED_LIST = mergesort(NUMBER_LIST.slice(), 0, SIZE-1);
const DESC_MERGE_NUMBER_SORTED_LIST = mergesort(NUMBER_LIST.slice(), 0, SIZE-1, 'DESC');

// Sort chars list
const MERGE_CHARS_SORTED_LIST = mergesort(CHARS_LIST.slice(), 0, SIZE-1);
const DESC_MERGE_CHARS_SORTED_LIST = mergesort(CHARS_LIST.slice(), 0, SIZE-1, 'DESC');

// Sort string list
const MERGE_STRING_SORTED_LIST = mergesort(STRINGS_LIST.slice(), 0, STRINGS_LIST.length-1);
const DESC_MERGE_STRING_SORTED_LIST = mergesort(STRINGS_LIST.slice(), 0, STRINGS_LIST.length-1, 'DESC');


// LOGS
console.log("ZM:: Initial list", NUMBER_LIST);
console.log("ZM:: Sorted list", MERGE_NUMBER_SORTED_LIST);
console.log("ZM:: Descending sorted list", DESC_MERGE_NUMBER_SORTED_LIST);

console.log("ZM:: Initial chars list", CHARS_LIST);
console.log("ZM:: Sorted chars list", MERGE_CHARS_SORTED_LIST);
console.log("ZM:: Descending sorted chars list", DESC_MERGE_CHARS_SORTED_LIST);

console.log("ZM:: Initial string list", STRINGS_LIST);
console.log("ZM:: Sorted string list", MERGE_STRING_SORTED_LIST);
console.log("ZM:: Descending sorted chars list", DESC_MERGE_STRING_SORTED_LIST);
