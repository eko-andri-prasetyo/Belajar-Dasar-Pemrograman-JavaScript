import test from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

test('Menjumlahkan dua angka positif', () => {
  assert.equal(sum(2, 3), 5);
});

test('Menjumlahkan angka positif dan nol', () => {
  assert.equal(sum(10, 0), 10);
});

test('Menjumlahkan angka negatif dan positif', () => {
  assert.equal(sum(-5, 10), 5);
});

test('Menjumlahkan dua angka negatif', () => {
  assert.equal(sum(-3, -7), -10);
});