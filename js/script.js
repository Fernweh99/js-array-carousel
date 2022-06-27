/*
MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e
diventa visibile nello slider, prendendo il posto della precedente.
*/

// Richiamo i bottoni
const nextButton = document.getElementById("btn-next");
const prevButton = document.getElementById("btn-prev");

// Richiamo la classe gallery dal DOM
const gallery = document.querySelector(".gallery-image");

// Creo l'array
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

//creo una variabile per concatenare le immagini e stamparle su pagina
let galleryImages = "";

//Eseguo un for per concatenare e creare la stinga con tutte le immagini
for (let i = 0; i < images.length; i++) {
  galleryImages += `<img src="img/${images[i]}" alt="image${i + 1}" />`;

}

//stampo su pagina la stringa pronta con le immagini
gallery.innerHTML = galleryImages;

// Richiamo le immagini da gallery-images dal DOM
const imgGalleryDom = document.querySelectorAll(".gallery-image img");

const imgFigureDom = document.querySelectorAll("figure img");

// creo una variabile per l'index current
let currentIndexActive = 0;
imgGalleryDom[currentIndexActive].classList.add("active");
imgFigureDom[currentIndexActive].classList.add("active");

// Creo un evento sul bottone next per andare avanti con le immagini
nextButton.addEventListener("click", function() {

  imgGalleryDom[currentIndexActive].classList.remove("active");
  imgFigureDom[currentIndexActive].classList.remove("active");

  currentIndexActive++;
  
  // Se il currentIndexActive supera la lunghezza dell'array riparto da 0
  if (currentIndexActive >= imgGalleryDom.length) {
    currentIndexActive = 0;
  }

  imgGalleryDom[currentIndexActive].classList.add("active");
  imgFigureDom[currentIndexActive].classList.add("active");
});

// Creo un evento sul bottone prev per andare indietro con le immagini
prevButton.addEventListener("click", function() {

  imgGalleryDom[currentIndexActive].classList.remove("active");
  imgFigureDom[currentIndexActive].classList.remove("active");

  currentIndexActive--;
  // se il currentIndexActive è scende sotto lo zero riparto dall'ultimo oggetto dell'array
  if (currentIndexActive < 0) {
    currentIndexActive = imgGalleryDom.length - 1;
  }

  imgGalleryDom[currentIndexActive].classList.add("active");
  imgFigureDom[currentIndexActive].classList.add("active");
});

