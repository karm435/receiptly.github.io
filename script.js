// Modern JavaScript for Enhanced User Experience

document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    initNavigation();
    
    // Feature showcase functionality
    initFeatureShowcase();
    
    // FAQ functionality
    initFAQ();
    
    // Scroll animations
    initScrollAnimations();
    
    // Mobile menu
    initMobileMenu();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize video functionality
    initVideoPlayers();
});

// Navigation scroll effect
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Feature showcase image switching
function initFeatureShowcase() {
    const featureItems = document.querySelectorAll('.feature-item');
    const featureImage = document.getElementById('feature-image');
    
    const featureImages = {
        'widgets': 'images/iOS/Widgets.jpg',
        'camera': 'images/iOS/Receipts.jpg',
        'organize': 'images/iOS/Categories.jpg',
        'tracking': 'images/iOS/Warranties Tracking.jpg',
        'tagging': 'images/iOS/Tags.jpg',
        'expenses': 'images/iOS/Expenses.jpg',
        'export': 'images/iOS/Export.jpg',
        'sync': 'images/iOS/Family Expenses.jpg'
    };
    
    featureItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            featureItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Update feature image
            const feature = item.getAttribute('data-feature');
            if (featureImages[feature] && featureImage) {
                featureImage.style.opacity = '0';
                setTimeout(() => {
                    featureImage.src = featureImages[feature];
                    featureImage.style.opacity = '1';
                }, 300);
            }
        });
        
        // Hover effect for desktop
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                const feature = item.getAttribute('data-feature');
                if (featureImages[feature] && featureImage) {
                    featureImage.style.opacity = '0';
                    setTimeout(() => {
                        featureImage.src = featureImages[feature];
                        featureImage.style.opacity = '1';
                    }, 200);
                }
            }
        });
    });
}

// FAQ accordion functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked item if it wasn't already active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
                
                // Add stagger delay for multiple elements
                const siblings = entry.target.parentNode.children;
                Array.from(siblings).forEach((sibling, index) => {
                    if (sibling.classList.contains('animate-element')) {
                        setTimeout(() => {
                            sibling.classList.add('animate-in');
                        }, index * 100);
                    }
                });
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-highlight, .review-card, .faq-item, .feature-item');
    animateElements.forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger
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
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (hamburger && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    
                    const spans = hamburger.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });
    });
}

// Add entrance animations to elements
function addEntranceAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-element {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-element.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .review-card.animate-element {
            transform: translateY(50px) scale(0.9);
        }
        
        .review-card.animate-element.animate-in {
            transform: translateY(0) scale(1);
        }
        
        .feature-item.animate-element {
            transform: translateX(-50px);
        }
        
        .feature-item.animate-element.animate-in {
            transform: translateX(0);
        }
        
        /* Mobile menu styles */
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 70px;
                right: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background: white;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding-top: 50px;
                transition: right 0.3s ease;
                box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            }
            
            .nav-menu.active {
                right: 0;
            }
            
            .nav-link {
                margin: 20px 0;
                font-size: 1.2rem;
            }
            
            .download-btn {
                margin-top: 30px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize entrance animations
addEntranceAnimations();

// Parallax effect for hero section
function initParallax() {
    const heroShapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        heroShapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.2;
            shape.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Initialize parallax effect
initParallax();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effects for interactive elements
function initHoverEffects() {
    const cards = document.querySelectorAll('.feature-highlight, .review-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize hover effects
initHoverEffects();

// Video player functionality
function initVideoPlayers() {
    const videoContainers = document.querySelectorAll('.feature-video, .ipad-video-container');
    
    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const overlay = container.querySelector('.video-overlay');
        
        if (video && overlay) {
            // Hide overlay when video is playing
            video.addEventListener('play', () => {
                overlay.style.opacity = '0';
            });
            
            // Show overlay when video is paused
            video.addEventListener('pause', () => {
                if (!container.matches(':hover')) {
                    overlay.style.opacity = '0';
                }
            });
            
            // Handle video end
            video.addEventListener('ended', () => {
                overlay.style.opacity = '1';
            });
            
            // Click on overlay to play video
            overlay.addEventListener('click', () => {
                video.play();
            });
            
            // Add loading state
            video.addEventListener('loadstart', () => {
                container.classList.add('loading');
            });
            
            video.addEventListener('canplay', () => {
                container.classList.remove('loading');
            });
        }
    });
}

// Video intersection observer for auto-pause
function initVideoIntersectionObserver() {
    const videos = document.querySelectorAll('video');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            
            if (!entry.isIntersecting && !video.paused) {
                video.pause();
            }
        });
    }, {
        threshold: 0.1
    });
    
    videos.forEach(video => {
        videoObserver.observe(video);
    });
}

// Initialize video intersection observer
initVideoIntersectionObserver();
