// Creators Lab by CosQ - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Portfolio Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    const categories = item.getAttribute('data-category');
                    if (categories && categories.includes(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

    // Blog Category Filter
    const categoryBtns = document.querySelectorAll('.category-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const categoryValue = this.getAttribute('data-category');

            blogCards.forEach(card => {
                if (categoryValue === 'all') {
                    card.style.display = 'block';
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === categoryValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                if (data[key]) {
                    if (Array.isArray(data[key])) {
                        data[key].push(value);
                    } else {
                        data[key] = [data[key], value];
                    }
                } else {
                    data[key] = value;
                }
            });

            // Log form data (in production, send to server)
            console.log('Form submitted:', data);

            // Show success message
            if (formSuccess) {
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
            }

            // Reset form after 3 seconds and hide success message
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                if (formSuccess) {
                    formSuccess.style.display = 'none';
                }
            }, 3000);
        });
    }

    // Newsletter Form Handling
    const newsletterForms = document.querySelectorAll('.newsletter-form, .newsletter-signup');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            // Log email (in production, send to server)
            console.log('Newsletter subscription:', email);

            // Show success message
            alert('🎉 Thanks for subscribing! Check your email for a welcome message.');
            
            // Reset form
            this.reset();
        });
    });

    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add Intersection Observer for fade-in animations
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

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.pixel-card, .game-card, .service-box, .stat-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate stat numbers on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });

    if (statNumbers.length > 0) {
        statObserver.observe(statNumbers[0].parentElement);
    }

    function animateStats() {
        statNumbers.forEach(stat => {
            const text = stat.textContent;
            const hasPlus = text.includes('+');
            const number = parseInt(text.replace(/\D/g, ''));
            
            if (isNaN(number)) return;

            let current = 0;
            const increment = number / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(current);
                if (number >= 1000000) {
                    displayValue = (displayValue / 1000000).toFixed(0) + 'M';
                } else if (number >= 1000) {
                    displayValue = (displayValue / 1000).toFixed(0) + 'K';
                }
                
                stat.textContent = displayValue + (hasPlus ? '+' : '');
            }, 20);
        });
    }

    // Add particle effect on mouse move (optional, lightweight)
    let particleTimeout;
    document.addEventListener('mousemove', function(e) {
        if (particleTimeout) return;
        
        particleTimeout = setTimeout(() => {
            createParticle(e.clientX, e.clientY);
            particleTimeout = null;
        }, 100);
    });

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'var(--accent-color)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.opacity = '0.6';
        particle.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.style.transform = 'translateY(-50px)';
            particle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }

    // Easter egg: Konami code
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        // Add rainbow animation to body
        document.body.style.animation = 'rainbow 3s linear infinite';
        
        // Add style for rainbow animation if not exists
        if (!document.getElementById('easter-egg-style')) {
            const style = document.createElement('style');
            style.id = 'easter-egg-style';
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }

        // Show message
        const message = document.createElement('div');
        message.textContent = '🎮 LEVEL UP! You found the secret! 🎮';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.background = 'var(--primary-color)';
        message.style.padding = '2rem 3rem';
        message.style.fontSize = '2rem';
        message.style.fontWeight = 'bold';
        message.style.border = '3px solid var(--accent-color)';
        message.style.zIndex = '10000';
        message.style.boxShadow = '0 0 50px rgba(255, 105, 180, 0.8)';
        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
            document.body.style.animation = '';
        }, 3000);
    }

    // Log that JavaScript is loaded
    console.log('%c🧪 Creators Lab by CosQ', 'color: #FF69B4; font-size: 20px; font-weight: bold;');
    console.log('%cWebsite loaded successfully! ✨', 'color: #06FFA5; font-size: 14px;');
});
