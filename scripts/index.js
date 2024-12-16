AOS.init({
    duration: 800,
    once: true
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight && top > 0) {
            document.body.style.backgroundColor = getComputedStyle(section).getPropertyValue('--section-color');
        }
    });
});