// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


import { galleryItems } from './gallery-items.js';
// Change code below this line

// Descrito en la documentación
import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";


// ⬇️⬇️⬇️ Following lines create the gallery using a for each loop in the imported array coming from gallery-items.js file' On top of that these lines add classes to include styles alreedy defined in the styles.css file.

const uList = document.querySelector("ul.gallery");

galleryItems.forEach(array_element => {
  
  const liItem = document.createElement("li");
  uList.append(liItem);
  liItem.classList.add("gallery__item");

  let newAnchor = document.createElement("a");
  liItem.append(newAnchor);
  newAnchor.href = array_element.original;
  newAnchor.classList.add("gallery__link");

  let newImg = document.createElement("img");
  newImg.src = array_element.preview;
  newImg.alt = array_element.description;
  newAnchor.append(newImg);
  newImg.classList.add("gallery__image");

});


let lightbox = new SimpleLightbox('.gallery a', { /* options */ });