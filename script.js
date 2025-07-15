// Responsive navbar toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuBtn.classList.toggle('active');
});

// Hide navbar on scroll down, show on scroll up
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
  }
  lastScrollTop = scrollTop;
});

// Smooth fade-in on scroll animation
const animatedElements = document.querySelectorAll(
  'h2.section__header, section > p, section > div, .portfolio__card, .choose__card, .journey__card, .contact__container'
);

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('reveal');
    observer.unobserve(entry.target);
  });
}, observerOptions);

animatedElements.forEach(el => {
  el.classList.add('reveal-init');
  scrollObserver.observe(el);
});

// Smooth scroll on nav links
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
      navLinks.classList.remove('show'); // Close menu on mobile
      menuBtn.classList.remove('active');
    }
  });
});

// Scroll progress bar
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrollPercent}%`;
});




