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
    // Remove any existing notifications first
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '30px',
        padding: '1.25rem 1.5rem',
        paddingRight: '3rem',
        background: type === 'success' ? '#22c55e' : '#ef4444',
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        animation: 'slideInRight 0.4s ease',
        fontSize: '1rem',
        fontWeight: '500',
        maxWidth: '400px',
        minWidth: '300px'
    });
    
    document.body.appendChild(notification);
    
    // Auto-remove after 8 seconds (increased from 5)
    const autoRemoveTimeout = setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.4s ease';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 400);
        }
    }, 8000);
    
    // Store timeout reference so we can clear it if user manually closes
    notification.dataset.timeoutId = autoRemoveTimeout;
}

// Add notification animations and styles to stylesheet
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(500px);
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
            transform: translateX(500px);
            opacity: 0;
        }
    }
    
    .notification-close {
        position: absolute;
        top: 50%;
        right: 0.75rem;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.2);
        border: none;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-50%) scale(1.1);
    }
    
    .notification {
        position: relative;
    }
    
    @media (max-width: 768px) {
        .notification {
            right: 15px !important;
            left: 15px !important;
            max-width: calc(100% - 30px) !important;
            min-width: unset !important;
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
 * Animate elements when they come into view - FIXED VERSION
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class instead of manipulating styles directly
                entry.target.classList.add('animate-in');
                // Don't unobserve - let CSS handle the animation
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
        // Add initial state class
        el.classList.add('animate-ready');
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
   FORM VALIDATION
   =================================== */

/**
 * Real-time form validation
 */
function setupFormValidation() {
    if (!contactForm) return;
    
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
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});


