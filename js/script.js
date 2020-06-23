var button = document.querySelector(".searching");
var form = document.querySelector(".hotel-search");
var opened = false;
var checkIn = document.querySelector("#check-in-date");
var checkOut = document.querySelector("#check-out-date");
var number = document.querySelector(".count");

button.addEventListener("click", function(event) {
    if (!opened) {
        event.preventDefault();
        form.classList.add("hotel-search-show");
        opened = true;
    } else if (opened) {
        event.preventDefault();
        form.classList.remove("hotel-search-show");
        opened = false;
    }
});

form.addEventListener("submit", function(evt) {
    if (!checkIn.value || !checkOut.value || !number.value) {
        evt.preventDefault();
        form.classList.remove("modal-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("modal-error");
    } else {

    }
});