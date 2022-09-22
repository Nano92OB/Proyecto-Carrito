const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  const res = await fetch("api.json");
  const data = await res.json();
  // console.log(data)
  pintarCards(data);
};

const pintarCards = (data) => {
  //usamos forEach porque en el json estan dentro de un arreglo, cambiaria si fuera coleccion de objetos
  data.forEach((producto) => {
    templateCard.querySelector("h5").textContent = producto.title;
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
    templateCard.querySelector('.btn-dark').dataset.id = producto.id
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
};
