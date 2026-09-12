// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Header shadow on scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
});

// Reveal-on-scroll animation
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// Contact form -> mailto fallback (no backend yet)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const contact = contactForm.contact.value.trim();
  const message = contactForm.message.value.trim();

  const subject = encodeURIComponent(`Enquiry from ${name} - Fresco Dairy Farms website`);
  const body = encodeURIComponent(`Name: ${name}\nPhone/Email: ${contact}\n\nMessage:\n${message}`);

  window.location.href = `mailto:hello@frescodairyfarms.com?subject=${subject}&body=${body}`;
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
