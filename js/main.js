/**
 * COBA Professional Development — Main JavaScript
 *
 * Entry point: DOMContentLoaded fires initAll().
 * Each feature is an isolated init function so a missing
 * DOM element causes an early return, not a thrown error.
 *
 * Table of contents
 *  1. initAll              — wires everything together
 *  2. initHeroSlider       — auto-playing image carousel (index only)
 *  3. initMobileMenu       — hamburger nav toggle
 *  4. initDropdownMenus    — mobile accordion for the Majors dropdown
 *  5. initSmoothScroll     — offset-aware anchor scrolling (header + section-nav)
 *  6. initBackToTop        — floating scroll-to-top button
 *  7. initHeaderScroll     — header shadow on scroll
 *  8. initScrollAnimations — Intersection Observer fade-in for cards
 *  9. initCopyrightYear    — auto-updates footer year
 * 10. initActiveNavLink    — highlights the current page in the top nav
 */

document.addEventListener('DOMContentLoaded', initAll);

/* ============================================
   1. INIT ALL
   ============================================ */
function initAll() {
    initHeroSlider();
    initMobileMenu();
    initDropdownMenus();
    initSmoothScroll();
    initBackToTop();
    initHeaderScroll();
    initCopyrightYear();
    initActiveNavLink();

    /* Scroll animations wait for full load so images are sized */
    window.addEventListener('load', initScrollAnimations);
}

/* ============================================
   2. HERO SLIDER (index.html only)
   Auto-advances every 8 s; pauses on hover
   and supports mouse/touch swipe.
   ============================================ */
function initHeroSlider() {
    const container = document.querySelector('.hero-slider__container');
    if (!container) return;

    const slides   = document.querySelectorAll('.hero-slider__slide');
    const dots     = document.querySelectorAll('.hero-slider__dot');
    const prevBtn  = document.querySelector('.hero-slider__arrow--prev');
    const nextBtn  = document.querySelector('.hero-slider__arrow--next');
    let current    = 0;
    let timer;

    function showSlide(index) {
        slides[current].classList.remove('hero-slider__slide--active');
        dots[current].classList.remove('hero-slider__dot--active');
        current = index;
        slides[current].classList.add('hero-slider__slide--active');
        dots[current].classList.add('hero-slider__dot--active');
    }

    function next() { showSlide((current + 1) % slides.length); }
    function prev() { showSlide((current - 1 + slides.length) % slides.length); }

    function startAuto() { timer = setInterval(next, 8000); }
    function stopAuto()  { clearInterval(timer); }

    /* Restart the timer after any manual interaction */
    function resetAuto() { stopAuto(); startAuto(); }

    if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAuto(); });

    dots.forEach((dot, i) =>
        dot.addEventListener('click', () => { showSlide(i); resetAuto(); })
    );

    /* Pause while the user is hovering */
    container.addEventListener('mouseenter', stopAuto);
    container.addEventListener('mouseleave', startAuto);

    /* Touch swipe support */
    let touchX = 0;
    container.addEventListener('touchstart', e => {
        touchX = e.changedTouches[0].screenX;
        stopAuto();
    }, { passive: true });

    container.addEventListener('touchend', e => {
        const delta = e.changedTouches[0].screenX - touchX;
        if (delta < -50) next();
        if (delta >  50) prev();
        startAuto();
    });

    startAuto();
}

/* ============================================
   3. MOBILE MENU
   Toggles the nav open/closed and animates
   the hamburger icon into an X.
   ============================================ */
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav    = document.getElementById('mainNav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('active');
        toggle.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', open);

        /* Animate hamburger lines into an X */
        const [top, mid, bot] = toggle.querySelectorAll('span');
        if (open) {
            top.style.transform = 'rotate(45deg) translateY(8px)';
            mid.style.opacity   = '0';
            bot.style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            top.style.transform = '';
            mid.style.opacity   = '';
            bot.style.transform = '';
        }
    });

    /* Close on any nav link click when in mobile view */
    nav.querySelectorAll('a').forEach(link =>
        link.addEventListener('click', () => {
            if (window.innerWidth > 768) return;
            nav.classList.remove('active');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            const [top, mid, bot] = toggle.querySelectorAll('span');
            top.style.transform = '';
            mid.style.opacity   = '';
            bot.style.transform = '';
        })
    );

    /* Close on Escape key */
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            nav.classList.remove('active');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
}

