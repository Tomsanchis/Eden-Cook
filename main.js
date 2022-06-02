//*****\\ Menu Burger //*****\\

const burger = document.querySelector(".burger");
const Menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  Menu.classList.toggle("hide");
});

//*****\\ Recettes && Ingredients //*****\\

let Recipe = [
  {
    id: 1,
    name: "Avocat aux crevettes sautées",
    description:
      "Un avocat aux crevettes classique ? Non, non, dans cette recette les crevettes sont rapidement sautées, pour plus de gout, et ensuite mélangées à une mayonnaise au curry.",
    media: "img/5842996fa6515b1e0ad75add.png",
    ingredients: [
      {
        id: 1,
        name: "Sauce Soja",
        quantity: "1",
        media:
          "https://i.pinimg.com/originals/10/90/37/109037bf0d194eca1933fbac504a20ef.png",
      },
      {
        id: 2,
        name: "Poulet",
        quantity: "3",
        media: "http://assets.stickpng.com/images/580b57fbd9996e24bc43c0ce.png",
      },
    ],
  },
  {
    id: 2,
    name: "Bouchées montagnardes",
    description:
      "Petits canapés simple à faire et délicieux, ces bouchées champignons-saucisse-fromage iront parfaitement pour un apéritif dinatoire par exemple, ou même une entrée conviviale.",
    media: "img/5842996fa6515b1e0ad75add.png",
    ingredients: [
      {
        id: 1,
        name: "Viande",
        quantity: "5",
        media: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1c1.png",
      },
      {
        id: 2,
        name: "Moutarde",
        quantity: "1",
        media:
          "https://img1.freepng.fr/20180630/fqg/kisspng-aioli-blue-cheese-dressing-sour-cream-gravy-crme-mustard-sauce-5b374680a033a5.2059664315303491846562.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Boeuf bourguignon",
    description:
      "Le boeuf bourguignon est un des plats traditionnels de la cuisine Française, ce sont des morceaux de viande de boeuf qu'on fait cuire longtemps, avec de la poitrine fumée, des oignons, carottes et champignons, dans du vin rouge.",
    media: "img/5842996fa6515b1e0ad75add.png",
    ingredients: [
      {
        id: 1,
        name: "Oeuf",
        quantity: "20",
        media: "http://assets.stickpng.com/images/580b57fbd9996e24bc43c108.png",
      },
      {
        id: 2,
        name: "Tomate",
        quantity: "15",
        media:
          "https://img1.freepng.fr/20171221/hbe/tomato-png-clipart-picture-5a3c47e811b546.8509135715139000080725.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Civet de lapin à la normande",
    description:
      "Pour cette version du civet de lapin, la viande est cuite, avec les os, dans du cidre où elle a marinée une nuit. La sauce est formée ensuite avec le jus de cuisson et de la crème.",
    media: "img/5842996fa6515b1e0ad75add.png",
    ingredients: [
      { id: 1, name: "Huile", quantity: "2" },
      {
        id: 2,
        name: "salade",
        quantity: "5",
        media:
          "https://www.plaineduroussillon.com/wp-content/uploads/2017/06/Salade.png",
      },
    ],
  },
  {
    id: 5,
    name: "Tarte fine courgettes-menthe",
    description:
      "Dans cette tarte sur une pâte feuilletée, des rondelles de courgettes sautées et une garniture à la menthe et à la feta. Vous verrez que l'association courgette et menthe donne un petit goût frais très agréable.",
    media: "img/5842996fa6515b1e0ad75add.png",
    ingredients: [
      {
        id: 1,
        name: "Soja",
        quantity: "8",
        media: "http://assets.stickpng.com/images/5c55c6ee8c21c9029a0f48aa.png",
      },
      {
        id: 2,
        name: "Lait",
        quantity: "1",
        media: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1c6.png",
      },
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

    const wrapper = document.querySelector(".swiper-wrapper");
    const slides = document.createElement("div");
    slides.classList.add("swiper-slide");
    wrapper.appendChild(slides);
    const divblog = document.createElement("div");
    divblog.classList.add("blog");
    slides.appendChild(divblog);
    const divblogcontainer = document.createElement("div");
    divblog.appendChild(divblogcontainer);
    const imgblog = document.createElement("img");
    imgblog.src = data.media;
    imgblog.alt = data.name;
    divblogcontainer.appendChild(imgblog);
    const h3blog = document.createElement("h3");
    h3blog.textContent = data.name;
    divblogcontainer.appendChild(h3blog);
    const divblogcontainer2 = document.createElement("div");
    divblog.appendChild(divblogcontainer2);
    const descriptionblog = document.createElement("p");
    descriptionblog.textContent = data.description;
    divblogcontainer2.appendChild(descriptionblog);
  });
};

RecipeRender();

let db = [];
const recete = document.querySelectorAll(".recete");

const RenderIngredients = () => {
  for (let i = 0; i < recete.length; i++) {
    recete[i].addEventListener("click", () => {
      db.push(...Recipe[i].ingredients);
      console.log(db);
      db.map((ingredient) => {
        const ingredientflex = document.querySelector(".ingredient-flex");
        const divingredient = document.createElement("div");
        divingredient.classList.add("ingredients");
        ingredientflex.appendChild(divingredient);
        const h4 = document.createElement("h4");
        h4.textContent = ingredient.name;
        divingredient.appendChild(h4);
        const image = document.createElement("img");
        image.src = ingredient.media;
        image.alt = ingredient.name;
        divingredient.appendChild(image);
        const quantiycount = document.createElement("p");
        quantiycount.textContent = ingredient.quantity;
        divingredient.appendChild(quantiycount);
      });
    });
  }
};

RenderIngredients();

//*****\\ Swipper //*****\\

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
