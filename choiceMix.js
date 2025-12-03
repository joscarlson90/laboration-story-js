// VÄLJA MIX
function openMix(content) {
  clearContent(content);

  const title = document.createElement("h3");
  const mixList = ["Tonic", "Sodavatten", "Fanta Lemon", "Tranbärsjuice"];

  title.textContent = "Dags för blanddryck! Vad väljer du?";
  content.appendChild(title);

  for (const mix of mixList) {
    const btn = document.createElement("button");
    btn.textContent = mix;
    btn.addEventListener("click", () => selectedMix(mix, content));
    btn.classList.add("startButton");
    content.appendChild(btn);
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
  const bubbleDiv = document.createElement("div");
  bubbleDiv.style.position = "relative";
  bubbleDiv.style.display = "inline-block";
  bubbleDiv.style.margin = "auto";

  //BUBBEL-BILD
  const bubbleImg = document.createElement("img");
  bubbleImg.src = "assets/bubble.png";
  bubbleImg.style.width = "250px";
  bubbleImg.style.marginLeft = "40px";
  bubbleDiv.appendChild(bubbleImg);

  //TEXT
  const bubbleText = document.createElement("div");
  bubbleText.style.position = "absolute";
  bubbleText.style.zIndex = "15";
  bubbleText.style.top = "25%";
  bubbleText.style.left = "22%";
  bubbleText.style.width = "90%";
  bubbleText.style.width = "200px";
  bubbleText.style.textAlign = "center";
  bubbleText.style.fontSize = "20px";
  bubbleText.style.color = "black";
  bubbleDiv.appendChild(bubbleText);

  document.body.appendChild(bubbleDiv);

  const finishDrinkImage = document.createElement("img");
  finishDrinkImage.src = "assets/finishdrink.png";
  finishDrinkImage.style.width = "200px";
  finishDrinkImage.style.marginLeft = "60%";

  document.body.appendChild(finishDrinkImage);

  const randomNumber = Math.floor(Math.random() * comments.length);
  bubbleText.innerText += ` ${comments[randomNumber]}`;
  return comments[randomNumber];


}

// SLUTRESULTAT
function finalDrink(content, comment) {
  clearContent(content);

  const title = document.createElement("h3");
  const resultTextBox = document.createElement("div");
  const randomComment = document.createElement("div");

  title.textContent = "Slurk.. Din drink är klar!";
  randomComment.textContent = comment;

  document.querySelector(".randomComment");

  title.classList.add("finalTitle");
  resultTextBox.classList.add("finalTextBox");
  randomComment.classList.add("randomComment");

  content.append(title, resultTextBox, randomComment);

  for (const [key, value] of Object.entries(yourDrink)) {
    const p = document.createElement("p");
    p.textContent = `${value}`;
    p.classList.add("finalItem");
    resultTextBox.append(p);
  }

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Sugen på en drink till?";
  restartBtn.classList.add("restartBtn");
  restartBtn.addEventListener("click", main);

  content.append(restartBtn);
}

function startNewGame() {
  // const content = document.querySelector(".content");
  // if (content) content.innerHTML = "";

  // const comment = document.querySelector(".randomComment");
  // if (comment) comment.remove();
  main();
}
