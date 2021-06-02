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