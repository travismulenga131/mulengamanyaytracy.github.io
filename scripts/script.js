let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

// Fonction pour afficher l'image suivante
function showNextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

// Fonction pour afficher l'image précédente
function showPrevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

// Mettre à jour la position du carrousel
function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Lancer le défilement automatique toutes les 3 secondes
setInterval(showNextItem, 3000);

// Événements pour les boutons manuels
document.getElementById('prevBtn').addEventListener('click', showPrevItem);
document.getElementById('nextBtn').addEventListener('click', showNextItem);

// Initialiser l'affichage du carrousel
updateCarousel();
