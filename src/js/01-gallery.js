// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line
const imgGalleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImgGalleryMarkup(galleryItems);

imgGalleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

function createImgGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__items">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>        
        </div>`;
    }).join('');
};

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });