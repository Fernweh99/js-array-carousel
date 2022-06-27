/*
MILESTONE 2 :
Adesso rimuoviamo tutto il markup statico e inseriamo
le immagini dinamicamente servendoci dell'array fornito 
e un semplice ciclo for. Possiamo concatenare una stringa
con un template literal oppure utilizzare gli altri metodi
di manipolazione del DOM che abbiamo visto insieme.
Al termine di questa fase ci ritroveremo con lo stesso
slider, ma costruito dinamicamente attraverso JavaScript.
*/

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