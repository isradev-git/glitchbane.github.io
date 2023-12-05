/**
 * @fileOverview Este archivo gestiona la representación de la entrada de texto para la interfaz de usuario del terminal.
 *
 * @module inputRenderer
 * @description Este módulo contiene métodos para representar las entradas del usuario en una interfaz similar a la de un terminal. Estos métodos permiten al usuario interactuar con la interfaz introduciendo comandos y visualizando la salida en tiempo real.
 * @version 1.0.0
 */


const MOVE_STEP = 10;
const BASE_ROOT = "system@isradev.com:~$ ";

const cursor = document.getElementById("cursor");
const typerElement = document.getElementById("typer");
const textAreaInput = document.getElementById("texter");
const mobileInput = document.querySelector("#mobileInput input");
const terminal = document.getElementById("terminal");
let contentHook = document.getElementById("contentHook");

window.onload = init;

function init() {
  cursor.style.left = "0px";
}


/**
 * Escucha eventos para manejar la entrada de texto en el textarea y mostrar el valor de entrada en un elemento designado.
 * @param {Event} event - El evento de entrada del textarea.
 * @returns {void}
 */

textAreaInput.addEventListener("input", (event) => {
  typerElement.textContent = event.target.value;
});


/**
 * Se centra en el elemento textarea.
 * @returns {void}
 */

function focusOnTextArea() {
  textAreaInput.focus();
}

/**
 * Mueve el cursor por un cierto número de pasos en respuesta a un evento de teclado.
 *
 * @param {number} count - El número de pasos para mover el cursor.
 * @param {KeyboardEvent} event - El evento de teclado que desencadenó el movimiento del cursor.
 * @param {number} [moveStep=MOVE_STEP] - El tamaño de cada paso.
 */

function moveCursor(count, event, moveStep = MOVE_STEP) {
  const keyCode = event.key;

  if (!isArrowKey(keyCode)) {
    return;
  }

  const currentLeft = getCurrentLeftOffset(cursor);
  const newPosition = calculateCursorPosition(
    keyCode,
    currentLeft,
    count,
    moveStep
  );

  if (newPosition !== undefined) {
    cursor.style.left = newPosition + "px";
  }
}

/**
 * Obtiene el desplazamiento izquierdo actual de un elemento.
 *
 * @param {HTMLElement} element - El elemento para obtener el desplazamiento izquierdo.
 * @returns {number} - El desplazamiento izquierdo actual del elemento.
 */

function getCurrentLeftOffset(element) {
  return parseInt(element.style.left) || 0;
}

/**
 * Calcula la nueva posición del cursor basándose en la tecla de flecha proporcionada, la posición actual, el recuento y el tamaño del paso.
 *
 * @param {string} key - La tecla de flecha que desencadenó el movimiento del cursor.
 * @param {number} currentLeftOffset - El desplazamiento izquierdo actual del cursor.
 * @param {number} count - El número de pasos para mover el cursor.
 * @param {number} [moveStep=MOVE_STEP] - La distancia (en píxeles) entre cada paso de movimiento del cursor.
 * @returns {number|undefined} - La nueva posición del cursor, o undefined si no puede moverse en la dirección dada.
 */

function calculateCursorPosition(
  key,
  currentLeftOffset,
  count,
  moveStep = MOVE_STEP
) {
  if (isLeftArrow(key) && currentLeftOffset >= -((count - 1) * moveStep)) {
    return currentLeftOffset - moveStep;
  } else if (isRightArrow(key) && currentLeftOffset + moveStep <= 0) {
    return currentLeftOffset + moveStep;
  }
}

/**
 * Comprueba si la tecla proporcionada es la tecla de flecha derecha.
 *
 * @param {string} key - La tecla a verificar.
 * @returns {boolean} - True si la tecla es la tecla de flecha derecha, false en caso contrario.
 */

function isRightArrow(key) {
  return key === "ArrowRight";
}

/**
 * Comprueba si la tecla proporcionada es la tecla de flecha izquierda.
 *
 * @param {string} key - La tecla a verificar.
 * @returns {boolean} - True si la tecla es la tecla de flecha izquierda, false en caso contrario.
 */

function isLeftArrow(key) {
  return key === "ArrowLeft";
}

/**
 * Comprueba si la tecla proporcionada es una tecla de flecha.
 *
 * @param {string} key - La tecla a verificar.
 * @returns {boolean} - True si la tecla es una tecla de flecha, false en caso contrario.
 */

function isArrowKey(key) {
  return key === "ArrowLeft" || key === "ArrowRight";
}

/**
 * Registra el mensaje proporcionado en la consola.
 *
 * @param {string} txt - El mensaje para registrar.
 */

function alert(txt) {
  console.log(txt);
}
