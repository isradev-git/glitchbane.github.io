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
const boton__home = _("#boton__home");
const boton__me = _("#boton__me");
const boton__expskills = _("#boton__exp-skills");
const boton__work = _("#boton__work");
const boton__testimonials = _("#boton__testimonials");
const boton__contact = _("#boton__contact");
const boton__doom = _("#boton__doom");
// const boton__ = _("#");

// Variables del contenido
const homeContent = _("#contenido__home");
const meContent = _("#contenido__me");
const expskillsContent = _("#contenido__exp-skills");
const workContent = _("#contenido__work");
const testimonialsContent = _("#contenido__testimonials");
const contactContent = _("#contenido__contact");
const doomContent = _("#contenido__doom");

//Iconos del sistema
// boton__home.addEventListener("click", () => {
//   const iconoHomeBox = new WinBox({
//     title: "Home",
//     width: "70%",
//     height: "80%",
//     x: "center",
//     y: "center",
//     mount: homeContent,
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
  return window.innerWidth <= 768; // Puedes ajustar el tamaño según tus necesidades
}

boton__home.addEventListener("click", () => {
  abrirVentana("Home", "70%", "80%", "center", "center", homeContent);
});

boton__me.addEventListener("click", () => {
  abrirVentana("Sobre Mi", "30%", "90%", "6%", "2%", meContent);
});

boton__expskills.addEventListener("click", () => {
  abrirVentana("Experiencia y Skills", "30%", "80%", "140", "40", expskillsContent);
});

boton__work.addEventListener("click", () => {
  abrirVentana("Trabajos", "70%", "80%", "center", "center", workContent);
});

boton__testimonials.addEventListener("click", () => {
  abrirVentana("Testimonios", "70%", "80%", "center", "center", testimonialsContent);
});

boton__contact.addEventListener("click", () => {
  abrirVentana("Contacto", "70%", "80%", "center", "center", contactContent);
});

boton__doom.addEventListener("click", () => {
  abrirVentana("DOOM", "70%", "80%", "center", "center", doomContent);
});