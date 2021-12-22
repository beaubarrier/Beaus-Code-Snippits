function dirReduc(arr) {
  let res = arr.join("");
  //   console.log(res);
  let dirs = /NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST/g;
  while (dirs.test(res)) {
    res = res.replace(dirs, "");
    // console.log(res);
  }
  //   console.log(res.match(/(NORTH|SOUTH|EAST|WEST)/g) || []);
  return res.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"] = ["WEST"];

// ["NORTH", "WEST", "SOUTH", "EAST"] = ["NORTH", "WEST", "SOUTH", "EAST"];

// ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"] = [];
