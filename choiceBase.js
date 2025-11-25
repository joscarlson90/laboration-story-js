// VÄLJA BAS
function openBase(content) {
  clearContent(content);

  const title = document.createElement("h3");
  title.textContent =
    "Välj alkoholbas:";
  content.appendChild(title);

  const baseList = ["Gin", "Vodka", "Rom", "Tequila"];

  for (const base of baseList) {
    const btn = document.createElement("button");
    btn.textContent = base;
    btn.addEventListener("click", () => selectedBase(base, content));
    content.appendChild(btn);
    btn.classList.add("startButton");
  }
}

function selectedBase(base, content) {
  yourDrink.base = base;

  // const p = document.createElement("p");
  // const resultat = "Bas: " + base + " 🍸";

  // p.textContent = resultat;
  // p.style.margin = "0";
  // p.style.fontSize = "24px";
  // p.style.textAlign = "center";

  // document.body.appendChild(p);

  openMix(content);
}
