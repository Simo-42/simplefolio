export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements.length) return;

  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const framedElements = document.querySelectorAll('.framed');
  const observerOptions = {
    root: null, // Utilise le viewport comme conteneur
    rootMargin: '0px',
    threshold: 0.1 // Déclenche l'animation quand 10% de l'élément est visible
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Arrête d'observer une fois l'animation déclenchée
      }
    });
  }, observerOptions);
  framedElements.forEach(element => {
    observer.observe(element);
  });
});