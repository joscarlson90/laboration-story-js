window.addEventListener("DOMContentLoaded", main);

function main() {
  const content = document.querySelector(".content");
  const btn = document.querySelector(".startButton");
  btn.addEventListener("click", () => openPlace(content));
  btn.textContent = "Börja mixa";
}

const yourDrink = {
  place: null,
  glass: null,
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
  const roomList = ["Hemma", "Bar", "Strand", "Café"];
  title.textContent = "Vart vill du dricka din drink?";
  content.append(title);

  for (const room of roomList) {
    const btn = document.createElement("button");
    btn.textContent = room;
    btn.addEventListener("click", () => selectedRoom(room, content));
    content.appendChild(btn);

    btn.classList.add("startButton");
  }
}

function selectedRoom(room, content) {
  let imgChange = "";

  yourDrink.place = room;

  switch (room) {
    case "Hemma":
      imgChange = "url('assets/home.webp')";
      break;
    case "Bar":
      imgChange = "url('assets/bar.webp')";
      break;
    case "Strand":
      imgChange = "url('assets/beach.jpg')";
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

  // const resultat = "Plats: " + room + " 📍";
  // const p = document.createElement("p");

  // p.textContent = resultat;
  // p.style.margin = "0";
  // p.style.paddingTop = "10px";
  // p.style.fontSize = "24px";
  // p.style.textAlign = "center";

  // document.body.appendChild(p);

  openGlass(content);
}


