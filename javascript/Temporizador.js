/* javascript/Temporizador.js */

// Constantes de tiempo
const SEGUNDOS_MAXIMOS = 24 * 60 * 60; // 24 horas en segundos

// Variables del temporizador
let tiempoTotalSegundos; // Almacena el tiempo actual del temporizador en segundos
let intervalId = null; // ID del intervalo para controlar el bucle
let estaCorriendo = false; // Estado del temporizador

// Referencias a elementos del DOM
const displayTemporizador = document.getElementById('display-temporizador');
const botonIniciarPausar = document.getElementById('iniciar-pausar');
const botonReiniciar = document.getElementById('reiniciar');

// Referencias a los botones de modificación
const addHour = document.getElementById('add-hour');
const subtractHour = document.getElementById('subtract-hour');
const addMinute = document.getElementById('add-minute');
const subtractMinute = document.getElementById('subtract-minute');
const addSecond = document.getElementById('add-second');
const subtractSecond = document.getElementById('subtract-second');

/**
 * Genera un tiempo inicial aleatorio no superior a 24 horas.
 * @returns {number} Tiempo inicial en segundos.
 */
function generarTiempoAleatorio() {
    // Genera un número entre 1 segundo y SEGUNDOS_MAXIMOS
    return Math.floor(Math.random() * SEGUNDOS_MAXIMOS) + 1; 
}

/**
 * Convierte una cantidad de segundos a formato "HH:MM:SS".
 * @param {number} totalSegundos - El total de segundos restantes.
 * @returns {string} El tiempo formateado.
 */
function formatoTiempo(totalSegundos) {
    // Aseguramos que no sea negativo
    const segundosAbsolutos = Math.max(0, totalSegundos); 

    const horas = Math.floor(segundosAbsolutos / 3600);
    const minutos = Math.floor((segundosAbsolutos % 3600) / 60);
    const segundos = segundosAbsolutos % 60;

    // Asegura que cada componente tenga dos dígitos (ej: 05)
    const h = String(horas).padStart(2, '0');
    const m = String(minutos).padStart(2, '0');
    const s = String(segundos).padStart(2, '0');

    return `${h}:${m}:${s}`;
}

/**
 * Actualiza el display del temporizador.
 */
function actualizarDisplay() {
    displayTemporizador.textContent = formatoTiempo(tiempoTotalSegundos);
}

/**
 * Lógica principal del temporizador, se llama cada segundo.
 */
function ticTac() {
    if (tiempoTotalSegundos <= 0) {
        pausarTemporizador();
        tiempoTotalSegundos = 0;
        actualizarDisplay();
        alert("¡Tiempo Agotado! 🔔");
        return;
    }

    tiempoTotalSegundos--;
    actualizarDisplay();
}

/**
 * Inicia o pausa el temporizador.
 */
function iniciarPausarTemporizador() {
    // Si el tiempo es 0, no se inicia
    if (tiempoTotalSegundos <= 0 && !estaCorriendo) {
        return;
    }

    if (estaCorriendo) {
        pausarTemporizador();
    } else {
        iniciarTemporizador();
    }
}

/**
 * Inicia el temporizador.
 */
function iniciarTemporizador() {
    if (intervalId === null) {
        intervalId = setInterval(ticTac, 1000); // Llama a ticTac cada 1000ms (1 segundo)
        estaCorriendo = true;
        
        // ** Eliminadas líneas para cambiar texto y estilo del botón **
    }
    // Desactivar los botones de modificación al iniciar
    deshabilitarControles(true);
}

/**
 * Pausa el temporizador.
 */
function pausarTemporizador() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        estaCorriendo = false;
        
        // ** Eliminadas líneas para cambiar texto y estilo del botón **
    }
    // Habilitar los botones de modificación al pausar
    deshabilitarControles(false);
}

/**
 * Reinicia el temporizador a un nuevo tiempo aleatorio.
 */
function reiniciarTemporizador() {
    pausarTemporizador(); // Asegúrate de detener cualquier temporizador en curso
    // Se genera un nuevo tiempo aleatorio
    tiempoTotalSegundos = generarTiempoAleatorio(); 
    actualizarDisplay();
    
    // ** Eliminada línea para restablecer el texto del botón **
}

/**
 * Modifica el tiempo total en segundos con un valor dado.
 * Se asegura de que el tiempo se mantenga entre 0 y 24 horas.
 * @param {number} segundosAModificar - Cantidad de segundos a sumar o restar.
 */
function modificarTiempo(segundosAModificar) {
    if (estaCorriendo) {
        // No se permite modificar si el temporizador está corriendo
        return; 
    }

    let nuevoTiempo = tiempoTotalSegundos + segundosAModificar;

    // Límite superior: No más de 24 horas
    if (nuevoTiempo > SEGUNDOS_MAXIMOS) {
        nuevoTiempo = SEGUNDOS_MAXIMOS;
    }

    // Límite inferior: No menos de 0 segundos
    if (nuevoTiempo < 0) {
        nuevoTiempo = 0;
    }

    tiempoTotalSegundos = nuevoTiempo;
    actualizarDisplay();
}

/**
 * Deshabilita o habilita los botones de modificación de tiempo.
 * @param {boolean} deshabilitar - true para deshabilitar, false para habilitar.
 */
function deshabilitarControles(deshabilitar) {
    addHour.disabled = deshabilitar;
    subtractHour.disabled = deshabilitar;
    addMinute.disabled = deshabilitar;
    subtractMinute.disabled = deshabilitar;
    addSecond.disabled = deshabilitar;
    subtractSecond.disabled = deshabilitar;
}


// Inicialización:
document.addEventListener('DOMContentLoaded', () => {
    // 1. Generar el tiempo aleatorio e inicializar la variable de tiempo
    tiempoTotalSegundos = generarTiempoAleatorio();
    
    // 2. Mostrar el tiempo inicial en el navegador
    actualizarDisplay(); 
    
    // 3. Asignar los listeners de eventos a los botones principales
    botonIniciarPausar.addEventListener('click', iniciarPausarTemporizador);
    botonReiniciar.addEventListener('click', reiniciarTemporizador);

    // 4. Asignar listeners a los botones de modificación:
    
    // Horas: +/- 1 hora (3600 segundos)
    addHour.addEventListener('click', () => modificarTiempo(3600)); 
    subtractHour.addEventListener('click', () => modificarTiempo(-3600));

    // Minutos: +/- 10 minutos (600 segundos)
    addMinute.addEventListener('click', () => modificarTiempo(600)); 
    subtractMinute.addEventListener('click', () => modificarTiempo(-600));

    // Segundos: +/- 10 segundos (10 segundos)
    addSecond.addEventListener('click', () => modificarTiempo(10)); 
    subtractSecond.addEventListener('click', () => modificarTiempo(-10));
});