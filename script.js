const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    projects.forEach(project => {
      project.classList.toggle('hidden', filter !== 'all' && project.dataset.category !== filter);
    });
  });
});

const contactForm = document.getElementById('contactForm');
const formHint = document.getElementById('formHint');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(contactForm);
  const subject = encodeURIComponent(`Creative enquiry — ${form.get('kind')}`);
  const body = encodeURIComponent(
    `Hi Derick,\n\n${form.get('message')}\n\nI'm ${form.get('name')} (${form.get('email')}).\nI'm getting in touch about: ${form.get('kind')}.`
  );
  // Replace this placeholder with your real email address.
  window.location.href = `mailto:attavachiderick@gmail.com?subject=${subject}&body=${body}`;
  formHint.textContent = 'Your email app should open with a draft. Remember to replace your-email@example.com with your real email address.';
});

document.getElementById('year').textContent = new Date().getFullYear();


// Light/dark mode toggle. The original light appearance remains the default.
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

themeToggle.addEventListener('click', () => {
  const darkMode = document.body.classList.toggle('dark-mode');
  themeLabel.textContent = darkMode ? 'Light mode' : 'Dark mode';
  themeToggle.setAttribute(
    'aria-label',
    darkMode ? 'Switch to light mode' : 'Switch to dark mode'
  );
});
