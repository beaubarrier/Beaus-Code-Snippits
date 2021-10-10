// This snippet removes duplicate values in an array.

const filterNonUnique = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

console.log(filterNonUnique(["abe", "abe", "bbe", "cbe", "dbe", "dbe", "ebb"])); // [1, 3, 5]
