const html = document.documentElement;
const navWrap = document.getElementById("nav-wrap");
const navbar = document.getElementById("nav");
const canvas = document.getElementById("car-crash");
const context = canvas.getContext("2d");
const jumbotron = document.getElementById("jumbotron");
const initialWindowHeight = window.innerHeight;

let globalFrameIndex = 0;

const frameCount = 200;
const currentFrame = (index) =>
  `Image Sequence/car_crash${index.toString().padStart(3, "0")}.jpg`;

const img = new Image();
img.src = currentFrame(0);
img.onload = function () {
  context.drawImage(img, 0, 0);
};

// Maybe unnecessary
const preloadImages = () => {
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const updateImage = (index) => {
  if (index === globalFrameIndex) return;
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
  globalFrameIndex = index;
  // console.log(index);
};

window.addEventListener("scroll", () => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0);

  // const scrollTop = html.scrollTop - (isMobile ? 30 : 0);
  const scrollTop = html.scrollTop;
  const maxScrollTop = jumbotron.clientHeight + 2 * canvas.clientHeight;
  const scrollFraction = (scrollTop < 0 ? 0 : scrollTop) / maxScrollTop;
  const frameIndex = Math.min(
    frameCount,
    Math.ceil(scrollFraction * frameCount)
  );

  // Stops animation when off screen
  if (
    html.scrollTop <=
    jumbotron.clientHeight +
      (2200 / 3200) * canvas.clientHeight +
      Math.floor(0.2 * maxScrollTop)
  ) {
    requestAnimationFrame(() => updateImage(frameIndex));
  }

  if (html.scrollTop > Math.floor(0.2 * maxScrollTop)) {
    navWrap.classList.add("scrolled");
  } else if (isMobile && html.scrollTop > 0) {
    navWrap.classList.add("scrolled");
  } else if (html.scrollTop >= 0) {
    navWrap.classList.remove("scrolled");
  }

  console.log(html.scrollTop);
});

window.addEventListener("resize", () => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || navigator.maxTouchPoints > 0;

  // const scrollTop = html.scrollTop - (isMobile ? 20 : 0);
  const scrollTop = html.scrollTop;
  const maxScrollTop = jumbotron.clientHeight + 2 * canvas.clientHeight;
  const scrollFraction = (scrollTop < 0 ? 0 : scrollTop) / maxScrollTop;
  const frameIndex = Math.min(
    frameCount,
    Math.ceil(scrollFraction * frameCount)
  );

  if (!isMobile) {
    requestAnimationFrame(() => updateImage(frameIndex));
  }

  console.log(scrollTop);
});

// See above for definition
preloadImages();
