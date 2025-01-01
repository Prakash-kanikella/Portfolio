
              // JavaScript to handle popup functionality
              document.addEventListener('DOMContentLoaded', () => {
                const openPopup = document.getElementById('openPopup1');
                const popup = document.createElement('div');
            
                // Popup content
                popup.innerHTML = `
                  <div class="popup-overlay" id="popupOverlay">
                    <div class="popup-content">
                      <span class="popup-close" id="closePopup">&times;</span>
                      <h2>Talking</h2>
                      <p>
                        I have a genuine passion for programming and data visualization. If you're seeking an enthusiastic and knowledgeable speaker for your conference, count me in!
                      </p>
                      <ul>
                        <li>You’re seeking a dynamic speaker for a conference on data science, software engineering, or data visualization.</li>
                        <li>You’re looking to elevate the skills of your team members.</li>
                      </ul>
                      <h3>Examples:</h3>
                      <ul>
                        <li><em>Choosing the right chart for your data:</em> the process to build an insightful graph. Invited speaker for the MIT.</li>
                        <li><em>R in the dataviz universe:</em> a tour of the dataviz tool ecosystem. Keynote at the R French national conference.</li>
                        <li><em>Building great charts with R:</em> Talk for the Advanced Data and Information Visualization course of Harvard University.</li>
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
            