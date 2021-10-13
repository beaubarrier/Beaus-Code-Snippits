array1 = array1.filter(function (val) {
  return array2.indexOf(val) == -1;
});
// Or with ES6:

array1 = array1.filter((val) => !array2.includes(val));
