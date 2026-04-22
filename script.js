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
   OTHER RESEARCH EXPERIENCES DATA & MODAL
   =================================== */

// EDIT: Each entry can have multiple images — add as many paths as you like to the images array.
// The first image is also used as the card thumbnail.
const researchExpData = [
    {
        title: "Experience Name 1",
        category: "Fieldwork",
        description: "Detailed description of this research experience. Describe what you did, where it took place, what you learned, and why it was significant to your research journey.",
        images: ["images/exp1.jpg", "images/exp1b.jpg", "images/exp1c.jpg"]
    },
    {
        title: "Experience Name 2",
        category: "Conference",
        description: "Detailed description of this experience. Perhaps a conference you attended or presented at, a workshop, a collaboration with another institution, or independent research.",
        images: ["images/exp2.jpg", "images/exp2b.jpg"]
    },
    {
        title: "Experience Name 3",
        category: "Collaboration",
        description: "Detailed description of this collaborative experience. Explain the institutions involved, your role, and the outcomes or insights gained.",
        images: ["images/exp3.jpg"]
    }
    // Add more entries matching the cards in index.html
];

const researchModal      = document.getElementById('researchModal');
const researchModalImage = document.getElementById('researchModalImage');
const researchModalTitle = document.getElementById('researchModalTitle');
const researchModalCat   = document.getElementById('researchModalCategory');
const researchModalDesc  = document.getElementById('researchModalDescription');
const researchModalDots  = document.getElementById('researchModalDots');

let researchModalImages  = [];
let researchModalCurrent = 0;

function researchModalGoTo(index) {
    researchModalCurrent = (index + researchModalImages.length) % researchModalImages.length;
    researchModalImage.classList.add('fading');
    setTimeout(() => {
        researchModalImage.src = researchModalImages[researchModalCurrent];
        researchModalImage.classList.remove('fading');
    }, 180);
    // Update dots
    researchModalDots.querySelectorAll('.modal-carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === researchModalCurrent);
    });
    // Hide buttons if only one image
    const btns = researchModal.querySelectorAll('.modal-carousel-btn');
    btns.forEach(b => b.style.display = researchModalImages.length > 1 ? 'flex' : 'none');
}

function researchModalPrev() { researchModalGoTo(researchModalCurrent - 1); }
function researchModalNext() { researchModalGoTo(researchModalCurrent + 1); }

function openResearchModal(index) {
    const item = researchExpData[index];
    researchModalImages  = item.images || [item.image];
    researchModalCurrent = 0;

    researchModalTitle.textContent = item.title;
    researchModalCat.textContent   = item.category;
    researchModalDesc.textContent  = item.description;

    // Build dots
    researchModalDots.innerHTML = '';
    if (researchModalImages.length > 1) {
        researchModalImages.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'modal-carousel-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => researchModalGoTo(i));
            researchModalDots.appendChild(dot);
        });
    }

    researchModalImage.src = researchModalImages[0];
    researchModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Show/hide nav buttons
    const btns = researchModal.querySelectorAll('.modal-carousel-btn');
    btns.forEach(b => b.style.display = researchModalImages.length > 1 ? 'flex' : 'none');
}

function closeResearchModal() {
    researchModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

researchModal.addEventListener('click', (e) => {
    if (e.target === researchModal) closeResearchModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && researchModal.classList.contains('active')) {
        closeResearchModal();
    }
});

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

/* ===================================
   PORTFOLIO FILTERING — DIRECTIONAL SWIPE
   =================================== */

// Category order determines swipe direction
const CATEGORY_ORDER = ['gis', 'research', 'other', 'art'];
let currentCategoryIndex = CATEGORY_ORDER.indexOf('gis'); // default: GIS
let isAnimating = false;

const portfolioGrid = document.getElementById('portfolioGrid');

