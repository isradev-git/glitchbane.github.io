function mostrarContenido(skill) {
  // Oculta todos los divs
  document.getElementById("general").classList.add("hidden");
  document.getElementById("frontend").classList.add("hidden");
  document.getElementById("backend").classList.add("hidden");
  document.getElementById("diseno").classList.add("hidden");

  // Muestra el div correspondiente
  document.getElementById(skill).classList.remove("hidden");
}
