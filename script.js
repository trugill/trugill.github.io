/* ===================================
   PORTFOLIO DATA FOR MODAL
   =================================== */
const portfolioData = [
    {
        title: "Research Project Title",
        category: "Research",
        description: "Detailed description of your research project. Explain the objectives, methodology, results, and impact of your work. Include any key findings or contributions to the field.",
        image: "images/research1.jpg",
        tags: ["Data Analysis", "Machine Learning", "Python"],
        link: "https://example.com/research1"
    },
    {
        title: "Development Project",
        category: "Project",
        description: "Description of your software development project. Highlight the technologies used, challenges overcome, and the final outcome. Explain how this project demonstrates your technical skills.",
        image: "images/project1.jpg",
        tags: ["Web Development", "JavaScript", "React"],
        link: "https://github.com/yourusername/project"
    },
    {
        title: "Photography Collection",
        category: "Hobby",
        description: "Share your passion for photography. Describe your style, favorite subjects, and what photography means to you. Include any notable achievements or exhibitions.",
        image: "images/hobby1.jpg",
        tags: ["Photography", "Nature", "Creative"],
        link: null
    },
    {
        title: "Another Research Project",
        category: "Research",
        description: "Another significant research contribution. Discuss the problem you addressed, your approach, and the significance of your findings in the broader context of your field.",
        image: "images/research2.jpg",
        tags: ["Statistical Analysis", "Research", "Publications"],
        link: "https://example.com/research2"
    },
    {
        title: "Technical Project 2",
        category: "Project",
        description: "Description of another technical project showcasing your skills and creativity. Explain the problem solved and the technologies implemented.",
        image: "images/project2.jpg",
        tags: ["Full Stack", "Database", "API"],
        link: "https://github.com/yourusername/project2"
    },
    {
        title: "Creative Hobby Work",
        category: "Hobby",
        description: "Showcase your creative side and personal interests. Explain what drives your passion for this hobby and any achievements or milestones.",
        image: "images/hobby2.jpg",
        tags: ["Creative", "Personal", "Art"],
        link: null
    }
];

/* ===================================
   NAVIGATION FUNCTIONALITY
   =================================== */

// Get navigation elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');

/**
 * Toggle mobile navigation menu
 */
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Add event listener to hamburger menu
if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}

/**
 * Close mobile menu when clicking on a nav link
 */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

/**
 * Add active class to navigation link based on scroll position
 */
function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

/**
 * Add shadow to header on scroll
 */
function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Add scroll event listeners
window.addEventListener('scroll', () => {
    setActiveNavLink();
    handleHeaderScroll();
});

/* ===================================
   PORTFOLIO FILTERING
   =================================== */

const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

/**
 * Filter portfolio items by category
 * @param {string} category - The category to filter by
 */
function filterPortfolio(category) {
    portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            // Add animation
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 100);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Add click event listeners to filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Filter portfolio items
        const category = btn.getAttribute('data-filter');
        filterPortfolio(category);
    });
});

/* ===================================
   PORTFOLIO MODAL
   =================================== */

const modal = document.getElementById('portfolioModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');
const modalLink = document.getElementById('modalLink');

/**
 * Open portfolio modal with item details
 * @param {number} index - Index of portfolio item in portfolioData array
 */
function openModal(index) {
    const item = portfolioData[index];
    
    // Populate modal with data
    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalTitle.textContent = item.title;
    modalCategory.textContent = item.category;
    modalDescription.textContent = item.description;
    
    // Add tags
    modalTags.innerHTML = '';
    item.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'modal-tag';
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });
    
    // Show/hide link button
    if (item.link) {
        modalLink.href = item.link;
        modalLink.style.display = 'inline-flex';
    } else {
        modalLink.style.display = 'none';
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close portfolio modal
 */
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

/* ===================================
   CONTACT FORM HANDLING
   =================================== */

const contactForm = document.getElementById('contactForm');

/**
 * Handle contact form submission
 * @param {Event} e - Form submit event
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    try {
        // Simulate API call (replace with actual backend endpoint)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success notification
        showNotification('success', 'Message sent successfully! I\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
    } catch (error) {
        console.error('Error:', error);
        showNotification('error', 'Failed to send message. Please try again or email me directly.');
    } finally {
        // Restore button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Add form submit event listener
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

/**
 * Show notification message
 * @param {string} type - 'success' or 'error'
 * @param {string} message - Message to display
 */
function showNotification(type, message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '30px',
        padding: '1rem 1.5rem',
        background: type === 'success' ? '#22c55e' : '#ef4444',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        animation: 'slideInRight 0.3s ease',
        fontSize: '1rem',
        fontWeight: '500',
        maxWidth: '400px'
    });
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations to stylesheet
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