function showCategory(newFilter, newIndex) {
  if (isAnimating || newIndex === currentCategoryIndex) return;
  isAnimating = true;

  const viewport    = document.querySelector('.portfolio-viewport');
  const goingRight  = newIndex > currentCategoryIndex;
  const outClass    = goingRight ? 'swipe-out-left'  : 'swipe-out-right';
  const inClass     = goingRight ? 'swipe-in-left'   : 'swipe-in-right';

  viewport.classList.add('is-animating');
  portfolioGrid.classList.add(outClass);

  portfolioGrid.addEventListener('animationend', function onOut() {
    portfolioGrid.removeEventListener('animationend', onOut);
    portfolioGrid.classList.remove(outClass);

    document.querySelectorAll('.portfolio-item, .instagram-embed-card').forEach(item => {
      item.classList.toggle('pf-hidden', item.dataset.category !== newFilter);
    });

    // Re-trigger Instagram embed rendering when switching to Art
    if (newFilter === 'art') {
      setTimeout(reinitInstagram, 100);
    }

    currentCategoryIndex = newIndex;

    portfolioGrid.classList.add(inClass);
    portfolioGrid.addEventListener('animationend', function onIn() {
      portfolioGrid.removeEventListener('animationend', onIn);
      portfolioGrid.classList.remove(inClass);
      viewport.classList.remove('is-animating');
      isAnimating = false;
    }, { once: true });

  }, { once: true });
}

// Initialise: show only GIS items on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.portfolio-item, .instagram-embed-card').forEach(item => {
    if (item.dataset.category !== 'gis') item.classList.add('pf-hidden');
  });
});

// Re-process Instagram embed when Art tab becomes visible
function reinitInstagram() {
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process();
  }
}

// Wire up filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) return;

    const newFilter = btn.dataset.filter;
    const newIndex  = parseInt(btn.dataset.index, 10);

    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    showCategory(newFilter, newIndex);
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
/**
 * Open portfolio modal with item details
 * @param {number} index - Index of portfolio item in portfolioData array
 */
function openModal(index) {
    const item = portfolioData[index];

    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalTitle.textContent = item.title;
    modalCategory.textContent = item.category;
    modalDescription.textContent = item.description;

    modalTags.innerHTML = '';
    item.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'modal-tag';
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });

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



/* ===================================
   EASTER EGG BUTTON (FOOTER)
   =================================== */

// Each palette swaps out the site's orange CSS variables for a new accent color
const eggPalettes = [
  // 0: original orange (reset)
  {
    primary:   '#ff8c42',
    secondary: '#f4a261',
    dark:      '#e76f51',
    light:     '#ffa563',
    pale:      '#ffe8d6',
    shadow:    'rgba(255, 140, 66, 0.3)',
    gradient1: '#ff8c42',
    gradient2: '#f4a261',
  },
  // 1: purple
  {
    primary:   '#a855f7',
    secondary: '#c084fc',
    dark:      '#7e22ce',
    light:     '#d8b4fe',
    pale:      '#f3e8ff',
    shadow:    'rgba(168, 85, 247, 0.3)',
    gradient1: '#a855f7',
    gradient2: '#c084fc',
  },
  // 2: green
  {
    primary:   '#22c55e',
    secondary: '#4ade80',
    dark:      '#15803d',
    light:     '#86efac',
    pale:      '#dcfce7',
    shadow:    'rgba(34, 197, 94, 0.3)',
    gradient1: '#22c55e',
    gradient2: '#4ade80',
  },
  // 3: cyan
  {
    primary:   '#06b6d4',
    secondary: '#38bdf8',
    dark:      '#0e7490',
    light:     '#7dd3fc',
    pale:      '#e0f2fe',
    shadow:    'rgba(6, 182, 212, 0.3)',
    gradient1: '#06b6d4',
    gradient2: '#38bdf8',
  },
  // 4: pink
  {
    primary:   '#ec4899',
    secondary: '#f472b6',
    dark:      '#be185d',
    light:     '#f9a8d4',
    pale:      '#fce7f3',
    shadow:    'rgba(236, 72, 153, 0.3)',
    gradient1: '#ec4899',
    gradient2: '#f472b6',
  },
  // 5: red
  {
    primary:   '#ef4444',
    secondary: '#f87171',
    dark:      '#b91c1c',
    light:     '#fca5a5',
    pale:      '#fee2e2',
    shadow:    'rgba(239, 68, 68, 0.3)',
    gradient1: '#ef4444',
    gradient2: '#f87171',
  },
  // 6: lime
  {
    primary:   '#84cc16',
    secondary: '#a3e635',
    dark:      '#4d7c0f',
    light:     '#d9f99d',
    pale:      '#f7fee7',
    shadow:    'rgba(132, 204, 22, 0.3)',
    gradient1: '#84cc16',
    gradient2: '#a3e635',
  },
  // 7: amber
  {
    primary:   '#f59e0b',
    secondary: '#fbbf24',
    dark:      '#b45309',
    light:     '#fde68a',
    pale:      '#fffbeb',
    shadow:    'rgba(245, 158, 11, 0.3)',
    gradient1: '#f59e0b',
    gradient2: '#fbbf24',
  },
];

