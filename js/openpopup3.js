
              // JavaScript to handle popup functionality
              document.addEventListener('DOMContentLoaded', () => {
                const openPopup = document.getElementById('openPopup3');
                const popup = document.createElement('div');
            
                // Popup content
                popup.innerHTML = `
                  <div class="popup-overlay" id="popupOverlay">
  <div class="popup-content">
    <span class="popup-close" id="closePopup">&times;</span>
    <div class="logo-container">
      <i class="fa fa-chalkboard-teacher services-logo"></i>
      <h2>Teaching</h2>
    </div>
    <p class="intro-text">
      With a strong passion for teaching and sharing knowledge, I have delivered numerous presentations and seminars on a wide range of topics. Whether it's a technical subject, industry trends, or soft skills development, I am excited to inspire and educate others!
    </p>

    <h3>I can help you if</h3>
    <ul class="help-list">
      <li>You need a dynamic speaker for your club, conference, or seminar series.</li>
      <li>You are looking to enhance your team's or club’s understanding of diverse topics.</li>
      <li>You want a speaker who can break down complex topics into simple, digestible insights for all audiences.</li>
      <li>You require someone with experience in delivering engaging presentations in clubs like ISTE, IEDC, Tathva, and Ragam.</li>
    </ul>

    <h3>Examples:</h3>
    <ul class="examples-list">
      <li>Data Science Collaboration with Tathva 24 - Link
        <ul>
          <li>Worked on a data science project in collaboration with Tathva 24, delivering insights and workshops to enhance the community's understanding of data-driven technologies and solutions.</li>
        </ul>
      </li>
    </ul>

    <h3>Contact Me</h3>
   
    <p>Tell me more about your event at <a href="mailto:prakashkanikella7@gmail.com">prakashkanikella7@gmail.com</a> to see how we can collaborate.</p>

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
            
                // Event listeners for showing and hiding the popup
                openPopup.addEventListener('click', (e) => {
                  e.preventDefault();
                  popup.style.display = 'block';
                });
            
                popup.addEventListener('click', (e) => {
                  if (e.target.id === 'popupOverlay' || e.target.id === 'closePopup') {
                    popup.style.display = 'none';
                  }
                });
              });
            