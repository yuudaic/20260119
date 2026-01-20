document.addEventListener('DOMContentLoaded', () => {
    
    // ==============================================
    // Hamburger Menu
    // ==============================================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.header__mobile-item a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // ==============================================
    // Smooth Scroll
    // ==============================================
    const smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');

    smoothScrollTriggers.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // If href is just "#" or empty, scroll to top
            const targetId = href === '#' || href === '' ? 'html' : href;
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Account for fixed header height
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==============================================
    // Back to Top Button & Header Shadow
    // ==============================================
    const backToTopBtn = document.getElementById('back-to-top');
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        // Header Shadow
        if (scrollPos > 10) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }

        // Back to Top Visibility
        if (scrollPos > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
