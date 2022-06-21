// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";



console.log(galleryItems);


const galleryConteiner = document.querySelector('.gallery');
const cardsGallery = createImgCards(galleryItems);


function createImgCards (cards){
    return cards.map(({ preview,original,description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    
}).join('');
};
galleryConteiner.insertAdjacentHTML('beforeend',cardsGallery );
const lightbox = new SimpleLightbox('.gallery a', 
{ 
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    captionClass: "center" });

    