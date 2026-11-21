/** Capitalize the first letter of each space-separated word. */
export function titleCase(text) {
  return text
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

/** Split `items` into arrays of at most `size` elements. */
export function chunk(items, size) {
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError('size must be a positive integer');
  }
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

/** Return the sum of the numbers in `values`. */
export function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}
