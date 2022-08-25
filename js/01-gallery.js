import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const onCreateGallery = item => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
};

const marcup = galleryItems.map(onCreateGallery).join('');

gallery.insertAdjacentHTML('afterbegin', marcup);

gallery.addEventListener('click', onOpemModal);

function onOpemModal(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="1200">`, {
    onShow: instance => {
      document.addEventListener('keydown', onCloseModalEsc);
      function onCloseModalEsc(event) {
        if (event.code !== 'Escape') {
          return;
        }
        instance.close();
        document.removeEventListener('keydown', onCloseModalEsc);
      }
    },
  });
  console.log(instance);
  instance.show();
}
