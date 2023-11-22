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
const boton__github = _("#boton__github");
const boton__linkedin = _("#boton__linkedin");
const boton__instagram = _("#boton__instagram");
const boton__x = _("#boton__x");

// Variables del contenido
const homeContent = _("#contenido__home");
const meContent = _("#contenido__me");
const expskillsContent = _("#contenido__exp-skills");
const workContent = _("#contenido__work");
const testimonialsContent = _("#contenido__testimonials");
const contactContent = _("#contenido__contact");

//Iconos del sistema
boton__home.addEventListener("click", () => {
  const iconoAboutBox = new WinBox({
    title: "Home",
    width: "70%",
    height: "70%",
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
boton__me.addEventListener("click", () => {
  const iconoTechBox = new WinBox({
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
  const iconoWorkBox = new WinBox({
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
  const iconoContactBox = new WinBox({
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
  const iconoContactBox = new WinBox({
    title: "Trabajos",
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
    title: "Trabajos",
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
boton__github.addEventListener("click", () => {
  const iconoContactBox = new WinBox({
    title: "Github IsraDev",
    width: "70%",
    height: "70%",
    x: "center",
    y: "center",
    url: "https://github.com/isradev-git",
  });
});
boton__linkedin.addEventListener("click", () => {
  const iconoContactBox = new WinBox({
    title: "LinkedIn Israel Zamora",
    width: "70%",
    height: "70%",
    x: "center",
    y: "center",
    url: "https://www.linkedin.com/in/israel-zamora/",
  });
});
boton__instagram.addEventListener("click", () => {
  const iconoContactBox = new WinBox({
    title: "LinkedIn Israel Zamora",
    width: "70%",
    height: "70%",
    x: "center",
    y: "center",
    url: "https://www.instagram.com/netwave.3x/",
  });
});
boton__x.addEventListener("click", () => {
  const iconoContactBox = new WinBox({
    title: "LinkedIn Israel Zamora",
    width: "70%",
    height: "70%",
    x: "center",
    y: "center",
    url: "https://twitter.com/netwave_3x",
  });
});