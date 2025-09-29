document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

// Reveal on scroll (expert-level minimal)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', function() {
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

    const revealTargets = document.querySelectorAll('.section-header, .about-content, .project-card, .projects-grid');
    revealTargets.forEach(el => {
        el.classList.add('reveal');
        if (!prefersReducedMotion) revealObserver.observe(el); else el.classList.add('active');
    });
});

// Lightweight parallax for hero
(function() {
    if (prefersReducedMotion) return;
    const heroImage = document.querySelector('.hero-image');
    if (!heroImage) return;
    let lastY = window.pageYOffset;
    let ticking = false;

    function update() {
        const y = lastY * 0.3;
        heroImage.style.transform = `translateY(${y}px)`;
        ticking = false;
    }

    function onScroll() {
        lastY = window.pageYOffset;
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
})();
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

 

 

 

 

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        statsObserver.observe(aboutStats);
    }
});

 

document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach((image, index) => {
        const gradients = [
            'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            'linear-gradient(45deg, #667eea, #764ba2)',
            'linear-gradient(45deg, #f093fb, #f5576c)',
            'linear-gradient(45deg, #4facfe, #00f2fe)'
        ];
        
        image.style.background = gradients[index % gradients.length];
    });
});
