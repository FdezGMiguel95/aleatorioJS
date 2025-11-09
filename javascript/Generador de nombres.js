document.addEventListener('DOMContentLoaded', () => {
    const nombres = {
        masculino: [
            "Alejandro", "Miguel", "Javier", "Daniel", "Hugo", 
            "Pablo", "Lucas", "Adrián", "Marco", "David"
        ],
        femenino: [
            "Sofía", "Lucía", "Martina", "María", "Paula",
            "Sara", "Carla", "Valeria", "Alba", "Elena"
        ],
        neutro: [
            "Río", "Mar", "Luz", "Sol", "Cielo", 
            "Alma", "Paz", "Kai", "Azul", "Indigo"
        ]
    };

    const botonGenerar = document.getElementById('generarBoton');
    const resultadoParrafo = document.getElementById('nombreResultado');
    const formulario = document.getElementById('generadorForm');

    botonGenerar.addEventListener('click', () => {
        const generoSeleccionado = formulario.querySelector('input[name="genero"]:checked').value;
        const listaNombres = nombres[generoSeleccionado];
        const indice = Math.floor(Math.random() * listaNombres.length);
        const nombreGenerado = listaNombres[indice];
        resultadoParrafo.textContent = nombreGenerado;
        
    });
    document.head.appendChild(style);
});