/* ===================================
   BACK TO TOP BUTTON
   =================================== */

const backToTopBtn = document.getElementById('backToTop');

/**
 * Show/hide back to top button based on scroll position
 */
function handleBackToTopVisibility() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

/**
 * Scroll to top of page smoothly
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add event listeners
window.addEventListener('scroll', handleBackToTopVisibility);
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTop);
}

/* ===================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   =================================== */

/**
 * Animate elements when they come into view
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(`
        .about-content,
        .highlight-item,
        .skills-card,
        .interest-card,
        .timeline-item,
        .publication-item,
        .info-card
    `);
    
    animatableElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ===================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   =================================== */

/**
 * Add smooth scroll behavior to all anchor links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===================================
   TYPING EFFECT FOR HERO SECTION
   =================================== */

/**
 * Create typing effect for hero subtitle
 */
function setupTypingEffect() {
    const subtitleElement = document.querySelector('.hero-subtitle');
    if (!subtitleElement) return;
    
    const text = subtitleElement.textContent;
    subtitleElement.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            subtitleElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    // Start typing after hero animation
    setTimeout(type, 1000);
}

/* ===================================
   FORM VALIDATION
   =================================== */

/**
 * Real-time form validation
 */
function setupFormValidation() {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

/**
 * Validate individual form field
 * @param {HTMLElement} field - Form field to validate
 */
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Check if field is required and empty
    if (field.hasAttribute('required') && value === '') {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    if (field.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Update field styling
    if (isValid) {
        field.style.borderColor = '#22c55e';
        field.classList.remove('error');
        removeErrorMessage(field);
    } else {
        field.style.borderColor = '#ef4444';
        field.classList.add('error');
        showErrorMessage(field, errorMessage);
    }
    
    return isValid;
}

/**
 * Show error message below field
 * @param {HTMLElement} field - Form field
 * @param {string} message - Error message
 */
function showErrorMessage(field, message) {
    removeErrorMessage(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentElement.appendChild(errorDiv);
}

/**
 * Remove error message from field
 * @param {HTMLElement} field - Form field
 */
function removeErrorMessage(field) {
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

/* ===================================
   LAZY LOADING IMAGES
   =================================== */

/**
 * Setup lazy loading for images
 */
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/* ===================================
   PRELOADER
   =================================== */

/**
 * Show/hide page preloader
 */
function setupPreloader() {
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });
}

/* ===================================
   PERFORMANCE OPTIMIZATION
   =================================== */

/**
 * Debounce function to limit rate of function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    setActiveNavLink();
    handleHeaderScroll();
    handleBackToTopVisibility();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

/* ===================================
   STATISTICS COUNTER ANIMATION
   =================================== */

/**
 * Animate counting numbers (useful for stats sections)
 * @param {HTMLElement} element - Element containing number
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

/* ===================================
   INITIALIZE ALL FUNCTIONS
   =================================== */

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c Welcome to Truman Gilliam\'s Portfolio! ', 
        'background: linear-gradient(135deg, #ff8c42 0%, #f4a261 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
    console.log('%c Feel free to explore and connect! ', 
        'color: #ff8c42; font-size: 14px; font-weight: bold;');
    
    // Initialize all features
    setupSmoothScroll();
    setupScrollAnimations();
    setupFormValidation();
    setupLazyLoading();
    setupPreloader();
    
    // Optional: Uncomment if you want typing effect
    // setupTypingEffect();
    
    // Set initial active nav link
    setActiveNavLink();
});

/* ===================================
   ERROR HANDLING
   =================================== */

/**
 * Global error handler
 */
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // You can add user-friendly error notifications here
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // You can add user-friendly error notifications here
});

/* ===================================
   UTILITY FUNCTIONS
   =================================== */

/**
 * Get element offset from top of document
 * @param {HTMLElement} element - Target element
 * @returns {number} Offset in pixels
 */
function getOffset(element) {
    const rect = element.getBoundingClientRect();
    return rect.top + window.pageYOffset;
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Target element
 * @returns {boolean} True if in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Format date to readable string
 * @param {Date} date - Date object
 * @returns {string} Formatted date string
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/* ===================================
   EXPORT FUNCTIONS (for potential use in other files)
   =================================== */

// If using modules, you can export functions:
// export { openModal, closeModal, showNotification };
