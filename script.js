document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggle = document.getElementById('theme-toggle');

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

    // Theme toggle with persistence
    const THEME_KEY = 'theme';
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'glass') {
        document.body.classList.add('theme-glass');
        if (themeToggle) themeToggle.querySelector('.theme-icon').textContent = '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isGlass = document.body.classList.toggle('theme-glass');
            localStorage.setItem(THEME_KEY, isGlass ? 'glass' : 'dark');
            themeToggle.querySelector('.theme-icon').textContent = isGlass ? '☀️' : '🌙';
        });
    }
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
    const progress = document.getElementById('scroll-progress');
    if (progress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progress.style.width = pct + '%';
    }
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.section-header, .about-content, .project-card, .projects-grid');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        if (!prefersReducedMotion) {
            revealObserver.observe(el);
        } else {
            el.classList.add('active');
        }
    });
});

// Parallax via requestAnimationFrame
(function() {
    const heroImage = document.querySelector('.hero-image');
    const saveData = 'connection' in navigator && navigator.connection && navigator.connection.saveData;
    if (!heroImage || prefersReducedMotion || saveData) return;
    let latestScrollY = window.pageYOffset;
    let ticking = false;

    function update() {
        const translateY = latestScrollY * 0.35;
        heroImage.style.transform = `translateY(${translateY}px)`;
        ticking = false;
    }

    function onScroll() {
        latestScrollY = window.pageYOffset;
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll);
})();

function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.textContent = '';
    function step() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(step, speed);
        }
    }
    step();
}

document.addEventListener('DOMContentLoaded', function() {
    if (prefersReducedMotion) return;
    const lines = document.querySelectorAll('.hero-title-line');
    let delay = 200;
    lines.forEach((line, idx) => {
        const text = line.textContent.trim();
        line.textContent = '';
        setTimeout(() => typeWriter(line, text, 60), delay);
        delay += Math.max(600, text.length * 50);
    });
});

// 3D tilt effect on project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    projectCards.forEach(card => {
        const rectCache = { w: 0, h: 0 };
        function updateRect() {
            const r = card.getBoundingClientRect();
            rectCache.w = r.width;
            rectCache.h = r.height;
        }
        updateRect();
        window.addEventListener('resize', updateRect);

        card.addEventListener('mousemove', function(e) {
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;
            const rotateY = clamp(((x / rectCache.w) - 0.5) * 16, -16, 16);
            const rotateX = clamp(((y / rectCache.h) - 0.5) * -16, -16, 16);
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
        });
    });
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

// Remove legacy scroll reveal in favor of IntersectionObserver

const style = document.createElement('style');
style.textContent = `
    .nav-toggle.active .bar:nth-child(2) { opacity: 0; }
    .nav-toggle.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    .nav-toggle.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
`;
document.head.appendChild(style);

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

// Active nav highlighting based on current section
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const dots = Array.from(document.querySelectorAll('.dots-nav .dot'));
    if (sections.length === 0 || navLinks.length === 0) return;

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    const match = href && href.startsWith('#') && href.slice(1) === id;
                    if (match) {
                        link.classList.add('active');
                        link.setAttribute('aria-current', 'page');
                    } else {
                        link.classList.remove('active');
                        link.removeAttribute('aria-current');
                    }
                });
                if (dots.length) {
                    dots.forEach(dot => {
                        const href = dot.getAttribute('href');
                        const match = href && href.startsWith('#') && href.slice(1) === id;
                        dot.classList.toggle('active', !!match);
                    });
                }
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(sec => sectionObserver.observe(sec));
});

