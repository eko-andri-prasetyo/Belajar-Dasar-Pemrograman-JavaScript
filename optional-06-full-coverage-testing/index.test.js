import test from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

test('sum of two positive numbers', () => {
  assert.equal(sum(2, 3), 5);
});

test('sum returns 0 if first argument is not a number', () => {
  assert.equal(sum('2', 3), 0);
});

test('sum returns 0 if second argument is not a number', () => {
  assert.equal(sum(2, '3'), 0);
});

test('sum returns 0 if both arguments are not numbers', () => {
  assert.equal(sum('2', '3'), 0);
});

test('sum returns 0 if first argument is negative', () => {
  assert.equal(sum(-1, 3), 0);
});

test('sum returns 0 if second argument is negative', () => {
  assert.equal(sum(3, -1), 0);
});

test('sum returns 0 if both arguments are negative', () => {
  assert.equal(sum(-2, -3), 0);
});

test('sum of zero and a positive number', () => {
  assert.equal(sum(0, 5), 5);
});

test('sum of two zeros', () => {
  assert.equal(sum(0, 0), 0);
});

test('sum with decimal numbers', () => {
  assert.equal(sum(2.5, 3.5), 6.0);
});
