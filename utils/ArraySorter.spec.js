import * as assert from 'assert';
import ArraySorter from './arraySorter.js';

describe('arrayUtils test suite', () => {
    const testArray = [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16];
    const resultArray = [1, 5, 7, 10, 14, 16]; // 1 3 7 10 14 16
    let arraySorter;

    before(() => {
        arraySorter = new ArraySorter();
    })

    it('Should pull items from array and returning a sorted leftOver', () => {
        assert.deepEqual(arraySorter.longestPullSort(testArray), resultArray);
    })
})
