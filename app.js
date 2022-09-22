const lista = document.getElementById("lista");

const arrayLista = ["item 1", "item 2", "item 3"];

//se crea etiqueta template dentro del HTML donde se posiciona, va a tener la estructura que queremos modificar
//luego con el queryselector accedemos a su contenido como css , modificamos ese elemento, lo clonamos y lo agregamos al fragment
//una vez que tenemos el fragment lo agregamos a la lista

const template = document.querySelector("#template-li").content
const fragment = document.createDocumentFragment()


arrayLista.forEach(item =>{
  template.querySelector(".list span").textContent = item
  const clone = template.cloneNode(true)
  fragment.appendChild(clone)
})

lista.appendChild(fragment)