import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { Report } from '../src/report.js';

describe('report', () => {
    describe('isSafe', () => {
        it('returns false when there are no levels', () => {
            const report:Report = new Report("");

            assert.equal(false, report.isSafe());
        });

        it('returns false when there is 1 level', () => {
            const report:Report = new Report("1");

            assert.equal(false, report.isSafe());
        });

        it('returns true when given a sequence that increases by one', () => {
            const report:Report = new Report("1 2 3");

            assert.equal(true, report.isSafe());
        });

        it('returns true when given a sequence that decreases by one', () => {
            const report:Report = new Report("3 2 1");

            assert.equal(true, report.isSafe());
        });

        it('returns false when a sequence increases and decreases', () => {
            const report:Report = new Report("1 3 2");

            assert.equal(false, report.isSafe());
        });

        it('returns false when there are repeated numbers', () => {
            const report:Report = new Report("1 1 2");

            assert.equal(false, report.isSafe())
        });

        it('returns false when there is a difference of greater than 3 between numbers', () => {
            const report:Report = new Report("1 2 6");

            assert.equal(false, report.isSafe())
        })
    })
});