// Command palette logic
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('cmdk');
    const input = document.getElementById('cmdk-input');
    const list = document.getElementById('cmdk-list');
    const themeToggle = document.getElementById('theme-toggle');
    if (!overlay || !input || !list) return;

    function openPalette() {
        overlay.classList.add('active');
        input.value = '';
        filter('');
        setTimeout(() => input.focus(), 0);
    }
    function closePalette() {
        overlay.classList.remove('active');
    }
    function filter(q) {
        const items = list.querySelectorAll('.cmdk-item');
        q = q.toLowerCase();
        items.forEach(it => {
            const txt = it.textContent.toLowerCase();
            it.style.display = txt.includes(q) ? 'flex' : 'none';
        });
    }
    function run(action) {
        if (action === 'go-home') document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
        if (action === 'go-about') document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        if (action === 'go-projects') document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
        if (action === 'toggle-theme' && themeToggle) themeToggle.click();
        closePalette();
    }

    document.addEventListener('keydown', (e) => {
        const mod = e.ctrlKey || e.metaKey;
        if (mod && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            overlay.classList.contains('active') ? closePalette() : openPalette();
        }
        if (overlay.classList.contains('active')) {
            if (e.key === 'Escape') closePalette();
            if (e.key.toLowerCase() === 'h') run('go-home');
            if (e.key.toLowerCase() === 'a') run('go-about');
            if (e.key.toLowerCase() === 'p') run('go-projects');
            if (e.key.toLowerCase() === 't') run('toggle-theme');
        }
    });

    overlay.addEventListener('click', (e) => { if (e.target === overlay) closePalette(); });
    input.addEventListener('input', () => filter(input.value));
    list.addEventListener('click', (e) => {
        const item = e.target.closest('.cmdk-item');
        if (item) run(item.getAttribute('data-action'));
    });
});

// Lightbox viewer
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const stage = document.getElementById('lightbox-stage');
    const img = document.getElementById('lightbox-image');
    const caption = document.getElementById('lightbox-caption');
    const btnClose = document.getElementById('lightbox-close');
    const btnPrev = document.getElementById('lightbox-prev');
    const btnNext = document.getElementById('lightbox-next');
    const sources = Array.from(document.querySelectorAll('.project-card img.project-img'));
    if (!lightbox || !img || sources.length === 0) return;

    let index = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    function show(idx) {
        index = (idx + sources.length) % sources.length;
        const src = sources[index].getAttribute('src');
        const alt = sources[index].getAttribute('alt') || '';
        img.src = src;
        img.alt = alt;
        caption.textContent = alt;
    }

    function open(idx) {
        show(idx);
        lightbox.classList.add('active');
        lightbox.focus();
        document.body.style.overflow = 'hidden';
    }

    function close() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    sources.forEach((el, i) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            open(i);
        });
        el.closest('.project-card')?.addEventListener('keydown', (e) => {
            if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === e.currentTarget) {
                e.preventDefault();
                open(i);
            }
        });
    });

    btnClose?.addEventListener('click', close);
    btnPrev?.addEventListener('click', () => show(index - 1));
    btnNext?.addEventListener('click', () => show(index + 1));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') show(index - 1);
        if (e.key === 'ArrowRight') show(index + 1);
    });

    stage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
    });
    stage.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const dx = touchEndX - touchStartX;
        if (Math.abs(dx) > 40) {
            if (dx > 0) show(index - 1); else show(index + 1);
        }
    });
});

// Particle background
(function() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0, height = 0;
    let particles = [];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = 'connection' in navigator && navigator.connection && navigator.connection.saveData;
    const PARTICLE_COUNT = (prefersReducedMotion || saveData) ? 25 : 90;

    function resize() {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function init() {
        particles = new Array(PARTICLE_COUNT).fill(0).map(() => ({
            x: rand(0, width),
            y: rand(0, height),
            vx: rand(-0.2, 0.2),
            vy: rand(-0.2, 0.2),
            r: rand(0.6, 1.8),
            o: rand(0.05, 0.25)
        }));
    }

    function step() {
        ctx.clearRect(0, 0, width, height);
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -10) p.x = width + 10; if (p.x > width + 10) p.x = -10;
            if (p.y < -10) p.y = height + 10; if (p.y > height + 10) p.y = -10;
            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
            gradient.addColorStop(0, `rgba(255,255,255,${p.o})`);
            gradient.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.restore();
        requestAnimationFrame(step);
    }

    window.addEventListener('resize', () => { resize(); init(); });
    resize();
    init();
    if (!prefersReducedMotion && !saveData) requestAnimationFrame(step);
})();

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.key === 's')) {
            e.preventDefault();
            return false;
        }
    });
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);
