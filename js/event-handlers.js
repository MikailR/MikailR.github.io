const hamburger = document.getElementById("hamburger-icon");

hamburger.onclick = () => {
    navLinks.classList.toggle("activated");
    hamburger.classList.toggle("white");
}
