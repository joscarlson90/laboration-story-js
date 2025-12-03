// VÄLJA BAS
function openBase(content) {
  clearContent(content);

  const title = document.createElement("h3");
  const baseList = ["Gin", "Vodka", "Rom", "Tequila"];

  title.textContent = "Välj alkoholbas:";
  content.appendChild(title);

  for (const base of baseList) {
    const btn = document.createElement("button");
    btn.textContent = base;
    btn.addEventListener("click", () => selectedBase(base, content));
    btn.classList.add("startButton");
    content.appendChild(btn);
  }
}

function selectedBase(base, content) {
  yourDrink.base = base;
  openMix(content);
}
