const { generateNumberList, generateCharsList } = require('../common');
const { insertionSort } = require('./insertionsort');

// Variables
const SIZE = 15, MIN_VALUE = 100, MAX_VALUE = 150;
const NUMBER_LIST = generateNumberList(SIZE, MIN_VALUE, MAX_VALUE);
const CHARS_LIST = generateCharsList(SIZE);
const STRINGS_LIST = ["ddd", "eee", "bca", "aaa", "zzz", "bbb"];

// Sort number list
const MERGE_NUMBER_SORTED_LIST = insertionSort(NUMBER_LIST.slice());
const DESC_MERGE_NUMBER_SORTED_LIST = insertionSort(NUMBER_LIST.slice(), 'DESC');

// Sort chars list
const INSERTION_CHARS_SORTED_LIST = insertionSort(CHARS_LIST.slice());
const DESC_INSERTION_CHARS_SORTED_LIST = insertionSort(CHARS_LIST.slice(), 'DESC');

// Sort string list
const INSERTION_STRING_SORTED_LIST = insertionSort(STRINGS_LIST.slice());
const DESC_INSERTION_STRING_SORTED_LIST = insertionSort(STRINGS_LIST.slice(),'DESC');


// LOGS
console.log("ZM:: Initial list", NUMBER_LIST);
console.log("ZM:: Sorted list", MERGE_NUMBER_SORTED_LIST);
console.log("ZM:: Descending sorted list", DESC_MERGE_NUMBER_SORTED_LIST);

console.log("ZM:: Initial chars list", CHARS_LIST);
console.log("ZM:: Sorted chars list", INSERTION_CHARS_SORTED_LIST);
console.log("ZM:: Descending sorted chars list", DESC_INSERTION_CHARS_SORTED_LIST);

console.log("ZM:: Initial string list", STRINGS_LIST);
console.log("ZM:: Sorted string list", INSERTION_STRING_SORTED_LIST);
console.log("ZM:: Descending sorted chars list", DESC_INSERTION_STRING_SORTED_LIST);
