window.addEventListener("DOMContentLoaded", main);

function main() {
  
  const welcomeText = document.querySelector(".welcomeText");
  const btn = document.querySelector(".startButton");
  const content = document.querySelector(".content");
  
  welcomeText.textContent = "Det är fredag - Klockan är slagen och det är dags för en drink!"

  btn.textContent = "Börja mixa";
  btn.addEventListener("click", () => openPlace(content));
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
  const dinnerSound = new Audio("sounds/dinnersound.mp3");
  const barSound = new Audio("sounds/barsound.mp3");
  const beachSound = new Audio("sounds/oceanwave.mp3");
  const cafeSound = new Audio("sounds/cafesound.mp3");

  yourDrink.place = room;

  switch (room) {
    case "Hemma":
      imgChange = "url('assets/home.jpeg')";
      dinnerSound.volume = 0.3;
      dinnerSound.play();
      break;
    case "Bar":
      imgChange = "url('assets/bar.jpeg')";
      barSound.volume = 0.3;
      barSound.play();
      break;
    case "Strand":
      imgChange = "url('assets/beach.jpg')";
      beachSound.volume = 0.3;
      beachSound.play();
      break;
    case "Café":
      imgChange = "url('assets/café.webp')";
      cafeSound.volume = 0.3;
      cafeSound.play();
      break;
  }

  document.body.style.backgroundImage = imgChange;
  document.body.style.margin = "0";
  document.body.style.height = "100vh";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  openGlass(content);
}