let eggPressCount = 0;
let eggPaletteIndex = 0;
let rainbowAnimFrame = null;
let rainbowHue = 0;

function startRainbowMode() {
  const btn = document.getElementById('easterEggBtn');
  const root = document.documentElement;

  // Inject rainbow keyframe style if not already present
  if (!document.getElementById('rainbow-style')) {
    const style = document.createElement('style');
    style.id = 'rainbow-style';
    style.textContent = `
      @keyframes rainbow-bg {
        0%   { background-position: 0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .rainbow-gradient-el {
        background: linear-gradient(135deg, #ff0000, #ff7700, #ffff00, #00ff00, #00ffff, #0000ff, #8b00ff, #ff0000) !important;
        background-size: 400% 400% !important;
        animation: rainbow-bg 3s ease infinite !important;
        -webkit-background-clip: unset !important;
        -webkit-text-fill-color: unset !important;
        background-clip: unset !important;
        color: white !important;
      }
      .rainbow-text-el {
        background: linear-gradient(135deg, #ff0000, #ff7700, #ffff00, #00ff00, #00ffff, #0000ff, #8b00ff, #ff0000);
        background-size: 400% 400%;
        animation: rainbow-bg 3s ease infinite;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Animate CSS variable hue for things that use var(--primary-orange)
  function tick() {
    rainbowHue = (rainbowHue + 1) % 360;
    const h = rainbowHue;
    const h2 = (h + 40) % 360;
    const h3 = (h + 80) % 360;

    root.style.setProperty('--primary-orange',   `hsl(${h}, 100%, 55%)`);
    root.style.setProperty('--secondary-orange', `hsl(${h2}, 100%, 60%)`);
    root.style.setProperty('--dark-orange',      `hsl(${h3}, 100%, 40%)`);
    root.style.setProperty('--light-orange',     `hsl(${h}, 100%, 70%)`);
    root.style.setProperty('--pale-orange',      `hsl(${h}, 100%, 93%)`);
    root.style.setProperty('--shadow-orange',    `0 8px 20px hsla(${h}, 100%, 55%, 0.4)`);
    root.style.setProperty('--gradient-primary',
      `linear-gradient(135deg, hsl(${h},100%,55%) 0%, hsl(${h2},100%,60%) 50%, hsl(${h3},100%,55%) 100%)`);
    root.style.setProperty('--gradient-secondary',
      `linear-gradient(135deg, hsl(${h3},100%,40%) 0%, hsl(${h},100%,55%) 100%)`);

    rainbowAnimFrame = requestAnimationFrame(tick);
  }
  rainbowAnimFrame = requestAnimationFrame(tick);

  // Style the button itself as a rainbow
  btn.classList.add('rainbow-gradient-el');
  btn.style.background = '';
  btn.style.color = '';
  btn.style.borderColor = 'transparent';
}

function stopRainbowMode() {
  if (rainbowAnimFrame) {
    cancelAnimationFrame(rainbowAnimFrame);
    rainbowAnimFrame = null;
  }
  const btn = document.getElementById('easterEggBtn');
  btn.classList.remove('rainbow-gradient-el');
}

function handleEasterEggPress() {
  const btn = document.getElementById('easterEggBtn');
  if (!btn) return;

  eggPressCount++;
  const cyclePos = eggPressCount % 3 || 3;

  // Floundering animation
  btn.classList.remove('egg-flop1', 'egg-flop2', 'egg-flop3');
  void btn.offsetWidth;
  btn.classList.add(`egg-flop${cyclePos}`);
  btn.addEventListener('animationend', () => {
    btn.classList.remove('egg-flop1', 'egg-flop2', 'egg-flop3');
  }, { once: true });

  // On every 3rd press, swap the entire site's color palette
  if (eggPressCount % 3 === 0) {
    // Stop rainbow if it was running
    if (rainbowAnimFrame) stopRainbowMode();

    eggPaletteIndex = (eggPaletteIndex + 1) % eggPalettes.length;

    // 3rd color switch (9 presses) = index 3 → trigger rainbow instead
    if (eggPaletteIndex === 3) {
      startRainbowMode();
      return;
    }

    const p = eggPalettes[eggPaletteIndex];
    const root = document.documentElement;

    root.style.setProperty('--primary-orange',   p.primary);
    root.style.setProperty('--secondary-orange', p.secondary);
    root.style.setProperty('--dark-orange',      p.dark);
    root.style.setProperty('--light-orange',     p.light);
    root.style.setProperty('--pale-orange',      p.pale);
    root.style.setProperty('--shadow-orange',    `0 8px 20px ${p.shadow}`);
    root.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${p.gradient1} 0%, ${p.gradient2} 100%)`);
    root.style.setProperty('--gradient-secondary', `linear-gradient(135deg, ${p.dark} 0%, ${p.primary} 100%)`);

    // Keep button tinted to the new accent so it stays visible
    btn.style.background    = p.pale;
    btn.style.color         = p.dark;
    btn.style.borderColor   = p.primary;
  }
}

