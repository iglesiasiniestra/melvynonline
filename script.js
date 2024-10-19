// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the elements for the menu icon and the navigation links
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    // Add an event listener to the menu icon to handle click events
    menuIcon.addEventListener('click', function() {
        // Toggle the 'open' class on the navLinks to show or hide the menu
        navLinks.classList.toggle('open');
    });
});
