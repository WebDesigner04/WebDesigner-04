// Basic navigation logging and smooth scrolling + active link highlight

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  // Smooth scrolling for anchor links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      console.log(`Navigating to ${link.textContent}`);
    });
  });

  // Update active nav link on scroll
  const sections = Array.from(document.querySelectorAll('section'));
  const setActiveLink = () => {
    const scrollPos = window.scrollY + 120; // offset for header
    let current = sections[0].id;
    for (const sec of sections) {
      if (sec.offsetTop <= scrollPos) current = sec.id;
    }
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
  };

  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // initialize on load
});
