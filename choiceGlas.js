// VÄLJA GLAS
const glassList = [
  {name: "Highball", img: "assets/highballglass.webp"},
  {name: "Lowball", img: "assets/lowballglass.webp.jpg"},
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
    const img = document.createElement("img");

    img.src = glass.img;
    img.alt = glass.name;

    btn.classList.add("glassButton");
    btn.appendChild(img);

    btn.addEventListener("click", () => {
      yourDrink.glass = glass.name;
      openBase(content);
      
    });
    content.appendChild(btn);
  })
}

function selectedGlass(glass, content) {
  yourDrink.glass = glass;
  keepingDrink();
  openBase(content);
}
