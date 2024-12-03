import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readToArray } from '../src/fileUtils.js';

describe('readToArray', () => {
    it('should read a file and return an array of lines', async () => {
        const lines = await readToArray('./test/testFile.txt');
        assert.deepEqual(lines, ['1', '2', '3', '4', '5'])
    })
})