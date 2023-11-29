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
//     height: "70%",
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
// Función para detectar si es un dispositivo móvil
function isMobile() {
  return window.innerWidth <= 768; // Puedes ajustar el tamaño según tus necesidades
}

boton__home.addEventListener("click", () => {
  const width = isMobile() ? '100%' : '70%';
  const height = isMobile() ? '100%' : '70%';

  const iconoAboutBox = new WinBox({
    title: "Home",
    width: width,
    height: height,
    x: "center",
    y: "center",
    mount: homeContent,
    onfocus: function () {
      this.setBackground("#121212");
    },
    onblur: function () {
      this.setBackground("#121212");
    },
  });
});

// Ajustar el tamaño de la ventana al cambiar el tamaño de la ventana
window.addEventListener('resize', function() {
  const iconoAboutBox = WinBox.instances[0]; // Asegúrate de ajustar el índice si tienes más de una instancia

  if (iconoAboutBox) {
    const width = isMobile() ? '100%' : '70%';
    const height = isMobile() ? '100%' : '70%';
    iconoAboutBox.resize({ width: width, height: height });
  }
});
boton__me.addEventListener("click", () => {
  const iconoMeBox = new WinBox({
    title: "Sobre Mi",
    width: "70%",
    height: "70%",
    x: "center",
    y: "center",
    mount: meContent,
    onfocus: function () {
      this.setBackground("#121212");
    },
    onblur: function () {
      this.setBackground("#121212");
    },
  });
});
boton__expskills.addEventListener("click", () => {
  const iconoExpSkillBox = new WinBox({
    title: "Experiencia y Skills",
    width: "70%",
    height: "70%",
    x: "center",
    y: "center",
    mount: expskillsContent,
    onfocus: function () {
      this.setBackground("#121212");
    },
    onblur: function () {
      this.setBackground("#121212");
    },
  });
});
boton__work.addEventListener("click", () => {
  const iconoWorkBox = new WinBox({
    title: "Trabajos",
    width: "70%",
    height: "70%",
    x: "center",
    y: "center",
    mount: workContent,
    onfocus: function () {
      this.setBackground("#121212");
    },
    onblur: function () {
      this.setBackground("#121212");
    },
  });
});
boton__testimonials.addEventListener("click", () => {
  const iconoTestimonialBox = new WinBox({
    title: "Testimonios",
    width: "70%",
    height: "70%",
    x: "center",
    y: "center",
    mount: testimonialsContent,
    onfocus: function () {
      this.setBackground("#121212");
    },
    onblur: function () {
      this.setBackground("#121212");
    },
  });
});
boton__contact.addEventListener("click", () => {
  const iconoContactBox = new WinBox({
    title: "Contacto",
    width: "70%",
    height: "70%",
    x: "center",
    y: "center",
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#121212");
    },
    onblur: function () {
      this.setBackground("#121212");
    },
  });
});
boton__doom.addEventListener("click", () => {
  const iconoDoomBox = new WinBox({
    title: "DOOM",
    width: "70%",
    height: "70%",
    x: "center",
    y: "center",
    mount: doomContent,
    onfocus: function () {
      this.setBackground("#121212");
    },
    onblur: function () {
      this.setBackground("#121212");
    },
  });
});
