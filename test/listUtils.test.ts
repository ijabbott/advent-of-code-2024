import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { splitList, listSimilarity, isDirectionalSequenceWithLimit, stringsToNumbers } from '../src/listUtils.js'

describe('splitList', () => {
    it('should split a list into two lists based on a given separator', () => {
        const result: string[][] = splitList(["1    2", "3 4", "5   6", "7   8", "9         10"], '\\s+');
        assert.deepEqual(result[0], ["1", "3", "5", "7", "9"]);
        assert.deepEqual(result[1], ["2", "4", "6", "8", "10"]);
    });
});

describe('listSimilarity', () => {
    it('should calculate the similarity score of two lists of numbers', () => {
        const list1: number[] = [3, 4, 2, 1, 3, 3];
        const list2: number[] = [4, 3, 5, 3, 9, 3];
        const result: number = listSimilarity(list1, list2);
        assert.equal(result, 31);
    });
});

describe('isAscendingSequenceWithLimit', () => {
    // it('should return true if a list of numbers is an ascending sequence while under a maximum difference between numbers', () => {
    //     const result: boolean = isDirectionalSequenceWithLimit([1, 2, 5, 6, 8], 3);

    //     assert.equal(result, true);
    // });

    // it('should return false if a list of numbers is an ascending sequence while over maximum difference between numbers', () => {
    //     const result: boolean = isDirectionalSequenceWithLimit([1, 2, 6, 7, 8], 3);

    //     assert.equal(result, false);
    // });

    // it('should return false if a list of numbers is not an ascending or descending sequence', () => {
    //     const result: boolean = isDirectionalSequenceWithLimit([1, 2, 6, 5, 8], 3);

    //     assert.equal(result, false);
    // });

    // it('should return false if a list of numbers is a descending sequence while over maximum difference between numbers', () => {
    //     const result: boolean = isDirectionalSequenceWithLimit([8, 7, 3, 2, 1], 3);

    //     assert.equal(result, false);
    // });

    // it('should return true if a list of numbers is a descending sequence while under maximum difference between numbers', () => {
    //     const result: boolean = isDirectionalSequenceWithLimit([8, 6, 3, 2, 1], 3);

    //     assert.equal(result, true);
    // });

    // it('should return false if a list of numbers has repeats', () => {
    //     const result: boolean = isDirectionalSequenceWithLimit([68,68,68,71,74,77,80,81], 3);

    //     assert.equal(result, false);
    // });

    // it('should return true when only once direction change is the only issue', () => {
    //     const result: boolean = isDirectionalSequenceWithLimit([66,68,64,61,58,57,54], 3);

    //     assert.equal(result, true);
    // });

    
    // it('should return true when last element is the only issue', () => {
    //     const result: boolean = isDirectionalSequenceWithLimit([16,19,21,23,26,29,33], 3);

    //     assert.equal(result, true);
    // });
    // it('filler', () => {
    //     const result: boolean = isDirectionalSequenceWithLimit([88,87,87,86,81], 3);

    //     assert.equal(result, false);
    // });

    // it('filler2', () => {
    //     const result: boolean = isDirectionalSequenceWithLimit([72,68,66,63,61,58,55,52], 3);

    //     assert.equal(result, true);
    // });

    // it('filler3', () => {
    //     const result: boolean = isDirectionalSequenceWithLimit([51,51,55,56,59], 3);

    //     assert.equal(result, true);
    // });
    
});

describe('stringsToNumbers', () => {
    it('transforms a list of space delineated strings to a two-dimensional list of numbers', () => {
        const result: number[][] = stringsToNumbers(["1 2", "3 4"]);
        assert.deepEqual(result, [[1, 2], [3, 4]])
    });
});