// ===================================
//  LAB PHOTO CAROUSELS
// ===================================

function initCarousels() {
  document.querySelectorAll('.lab-carousel').forEach(carousel => {
    const images = carousel.dataset.images
      ? carousel.dataset.images.split(',').map(s => s.trim()).filter(Boolean)
      : [];

    const img      = carousel.querySelector('.carousel-img');
    const track    = carousel.querySelector('.carousel-track');
    const dotsEl   = carousel.querySelector('.carousel-dots');
    const prevBtn  = carousel.querySelector('.carousel-prev');
    const nextBtn  = carousel.querySelector('.carousel-next');

    let current = 0;

    // Build placeholder shown when no real image loads
    function showPlaceholder() {
      img.style.display = 'none';
      let ph = track.querySelector('.carousel-placeholder');
      if (!ph) {
        ph = document.createElement('div');
        ph.className = 'carousel-placeholder';
        ph.innerHTML = '<i class="fas fa-camera"></i><p>Add photo paths to data-images</p>';
        track.appendChild(ph);
      }
      ph.style.display = 'flex';
    }

    function hidePlaceholder() {
      const ph = track.querySelector('.carousel-placeholder');
      if (ph) ph.style.display = 'none';
      img.style.display = 'block';
    }

    // Build dot indicators
    function buildDots() {
      dotsEl.innerHTML = '';
      images.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Photo ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(dot);
      });
    }

    function updateDots() {
      dotsEl.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    function updateButtons() {
      prevBtn.disabled = images.length <= 1;
      nextBtn.disabled = images.length <= 1;
    }

    function goTo(index) {
      if (images.length === 0) { showPlaceholder(); return; }
      img.classList.add('fading');
      setTimeout(() => {
        current = (index + images.length) % images.length;
        img.src = images[current];
        img.onload  = () => { hidePlaceholder(); img.classList.remove('fading'); };
        img.onerror = () => { showPlaceholder(); img.classList.remove('fading'); };
        updateDots();
      }, 200);
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // Init
    if (images.length === 0) {
      showPlaceholder();
      updateButtons();
    } else {
      buildDots();
      updateButtons();
      goTo(0);
    }
  });
}

document.addEventListener('DOMContentLoaded', initCarousels);
