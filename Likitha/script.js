const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Fade-in on scroll animation
const faders = document.querySelectorAll('h2.section__header, section > p, section > div, .portfolio__card, .choose__card, .journey__card');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0)";
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.opacity = 0;
  fader.style.transform = "translateY(20px)";
  appearOnScroll.observe(fader);
});


