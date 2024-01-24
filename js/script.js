document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.about-us', { delay: 100 });
    ScrollReveal().reveal('.our-services', { delay: 100 });
    ScrollReveal().reveal('.cobertura', { delay: 100 });
    ScrollReveal().reveal('.planos', { delay: 100 });
    ScrollReveal().reveal('.footer', { delay: 100 });
});