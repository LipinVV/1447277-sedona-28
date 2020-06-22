    var button = document.querySelector(".searching");
    var loginpopup = document.querySelector(".hotel-search");
    var opened = false;
    var form = document.querySelector(".hotel-search");
    var checker = loginpopup.querySelector(".dates-labels-one");
    var checherTwo = loginpopup.querySelector(".dates");

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

    form.addEventListener("submit", function (evt) {
        if (!checker.value || dates.value) {
            evt.preventDefault();
            loginpopup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("input", dates-labels-one.value)
            }
        }
    })
});