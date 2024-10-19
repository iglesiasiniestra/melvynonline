document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    // Toggle visibility of nav links for burger menu
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });

    // Function to check if the section is visible within the viewport
    function checkVisibility() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Check if the section is within 75% of the viewport height
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Initial check when the page loads
    checkVisibility();

    // Check visibility when scrolling
    window.addEventListener('scroll', checkVisibility);
});
