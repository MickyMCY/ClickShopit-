const allProducts = [
  { id:1, nome:"Google Play 2500MT", img:"https://i.imgur.com/xGg3W2Z.png", price:2500, soldOut:false },
  { id:2, nome:"iTunes 2500MT", img:"https://i.imgur.com/fBBA4GI.png", price:2500, soldOut:false },
  { id:3, nome:"Netflix 1 mês 1000MT", img:"https://i.imgur.com/RxiGCxD.png", price:1000, soldOut:true },
  { id:4, nome:"Spotify 3 meses 3000MT", img:"https://i.imgur.com/6OfvEVi.png", price:3000, soldOut:false },
  { id:5, nome:"PSN 5000MT", img:"https://i.imgur.com/mptxBJL.png", price:5000, soldOut:false },
  { id:6, nome:"Steam 5000MT", img:"https://i.imgur.com/YzWdhNA.png", price:5000, soldOut:false },
  { id:7, nome:"Xbox 6000MT", img:"https://i.imgur.com/ATeY3N4.png", price:6000, soldOut:true },
  { id:8, nome:"Nintendo 5000MT", img:"https://i.imgur.com/xyKuGyK.png", price:5000, soldOut:false },
  { id:9, nome:"Google Play 5000MT", img:"https://i.imgur.com/xGg3W2Z.png", price:5000, soldOut:false },
  { id:10, nome:"Netflix 3 meses 2500MT", img:"https://i.imgur.com/RxiGCxD.png", price:2500, soldOut:false },
  { id:11, nome:"Steam 10000MT", img:"https://i.imgur.com/YzWdhNA.png", price:10000, soldOut:false },
  { id:12, nome:"AirPods 15000MT", img:"https://i.imgur.com/HZ7YGdw.png", price:15000, soldOut:false },
  { id:13, nome:"Teclado Gamer 7000MT", img:"https://i.imgur.com/fFesnpN.png", price:7000, soldOut:false },
  { id:14, nome:"Mouse RGB 3000MT", img:"https://i.imgur.com/Lp7dbpa.png", price:3000, soldOut:false },
  { id:15, nome:"Cartão PSN 12500MT", img:"https://i.imgur.com/mptxBJL.png", price:12500, soldOut:true }
];

function createCard(prod) {
  const div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `
    <img src="${prod.img}" alt="${prod.nome}" />
    <h3>${prod.nome}</h3>
    <div class="price">${prod.price} MT</div>
    ${prod.soldOut ? '<div class="sold-out">Esgotado</div>' : ''}
    <button ${prod.soldOut ? 'disabled' : `onclick="viewProd(${prod.id})"`}>Ver produto</button>
  `;
  return div;
}

function loadCarousel(id, items) {
  const cr = document.getElementById(id);
  items.forEach(prod => cr.appendChild(createCard(prod)));
}

window.onload = () => {
  loadCarousel("carousel1", allProducts.slice(0,4));
  loadCarousel("carousel2", allProducts.slice(4,8));
  loadCarousel("carousel3", allProducts.slice(8,12));
};

function viewProd(id) {
  location.href = `produto.html?id=${id}`;
}
