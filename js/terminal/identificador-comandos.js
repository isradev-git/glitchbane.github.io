const mql = window.matchMedia("(max-width: 600px)");

window.onload = init;


/**
 * Inicializa el terminal y establece la posición inicial del cursor.
 */
function init() {
  cursor.style.left = "0px";
  renderBanner();
}

let comandHistory = []; // Array que contiene el historial de comandos.
let commandIndex = 0  // Índice para el manejo del historial de comandos.


/**
 * Procesa un comando ingresado en el terminal y ejecuta la acción correspondiente.
 *
 * @param {string} command - El comando a procesar.
 */
function processCommand(command) {

  const args = formatCommand(command);

  renderLine(BASE_ROOT + command, "no-animation", 0);

  switch (args[0]) {
    case "help":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(COMMAND_LIST, 80);
      break;
    case "about":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(ABOUT, 80);
      break;
    case "social":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(SOCIAL, 80);
      break;
    case "projects":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(PROJECTS, 80);
      break;
    case "email":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(EMAIL_INFO, 80);
      break;
    case "banner": 
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderBanner();
      break;
    case "curriculum":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      newTab("../../cv/CV-Israel-INF.pdf");
      break;
    case "clear":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      setTimeout(() =>
        contentHook = clearTerminal(terminal, contentHook), 1)
      break;
    case "ls":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(DIRECTORIES, 80);
      break;
    case "sudo":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderMultipleLines(SUDO, 80);
      break;
    case "education":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      if (mql.matches) {
        renderMultipleLines(MOBILE_EDUCATION_INFO, 80);
      } else {
        renderMultipleLines(EDUCATION_INFO, 80);
      }
      break;
    case "pwd":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      renderLine("<br>/home/isradev/projectos/IsraDev_System<br><br>");
      break
    case "echo":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      const printCommands = args.slice(1).join(" ");
      renderLine("<br>" + printCommands + "<br></br>", 80);
      break;
    case "cd":
      commandIndex = addCommandToHistory(args, comandHistory, commandIndex);
      if (args[1] === "music") {
        renderLine("Abriendo música...", 80);
        newTab("https://www.youtube.com/playlist?list=PLJGWUhz2ALJBPnYLJe5h2O62-IB7yX7Bv");
      } else if (args[1] === "photos") {
        renderLine("Abriendo fotos...", 80);
        newTab("https://www.pinterest.es/search/pins/?q=perritos&rs=typed");
      } else if (args[1] === "videos") {
        renderLine("Abriendo videos...", 80);
        newTab("https://www.youtube.com/playlist?list=PLOnuNNmxji-S9TtsSxkpN_nW8geKuO_De");
      } else {
        renderLine("El directorio no ha sido encontrado en el sistema: " + args.slice(1).join(" "));
      }
      break;
    case "history":
      renderLine("<br>");
      comandHistory.push("<br>");
      renderMultipleLines(comandHistory, 80);
      comandHistory.pop()
      break;
    default:
      if (mql.matches) {
        renderLine("<br>Comando no encontrado");
        renderLine("Escribe <span class=\"command\">'help'</span> para ver el listado completo de comandos disponibles<br><br>");
      } else {
        renderLine("Comando no encontrado. Para una lista de todos los comandos, escribe <span class=\"command\">'help'</span>.", "error", 100);
      }
      break;
  } 
}

textAreaInput.addEventListener("keydown", handleEnterKeyPress);
textAreaInput.addEventListener("keydown", handleArrowUpKeyPress);
textAreaInput.addEventListener("keydown", handleArrowDownKeyPress);
mobileInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    processCommand(event.target.value);
    clearInput(mobileInput);
  } 
});



/**
 * Añade una nueva línea a la salida del terminal.
 * @param {string} text - El texto a añadir.
 * @param {string} style - La clase CSS a aplicar a la línea.
 * @param {number} time - El retraso en milisegundos antes de añadir la línea.
 */
function renderLine(text, style, time, asciiArt=false) {
  let formattedText = text;
  if (asciiArt) {
    formattedText = formatASCIIArt(text);
  } else {
    formattedText = formatText(text);
  }
  setTimeout(() => {
    const next = createLine(formattedText, style);
    insertLine(next, contentHook);
    scrollToBottom();
  }, time);
}

/**
 * Reemplaza múltiples espacios en una cadena con dobles espacios no rompibles.
 * @param {string} text - El texto a formatear.
 * @returns {string} El texto formateado.
 */
function formatASCIIArt(text) {
  const space = " ";
  const noBreakingSpace = "&nbsp";

  return text.replaceAll(space, noBreakingSpace);
}

function formatText(text) {
  const doubleSpace = "  ";
  const doubleNoBreakingSpace = "&nbsp;&nbsp";
  return text.replaceAll(doubleSpace, doubleNoBreakingSpace);
}

