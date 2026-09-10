function copiarTexto(boton) {
    // Buscamos el texto que está justo antes del botón en el mismo contenedor
    const contenedor = boton.parentElement;
    const textoACopiar = contenedor.querySelector('.dato-copiable').innerText;

    // Usamos la API del portapapeles
    navigator.clipboard.writeText(textoACopiar).then(() => {
        // Feedback visual: cambiamos el icono por un check
        const iconoOriginal = boton.innerText;
        boton.innerText = "✅";
        boton.classList.add('btn-success-anim');

        // Volvemos al icono original después de 2 segundos
        setTimeout(() => {
            boton.innerText = iconoOriginal;
            boton.classList.remove('btn-success-anim');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}