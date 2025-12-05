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
  console.log("selectedBase called with", base);
  keepingDrink();

  let imgBaseChange = "";
  const ginImage = " ";
  const vodkaImage = " ";
  const romImage = " ";
  const tequilaImage = " ";

  yourDrink.base = base;

  let imgSrc = "";
  switch (base) {
    case "Gin":
      imgSrc = "assets/gin.png";
      break;
    case "Vodka":
      imgSrc = "assets/vodka.png";
      break;
    case "Rom":
      imgSrc = "assets/rom.png";
      break;
    case "Tequila":
      imgSrc = "assets/tequila.png";
      break;
  }

  let basePopUp = document.getElementById("baseBefore");
  if (!basePopUp) {
    basePopUp = document.createElement("img");
    basePopUp.classList.add("baseBefore");
    basePopUp.id = "baseBefore";
    document.body.append(basePopUp);
  }

  basePopUp.src = imgSrc;
  basePopUp.alt = base;

  openMix(content);
}

