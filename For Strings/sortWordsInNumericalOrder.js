//Useful if sorting through filenames with letters and numbers

function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

//Example: "2is 4test th1s 3a" => "th1s 2is 3a 4test"
