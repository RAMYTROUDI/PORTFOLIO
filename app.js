document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll('.text-element');
    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    // Observer pour les éléments de texte
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                textObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    // Observer pour les couches parallax
    const parallaxObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Ajustez le seuil selon vos besoins
    });

    // Observer pour les éléments de texte
    textElements.forEach(element => {
        textObserver.observe(element);
    });

    // Observer pour les couches parallax
    parallaxLayers.forEach(layer => {
        parallaxObserver.observe(layer);
    });
});