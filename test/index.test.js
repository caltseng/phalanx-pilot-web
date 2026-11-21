import assert from 'node:assert/strict';
import { test } from 'node:test';

import { chunk, clamp, sum, titleCase } from '../src/index.js';

test('titleCase capitalizes each word', () => {
  assert.equal(titleCase('hello phalanx world'), 'Hello Phalanx World');
});

test('chunk splits into fixed-size groups', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test('chunk rejects non-positive sizes', () => {
  assert.throws(() => chunk([1], 0), RangeError);
});

test('sum adds numbers', () => {
  assert.equal(sum([1, 2, 3]), 6);
  assert.equal(sum([]), 0);
});

test('clamp returns values within the range unchanged', () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(0, 0, 10), 0);
  assert.equal(clamp(10, 0, 10), 10);
});

test('clamp raises values below the range to min', () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test('clamp lowers values above the range to max', () => {
  assert.equal(clamp(42, 0, 10), 10);
});

test('clamp rejects an inverted range', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
});
