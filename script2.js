const swiper = new Swiper('.miCarrusel', {
  loop: true, // Infinito
  autoplay: {
    delay: 3000, // Cambia cada 3 segundos
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Para que en pantallas grandes se vean 2 o 3 fotos y en móvil 1
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 }
  }
});