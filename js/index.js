// NOTE: This might not be necessary
//
// The following code ensures that vh units are interpreted 'correctly' on all devices (especially mobile)
//
// First we get the viewport height/width and we multiply it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;
// Then we set the value in the --vh/--vw custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vw', `${vw}px`)