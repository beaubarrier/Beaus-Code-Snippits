// This snippet capitalizes the first letter of a string.

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("");
