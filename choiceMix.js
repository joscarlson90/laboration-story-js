// VÄLJA MIX
function openMix(content) {
  clearContent(content);

  const title = document.createElement("h3");
  title.textContent = "Dags för blanddryck! Vad väljer du?";
  content.appendChild(title);

  const mixList = ["Tonic", "Sodavatten", "Fanta Lemon", "Tranbärsjuice"];

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

  shakeDrink(content);
}

function shakeDrink(content) {
  const shakerMove = document.createElement("div");
  const shakerImage = document.createElement("img");
  const shakerSound = document.createElement("audio");

  shakerMove.classList.add("shakerMove");
  shakerImage.classList.add("shakerImage");
  shakerImage.src = "assets/Shaker-silver 1.png";
  shakerSound.src = "sounds/shaker.mp3";

  shakerSound.play();

  shakerMove.style.display = "flex";
  shakerImage.classList.add("shake");
  shakerMove.append(shakerImage);
  content.append(shakerMove);

  setTimeout(() => {
    shakerMove.style.display = "none";
    shakerImage.classList.remove("shake");
    shakerSound.pause();

    const comment = showRandomComment();
    finalDrink(content, comment);
  }, 2000);
}

// Slumpmässig kommentar
const comments = [
  "Wow! Bra val!",
  "Hm.. Intressant kombo",
  "Fräscht! Perfekt för vilken dag som helst",
  "Den där slinker ner fort!",
  "Jasså du, spännande val!",
  "Ajdå, får se hur den smakar..",
];

function showRandomComment() {
  const randomNumber = Math.floor(Math.random() * comments.length);
  return comments[randomNumber];
}

// SLUTRESULTAT
function finalDrink(content, comment) {
  clearContent(content);

  const title = document.createElement("h3");
  title.textContent = "Slurk.. Din drink är klar!";
  title.classList.add("finalTitle");
  content.append(title);
  document.createElement(".randomComment").style.display = "block";

  const resultTextBox = document.createElement("div");
  resultTextBox.classList.add("finalTextBox");
  content.append(resultTextBox);
  document.querySelector(".randomComment").textContent = comment;

  // document.querySelector(".restartBtn").style.display = "inline-block";

  for (const [key, value] of Object.entries(yourDrink)) {
    const p = document.createElement("p");

    p.textContent = `${value}`;
    p.classList.add("finalItem");

    resultTextBox.append(p);

  }
  // restartGame();
}

// function restartGame() {
// const restartBtn = document.querySelector(".restartBtn");
//   restartBtn.addEventListener("click", main)
// }
// main();

