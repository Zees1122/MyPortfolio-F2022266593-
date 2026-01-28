document.addEventListener("DOMContentLoaded", () => {
    
    // Minimalist Reveal Logic
    const revealOnScroll = () => {
        const observerOptions = {
            threshold: 0.15, // Trigger slightly later for better "pop" visibility
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    // Once animated, we can stop observing to save resources
                    // observer.unobserve(entry.target); 
                } else {
                    // Optional: remove if you want them to pop every time you scroll
                    entry.target.classList.remove("active");
                }
            });
        }, observerOptions);

        // Select all elements to be animated
        const elements = document.querySelectorAll(
            ".card, .section-title, .bio-content, .bio-image-wrapper, .skill, .main-button"
        );

        elements.forEach((el, index) => {
            el.classList.add("reveal-on-scroll");
            
            // Apply a staggered delay based on their position in the grid
            // This creates the "wave" effect when sections appear
            const delay = (index % 0.1) * 0.15; 
            el.style.transitionDelay = `${delay}s`;
            
            observer.observe(el);
        });
    };

    // Smooth Scroll Logic
    const initSmoothScroll = () => {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    window.scrollTo({
                        top: target.offsetTop - navHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    revealOnScroll();
    initSmoothScroll();
});