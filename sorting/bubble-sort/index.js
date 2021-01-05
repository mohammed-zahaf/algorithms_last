const { generateNumberList, generateCharsList } = require('../common');
const { bubbleSort } = require('./bubble-sort');

// Variables
const SIZE = 15, MIN_VALUE = 100, MAX_VALUE = 150;
const NUMBER_LIST = generateNumberList(SIZE, MIN_VALUE, MAX_VALUE);
const CHARS_LIST = generateCharsList(SIZE);
const STRINGS_LIST = ["ddd", "eee", "bca", "aaa", "zzz", "bbb"];

// Sort number list
const BUBBLE_NUMBER_SORTED_LIST = bubbleSort(NUMBER_LIST.slice());
const DESC_BUBBLE_NUMBER_SORTED_LIST = bubbleSort(NUMBER_LIST.slice(), 'DESC');

// Sort chars list
const BUBBLE_CHARS_SORTED_LIST = bubbleSort(CHARS_LIST.slice());
const DESC_BUBBLE_CHARS_SORTED_LIST = bubbleSort(CHARS_LIST.slice(), 'DESC');

// Sort string list
const BUBBLE_STRING_SORTED_LIST = bubbleSort(STRINGS_LIST.slice());
const DESC_BUBBLE_STRING_SORTED_LIST = bubbleSort(STRINGS_LIST.slice(), 'DESC');


// LOGS
console.log("ZM:: Initial list", NUMBER_LIST);
console.log("ZM:: Sorted list", BUBBLE_NUMBER_SORTED_LIST);
console.log("ZM:: Descending sorted list", DESC_BUBBLE_NUMBER_SORTED_LIST);

console.log("ZM:: Initial chars list", CHARS_LIST);
console.log("ZM:: Sorted chars list", BUBBLE_CHARS_SORTED_LIST);
console.log("ZM:: Descending sorted chars list", DESC_BUBBLE_CHARS_SORTED_LIST);

console.log("ZM:: Initial string list", STRINGS_LIST);
console.log("ZM:: Sorted string list", BUBBLE_STRING_SORTED_LIST);
console.log("ZM:: Descending sorted chars list", DESC_BUBBLE_STRING_SORTED_LIST);
