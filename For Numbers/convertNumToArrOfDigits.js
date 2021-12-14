function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
// example, 1234 will return [4, 3, 2, 1]
