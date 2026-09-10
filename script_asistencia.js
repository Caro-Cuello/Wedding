document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-asistencia');
    const notaFecha = document.getElementById('nota-fecha');
    const exito = document.getElementById('mensaje-exito');

    // Capturar nombre de la URL de forma automática
    const inputNombre = document.getElementById('invitado-name');
    if (inputNombre) {
        const urlParams = new URLSearchParams(window.location.search);
        const nombreInvitado = urlParams.get('nombre');
        
        if (nombreInvitado) {
            inputNombre.value = decodeURIComponent(nombreInvitado);
        }
    }

    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            const datos = new FormData(formulario);

            // Ocultamos visualmente el formulario de inmediato para una mejor experiencia de usuario
            formulario.style.transition = 'opacity 0.3s ease';
            if (notaFecha) notaFecha.style.transition = 'opacity 0.3s ease';
            
            formulario.style.opacity = '0';
            if (notaFecha) notaFecha.style.opacity = '0';

            setTimeout(() => {
                formulario.style.display = 'none';
                if (notaFecha) notaFecha.style.display = 'none';
                exito.style.display = 'block';
            }, 300);

            // Enviamos los datos en segundo plano a Google Forms
            fetch(formulario.action, {
                method: 'POST',
                mode: 'no-cors',
                body: datos
            })
            .catch(error => {
                console.error('Error al procesar en segundo plano:', error);
            });
        });
    }
});