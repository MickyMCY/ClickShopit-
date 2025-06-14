const produtos = [
  { id: 1, nome: "Google Play - 10 USD", img: "https://i.imgur.com/xGg3W2Z.png", desc: "Gift card oficial Google Play para apps, jogos e muito mais." },
  { id: 2, nome: "iTunes - 10 USD", img: "https://i.imgur.com/fBBA4GI.png", desc: "Perfeito para Apple Music, App Store e iCloud." },
  { id: 3, nome: "Netflix - 1 mês", img: "https://i.imgur.com/RxiGCxD.png", desc: "Assinatura para curtir séries e filmes." },
  { id: 4, nome: "Spotify - 3 meses", img: "https://i.imgur.com/6OfvEVi.png", desc: "Música sem anúncios por 3 meses." },
  { id: 5, nome: "PSN Card - 20 USD", img: "https://i.imgur.com/mptxBJL.png", desc: "Use na PlayStation Store para jogos e DLCs." },
  { id: 6, nome: "Steam - 20 USD", img: "https://i.imgur.com/YzWdhNA.png", desc: "Saldo para comprar jogos no Steam." },
  { id: 7, nome: "Xbox - 25 USD", img: "https://i.imgur.com/ATeY3N4.png", desc: "Use na Microsoft Store para Xbox e PC." },
  { id: 8, nome: "Nintendo eShop - 20 USD", img: "https://i.imgur.com/xyKuGyK.png", desc: "Créditos para jogos no Nintendo Switch." },
  { id: 9, nome: "Google Play - 25 USD", img: "https://i.imgur.com/xGg3W2Z.png", desc: "Mais saldo para gastar com apps e jogos." },
  { id: 10, nome: "Netflix - 3 meses", img: "https://i.imgur.com/RxiGCxD.png", desc: "Três meses de streaming." },
  { id: 11, nome: "Steam - 50 USD", img: "https://i.imgur.com/YzWdhNA.png", desc: "Créditos para jogos premium." },
  { id: 12, nome: "AirPods", img: "https://i.imgur.com/HZ7YGdw.png", desc: "Fones de ouvido sem fio da Apple." },
  { id: 13, nome: "Teclado Gamer", img: "https://i.imgur.com/fFesnpN.png", desc: "Teclado iluminado com teclas mecânicas." },
  { id: 14, nome: "Mouse Gamer RGB", img: "https://i.imgur.com/Lp7dbpa.png", desc: "Mouse rápido com luzes RGB." },
  { id: 15, nome: "Cartão PSN - 50 USD", img: "https://i.imgur.com/mptxBJL.png", desc: "Para jogos grandes e lançamentos." }
];

const container = document.getElementById("product-list");

produtos.forEach(prod => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${prod.img}" alt="${prod.nome}" />
    <h3>${prod.nome}</h3>
    <button onclick="location.href='produto.html?id=${prod.id}'">Ver produto</button>
  `;
  container.appendChild(div);
});
