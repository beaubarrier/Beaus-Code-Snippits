// This snippet can be used to hide all elements specified.

const hide = (...el) => [...el].forEach((e) => (e.style.display = "none"));

hide(document.querySelectorAll("img")); // Hides all <img> elements on the page
