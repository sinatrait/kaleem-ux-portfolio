/* main.js — Portfolio interactions */

// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const menuBtn = document.querySelector('.nav-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = menuBtn.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
      spans[1].style.transform = 'rotate(-45deg) translate(4px, -4px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.transform = '';
    }
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuBtn.querySelectorAll('span').forEach(s => s.style.transform = '');
    });
  });
}

// Intersection Observer for reveal animations
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  });
}

// Active nav link based on page
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  a.classList.remove('active');
  if (href === page || (page === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
