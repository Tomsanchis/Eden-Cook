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
        id: 3,
        name: "Viande",
        quantity: "5",
        media: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1c2.png",
      },
      {
        id: 4,
        name: "Moutarde",
        quantity: "1",
        media: "https://shneiders.fr/187-home_default/moutarde-de-dijon.jpg",
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
        id: 5,
        name: "Oeuf",
        quantity: "20",
        media:
          "https://chefcostaud.com/wp-content/uploads/2021/01/oeuf.png.png",
      },
      {
        id: 6,
        name: "Tomate",
        quantity: "15",
        media: "http://pngimg.com/uploads/tomato/tomato_PNG12599.png",
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
      {
        id: 7,
        name: "Huile",
        quantity: "2",
        media:
          "https://static.wixstatic.com/media/98b8a3_44989801579e435c85f65989e597227f~mv2.png/v1/fill/w_232,h_244,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/amphore-pt.png",
      },
      {
        id: 8,
        name: "Salade",
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
        id: 9,
        name: "Soja",
        quantity: "8",
        media: "http://assets.stickpng.com/images/5c55c7318c21c9029a0f48af.png",
      },
      {
        id: 10,
        name: "Lait",
        quantity: "1",
        media: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1c4.png",
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
const ingredientflex = document.querySelector(".ingredient-flex");

const RenderIngredients = () => {
  for (let i = 0; i < recete.length; i++) {
    recete[i].addEventListener("click", () => {
      ingredientflex.innerHTML = "";
      db = [];
      // if (db.indexOf(Recipe[i].ingredients) !== -1) {
      //   db.push(...Recipe[i].ingredients);
      //   console.log(db);
      //   console.log(db[i].id);
      // }
      db.push(...Recipe[i].ingredients);
      console.log(db);
      db.map((ingredient) => {
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
