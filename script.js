window.addEventListener("DOMContentLoaded", main);

function main() {
  const content = document.getElementById("content");
  const startButton = document.getElementById("startButton");

  startButton.addEventListener("click", () => openPlace(content));
}

const yourDrink = {
  place: null,
  glass: null,
  //   ice: null,
  base: null,
  mix: null,
};

function clearContent(container) {
  container.innerHTML = " ";
}

// VÄLJA RUM
function openPlace(content) {
  clearContent(content);

  const title = document.createElement("h3");
  title.textContent = "Vad är din känsla idag? Vart vill du dricka din drink?";
  content.appendChild(title);

  const roomList = ["Hemma", "Bar", "Strand", "Café"];

  for (const room of roomList) {
    const btn = document.createElement("button");
    btn.textContent = room;
    btn.addEventListener("click", () => selectedRoom(room, content));
    content.appendChild(btn);
  }
}

function selectedRoom(room, content) {
  let imgChange = "";

  yourDrink.place = room;
  let title = document.createElement("p");
  title.textContent = "Härligt! Du valde:" + " " + room;
  content.appendChild(title);

  switch (room) {
    case "Hemma":
      imgChange = "url('assets/home.webp')";
      break;
    case "Bar":
      imgChange = "url('assets/bar.webp')";
      break;
    case "Strand":
      imgChange = "url('assets/beach.webp')";
      break;
    case "Café":
      imgChange = "url('assets/café.webp')";
      break;
  }

  document.body.style.backgroundImage = imgChange;
  document.body.style.margin = "0";
  document.body.style.height = "100vh";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  console.log("Härligt! Du valde:" + " " + room);
  openGlass(content);
}

// VÄLJA GLAS
function openGlass(content) {
  clearContent(content);

  const title = document.createElement("h3");
  title.textContent = "Nu är det dags att välja vilket glas du vill ha:";
  content.appendChild(title);

  const glassList = ["Highball", "Lowball", "Cocktailglas", "Margaritaglas"];

  for (const glass of glassList) {
    const btn = document.createElement("button");
    btn.textContent = glass;
    
    btn.addEventListener("click", () => selectedGlass(glass, content));
    content.appendChild(btn);


  }
}

function selectedGlass(glass, content) {
  yourDrink.glass = glass;
  let title = document.createElement("p");
  title.textContent = "Najs! " + glass + ", bra val!";
  content.appendChild(title);
  console.log("Najs! " + glass + ", bra val!");
  openBase(content);
}

// VÄLJA BAS
function openBase(content) {
  clearContent(content);

  const title = document.createElement("h3");
  title.textContent =
    "För att blanda en riktigt god drink behöver vi börja med en alkoholbas. Välj en vettja!";
  content.appendChild(title);

  const baseList = ["Gin", "Vodka", "Rom", "Tequila"];

  for (const base of baseList) {
    const btn = document.createElement("button");
    btn.textContent = base;
    btn.addEventListener("click", () => selectedBase(base, content));
    content.appendChild(btn);
  }
}

function selectedBase(base, content) {
  yourDrink.base = base;
  const title = document.createElement("p");
  title.textContent = base + ", gott!";
  content.appendChild(title);

  console.log(base + ", gott!");
  openMix(content);
}

// VÄLJA MIX
function openMix(content) {
  clearContent(content);

  const title = document.createElement("h3");
  title.textContent = "Dags för blanddryck! Vad väljer du?";
  content.appendChild(title);

  const mixList = ["Tonic", "Limejuice", "Fanta Lemon", "Tranbär", "Coca Cola"];

  for (const mix of mixList) {
    const btn = document.createElement("button");
    btn.textContent = mix;
    btn.addEventListener("click", () => selectedMix(mix, content));
    content.appendChild(btn);
  }
}

function selectedMix(mix, content) {
  yourDrink.mix = mix;
  let title = document.createElement("p");
  title.textContent = mix + " , blir riktigt god att blanda med!";
  content.appendChild(title);

  console.log(mix + ", bra att blanda med.");
  finalDrink(content);
}

// SLUTRESULTAT
function finalDrink(content) {
  clearContent(content);

  const title = document.createElement("h3");
  title.textContent = "Slurk.. Din drink är klar!";
  content.append(title);

  for (const [key, value] of Object.entries(yourDrink)) {
    const p = document.createElement("p");
    p.textContent = `${value}`;
    content.appendChild(p);
  }
}

// function openIce() {
//   clearContent(content, startButton);

//   const title = document.createElement("h2");
//   title.textContent = "Vissa vill ha is, vissa inte. Vad vill du?";
//   content.appendChild(title);

//   const ice = true;
// }
// //if sats
