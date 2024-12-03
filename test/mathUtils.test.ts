import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { absoluteDifference } from '../src/mathUtils.js';

describe('absoluteDifference', () => {
    it('finds the absolute difference between two numbers', () => {
        const absoluteDifference1: number = absoluteDifference(10, 2);
        const absoluteDifference2: number = absoluteDifference(2, 10);

        assert.equal(absoluteDifference1, 8);
        assert.equal(absoluteDifference2, 8);
    });
});