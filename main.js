//*****\\ Menu Burger //*****\\

const burger = document.querySelector(".burger");
const Menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  Menu.classList.toggle("hide");
});

//*****\\ Swipper //*****\\

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//*****\\ Recettes && Ingredients //*****\\

let Recipe = [
  {
    id: 1,
    name: "Avocat aux crevettes sautées",
    description:
      "Un avocat aux crevettes classique ? Non, non, dans cette recette les crevettes sont rapidement sautées, pour plus de gout, et ensuite mélangées à une mayonnaise au curry.",
    media: "http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png",
    ingredients: [
      { id: 1, name: "Sauce Soja", quantity: "1" },
      { id: 2, name: "Poulet", quantity: "3" },
    ],
  },
  {
    id: 2,
    name: "Bouchées montagnardes",
    description:
      "Petits canapés simple à faire et délicieux, ces bouchées champignons-saucisse-fromage iront parfaitement pour un apéritif dinatoire par exemple, ou même une entrée conviviale.",
    media: "http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png",
    ingredients: [
      { id: 1, name: "Viande", quantity: "5" },
      { id: 2, name: "Moutarde", quantity: "1" },
    ],
  },
  {
    id: 3,
    name: "Boeuf bourguignon",
    description:
      "Le boeuf bourguignon est un des plats traditionnels de la cuisine Française, ce sont des morceaux de viande de boeuf qu'on fait cuire longtemps, avec de la poitrine fumée, des oignons, carottes et champignons, dans du vin rouge.",
    media: "http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png",
    ingredients: [
      { id: 1, name: "Oeuf", quantity: "20" },
      { id: 2, name: "Tomate", quantity: "15" },
    ],
  },
  {
    id: 4,
    name: "Civet de lapin à la normande",
    description:
      "Pour cette version du civet de lapin, la viande est cuite, avec les os, dans du cidre où elle a marinée une nuit. La sauce est formée ensuite avec le jus de cuisson et de la crème.",
    media: "http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png",
    ingredients: [
      { id: 1, name: "Huile", quantity: "2" },
      { id: 2, name: "salade", quantity: "5" },
    ],
  },
  {
    id: 5,
    name: "Tarte fine courgettes-menthe",
    description:
      "Dans cette tarte sur une pâte feuilletée, des rondelles de courgettes sautées et une garniture à la menthe et à la feta. Vous verrez que l'association courgette et menthe donne un petit goût frais très agréable.",
    media: "http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png",
    ingredients: [
      { id: 1, name: "Soja", quantity: "8" },
      { id: 2, name: "Lait", quantity: "1" },
    ],
  },
];
const RecipeRender = () => {
  Recipe.map((data) => {
    const containerdiv = document.querySelector(".flex-recete");
    const divrecetes = document.createElement("div");
    divrecetes.classList.add("recete");
    containerdiv.appendChild(divrecetes);
    const div = document.createElement("div");
    divrecetes.appendChild(div);
    const img = document.createElement("img");
    img.src = data.media;
    div.appendChild(img);
    img.alt = data.name;
    const h3 = document.createElement("h3");
    h3.textContent = data.name;
    div.appendChild(h3);
    const seconddiv = document.createElement("div");
    divrecetes.appendChild(seconddiv);
    const description = document.createElement("p");
    description.textContent = data.description;
    seconddiv.appendChild(description);

    //*****\\ Blog //*****\\
  });
};

RecipeRender();

const RenderIngredients = () => {
  const recete = document.querySelectorAll(".recete");
  for (let i = 0; i < recete.length; i++) {
    recete[i].addEventListener("click", () => {
      console.log(Recipe[i].ingredients);
    });
  }
};

RenderIngredients();
