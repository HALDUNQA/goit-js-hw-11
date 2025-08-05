import axios from 'axios';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const API_KEY = '50117384-0c3e90572e841b6f3be625418'; 
const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;


form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.searchQuery.value.trim();
  if (!query) return;

  gallery.innerHTML = '';
  showLoader();

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    const hits = response.data.hits;
    if (hits.length === 0) {
      iziToast.error({
        title: 'Oops',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      const markup = hits.map(image => createImageCard(image)).join('');
      gallery.innerHTML = markup;

      if (lightbox) {
        lightbox.refresh();
      } else {
        lightbox = new SimpleLightbox('.gallery a');
      }
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
});

// Function to create image card markup
function createImageCard(image) {
  return `
    <a class="gallery-item" href="${image.largeImageURL}">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <p><b>Likes:</b> ${image.likes}</p>
        <p><b>Views:</b> ${image.views}</p>
        <p><b>Comments:</b> ${image.comments}</p>
        <p><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </a>
  `;
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}