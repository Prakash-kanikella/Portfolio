// JavaScript to handle filtering
const buttons = document.querySelectorAll(".pbutton");
const images = document.querySelectorAll(".pd4 img");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    images.forEach(img => {
      if (filter === "all" || img.classList.contains(filter)) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  });
});

// Initially show all images
document.querySelector('.pbutton[data-filter="all"]').click();