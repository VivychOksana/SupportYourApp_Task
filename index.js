`use strict`;

let url = [
  './img/flowers_back.png',
  './img/images1.jpg',
  './img/images2.jpeg',
  './img/images3.jpg',
  './img/images4.jpg',
];

setInterval(function() {
  let random = Math.floor(Math.random() * url.length);
  let element = document.getElementById('wrapper');
  element.style.backgroundImage = `url( ${ url[random] } )`;
}, 28800000);
