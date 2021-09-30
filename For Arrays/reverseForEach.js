// This snippet executes a function for each element of an array starting from the array’s last element.

const forEachRight = (arr, callback) =>
  arr.slice(0).reverse().forEach(callback);

forEachRight([1, 2, 3, 4], (val) => console.log(val)); // '4', '3', '2', '1'
