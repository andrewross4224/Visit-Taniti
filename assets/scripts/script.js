const form = document.getElementById('contact-form');

function openNav() {
    var inactiveLinks = document.getElementsByClassName("inactive-pages");
    for (let element of inactiveLinks) {
        if (element.style.display === "block") {
            element.style.display = "none";
            element.style.padding = "0";
        } else {
            element.style.display = "block";
            element.style.padding = "5px 0px 0px 20px";
        }
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.reset();
    var modal = document.getElementById("submit-modal");
    var background = document.getElementById("background-modal");
    background.classList.add("background");
    modal.showModal();
});

function hideModal() {
    var modal = document.getElementById("submit-modal");
    var background = document.getElementById("background-modal");
    background.classList.remove("background");
    modal.close();
}
