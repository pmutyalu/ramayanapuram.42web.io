// Mobile navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const header = document.querySelector('.header');
    
    // Function to close mobile menu
    function closeMobileMenu() {
        navMenu.classList.remove('active');
        header.classList.remove('menu-active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    // Function to open mobile menu
    function openMobileMenu() {
        navMenu.classList.add('active');
        header.classList.add('menu-active');
        document.body.style.overflow = 'hidden'; // Disable scrolling when menu is open
    }
    
    // Toggle mobile menu when hamburger is clicked
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (navMenu.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    // Close menu when close button (×) is clicked
    if (navClose) {
        navClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
        });
    }
    
    // Close menu when clicking on any navigation link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Always close menu when clicking on a link, regardless of screen size
            closeMobileMenu();
        });
    });
    
    // Close menu when clicking outside the menu area
    document.addEventListener('click', function(event) {
        // Only close if menu is open and click is outside both toggle button and menu
        if (navMenu.classList.contains('active') && 
            !navToggle.contains(event.target) && 
            !navMenu.contains(event.target)) {
            closeMobileMenu();
        }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});
