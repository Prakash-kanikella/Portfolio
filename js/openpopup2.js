document.addEventListener('DOMContentLoaded', () => {
  const openPopup = document.getElementById('openPopup2');
  const popup = document.createElement('div');

  // Popup content
  popup.innerHTML = `
    <div class="popup-overlay" id="popupOverlay">
  <div class="popup-content">
    <span class="popup-close" id="closePopup">&times;</span>
    <div class="logo-container">
      <i class="fa fa-cogs services-logo"></i>
      <h2>Machine Learning</h2>
    </div>
    <p class="intro-text">
      I am passionate about machine learning and AI. If you're looking for a dynamic and knowledgeable speaker to dive deep into the world of ML, I’d be thrilled to contribute to your event!
    </p>

    <h3>I can help you if</h3>
    <ul class="help-list">
      <li>You're looking for insights on machine learning algorithms and how to apply them to real-world challenges.</li>
      <li>You're interested in learning how to implement machine learning models to optimize processes or drive business innovation.</li>
      <li>You want to understand the latest trends and advancements in machine learning and how they can be leveraged in your field.</li>
      <li>You’re seeking a speaker who can help demystify complex machine learning concepts for diverse audiences.</li>
    </ul>

    <h3>Examples:</h3>
    <ul class="examples-list">
      <li>Predictive Maintenance for Chemical Plant Equipment - Link
        <ul>
          <li>Developed a machine learning model to predict equipment failure using operational and sensor data, optimizing maintenance schedules and reducing downtime.</li>
        </ul>
      </li>
      <li>Process Optimization Using Data-Driven Models - Link
        <ul>
          <li>Built a machine learning model to analyze and optimize chemical process parameters, enhancing efficiency, yield, and operational cost-effectiveness.</li>
        </ul>
      </li>
    </ul>

    <h3>Contact Me</h3>
    
    <p>Tell me more about your project at <a href="mailto:prakashkanikella7@gmail.com">prakashkanikella7@gmail.com</a> to see if we can work together.</p>

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