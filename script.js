const revealOnScroll = () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px" 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  const elementsToAnimate = document.querySelectorAll(
    ".card, .section-title, .main-button, .card-button, .bio-description, .skill"
  );

  elementsToAnimate.forEach((el) => {
    el.classList.add("reveal-on-scroll");
    observer.observe(el);
  });
};

const initSmoothScroll = () => {
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  revealOnScroll();
  initSmoothScroll();
});