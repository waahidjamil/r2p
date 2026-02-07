/* ============================================
   R2P — Scroll Reveal & Motion
   IntersectionObserver-based animations
   ============================================ */

(function () {
  'use strict';

  // Scroll-triggered reveal animations
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.r2p-reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  // Header compress on scroll
  function initHeaderScroll() {
    const header = document.querySelector('.r2p-header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener(
      'scroll',
      function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 60) {
          header.classList.add('r2p-header--scrolled');
        } else {
          header.classList.remove('r2p-header--scrolled');
        }

        lastScroll = currentScroll;
      },
      { passive: true }
    );
  }

  // Fade-in observer
  function initFadeIn() {
    const fadeElements = document.querySelectorAll('.r2p-fade-in');
    if (!fadeElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
      }
    );

    fadeElements.forEach((el) => observer.observe(el));
  }

  // Initialize all on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initScrollReveal();
    initHeaderScroll();
    initFadeIn();
  }
})();
