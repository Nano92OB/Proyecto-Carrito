const btnAumentar = document.querySelector(".btn-info");
const span = document.getElementById("contador-span");
const btnDisminuir = document.querySelector(".btn-danger");
let contador = 0;

// esta manera seria una manera con el evento click
/*
btnAumentar.addEventListener("click", () => {
  console.log("diste click en aumentar");
  contador++;
  span.textContent = contador;
});

btnDisminuir.addEventListener("click", () => {
  console.log("diste click en disminuir");
  contador--;
  span.textContent = contador;
});
*/

// aqui abajo vamos a ver como se puede hacer lo mismo que arriba, pero con Event Delegation

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-info")) {
    contador++;
    span.textContent = contador;
  }

  if (e.target.classList.contains("btn-danger")) {
    contador--;
    span.textContent = contador;
  }
});
