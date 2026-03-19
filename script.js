const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
const navLinks = document.querySelectorAll('.primary-nav a');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const open = primaryNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    formMessage.textContent = `Thanks, ${name}! Your message has been sent.`;
    contactForm.reset();
  });
}
