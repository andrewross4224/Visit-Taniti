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