/* ============================================
   4. DROPDOWN MENUS (mobile accordion)
   On desktop the dropdown is CSS :hover-driven.
   On mobile we toggle an .active class instead.

   Listeners are attached once at init; a viewport
   check inside the handler avoids running on desktop.
   This prevents the event-stacking bug that occurred
   when this function re-ran on every window resize.
   ============================================ */
function initDropdownMenus() {
    document.querySelectorAll('.nav-list__item--dropdown').forEach(item => {
        const link = item.querySelector('.nav-list__link');
        link.addEventListener('click', e => {
            if (window.innerWidth > 768) return; /* CSS handles desktop */
            e.preventDefault();
            item.classList.toggle('active');
        });
    });
}

/* ============================================
   5. SMOOTH SCROLL
   Intercepts all same-page anchor clicks and
   accounts for both the fixed header AND the
   sticky section-nav so content never lands
   hidden under either bar.
   ============================================ */
function initSmoothScroll() {
    const header = document.querySelector('.header');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return; /* dropdown toggle links */

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            /* Add section-nav height when it is present and sticky */
            const sectionNav = document.querySelector('.section-nav');
            const offset = (header ? header.offsetHeight : 70)
                         + (sectionNav ? sectionNav.offsetHeight : 0);

            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

/* ============================================
   6. BACK TO TOP BUTTON
   ============================================ */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () =>
        btn.classList.toggle('visible', window.pageYOffset > 300)
    , { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================
   7. HEADER SCROLL EFFECT
   Adds a slightly stronger shadow when the
   user has scrolled down from the top.
   ============================================ */
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.pageYOffset > 0
            ? '0 2px 10px rgba(0,0,0,0.1)'
            : '0 2px 4px rgba(0,0,0,0.05)';
    }, { passive: true });
}

/* ============================================
   8. SCROLL ANIMATIONS
   Fades cards in as they enter the viewport.
   Uses IntersectionObserver (no scroll jank).
   ============================================ */
function initScrollAnimations() {
    const cards = document.querySelectorAll('.major-card, .resource-card, .quick-link-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); /* animate once */
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    cards.forEach(card => {
        card.style.opacity    = '0';
        card.style.transform  = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/* ============================================
   9. COPYRIGHT YEAR
   Replaces the static year in every footer
   copyright line with the current year so it
   never needs to be updated manually.
   ============================================ */
function initCopyrightYear() {
    const year = new Date().getFullYear();
    document.querySelectorAll('.footer__copyright').forEach(el => {
        el.textContent = el.textContent.replace(/\d{4}/, year);
    });
}

/* ============================================
   ACTIVE SECTION HIGHLIGHT (shared utility)
   Called by individual pages that have a
   sticky in-page .section-nav.  Pass the
   CSS selector string for the page sections.

   Usage (inline script on each page):
     highlightActiveSection('.accounting-section');
   ============================================ */
function highlightActiveSection(sectionSelector) {
    const sections   = document.querySelectorAll(sectionSelector);
    const links      = document.querySelectorAll('.section-nav__link');
    if (!sections.length || !links.length) return;

    const header     = document.querySelector('.header');
    const sectionNav = document.querySelector('.section-nav');

    window.addEventListener('scroll', () => {
        /* Compute threshold dynamically so it stays accurate if the
           header or section-nav height ever changes (e.g. on resize). */
        const threshold = (header?.offsetHeight || 70)
                        + (sectionNav?.offsetHeight || 70)
                        + 20; /* 20px breathing room */

        let current = '';
        sections.forEach(sec => {
            if (window.pageYOffset >= sec.offsetTop - threshold) {
                current = sec.getAttribute('id');
            }
        });

        links.forEach(link => {
            const isActive = link.getAttribute('href') === `#${current}`;
            link.classList.toggle('active', isActive);
        });
    }, { passive: true });
}

/* ============================================
  10. ACTIVE NAV LINK
   Compares each top-nav link's href to the
   current page URL and marks the match active
   so users always know which page they're on.
   ============================================ */
function initActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-list__link, .nav-dropdown a').forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop().split('#')[0];
        if (linkPath && linkPath === currentPath) {
            link.classList.add('nav-list__link--active');
        }
    });
}

/* ============================================
   PAGE LOAD TIMING (non-blocking diagnostic)
   Uses the modern PerformanceNavigationTiming
   API; falls back gracefully if unsupported.
   ============================================ */
window.addEventListener('load', () => {
    const [entry] = performance.getEntriesByType('navigation');
    if (entry) {
        console.log(`Page load: ${Math.round(entry.duration)}ms`);
    }
});
