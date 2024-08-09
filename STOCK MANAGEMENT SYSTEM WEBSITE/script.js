document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you shortly.');
        form.reset();
    });
});
