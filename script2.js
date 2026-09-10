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

document.addEventListener("DOMContentLoaded", function () {
    const primerInvitado = document.getElementById("invitado-item1");
    const botonConfirmar = document.querySelector(".boton-confirmar");

    if (primerInvitado && botonConfirmar) {
        botonConfirmar.addEventListener("click", function () {
            // Guarda el nombre en la memoria del navegador antes de cambiar de página
            localStorage.setItem("nombreInvitado", primerInvitado.textContent.trim());
        });
    }
});