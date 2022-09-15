var myHeaders = new Headers();

var myInit = {
  method: 'GET',
  headers: myHeaders,
  // mode: 'cors',
  // cache: 'default',
  Authorization: '563492ad6f9170000100000147d498b5d60246e2abde287350956f77'
};

fetch('https://api.pexels.com/v1/curated?page=2&per_page=40', myInit)
  .then((a) => console.log(a));