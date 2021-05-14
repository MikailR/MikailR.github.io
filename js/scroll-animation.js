var controller = new ScrollMagic.Controller();

const maxScrollTop = jumbotron.clientHeight + 2 * canvas.clientHeight;
var scene = new ScrollMagic.Scene({
  duration: Math.floor(0.2 * maxScrollTop),
}).setPin("#animation-container");

console.log(scene);

const isMobileGlobal =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || navigator.maxTouchPoints > 0;

if (!isMobileGlobal) {
  controller.addScene(scene);
}

window.addEventListener("resize", () => {
  const updatedMaxScrollTop = jumbotron.clientHeight + 2 * canvas.clientHeight;
  scene.duration(Math.floor(0.2 * updatedMaxScrollTop));
  // console.log(scene.duration);
});

// TODO: Dabble with maxScrollTop and try to make code more cohesive with best practices.
