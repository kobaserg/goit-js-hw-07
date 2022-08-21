import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const onCreateGallery = item => {
  return `<li > 
<a class="gallery__item gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>`;
};

const marcup = galleryItems.map(onCreateGallery).join('');

gallery.insertAdjacentHTML('afterbegin', marcup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
  widthRatio: 0.6,
  heightRatio: 0.9,
  scrollZoomFactor: 0.1,
});
