'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function showLoader(loader) {
  loader.classList.remove('hidden');
}

export function hideLoader(loader) {
  loader.classList.add('hidden');
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export function renderGallery(gallery, images) {
  const imageMarkup = images
    .map(
      image => `
        <li class="gallery-item">
            <a href="${image.largeImageURL}">
                <img class="img-set" src="${image.webformatURL}" alt="${image.tags}"  width="360"
            height="200"/>
            </a>
            <div class="info">
                <p>Likes: ${image.likes}</p>
                <p>Views: ${image.views}</p>
                <p>Comments: ${image.comments}</p>
                <p>Downloads: ${image.downloads}</p>
                
            </div>
        </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', imageMarkup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}
