import { loadPage } from './utils.js';

// Función para cargar la página inicial
window.onload = () => {
    navigateTo('insumos');
};

// Función para navegar entre las páginas
window.navigateTo = (page) => {
    loadPage(page);
};


// funcionalidad para el sidebar
let sideBar = document.querySelector("#sideBar");
// JavaScript to toggle the sidebar
document.querySelector('#menuToggleButton').addEventListener('click', () => {    
  sideBar.classList.toggle('-translate-x-full');
});

document.addEventListener('click', (e) => {
  // Verificar si el clic fue fuera del sidebar
  if (!sideBar.contains(e.target) && !menuToggleButton.contains(e.target)) {
    // Si el sidebar está abierto y se clickea fuera, cerrarlo
    if (!sideBar.classList.contains('-translate-x-full')) {
      sideBar.classList.add('-translate-x-full');
    }
  }
})

