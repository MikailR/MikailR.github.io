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
const images = new Array();
