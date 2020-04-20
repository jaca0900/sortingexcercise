import * as assert from 'assert';
import ArrayUtils from './arrayUtils.js';

describe('arrayUtils test suite', () => {
    const testArray = [1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16];
    const resultArray = [1, 2, 4, 8, 16];

    it('Should pull items from array and returning a sorted leftOver', () => {
        assert.deepEqual(ArrayUtils.pullSort(testArray), resultArray);
    })
})