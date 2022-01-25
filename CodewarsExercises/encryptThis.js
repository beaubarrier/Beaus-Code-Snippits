var encryptThis = function (text) {
  let arr = [];
  let ans = [];
  let str;
  arr = text.split(" ");
  arr.forEach((x) => {
    if (x.length === 1) {
      let fir = x.charCodeAt(0);
      ans.push(fir);
      str = ans.join(" ");
    } else if (x.length === 2) {
      let fir = x.charCodeAt(0);
      let sec = x.charAt(1);
      ans.push(fir + sec);
      ans.join(" ");
    } else if (x.length >= 3) {
      let fir = x.charCodeAt(0);
      let sec = x.charAt(1);
      let last = x.charAt(x.length - 1);
      let mid = x.substring(2, x.length - 1);

      ans.push(fir + last + mid + sec);
      str = ans.join(" ");
    }
  });
  return str;
};

// encryptThis("A");
encryptThis("A wise old owl lived in an oak");
// let test = "A";
// console.log(test.charCodeAt([0]));
