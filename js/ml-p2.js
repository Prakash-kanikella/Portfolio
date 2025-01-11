document.addEventListener('DOMContentLoaded', () => {
  const pdimg1Image = document.getElementById('12'); // Select the image with id="11"
  const popup = document.createElement('div');
    
    // Popup content
    popup.innerHTML = `
     <div class="popup-overlay" id="popupOverlay">
        <div class="popup-content">
          <span class="popup-close" id="closePopup">&times;</span>
          <div class="logo-container">
            <i class="fa fa-project-diagram services-logo"></i>
            <h2>Process Optimization Using Data-Driven Models</h2>
          </div>
          
          <h3 class="left-subheading">Description</h3>
          <ul class="project-description">
            <li>Built a machine learning model to analyze and optimize chemical process parameters.</li>
            <li>Enhanced operational efficiency and yield while reducing variability and costs.</li>
            <li>Implemented data-driven insights to streamline process performance.</li>
          </ul>
          
          <h3>Links</h3>
          <ul class="project-links">
            <li><a href="https://github.com/Prakash-kanikella/Process-Optimization-Using-Data-Driven-Models" target="_blank">GitHub Repository</a></li>
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