/**
 * Crea un nuevo elemento de línea con el texto y el estilo dados.
 * @param {string} text - El texto de la línea.
 * @param {string} style - La clase CSS a aplicar a la línea.
 * @returns {HTMLElement} El nuevo elemento de línea.
 */
function createLine(text, style) {
  const line = document.createElement("p");
  line.className = style;
  line.innerHTML = `<span class="${style}">${text}</span>`;
  return line;
}

/**
 * Inserta un elemento antes de un elemento de referencia.
 * @param {HTMLElement} element - El elemento a insertar.
 * @param {HTMLElement} referenceElement - El elemento para insertar el nuevo elemento antes.
 */
function insertLine(element, referenceElement) {
  referenceElement?.parentNode?.insertBefore(element, referenceElement);
}


function scrollToBottom() {
  window.scrollTo({
    top: document.body.offsetHeight,
    behavior: "smooth"
  });
}


/**
 * Borra la entrada del textarea.
 */
function clearInput(inputElement) {
  inputElement.value = "";
}


/**
 * Representa múltiples líneas con un retraso entre cada una.
 * @param {Array} lines - Array de cadenas para representar como líneas separadas.
 * @param {string} style - La clase CSS a aplicar a las líneas.
 * @param {number} delay - El retraso en milisegundos entre representar cada línea.
 */
function renderMultipleLines(lines, delay=0, style="", asciiArt=false) {
  lines.forEach((line, index) => {
      renderLine(line, style, index * delay, asciiArt);
  })

}

/**
 * Representa un banner basado en el ancho de la pantalla.
 * @returns {void}
 */
function renderBanner() {
    if (mql.matches) {
      renderMultipleLines(MOBILE_BANNER, 80, "", true);
      setTimeout( () => {
        renderMultipleLines(TERMINAL_INFO_MOBILE,  80, "highlightColor");
      }, 1200);
    } else {
      renderMultipleLines(BANNER, 80, "", true);
      setTimeout( () => {
        renderMultipleLines(TERMINAL_INFO,  80, "highlightColor");
      }, 1200);
    }
}

/**
 * Borra el terminal.
 * @param {HTMLElement} root - El elemento raíz del terminal.
 * @param {HTMLElement} hook - El gancho que contiene todo el contenido anterior.
 * @returns {HTMLElement} Un gancho limpio.
 */
function clearTerminal(root, hook) {
  const id = hook.id
  root.innerHTML = '<a id="' + id + '"></a>';
  hook = document.getElementById(id);
  return hook;
}

/**
 * Abre un enlace en una nueva pestaña.
 * @param {string} link - El enlace a abrir.
 * @returns {void}
 */
function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

/**
 * Agrega un comando al array de historial de comandos.
 * @param {string[]} commands - Los comandos que se agregarán.
 * @param {string[]} historyArray - El array que almacena el historial de comandos.
 * @param {number} currentIndex - El índice del comando actual en el historial.
 * @returns {number} El índice del nuevo comando en el historial.
 */
function addCommandToHistory(commands, historyArray, currentIndex) {
  const commandString = commands.join(" ");
  historyArray.push(commandString);
  return currentIndex + 1;
}

/**
 * Formatea un comando convirtiéndolo a minúsculas, recortándolo y dividiéndolo en un array.
 * @param {string} command - El comando a formatear.
 * @returns {string[]} El comando formateado como un array de cadenas.
 */
function formatCommand(command) {
  command = command.toLowerCase();
  command = command.trim();
  return command.split(" ");
}

/**
 * Maneja el evento de pulsación de la tecla "Enter".
 * @param {KeyboardEvent} event - El objeto de evento.
 * @returns {void}
 */
function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    processCommand(event.target.value);
    clearInput(textAreaInput);
  }
}

/**
 * Maneja el evento de pulsación de la tecla "ArrowUp".
 * @param {KeyboardEvent} event - El objeto de evento.
 * @returns {void}
 */
function handleArrowUpKeyPress(event) {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (commandIndex > 0) {
      commandIndex = commandIndex - 1;
      textAreaInput.value = comandHistory[commandIndex]
      typerElement.innerHTML = comandHistory[commandIndex];
    }
  }
}

/**
 * Maneja el evento de pulsación de la tecla "ArrowDown".
 * @param {KeyboardEvent} event - El objeto de evento.
 * @returns {void}
 */
function handleArrowDownKeyPress(event) {
  if (event.key === "ArrowDown" && commandIndex < comandHistory.length) {
    commandIndex = commandIndex + 1;
    if (comandHistory[commandIndex] === undefined) {
      textAreaInput.value = "";
      typerElement.innerHTML = "";
    }
    else {
      textAreaInput.value = comandHistory[commandIndex];
      typerElement.innerHTML = comandHistory[commandIndex];
    }
  }
}
