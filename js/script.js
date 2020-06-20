    var button = document.querySelector(".searching");
    var loginpopup = document.querySelector(".hotel-search");
    var opened = false;

    button.addEventListener("click", function(event) {
    if (!opened) {
        event.preventDefault();
        loginpopup.classList.add("hotel-search-show");
        opened = true;
    } else if (opened) {
        event.preventDefault();
        loginpopup.classList.remove("hotel-search-show");
        opened = false;
    }
});