////
// Element Variables
////
const html = document.documentElement;
const navWrap = document.getElementById("nav-wrap");
const navbar = document.getElementById("nav");
const navLinks = document.getElementById("nav-links");
const hamburger = document.getElementById("hamburger-icon");
const jumbotron = document.getElementById("jumbotron");
const canvas = document.getElementById("car-crash");
const context = canvas.getContext("2d");
const img = new Image();

////
// Constants
////
const constants = {
  frameCount: 200,
  canvasVisibleRatio: 1100 / 3200,
  canvasMovingPartsRatio: 2200 / 3200,
  isMobile:
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0),
};

////
// Global Variables (with initialization)
////
let currentFrameIndex = 0;

////
// Helper Functions
////
const getAnimationRangeConstant = () => (constants.isMobile ? 1 : 2);
const getAnimationMaxScrollTop = () =>
  jumbotron.clientHeight + getAnimationRangeConstant() * canvas.clientHeight;
const getAnimationPinDuration = () =>
  constants.isMobile ? 0 : Math.floor(0.2 * getAnimationMaxScrollTop());
const getMovingPartsHeight = () =>
  jumbotron.clientHeight +
  constants.canvasMovingPartsRatio * canvas.clientHeight +
  getAnimationPinDuration();

////
// General Functions
////

// Initializes UI for Navigation based on screen width with
//  either a hamburger menu for smaller devices or a flat menu
//  for larger devices
//
const initializeNavigation = () => {
  hamburger.onclick = () => {
    navLinks.classList.toggle("activated");
    hamburger.classList.toggle("white");
  };

  if (window.matchMedia("(max-width: 992px)").matches) {
    navLinks.classList.add("mobile");
  } else {
    navLinks.classList.add("desktop");
  }

  // Trivial UI logic for handling Navigation Menu during resizing
  window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 992px)").matches) {
      navLinks.classList.remove("desktop");
      navLinks.classList.add("mobile");
    } else {
      navLinks.classList.remove("mobile");
      navLinks.classList.remove("activated");
      hamburger.classList.remove("white");
      navLinks.classList.add("desktop");
    }
  });
};

// Sets the jumbotron height to ensure that the animation
//  renders correctly for all screen sizes. It guarantees that the road
//  will always be at the base with a bit of whitespace below it.
//
const setJumbotronHeight = () => {
  const height =
    window.innerHeight - constants.canvasVisibleRatio * canvas.clientHeight;
  if (height >= 0) {
    jumbotron.style.height = height.toString() + "px";
    jumbotron.style.marginBottom = "0px"; // resets margin from alternative case below
  } else {
    jumbotron.style.marginBottom = height.toString() + "px"; // eats excess from top of canvas
  }
};

// Simply adds an event listener to recalulate and rerender the Jumbotron height
//  when the window is resized. This also ensures that the road is always at the base
//
const initializeJumbotronResponsiveness = () => {
  window.addEventListener("resize", () => {
    // Adjusts height on desktop resizing and purposely ignores mobile resizing (specifically upon down scroll)
    if (!constants.isMobile) {
      setJumbotronHeight();
    }
  });
};

// Returns the file name of the jpg file that corresponds to the passed index
//
const getFrame = (index) =>
  `Image Sequence/car_crash${index.toString().padStart(3, "0")}.jpg`;

// Preloads the animation's image sequence to avoid lagging
//
const preloadImages = () => {
  for (let i = 0; i < constants.frameCount; i++) {
    const _img = new Image();
    _img.src = getFrame(i);
  }
};

// Initializes img to the first image in the sequence
//
const initializeImage = () => {
  img.src = getFrame(0);
  img.onload = () => context.drawImage(img, 0, 0);
};

// Updates img to the jpg at passed index
//
const updateImage = (index) => {
  if (index === currentFrameIndex || index > constants.frameCount) return;
  img.src = getFrame(index);
  context.drawImage(img, 0, 0);
  currentFrameIndex = index;
};

// Just a helper function that converts a number to 0 if it is negative,
//  and returns the original number otherwise
//
const zeroPositive = (num) => (num < 0 ? 0 : num);
