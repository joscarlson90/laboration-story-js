// VÄLJA GLAS
const glassList = [
  {name: "Highball", img: "assets/highballglass.webp"},
  {name: "Lowball", img: "assets/lowballglass.webp"},
  {name: "Margaritaglas", img: "assets/margaritaglas.jpg"},
  {name: "Cocktailglas", img: "assets/cocktailglas.jpg"}
];

function openGlass(content) {
  clearContent(content);

  const title = document.createElement("h3");
  title.textContent = "Välj typ av glas:";
  content.appendChild(title);

  glassList.forEach(glass => {
    const btn = document.createElement("button");
    btn.classList.add("glassButton");

    const img = document.createElement("img");
    img.src = glass.img;
    img.alt = glass.name;

    btn.appendChild(img);

    btn.addEventListener("click", () => {
      yourDrink.glass = glass.name;
      openBase(content);
      
    });
    content.appendChild(btn);
  })
}

  // for (const glass of glassList) {
  //   const btn = document.createElement("button");
  //   btn.textContent = glass;

  //   btn.addEventListener("click", () => selectedGlass(glass, content));
  //   content.appendChild(btn);
  //   btn.classList.add("startButton");

function selectedGlass(glass, content) {
  yourDrink.glass = glass;

  // const p = document.createElement("p");
  // const resultat = "Glas: " + glass + " 🥃";

  // p.textContent = resultat;
  // p.style.margin = "0";
  // p.style.fontSize = "24px";
  // p.style.textAlign = "center";
 
  // document.body.appendChild(p);

  openBase(content);
}
