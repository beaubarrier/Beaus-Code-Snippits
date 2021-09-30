// Finds the average of an array.

const average = (array) =>
  array.reduce((oldVal, newVal) => oldVal + newVal) / array.length;
