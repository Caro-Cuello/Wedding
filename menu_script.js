document.addEventListener('DOMContentLoaded', function() {
    const formularioMenu = document.getElementById('form-menu');
    const contenidoPrincipal = document.getElementById('contenido-principal');
    const mensajeExito = document.getElementById('mensaje-exito');

    if (formularioMenu) {
        formularioMenu.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const datos = new FormData(formularioMenu);
            const url = formularioMenu.action;

            fetch(url, {
                method: 'POST',
                mode: 'no-cors', 
                body: datos
            })
            .then(() => {
                // Aplicamos una transición suave de salida
                contenidoPrincipal.style.transition = 'opacity 0.4s ease';
                contenidoPrincipal.style.opacity = '0';

                setTimeout(() => {
                    // Ocultamos todo lo anterior
                    contenidoPrincipal.style.display = 'none';
                    
                    // Mostramos solo el Gracias
                    mensajeExito.style.display = 'block';
                    mensajeExito.classList.add('fade-in'); 
                }, 400);
            })
            .catch(error => {
                console.error('Error al enviar:', error);
                alert('Ocurrió un error. Por favor, intenta de nuevo.');
            });
        });
    }
});