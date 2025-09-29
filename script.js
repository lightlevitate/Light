
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #e0e0e0;
    background-color: #0a0a0a;
    overflow-x: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}


.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    transition: all 0.3s ease;
    border-bottom: 1px solid #333;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo a {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-logo a:hover {
    color: #888;
}

.nav-menu {
    display: flex;
    gap: 40px;
}

.nav-link {
    color: #e0e0e0;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: #fff;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background: #e0e0e0;
    margin: 3px 0;
    transition: 0.3s;
}


.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 70px;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-content {
    animation: fadeInUp 1s ease-out;
}

.hero-title {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 30px;
    color: #fff;
}

.hero-title-line {
    display: block;
    opacity: 0;
    animation: slideInLeft 1s ease-out forwards;
}

.hero-title-line:nth-child(2) {
    animation-delay: 0.2s;
}

.hero-description {
    font-size: 1.2rem;
    color: #b0b0b0;
    margin-bottom: 40px;
    line-height: 1.6;
    animation: fadeInUp 1s ease-out 0.4s both;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    animation: fadeInUp 1s ease-out 0.6s both;
}

.btn {
    padding: 15px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: 2px solid transparent;
}

.btn-primary {
    background: #fff;
    color: #000;
}

.btn-primary:hover {
    background: #e0e0e0;
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: #fff;
    border-color: #fff;
}

.btn-secondary:hover {
    background: #fff;
    color: #000;
    transform: translateY(-2px);
}

.hero-image {
    position: relative;
    animation: fadeInRight 1s ease-out 0.8s both;
}

.hero-image-container {
    width: 100%;
    height: 500px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    border: 1px solid #333;
}

.hero-main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

.hero-image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 30px;
}

.hero-badge {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    padding: 8px 20px;
    margin: 5px 0;
    transition: all 0.3s ease;
}

.hero-badge:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.badge-text {
    color: #fff;
    font-weight: 600;
    font-size: 0.9rem;
}

/* Gradient hero text effect */
.hero-title-line {
    background: linear-gradient(90deg, #ffffff, #bbbbbb, #ffffff);
    -webkit-background-clip: text;
            background-clip: text;
    color: transparent;
}

@media (prefers-reduced-motion: reduce) {
    .hero-title-line {
        background: none;
        color: #ffffff;
    }
}


section {
    padding: 100px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 80px;
}

.section-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #fff;
}

.section-subtitle {
    font-size: 1.2rem;
    color: #b0b0b0;
    max-width: 600px;
    margin: 0 auto;
}


.about {
    background: #1a1a1a;
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 80px;
    align-items: center;
}

.about-text p {
    font-size: 1.1rem;
    color: #b0b0b0;
    margin-bottom: 20px;
    line-height: 1.8;
}

.about-stats {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.stat {
    text-align: center;
}

.stat h3 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
}

.stat p {
    color: #b0b0b0;
    font-weight: 500;
}


.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.project-card {
    background: #1a1a1a;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    border: 1px solid #333;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    border-color: #555;
}

.project-image {
    height: 250px;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #333;
}

.project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}


.project-img-stretch {
    object-fit: fill;
}

.project-card:hover .project-img {
    transform: scale(1.05);
}

.project-card:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255,255,255,0.25), 0 10px 30px rgba(0,0,0,0.4);
}


.project-content {
    padding: 30px;
}

.project-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #fff;
}

.project-description {
    color: #b0b0b0;
    margin-bottom: 20px;
    line-height: 1.6;
}

.project-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.tag {
    padding: 5px 15px;
    background: #333;
    color: #e0e0e0;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid #555;
}


.footer {
    background: #0a0a0a;
    color: #e0e0e0;
    padding: 40px 0;
    border-top: 1px solid #333;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-social {
    display: flex;
    gap: 30px;
}

.social-link {
    color: #e0e0e0;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.social-link:hover {
    color: #fff;
}


@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}


@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: #1a1a1a;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.3);
        padding: 20px 0;
        border-top: 1px solid #333;
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-toggle {
        display: flex;
    }

    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
        padding: 0 15px;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .hero-image-container {
        height: 400px;
    }

    .hero-image-overlay {
        padding: 20px;
    }

    .hero-badge {
        padding: 6px 15px;
        margin: 3px 0;
    }

    .hero-buttons {
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    }

    .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 0 15px;
    }

    .about-stats {
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 20px;
    }

    

    .footer-content {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }

    .section-title {
        font-size: 2rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
        padding: 0 15px;
    }

    .project-image {
        height: 200px;
    }

    .container {
        padding: 0 15px;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .btn {
        width: 100%;
        max-width: 250px;
        text-align: center;
        padding: 12px 25px;
    }

    .about-stats {
        flex-direction: column;
        gap: 20px;
    }

    

    .section-header {
        padding: 0 15px;
    }

    .nav-container {
        padding: 0 15px;
    }

    .hero-image-container {
        height: 300px;
    }

    .project-image {
        height: 180px;
    }
}

