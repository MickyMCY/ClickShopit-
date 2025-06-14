const produtos = [
  { id: 1, nome: "Google Play - 10 USD" },
  { id: 2, nome: "iTunes - 10 USD" },
  { id: 3, nome: "Netflix - 1 mês" },
  { id: 4, nome: "Spotify - 3 meses" },
  { id: 5, nome: "PSN Card - 20 USD" },
  { id: 6, nome: "Steam - 20 USD" },
  { id: 7, nome: "Xbox - 25 USD" },
  { id: 8, nome: "Nintendo eShop - 20 USD" },
  { id: 9, nome: "Google Play - 25 USD" },
  { id: 10, nome: "Netflix - 3 meses" },
  { id: 11, nome: "Steam - 50 USD" },
  { id: 12, nome: "AirPods" },
  { id: 13, nome: "Teclado Gamer" },
  { id: 14, nome: "Mouse Gamer RGB" },
  { id: 15, nome: "Cartão PSN - 50 USD" }
];

localStorage.setItem("produtos", JSON.stringify(produtos));
const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
const lista = document.getElementById("cart-items");

carrinho.forEach(id => {
  const prod = produtos.find(p => p.id === id);
  const item = document.createElement("p");
  item.textContent = prod.nome;
  lista.appendChild(item);
});

document.getElementById("checkout-form").addEventListener("submit", e => {
  e.preventDefault();
  localStorage.removeItem("carrinho");
  document.getElementById("confirmation").classList.remove("hidden");
});
