
// JavaScript for sticky elements visibility after scrolling
document.addEventListener("scroll", function () {
  const stickyRight = document.querySelector(".sticky-right");
  const stickyLeft = document.querySelector(".sticky-left");
  const scrollThreshold = 200; // Adjust the scroll distance as needed

  if (window.scrollY > scrollThreshold) {
    stickyRight.style.opacity = "1";
    stickyRight.style.pointerEvents = "auto";
    stickyLeft.style.opacity = "1";
    stickyLeft.style.pointerEvents = "auto";
  } else {
    stickyRight.style.opacity = "0";
    stickyRight.style.pointerEvents = "none";
    stickyLeft.style.opacity = "0";
    stickyLeft.style.pointerEvents = "none";
  }
});