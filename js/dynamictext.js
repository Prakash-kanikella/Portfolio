
const dynamicTextElement = document.getElementById("dynamictext");
const roles = ["Data Scientist.", "Designer.", "Creator."];
let currentRoleIndex = 0;

function typeText(role) {
  dynamicTextElement.textContent = ""; // Clear current text
  let i = 0;
  const intervalId = setInterval(() => {
    dynamicTextElement.textContent += role[i];
    i++;
    // Add the cursor after the typing is complete
    if (i === role.length) {
      dynamicTextElement.textContent += " |"; // Add cursor symbol
      clearInterval(intervalId); // Stop typing once the word is fully typed
      setTimeout(() => {
        blinkCursor(); // Blink cursor once
      }, 250); // Wait for half a second before blinking
    }
  }, 70); // Typing speed
}

function blinkCursor() {
  dynamicTextElement.textContent = dynamicTextElement.textContent.replace(" |", "");
  setTimeout(() => {
    dynamicTextElement.textContent += " |"; // Add cursor back
    setTimeout(() => {
      eraseText(roles[currentRoleIndex]); // Start erasing the text after blink
    }, 1); // Wait after blinking before erasing
  }, ); // Blink after a short pause
}

function eraseText(role) {
  let i = role.length;
  const intervalId = setInterval(() => {
    dynamicTextElement.textContent = role.slice(0, i) + " |"; // Keep the cursor while erasing
    i--;
    if (i < 0) {
      clearInterval(intervalId); // Stop erasing once the text is gone
      setTimeout(() => {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typeText(roles[currentRoleIndex]); // Start typing the next role
      }, 500); // Wait before starting to type next
    }
  }, 70); // Erasing speed
}

function startTyping() {
  typeText(roles[currentRoleIndex]); // Initial call to start typing
}

startTyping(); // Start the typing animation


