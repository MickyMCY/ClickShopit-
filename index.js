function createCard(prod) {
  const div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `
    <img src="${prod.img}" alt="${prod.nome}" />
    <h3>${prod.nome}</h3>
    <div class="price">${prod.price} MT</div>
    ${prod.soldOut ? '<div class="sold-out">Esgotado</div>' : ''}
    <button ${prod.soldOut ? 'disabled' : `onclick="viewProd(${prod.id})"`}>Ver produto</button>
  `;
  return div;
}

function loadCarousel(id, items) {
  const cr = document.getElementById(id);
  items.forEach(prod => cr.appendChild(createCard(prod)));
}

function viewProd(id) { location.href = `produto.html?id=${id}`; }

window.onload = () => {
  loadCarousel("carousel1", allProducts.slice(0,4));
  loadCarousel("carousel2", allProducts.slice(4,8));
  loadCarousel("carousel3", allProducts.slice(8,12));
};
