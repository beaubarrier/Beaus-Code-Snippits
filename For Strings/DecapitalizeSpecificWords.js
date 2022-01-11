function titleCase(title, minorWords) {
  let ans = [];
  function noComma(x) {
    return x.replace(/,/g, " ");
  }
  const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("");
  if (minorWords) {
    minorWords = minorWords.toLowerCase().split(" ");
    title = title.toLowerCase().split(" ");
    title.forEach((i) => {
      if (!minorWords.includes(i)) {
        ans.push((i = i[0].toUpperCase() + i.substr([1])));
      } else {
        ans.push(i);
      }
    });
    return noComma(capitalize(ans.toString()));
  } else {
    return title
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  }
}

titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
titleCase("the quick brown fox");
