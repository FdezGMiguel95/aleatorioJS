const citas = [
    {
        texto: "La única manera de hacer un gran trabajo es amar lo que haces.",
        autor: "Steve Jobs"
    },
    {
        texto: "El éxito no es definitivo, el fracaso no es fatídico: lo que cuenta es el coraje para continuar.",
        autor: "Winston Churchill"
    },
    {
        texto: "Sé el cambio que deseas ver en el mundo.",
        autor: "Mahatma Gandhi"
    },
    {
        texto: "La vida es aquello que te va sucediendo mientras estás ocupado haciendo otros planes.",
        autor: "John Lennon"
    },
    {
        texto: "Piensa, sueña, atrévete, y lo más importante, haz.",
        autor: "Walt Disney"
    }
];

const textoCita = document.querySelector('p');
const autorCita = document.querySelector('h2');   
const generarCita = document.getElementById('generarCita');

function mostrarCitaAleatoria() {
    const indice = Math.floor(Math.random() * citas.length);
    const citaSeleccionada = citas[indice];
    
    textoCita.textContent = `"${citaSeleccionada.texto}"`;
    autorCita.textContent = `- ${citaSeleccionada.autor}`;
}

generarCita.addEventListener('click', mostrarCitaAleatoria);

mostrarCitaAleatoria();