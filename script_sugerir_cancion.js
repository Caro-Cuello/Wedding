const formulario = document.getElementById('form-musica');
const mensajeExito = document.getElementById('mensaje-exito');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    const url = formulario.action;
    const formData = new FormData(formulario);

    // Enviamos los datos de forma silenciosa
    fetch(url, {
        method: 'POST',
        mode: 'no-cors', // Importante para Google Forms
        body: formData
    })
    .then(() => {
        // Ocultamos el formulario y mostramos el mensaje
        formulario.style.display = 'none';
        mensajeExito.style.display = 'block';
        
        // Opcional: Redirigir después de 3 segundos
        // setTimeout(() => { window.location.href = "index.html"; }, 3000);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar la sugerencia.');
    });
});

