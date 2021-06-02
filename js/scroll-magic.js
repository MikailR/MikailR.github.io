// Sets up SrollMagic to pin animation during desktop scroll
(function () {
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    duration: getAnimationPinDuration(),
  }).setPin("#animation-container");

  if (!constants.isMobile) {
    controller.addScene(scene);
  }

  window.addEventListener("resize", () => {
    scene.duration(getAnimationPinDuration());
  });
})();
