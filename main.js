'use strict';
import ArrayUtils from './utils/arrayUtils.js';

const sortArray = [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16];
const sorted = ArrayUtils.pullSort(sortArray);

console.log(`Array:\n ${sortArray}\nwas sorted with the outcome:\n ${sorted}`);