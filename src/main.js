'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api.js';
import {
  showLoader,
  clearGallery,
  renderGallery,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const query = form.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  showLoader(loader);
  clearGallery(gallery);

  searchImages(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        renderGallery(gallery, images);
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader(loader);
    });

  form.reset();
}
