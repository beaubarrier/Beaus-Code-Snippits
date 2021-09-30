// This snippet checks whether an element has a particular class.

const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector("p.special"), "special"); // true
