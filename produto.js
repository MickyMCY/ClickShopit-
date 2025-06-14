const params = new URLSearchParams(location.search);
const id = parseInt(params.get("id"));
const produtos = JSON.parse(localStorage.getItem("produtos"));
const produto = produtos.find(p => p.id === id);
const div = document.getElementById("product-detail");

div.innerHTML = `
  <h2>${produto.nome}</h2>
  <img src="${produto.img}" alt="${produto.nome}" style="width:100%; max-width:300px;" />
  <p>${produto.desc}</p>
  <button onclick="addToCart(${produto.id})">Adicionar ao carrinho</button>
  <button onclick="location.href='checkout.html'">Comprar agora</button>
`;

function addToCart(id) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
  carrinho.push(id);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Adicionado ao carrinho!");
}
