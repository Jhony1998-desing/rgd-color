// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Valores iniciales para definir el color RGB.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

const body = document.querySelector("body")
// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
  const nuevoColor = "rgb(" + rojo + "," + verde + "," + azul + ")"
 body.style.backgroundColor = nuevoColor
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value
actualizarColor(rojo, verde, azul)
textoRojo.textContent = e.target.value
});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('change', (e) => {
  verde = e.target.value
  actualizarColor(rojo, verde, azul)
textoVerde.textContent = e.target.value
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value
  actualizarColor(rojo, verde, azul)
textoAzul.textContent = e.target.value
});