const setJumbotronHeight = () => {
  const visibleCanvasRatio = 1100 / 3200; // From animation dimensions

  // TODO: use navbar instead
  const height = Math.max(
    window.innerHeight - visibleCanvasRatio * canvas.clientHeight,
    navbar.clientHeight
  );

  jumbotron.style.height = height.toString() + "px";
};

setJumbotronHeight();

window.addEventListener("resize", () => {
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) &&
    !(navigator.maxTouchPoints > 0)
  ) {
    setJumbotronHeight();
    // console.log("resized");
  }
});

const navLinks = document.getElementById("nav-links");
// const hamburger = document.getElementById("hamburger-icon");

if (window.matchMedia("(max-width: 992px)").matches) {
  navLinks.classList.add("mobile");
} else {
  navLinks.classList.add("desktop");
}

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 992px)").matches) {
    navLinks.classList.remove("desktop");
    navLinks.classList.add("mobile")
  } else {
    navLinks.classList.remove("mobile");
    navLinks.classList.remove("activated");
    hamburger.classList.remove("white");
    navLinks.classList.add("desktop");
  }
})
