function rowSumOddNumbers(n) {
  // how many numbers are there in the rows above n?
  // sum of arithmetic sequence...
  let numbers_before_n_count = ((n - 1) * n) / 2;

  let first_number_in_nth_row = numbers_before_n_count * 2 + 1;
  let last_number_in_nth_row = first_number_in_nth_row + 2 * (n - 1);

  // sum of arithmetic sequence again...
  return (n * (first_number_in_nth_row + last_number_in_nth_row)) / 2;
}
