'use strict';

import axios, { Axios } from 'axios';

const API_KEY = '49479745-ecb2a9650ccad432b929afb0a';
const BASE_URL = 'https://pixabay.com/api/';

export function searchImages(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits);
}
