// array1 = array1.filter(function (val) {
//   return array2.indexOf(val) == -1;
// });
// Or with ES6:

function test() {
  let array2 = [1, 2, 3, 4, 5, 6];
  let array1 = [1, 7, 8, 9];
  array1 = array1.filter((val) => !array2.includes(val));
  console.log(array1);
}
test();
