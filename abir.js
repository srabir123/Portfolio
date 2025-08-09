
// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add appropriate visible class based on animation type
            if (entry.target.classList.contains('fade-in-left')) {
                entry.target.classList.add('visible');
            } else if (entry.target.classList.contains('fade-in-right')) {
                entry.target.classList.add('visible');
            } else if (entry.target.classList.contains('fade-in-up')) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.add('visible');
            }

            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        }
    });
}, observerOptions);

// Observe all animation elements
document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-up').forEach(el => {
    observer.observe(el);
});

// Contact form handler
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = event.target.querySelector('input[placeholder="John"]').value;
    const email = event.target.querySelector('input[type="email"]').value;

    // Show success message
    alert(`Thank you ${firstName}! Your message has been received. This is a demo form, so no actual email will be sent.`);
    event.target.reset();
}

// Add active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-600');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-blue-600');
        }
    });
});
