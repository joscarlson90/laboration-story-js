// VÄLJA MIX
function openMix(content) {
  clearContent(content);

  const title = document.createElement("h3");
  title.textContent = "Dags för blanddryck! Vad väljer du?";
  content.appendChild(title);

  const mixList = ["Tonic", "Limejuice", "Fanta Lemon", "Coca Cola"];

  for (const mix of mixList) {
    const btn = document.createElement("button");
    btn.textContent = mix;
    btn.addEventListener("click", () => selectedMix(mix, content));
    content.appendChild(btn);

    btn.classList.add("startButton");
  }
}

function selectedMix(mix, content) {
  yourDrink.mix = mix;

  const p = document.createElement("p");
  const resultat = "Blanddryck: " + mix + " 🧃";

  p.textContent = resultat;
  p.style.margin = "0";
  p.style.fontSize = "24px";
  p.style.textAlign = "center";

  document.body.appendChild(p);

  shakeDrink(content);
}

function shakeDrink(content) {
  const shakerMove = document.getElementById("shakerMove");
  const shakerImage = document.getElementById("shakerImage");
  const shakerSound = document.getElementById("shakerSound");

  shakerMove.style.display = "flex";

  shakerImage.classList.remove("shake");
  void shakerImage.offsetWidth;
  shakerImage.classList.add("shake");

  shakerSound.currentTime = 0;
  const play = shakerSound.play().catch(() => console.log("Kunde ej"));

  setTimeout(() => {
    shakerImage.classList.remove("shake");
    shakerMove.style.display = "none";
    shakerSound.pause();
    finalDrink(content);
  }, 2000);
}

// SLUTRESULTAT
function finalDrink(content) {
  clearContent(content);

  const title = document.createElement("h3");
  title.textContent = "Slurk.. Din drink är klar!";
  title.classList.add("finalTitle");

  content.append(title);

  const resultTextBox = document.createElement("div"); //nej
  resultTextBox.classList.add("finalTextBox"); // texten kvar, rutan försvann
  content.appendChild(resultTextBox);

  for (const [key, value] of Object.entries(yourDrink)) {
    const p = document.createElement("p");

    p.textContent = `${value}`;
    p.classList.add("finalItem");

    resultTextBox.appendChild(p);
  }
}
