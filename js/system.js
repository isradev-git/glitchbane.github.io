function mostrarContenido(skill) {
  // Oculta todos los divs
  document.getElementById("Tecnologias").classList.add("hidden");
  document.getElementById("Formacion").classList.add("hidden");
  document.getElementById("Experiencia").classList.add("hidden");

  // Muestra el div correspondiente
  document.getElementById(skill).classList.remove("hidden");
}

// Acortadores codigo
const _ = (selector) => document.querySelector(selector);
const $ = (selector) => document.getElementById(selector);
// Variables de los botones
const boton__terminal = _("#boton__terminal");
const boton__me = _("#boton__me");
const boton__expskills = _("#boton__exp-skills");
const boton__work = _("#boton__work");
const boton__testimonials = _("#boton__testimonials");
const boton__contact = _("#boton__contact");
const boton__social = _("#boton__social");
const boton__doom = _("#boton__doom");
// const boton__ = _("#");

// Variables del contenido
const terminalContent = _("#contenido__terminal");
const meContent = _("#contenido__me");
const expskillsContent = _("#contenido__exp-skills");
const workContent = _("#contenido__work");
const testimonialsContent = _("#contenido__testimonials");
const contactContent = _("#contenido__contact");
const socialContent = _("#contenido__social");
const doomContent = _("#contenido__doom");

//Iconos del sistema
// boton__terminal.addEventListener("click", () => {
//   const iconoterminalBox = new WinBox({
//     title: "terminal",
//     width: "70%",
//     height: "80%",
//     x: "center",
//     y: "center",
//     mount: terminalContent,
//     onfocus: function () {
//       this.setBackground("#121212");
//     },
//     onblur: function () {
//       this.setBackground("#121212");
//     },
//   });
// });
// boton__me.addEventListener("click", () => {
//   const iconoMeBox = new WinBox({
//     title: "Sobre Mi",
//     width: "30%",
//     height: "90%",
//     x: "6%",
//     y: "2%",
//     mount: meContent,
//     onfocus: function () {
//       this.setBackground("#121212");
//     },
//     onblur: function () {
//       this.setBackground("#121212");
//     },
//   });
// });
// boton__expskills.addEventListener("click", () => {
//   const iconoExpSkillBox = new WinBox({
//     title: "Experiencia y Skills",
//     width: "30%",
//     height: "80%",
//     x: "140",
//     y: "40",
//     mount: expskillsContent,
//     onfocus: function () {
//       this.setBackground("#121212");
//     },
//     onblur: function () {
//       this.setBackground("#121212");
//     },
//   });
// });
// boton__work.addEventListener("click", () => {
//   const iconoWorkBox = new WinBox({
//     title: "Trabajos",
//     width: "70%",
//     height: "80%",
//     x: "center",
//     y: "center",
//     mount: workContent,
//     onfocus: function () {
//       this.setBackground("#121212");
//     },
//     onblur: function () {
//       this.setBackground("#121212");
//     },
//   });
// });
// boton__testimonials.addEventListener("click", () => {
//   const iconoTestimonialBox = new WinBox({
//     title: "Testimonios",
//     width: "70%",
//     height: "80%",
//     x: "center",
//     y: "center",
//     mount: testimonialsContent,
//     onfocus: function () {
//       this.setBackground("#121212");
//     },
//     onblur: function () {
//       this.setBackground("#121212");
//     },
//   });
// });
// boton__contact.addEventListener("click", () => {
//   const iconoContactBox = new WinBox({
//     title: "Contacto",
//     width: "70%",
//     height: "80%",
//     x: "center",
//     y: "center",
//     mount: contactContent,
//     onfocus: function () {
//       this.setBackground("#121212");
//     },
//     onblur: function () {
//       this.setBackground("#121212");
//     },
//   });
// });
// boton__doom.addEventListener("click", () => {
//   const iconoDoomBox = new WinBox({
//     title: "DOOM",
//     width: "70%",
//     height: "80%",
//     x: "center",
//     y: "center",
//     mount: doomContent,
//     onfocus: function () {
//       this.setBackground("#121212");
//     },
//     onblur: function () {
//       this.setBackground("#121212");
//     },
//   });
// });


function abrirVentana(title, width, height, x, y, mount) {
  return new WinBox({
    title: title,
    width: isMobile() ? '100%' : width,
    height: isMobile() ? '100%' : height,
    x: isMobile() ? '0' : x,
    y: isMobile() ? '0' : y,
    mount: mount,
    onfocus: function () {
      this.setBackground("#121212");
    },
    onblur: function () {
      this.setBackground("#121212");
    },
  });
}

function isMobile() {
  return window.innerWidth <= 768; // Tamaño definido para la pantalla
}

boton__terminal.addEventListener("click", () => {
  abrirVentana("terminal", "70%", "80%", "center", "center", terminalContent);
});

boton__me.addEventListener("click", () => {
  abrirVentana("Sobre Mi", "40%", "90%", "6%", "2%", meContent);
});

boton__expskills.addEventListener("click", () => {
  abrirVentana("Experiencia y Skills", "30%", "80%", "140", "40", expskillsContent);
});

boton__work.addEventListener("click", () => {
  abrirVentana("Trabajos", "70%", "80%", "center", "center", workContent);
});

boton__testimonials.addEventListener("click", () => {
  abrirVentana("Testimonios", "30%", "80%", "center", "center", testimonialsContent);
});

boton__contact.addEventListener("click", () => {
  abrirVentana("Contacto", "20%", "70%", "center", "center", contactContent);
});
boton__social.addEventListener("click", () => {
  abrirVentana("Redes Sociales", "20%", "80%", "center", "center", socialContent);
});

boton__doom.addEventListener("click", () => {
  abrirVentana("DOOM", "90%", "90%", "center", "center", doomContent);
});
