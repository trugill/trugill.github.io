/* ===================================
   Counter Functionality
   =================================== */

// Initialize counter variable
let counter = 0;

/**
 * Increment the counter and update the display
 */
function incrementCounter() {
    counter++;
    // Update the counter display in the DOM
    document.getElementById('counter').textContent = counter;
    
    // Add a small animation effect
    const counterElement = document.getElementById('counter');
    counterElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
    }, 200);
}

/**
 * Reset the counter to zero
 */
function resetCounter() {
    counter = 0;
    document.getElementById('counter').textContent = counter;
}

/* ===================================
   Color Changer Functionality
   =================================== */

/**
 * Generate a random hex color code
 */
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Change the background color of the color display box
 */
function changeColor() {
    const colorBox = document.getElementById('color-box');
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
    
    // Add rotation animation
    colorBox.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        colorBox.style.transform = 'rotate(0deg)';
    }, 500);
}

/* ===================================
   Form Validation
   =================================== */

/**
 * Validate the demo form and display success message
 * @param {Event} event - The form submit event
 */
function validateForm(event) {
    // Prevent default form submission
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('form-message');
    
    // Basic validation checks
    if (username.trim() === '' || email.trim() === '') {
        messageElement.textContent = 'Please fill in all fields!';
        messageElement.style.color = '#ef4444';
        return false;
    }
    
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        messageElement.textContent = 'Please enter a valid email!';
        messageElement.style.color = '#ef4444';
        return false;
    }
    
    // Success message
    messageElement.textContent = `Success! Welcome, ${username}!`;
    messageElement.style.color = '#22c55e';
    
    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    
    return false;
}

/* ===================================
   Smooth Scrolling Navigation
   =================================== */

/**
 * Smooth scroll to a specific section
 * @param {string} sectionId - The ID of the section to scroll to
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/* ===================================
   Mobile Menu Toggle
   =================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle mobile menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Add scroll event listener for navbar shadow effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
});

/* ===================================
   Intersection Observer for Scroll Animations
   =================================== */

/**
 * Add fade-in animation to elements as they enter viewport
 */
document.addEventListener('DOMContentLoaded', function() {
    // Select all feature cards and gallery items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

/* ===================================
   Contact Form Submission Handler
   =================================== */

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert(`Thank you, ${name}! Your message has been received.`);
            
            // Reset form
            contactForm.reset();
        });
    }
});

/* ===================================
   Console Welcome Message
   =================================== */

console.log('%c Welcome to the Website Showcase! ', 
    'background: #6366f1; color: white; font-size: 20px; padding: 10px;');
console.log('%c Feel free to explore the code and learn! ', 
    'color: #8b5cf6; font-size: 14px;');
