document.addEventListener("DOMContentLoaded", () => {
  // Section Filtering
  const buttons = document.querySelectorAll(".pd3 li");
  const sections = document.querySelectorAll(".pd4 > div");

  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const filter = button.getAttribute("data-filter");
          
          // Show/Hide sections based on filter
          sections.forEach(section => {
              if (filter === "all" || section.classList.contains(filter)) {
                  section.style.display = "block"; // Show matched sections
              } else {
                  section.style.display = "none"; // Hide unmatched sections
              }
          });
      });
  });

  // Image Filtering
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded triggered");

    const buttons = document.querySelectorAll(".pd3 li");
    console.log("Buttons: ", buttons);

    const sections = document.querySelectorAll(".pd4 > div");
    console.log("Sections: ", sections);

    // Add similar logs for the map code
});


  // Initially show all images
  document.querySelector('.pbutton[data-filter="all"]').click();

  // Map Initialization
  const map = L.map("map").setView([11.3218, 75.9342], 13); // Focus on NIT Calicut
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  const marker = L.marker([11.3218, 75.9342]).addTo(map);
  marker.bindPopup("<b>NIT Calicut</b><br>National Institute of Technology Calicut.").openPopup();
});


