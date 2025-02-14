// Quote Generator
  const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Act as if what you do makes a difference. It does.",
    "Happiness depends upon ourselves.",
    "Do what you can, with what you have, where you are.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "It is never too late to be what you might have been.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "You are never too old to set another goal or to dream a new dream.",
    "Life is 10% what happens to us and 90% how we react to it."
  ];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = `"${quotes[randomIndex]}"`;
  }

  document.getElementById("new-quote").addEventListener("click", getRandomQuote);



// Form VAlidation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (name.value.trim() === "") {
      nameError.textContent = "Name is required";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Enter a valid email";
      valid = false;
    }

    if (message.value.trim() === "") {
      messageError.textContent = "Message cannot be empty";
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
      document.getElementById("contactForm").reset();
    }
  });


  // Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
  const body = document.body;

  // Check if dark mode is enabled in localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

  // Apply dark mode if enabled
  if (isDarkMode) {
    body.classList.add('dark-mode');
  }

  // Toggle dark mode
  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
  }

  // Add event listeners to both buttons
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);
  }
});


// Typing Effect

  document.addEventListener("DOMContentLoaded", function () {
    const text =
      "Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging ";
    const typingElement = document.getElementById("typing-effect");
    let index = 0;

    function type() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust typing speed (50ms per character)
      }
    }

    // Start typing effect
    typingElement.textContent = ""; // Clear initial text
    type();
  });
