document.addEventListener('DOMContentLoaded', () => {
    const pdimg1Image = document.getElementById('21'); // Select the image with id="11"
    const popup = document.createElement('div');
      
      // Popup content
      popup.innerHTML = `
       <div class="popup-overlay" id="popupOverlay">
        <div class="popup-content">
          <span class="popup-close" id="closePopup">&times;</span>
          <div class="logo-container">
            <i class="fa fa-blog services-logo"></i>
            <h2>ISTE Blog Website</h2>
          </div>
          
          <h3 class="left-subheading">Description</h3>
          <ul class="project-description">
            <li>Built a responsive blog platform with intuitive navigation and collaborative content creation.</li>
            <li>Implemented modern design principles to create an engaging and scalable website.</li>
          </ul>
          
          <h3>Links</h3>
          <ul class="project-links">
            <li><a href="https://github.com/ISTE-2024/Tequila_2024" target="_blank">Source Code (GitHub)</a></li>
            <li><a href="https://techquila.istenitc.com/" target="_blank">Website</a></li>
          </ul>

          <h3>Contact Me</h3>
          <p>Have an exciting project or idea? Let’s collaborate! Reach out to me at <a href="mailto:prakashkanikella7@gmail.com">prakashkanikella7@gmail.com</a>, and let’s bring your vision to life.</p>

          <ul class="contact-buttons">
            <li><a class="button1" href="https://www.linkedin.com/in/prakash-kanikellaa">LinkedIn</a></li>
            <li><a class="button2" href="https://twitter.com/your_profile">Twitter</a></li>
            <li><a class="button3" href="https://github.com/Prakash-kanikella">GitHub</a></li>
          </ul>
        </div>
      </div>
      `;
      
      popup.style.display = 'none';
      document.body.appendChild(popup);
  
      // Event listener for the image with id="11" to show the popup when clicked
      pdimg1Image.addEventListener('click', (e) => {
          e.preventDefault();
          popup.style.display = 'block';
      });
  
      // Close the popup when clicking the overlay or close button
      popup.addEventListener('click', (e) => {
          if (e.target.id === 'popupOverlay' || e.target.id === 'closePopup') {
              popup.style.display = 'none';
          }
      });
  });