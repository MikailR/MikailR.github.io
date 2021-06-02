// Gets frame index for animation based on current scroll position
//  and some other constraints
//
const getFrameIndex = () => {
  const animationScrollTop = zeroPositive(html.scrollTop);
  const animationMaxScrollTop = getAnimationMaxScrollTop();
  const animationScrollFraction = animationScrollTop / animationMaxScrollTop;
  const animationMaxScrollFraction =
    getMovingPartsHeight() / animationMaxScrollTop;
  return Math.min(
    constants.frameCount,
    Math.ceil(animationMaxScrollFraction * constants.frameCount),
    Math.ceil(animationScrollFraction * constants.frameCount)
  );
};

// Binds the animation to the scroll position
//
window.addEventListener("scroll", () => {
  // Ensures that off-screen re-rendering does not occur
  if (html.scrollTop > getMovingPartsHeight()) return;

  requestAnimationFrame(() => updateImage(getFrameIndex()));

  if (html.scrollTop > getAnimationPinDuration()) {
    navWrap.classList.add("scrolled");
  } else {
    navWrap.classList.remove("scrolled");
  }
});

// Ensures that animation bindings are maintained on window resizing
//
window.addEventListener("resize", () => {
  if (!constants.isMobile) {
    requestAnimationFrame(() => updateImage(getFrameIndex()));
  }
});
