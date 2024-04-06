// Scroll back to the landing page - home (when clicked on Buka Enkhjargal)
document.addEventListener('DOMContentLoaded', function() {
    // Get the header p element
    var homeLink = document.getElementById('home-link');

    // Add click event listener
    homeLink.addEventListener('click', function() {
        // Scroll to the home section
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });
});
//=======================================================================================
// Underline the name of the current section
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
//=======================================================================================
// Apply the hover effect to the heart image when the transparent version is hovered over
// Get references to the heart and transparent heart images
const heartImg = document.getElementById('heart');
const transparentHeartImg = document.getElementById('heart-transparent');

// Add event listeners to the transparent heart image
transparentHeartImg.addEventListener('mouseover', () => {
  // Apply the hover effect by changing the scale of the heart image
  heartImg.style.transform = 'scale(1.1)';
});

transparentHeartImg.addEventListener('mouseout', () => {
  // Remove the hover effect by resetting the scale of the heart image
  heartImg.style.transform = 'scale(1)';
});
