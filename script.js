const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links li'); // Select all the links

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');  // Remove the active class to hide the menu
    });
});
