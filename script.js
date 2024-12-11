document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.section');

    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');

                // Remove all previous section classes
                navbar.className = 'navbar';

                // Add the section's ID as a class to the navbar
                navbar.classList.add(sectionId);
            }
        });
    }, options);

    // Observe all sections
    sections.forEach(section => observer.observe(section));
});