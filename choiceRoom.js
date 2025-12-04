window.addEventListener("DOMContentLoaded", main);

const content = document.querySelector(".content");

function clearContent(content) {
  content.innerHTML = "";
}

function keepingDrink() {
  localStorage.setItem("yourDrink", JSON.stringify(yourDrink));
}

function loadingDrink() {
  const saved = localStorage.getItem("yourDrink");
  if (saved) {
    Object.assign(yourDrink, JSON.parse(saved));
    return true;
  }
  return false;
}

function main() {
  const headerText = document.createElement("h1");
  const welcomeText = document.createElement("p");
  const btn = document.createElement("button");
  const content = document.createElement("div");

  headerText.classList.add("headerText");
  welcomeText.classList.add("welcomeText");
  btn.classList.add("startButton");
  content.classList.add("content");

  headerText.textContent = "Mixa Din Drink";
  welcomeText.textContent = "Slå dig ner, ta ett djupt andetag och gör dig redo för nu är det dags att blanda kvällens drink.\n Plocka fram glaset och låt ingredienserna mötas i perfekt harmoni!\n Oavsett om du föredrar något syrligt, fruktigt eller starkt\n så är detta stunden då du får skapa din egen magiska dryckeskombo!";
  btn.textContent = "Börja mixa";

  btn.addEventListener("click", () => {
    openPlace(content);
    btn.style.display = "none";
    welcomeText.style.display = "none";
  });

  document.body.append(headerText, welcomeText, btn, content);

  if (loadingDrink()) {
    console.log(yourDrink);
  }
}

const yourDrink = {
  place: null,
  glass: null,
  base: null,
  mix: null,
};

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
    btn.classList.add("startButton");
    content.appendChild(btn);
  }
}

function selectedRoom(room, content) {
  keepingDrink();

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
