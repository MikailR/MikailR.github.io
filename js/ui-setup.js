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
