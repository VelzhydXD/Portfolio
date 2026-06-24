// Hide loading screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBarFill = document.getElementById('progressBarFill');
    
    if (progressBarFill) {
        let progress = 0;
        const duration = 3000;
        const interval = 30;
        const step = 100 / (duration / interval);
        
        const timer = setInterval(() => {
            progress += step;
            if (progress >= 100) {
                progress = 100;
                clearInterval(timer);
            }
            progressBarFill.style.width = progress + '%';
        }, interval);
    }
    
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            animateHero();
        }, 3000);
    }
});

function animateHero() {
    const heroH1 = document.querySelector('.hero-content h1');
    const heroParagraphs = document.querySelectorAll('.hero-content p');
    const ctaButtons = document.querySelector('.cta-buttons');
    const socialLinks = document.querySelector('.social-links');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroH1) {
        setTimeout(() => heroH1.classList.add('animate'), 100);
    }
    
    heroParagraphs.forEach((p, index) => {
        setTimeout(() => p.classList.add('animate'), 300 + (index * 150));
    });
    
    if (ctaButtons) {
        setTimeout(() => ctaButtons.classList.add('animate'), 600);
    }
    
    if (socialLinks) {
        setTimeout(() => socialLinks.classList.add('animate'), 800);
    }
    
    if (heroImage) {
        setTimeout(() => heroImage.classList.add('animate'), 400);
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate elements on scroll
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease forwards';
            animateOnScroll.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-box, .about-text, .about-image').forEach(el => {
    animateOnScroll.observe(el);
});

// Progress bar animation
const skillsSection = document.querySelector('.skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.progress-fill').forEach(fill => {
                const width = fill.getAttribute('style').match(/(?:--width|width):\s*([0-9]+)%/)?.[1] || '0';
                fill.style.width = width + '%';
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

skillsObserver.observe(skillsSection);

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Staggered animation for project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Staggered animation for skill boxes
document.querySelectorAll('.skill-box').forEach((box, index) => {
    box.style.animationDelay = `${index * 0.1}s`;
});