document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-asistencia');
    const principal = document.getElementById('contenido-principal');
    const exito = document.getElementById('mensaje-exito');

    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            const datos = new FormData(formulario);

            fetch(formulario.action, {
                method: 'POST',
                mode: 'no-cors',
                body: datos
            })
            .then(() => {
                // Aplicamos efecto de salida
                principal.style.transition = 'opacity 0.4s ease';
                principal.style.opacity = '0';

                setTimeout(() => {
                    principal.style.display = 'none';
                    exito.style.display = 'block';
                }, 400);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al enviar. Inténtalo de nuevo.');
            });
        });
    }
});