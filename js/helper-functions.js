////
// Helper Functions
////

// Localization of animation range constant
//
const getAnimationRangeConstant = () => (constants.isMobile ? 1 : 2);

// Returns the animation spread based on the range constant
//
const getAnimationMaxScrollTop = () =>
  jumbotron.clientHeight + getAnimationRangeConstant() * canvas.clientHeight;

// Localization of pin duration
//
const getAnimationPinDuration = () =>
  constants.isMobile ? 0 : Math.floor(0.2 * getAnimationMaxScrollTop());

// Calculates and returns the point in the animation in which the moving
//  parts are fully off-screen
//
const getMovingPartsHeight = () =>
  jumbotron.clientHeight +
  constants.canvasMovingPartsRatio * canvas.clientHeight +
  getAnimationPinDuration();

// Just a helper function that converts a number to 0 if it is negative,
//  and returns the original number otherwise
//
const zeroPositive = (num) => (num < 0 ? 0 : num);
