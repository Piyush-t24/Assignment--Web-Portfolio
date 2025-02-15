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


// ---------------------------------------------------
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

// ---------------------------------------------------
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


// ---------------------------------------------------
// Typing Effect

  function typeEffect() {
    const text = "Gupta";
    let i = 0;
    const speed = 150;
    const typingText = document.getElementById("typing-text");

    function type() {
      if (i <= text.length) {
        typingText.innerHTML = text.substring(0, i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          i = 0;
          typingText.innerHTML = "";
          type();
        }, 1000);
      }
    }
    type();
  }
  document.addEventListener("DOMContentLoaded", typeEffect);


  // -------------------------------------------------
  // Slider 
let currentIndex = 0; 
let autoSlideInterval; 

// Function to move the slider
function slide(direction) {
  const slider = document.querySelector(".slider");
  const cards = document.querySelectorAll(".slider-card");
  const totalCards = cards.length;

  // Update the current index
  currentIndex += direction;

  // Handle edge cases
  if (currentIndex < 0) {
    currentIndex = totalCards - 1; 
  } else if (currentIndex >= totalCards) {
    currentIndex = 0; 
  }

  // Move the slider
  const offset = -currentIndex * 100; 
  slider.style.transform = `translateX(${offset}%)`;
}

// Function to start auto-slide
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slide(1); 
  }, 3000); 
}

// Function to stop auto-slide
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start auto-slide when the page loads
document.addEventListener("DOMContentLoaded", () => {
  startAutoSlide();
});

// Optional: Stop auto-slide when the user interacts with the slider
const sliderContainer = document.querySelector(".slider-container");
sliderContainer.addEventListener("mouseenter", stopAutoSlide); 
sliderContainer.addEventListener("mouseleave", startAutoSlide);




// ----------------------------------------------------
// Progress bar
document.addEventListener("DOMContentLoaded", function () {
  const skillItems = document.querySelectorAll(".col.s4.m2");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector(".progress");
          const width = progressBar.style.width; 
          progressBar.style.width = "0"; 
          setTimeout(() => {
            progressBar.style.width = width; 
          }, 100); 
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.5, 
    }
  );

  // Observe each skill item
  skillItems.forEach((item) => {
    observer.observe(item);
  });
});



// ---------------------------------------------