document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Scroll reveal
    const revealElements = document.querySelectorAll('.card');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Mobile Dropdown Toggle
    const dropdowns = document.querySelectorAll('.dropdown > a');
    dropdowns.forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const content = dropdownToggle.nextElementSibling;
                if (content) {
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });
});