/* Smooth scrolling for anchor links */
html {
    scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* ===== Enhancements: variables, reveal, glow, reduced motion ===== */
:root {
    --bg: #0a0a0a;
    --bg-elevated: #1a1a1a;
    --text: #e0e0e0;
    --muted: #b0b0b0;
    --accent: #ffffff;
    --border: #333;
    --glow: 0 10px 30px rgba(255, 255, 255, 0.04), 0 30px 80px rgba(255, 255, 255, 0.06);
    --ease: cubic-bezier(0.22, 1, 0.36, 1);
}

/* Scroll reveal utility (JS toggles .active) */
.reveal {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s var(--ease), transform 0.8s var(--ease), filter 0.8s var(--ease);
    will-change: opacity, transform, filter;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
    filter: none;
}

/* Elevated glow effects */
.hero-image-container {
    box-shadow: var(--glow);
}

.project-card {
    transition: transform 0.5s var(--ease), box-shadow 0.5s var(--ease), border-color 0.5s var(--ease);
    will-change: transform, box-shadow;
    transform-style: preserve-3d;
}

.project-card:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), var(--glow);
}

.project-card .project-image, .project-card .project-content {
    transform: translateZ(0);
}

.btn {
    transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease), background 0.3s var(--ease), color 0.3s var(--ease);
}

.btn:hover {
    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.08);
    transform: translateY(-3px);
}

/* Active nav indicator */
.nav-link.active::after,
.nav-link[aria-current="page"]::after {
    width: 100%;
}

/* Reduced motion accessibility */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
    }
    .hero-image {
        transform: none !important;
    }
}

/* ===== Theme toggle button ===== */
.theme-toggle {
    background: transparent;
    border: 1px solid #333;
    color: #e0e0e0;
    border-radius: 999px;
    padding: 8px 12px;
    margin-left: 12px;
    cursor: pointer;
    transition: background 0.3s var(--ease), transform 0.2s var(--ease);
}

.theme-toggle:hover { transform: translateY(-1px); }
.theme-toggle:active { transform: translateY(0); }

/* Scroll progress bar */
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    width: 0;
    background: linear-gradient(90deg, #fff, #888);
    z-index: 1500;
    transition: width 0.1s linear;
}

/* ===== Background canvas ===== */
.bg-canvas {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: transparent;
    pointer-events: none;
}

/* ===== Command palette ===== */
.cmdk-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(2px);
    display: none;
    align-items: flex-start;
    justify-content: center;
    padding-top: 15vh;
    z-index: 2000;
}

.cmdk-overlay.active { display: flex; }

.cmdk {
    width: min(700px, 92vw);
    background: #111;
    border: 1px solid #333;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.6);
}

.cmdk-input {
    width: 100%;
    padding: 16px 18px;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #222;
    color: #e0e0e0;
    font-size: 16px;
    outline: none;
}

.cmdk-list { max-height: 50vh; overflow: auto; }
.cmdk-item { padding: 12px 18px; cursor: pointer; display: flex; align-items: center; gap: 10px; }
.cmdk-item:hover, .cmdk-item.active { background: #181818; }
.cmdk-kbd { margin-left: auto; opacity: 0.6; font-size: 12px; }

/* ===== Section dots ===== */
.dots-nav {
    position: fixed;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1200;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #555;
    border: 1px solid #777;
    transition: transform 0.2s var(--ease), background 0.2s var(--ease);
}

.dot.active { background: #fff; transform: scale(1.2); }
.dot:focus { outline: none; box-shadow: 0 0 0 3px rgba(255,255,255,0.25); }

@media (max-width: 768px) {
    .dots-nav { display: none; }
}

/* ===== Lightbox ===== */
.lightbox {
    position: fixed;
    inset: 0;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.85);
    backdrop-filter: blur(4px);
    z-index: 3000;
}

.lightbox.active { display: flex; }

.lightbox-stage {
    position: relative;
    max-width: min(90vw, 1200px);
    max-height: 84vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox-stage img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.6);
}

.lightbox-caption {
    position: absolute;
    bottom: -36px;
    left: 0;
    right: 0;
    text-align: center;
    color: #ccc;
    font-size: 14px;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
    position: absolute;
    background: rgba(255,255,255,0.08);
    color: #fff;
    border: 1px solid #444;
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
    transition: transform 0.2s var(--ease), background 0.2s var(--ease);
}

.lightbox-close { top: 20px; right: 20px; font-size: 22px; line-height: 1; }
.lightbox-prev { left: 20px; top: 50%; transform: translateY(-50%); font-size: 22px; }
.lightbox-next { right: 20px; top: 50%; transform: translateY(-50%); font-size: 22px; }

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover { background: rgba(255,255,255,0.14); }

@media (max-width: 768px) {
    .lightbox-caption { display: none; }
}

/* ===== Glass theme overrides ===== */
body.theme-glass .navbar {
    background: rgba(10, 10, 10, 0.6);
    backdrop-filter: blur(20px);
    border-bottom-color: rgba(255, 255, 255, 0.12);
}

body.theme-glass .hero {
    background: linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(26,26,26,0.6) 100%);
}

body.theme-glass .project-card {
    background: rgba(26, 26, 26, 0.6);
    border-color: rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(10px);
}

body.theme-glass .footer {
    background: rgba(10, 10, 10, 0.7);
}

/* ===== Animated gradient borders ===== */
.btn, .project-card { position: relative; }

.btn::before, .project-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(120deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05), rgba(255,255,255,0.25));
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    animation: borderShift 6s linear infinite;
    pointer-events: none;
    opacity: 0.5;
}

.btn::before { border-radius: 50px; }
.project-card::before { border-radius: 20px; }

@keyframes borderShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
