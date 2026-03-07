/* ===================================
   SMOOTH SCROLLING
   =================================== */

/**
 * Smooth scroll to section
 * @param {string} sectionId - ID of the section to scroll to
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/* ===================================
   MOBILE MENU TOGGLE
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });
});

/* ===================================
   NAVBAR SCROLL EFFECT
   =================================== */

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for shadow effect
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

/* ===================================
   ANIMATED COUNTER FOR STATS
   =================================== */

/**
 * Animate numbers counting up
 * @param {HTMLElement} element - The element to animate
 * @param {number} target - Target number to count to
 */
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100; // Adjust speed
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target === 98 ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (target === 98 ? '%' : '+');
        }
    }, 20);
}

// Initialize counters when they come into view
const statNumbers = document.querySelectorAll('.stat-number');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, observerOptions);

statNumbers.forEach(stat => statsObserver.observe(stat));

/* ===================================
   3D TILT EFFECT FOR SERVICE CARDS
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    const tiltCards = document.querySelectorAll('[data-tilt]');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
});

/* ===================================
   TESTIMONIAL SLIDER
   =================================== */

let currentTestimonial = 0;
const testimonialTrack = document.getElementById('testimonialTrack');
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

/**
 * Slide testimonials
 * @param {number} direction - 1 for next, -1 for previous
 */
function slideTestimonial(direction) {
    currentTestimonial += direction;

    // Loop around
    if (currentTestimonial >= totalTestimonials) {
        currentTestimonial = 0;
    } else if (currentTestimonial < 0) {
        currentTestimonial = totalTestimonials - 1;
    }

    updateSlider();
}

/**
 * Update slider position and dots
 */
function updateSlider() {
    const offset = -currentTestimonial * 100;
    testimonialTrack.style.transform = `translateX(${offset}%)`;
    updateDots();
}

/**
 * Create and update slider dots
 */
function updateDots() {
    const dotsContainer = document.getElementById('sliderDots');
    
    // Create dots if they don't exist
    if (dotsContainer.children.length === 0) {
        for (let i = 0; i < totalTestimonials; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            dot.addEventListener('click', () => {
                currentTestimonial = i;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        }
    }

    // Update active dot
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

// Auto-slide testimonials every 5 seconds
setInterval(() => {
    slideTestimonial(1);
}, 5000);

// Initialize dots
document.addEventListener('DOMContentLoaded', updateDots);

/* ===================================
   SCROLL ANIMATIONS
   =================================== */

// Observe elements for scroll animations
const animateOnScroll = document.querySelectorAll('.service-card, .portfolio-item, .feature-item');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

animateOnScroll.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollObserver.observe(element);
});

/* ===================================
   CONTACT FORM HANDLING
   =================================== */

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // In a real application, you would send this data to a server
        console.log('Form submitted:', formData);

        // Show success message
        alert(`Thank you, ${formData.firstName}! Your message has been sent successfully.`);

        // Reset form
        contactForm.reset();
    });
}

/* ===================================
   BACK TO TOP BUTTON
   =================================== */

const backToTop = document.getElementById('backToTop');

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Scroll to top on click
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ===================================
   PARALLAX EFFECT FOR HERO SHAPES
   =================================== */

document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

/* ===================================
   CURSOR GLOW EFFECT (OPTIONAL)
   =================================== */

// Uncomment to enable cursor glow effect
/*
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});
*/

/* ===================================
   CONSOLE MESSAGE
   =================================== */

console.log('%c⚡ NEXUS - Modern Website Template', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px 20px; border-radius: 10px;');
console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'color: #8b5cf6; font-size: 14px;');
