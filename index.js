`use strict`;

let url = [
  './img/flowers_back.png',
  './img/images1.jpg',
  './img/images2.jpeg',
  './img/images3.jpg',
  './img/images4.jpg',
];

setInterval(function() {
  let element = document.getElementById('wrapper');
  let i = 0;
  element.style.backgroundImage = `url( ${ url[i] } )`;
  i++;
  if (i === url.length) {
    i =  0;
  }
}, 1000);
