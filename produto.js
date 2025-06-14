const params = new URLSearchParams(location.search);
const id = parseInt(params.get("id"));
const prod = allProducts.find(p => p.id === id);
const div = document.getElementById("product-detail");
div.innerHTML = `
  <div class="product-detail">
    <img src="${prod.img}" alt="${prod.nome}" />
    <h2>${prod.nome}</h2>
    <div class="price">${prod.price} MT</div>
    ${prod.soldOut ? '<div class="sold-out">Esgotado</div>' : ''}
    <p>Descrição breve do produto vai aqui. Pode personalizar.</p>
    <button onclick="addCart(${prod.id})" ${prod.soldOut ? 'disabled' : ''}>Adicionar ao carrinho</button>
    <button onclick="goCheckout()" ${prod.soldOut ? 'disabled' : ''}>Comprar agora</button>
  </div>`;
function addCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")||"[]");
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Adicionado ao carrinho!");
}
function goCheckout() { location.href="checkout.html"; }
