let page = 1;
const url = 'https://api.pexels.com/v1/search?query=cat&per_page=6';
const gallery = document.querySelector('#gallery');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#previous');
const myHeaders = {
  method: 'GET',
  headers: {
    Authorization: '563492ad6f9170000100000147d498b5d60246e2abde287350956f77'
  },
};

const getImages = (page) => {
  fetch(`${url}&page=${page}`, myHeaders)
    .then(response => response.json())
    .then(response => {
      response.photos.forEach(photo => {
        const div = document.createElement('div');
        const img = document.createElement('img');

        div.classList.add('gallery__item');
        img.src = photo.src.medium;

        gallery.appendChild(div);
        div.appendChild(img);
      })
    });
}


const changePage = (directionPage) => {
  gallery.innerHTML = '';

  directionPage.nextPage && page++;
  directionPage.previousPage && page--;
  page <= 0 ? getImages(page = 1) : getImages(page);
}

nextBtn.addEventListener('click', () => changePage({ nextPage: true }));
prevBtn.addEventListener('click', () => changePage({ previousPage: true }));
window.addEventListener('load', () => getImages(page = 1));