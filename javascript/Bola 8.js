document.addEventListener('DOMContentLoaded', () => {
    const botonPreguntar = document.getElementById('botonPreguntar');
    const inputPregunta = document.getElementById('pregunta');
    const respuestaVentana = document.getElementById('respuestaVentana');
    const respuestaTexto = document.getElementById('respuestaTexto');

    const respuestas = [
        'Es cierto.', 
        'Sí, sin duda.', 
        'Definitivamente sí.', 
        'Mis fuentes dicen que sí.',
        'Como yo lo veo, sí.',
        'Lo más probable.', 
        'Perspectiva buena.', 
        'Sí.',
        'Las señales apuntan a que sí.',
        'Absolutamente.',
        'Pregunta de nuevo más tarde.', 
        'Mejor no decirte ahora.', 
        'No puedo predecirlo ahora.', 
        'Concéntrate y pregunta de nuevo.', 
        'Mejor no lo sabes.',
        'No cuentes con eso.', 
        'Mi respuesta es no.', 
        'Mis fuentes dicen que no.', 
        'Las perspectivas no son buenas.', 
        'Muy dudoso.'
    ];

    botonPreguntar.addEventListener('click', (e) => {
        e.preventDefault();

        const pregunta = inputPregunta.value.trim();

        if (pregunta === '') {
            alert('Por favor, haz una pregunta de Sí o No.');
            return;
        }
        
        respuestaVentana.classList.remove('mostrar-respuesta');
        respuestaTexto.textContent = '...';
        
        const indiceAleatorio = Math.floor(Math.random() * respuestas.length);
        const respuestaSeleccionada = respuestas[indiceAleatorio];
        
        setTimeout(() => {
            respuestaTexto.textContent = respuestaSeleccionada;
            respuestaVentana.classList.add('mostrar-respuesta');
            inputPregunta.value = '';

        }, 1000);
    });
});