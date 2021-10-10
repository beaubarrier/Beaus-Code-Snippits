// This will find duplicate elements but still leave the first element.

const arr = ["cat", "cat"];

function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}
console.log(removeDuplicates(arr));
