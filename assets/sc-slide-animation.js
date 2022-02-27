"use strict";
var options = {
    rootMargin: "-20%",
};
var observer = new IntersectionObserver(animate, options);
var elements = document.querySelectorAll("[data-scroll]");
elements.forEach(function (element) {
    observer.observe(element);
});
function animate(entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-animated");
        }
    });
}
