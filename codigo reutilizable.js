
const  arrayElement = ["item 1", "item 2", "item 3"];

arrayElement.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item; 

  lista.appendChild(li);
});    //esta es una opcion para poder hacerlo, abajo va la otra opcion

arrayElement.forEach(item =>{
    lista.innerHTML += `<li>${item}</li>`
}) 

//con fragment evitamos el reflow, mas lineas de codigo pero mejor
//se almacena dentro de fragment de js, se guarda la estructura


const lista = document.getElementById("lista");

// parte de fragment para el reflow

const arrayItem = ["item 1", "item 2", "item 3"];

//con fragment evitamos el reflow, mas lineas de codigo pero mejor
//se almacena dentro de fragment de js, se guarda la estructura

const fragment = document.createDocumentFragment(); // se crea un fragmento dentro de la constante
/* const fragment = new DocumentFragment */ // esta es lo mismo que la de arriba
// hacemos un ciclo forEach para cada item del array
arrayItem.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
 //creamos una constante que va a ser el 1er nodo y le agregamos el valor de fragment
  const childNode = fragment.firstChild;
  
  // agregamos 1ero el childNode de fragment como 1ero
  fragment.insertBefore(li, childNode);
});

lista.appendChild(fragment);


/*
const fragment = document.createDocumentFragment()
arrayLista.forEach(item =>{
  const li = document.createElement("li")
  li.classList.add("lista")
  const b = document.createElement("b")
  b.textContent = "Nombre: "
  li.appendChild(b)
  const span = document.createElement("span")
  span.classList.add("text-danger")
  span.textContent = item
  li.appendChild(b)
  li.appendChild (span)
  fragment.appendChild(li)
})

lista.appendChild(fragment)  */

// innerHTML no permite los fragment, por eso creamos un let con nombre fragment que sea string vacio
let fragmento = "";
// usamos los template string que seria lo que esta concatenado a el fragment con el " += `` "
arrayLista.forEach((item) => {
  fragment += `
  <li class="list">
  <b>Nombre: </b> <span class="text-danger">${item}</span>
</li>
  `;
});

lista.innerHTML = fragmento