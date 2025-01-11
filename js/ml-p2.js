document.addEventListener('DOMContentLoaded', () => {
    const pdimg1Image = document.getElementById('12'); // Select the image with id="11"
    const popup = document.createElement('div');
      
      // Popup content
      popup.innerHTML = `
        <div class="popup-overlay" id="popupOverlay">
          <div class="popup-content">
            <span class="popup-close" id="closePopup">&times;</span>
            <div class="logo-container">
              <i class="fa fa-chart-line services-logo"></i>
              <h2>Daysis</h2>
            </div>
            <p class="intro-text">
              With a strong background in data analysis and a keen interest in transforming raw data into actionable insights, I offer services to help you make data-driven decisions, optimize processes, and drive business success.
            </p>
  
            <h3>I can help you if</h3>
            <ul class="help-list">
              <li>You need insights from complex datasets and want to turn data into clear, actionable recommendations.</li>
              <li>You're looking to optimize processes using statistical analysis and data modeling techniques.</li>
              <li>You want to explore trends, patterns, and relationships in your data that can help make better business decisions.</li>
              <li>You require assistance with visualizing data and creating intuitive, informative reports.</li>
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
            <p>Tell me more about your project at <a href="mailto:prakashkanikella7@gmail.com">prakashkanikella7@gmail.com</a> to explore how I can assist you.</p>
  
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