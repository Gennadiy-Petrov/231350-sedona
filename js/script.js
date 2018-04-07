    var link = document.querySelector(".link-form");
    var form = document.querySelector(".search");
    var arrival = form.querySelector("[name=arrival]");
    var departure = form.querySelector("[name=departure]");
    var adults = form.querySelector("[name=adults]");
    var children = form.querySelector("[name=children]");
    var isStorageSupport = true;
    var strorage = "";

    try {
        storage = localStorage.getItem("arrival");
    } catch (err) {
        isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        if (form.classList.contains("modal-error")) {
            form.classList.remove("modal-error");
        }
        form.classList.toggle("search-show");
        if (storage) {
            arrival.value = storage;
            departure.focus();
        }   else {
        arrival.focus();
        }
    });

    form.addEventListener("submit", function (evt) {
        if (!arrival.value || !departure.value || !adults.value || !children.value) {
        evt.preventDefault();
            form.classList.remove("modal-error");
            form.offsetWidth = form.offsetWidth;
            form.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
            localStorage.setItem("arrival", arrival.value);
            }
        }
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (form.classList.contains("search-show")) {
                form.classList.remove("search-show");
                form.classList.remove("modal-error");
            }
        }
    })

