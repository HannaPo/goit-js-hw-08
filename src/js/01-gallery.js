import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

const gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});