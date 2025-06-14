const cart = JSON.parse(localStorage.getItem("cart")||"[]");
const firstLoad = document.getElementById("cart-items");
cart.forEach(id => {
  const p = document.createElement("p");
  const prod = allProducts.find(p=>p.id===id);
  p.textContent = `${prod.nome} — ${prod.price} MT`;
  firstLoad.appendChild(p);
});
document.getElementById("checkout-form").addEventListener("submit", e=> {
  e.preventDefault();
  localStorage.removeItem("cart");
  document.getElementById("confirmation").classList.remove("hidden");
});
