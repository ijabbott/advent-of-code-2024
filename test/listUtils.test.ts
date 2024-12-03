import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { splitList, listSimilarity } from '../src/listUtils.js'

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
