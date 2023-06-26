//слайдер
let offset = 0; //смещение от левого края
const slides = document.querySelector(".slides");

//слайдер вправо
const arrowRight = document.querySelector(".arrows_right");
const arrowHvrRight = document.querySelector(".arrows_hvr_right");
arrowRight.addEventListener("mouseover", () => {
  arrowRight.style.display = "none";
  arrowHvrRight.style.opacity = 100 + "%";
});
arrowRight.addEventListener("mouseout", () => {
  arrowRight.style.display = "block";
  arrowHvrRight.style.opacity = 0;
});

arrowHvrRight.addEventListener("click", () => {
  offset = offset + 100;
  if (offset > 200) {
    offset = 0;
  }
  slides.style.left = -offset + "vw";
});

//слайдер влево
const arrowLeft = document.querySelector(".arrows_left");
const arrowHvrLeft = document.querySelector(".arrows_hvr_left");
arrowLeft.addEventListener("mouseover", () => {
  arrowLeft.style.display = "none";
  arrowHvrLeft.style.opacity = 100 + "%";
});
arrowLeft.addEventListener("mouseout", () => {
  arrowLeft.style.display = "block";
  arrowHvrLeft.style.opacity = 0;
});

document.querySelector(".arrows_hvr_left").addEventListener("click", () => {
  offset = offset - 100;
  if (offset < 0) {
    offset = 200;
  }
  slides.style.left = -offset + "vw";
});

//Пагинация Jun

const junPgnTwo = document.querySelector(".jun_pgn_two");
junPgnTwo.addEventListener("click", () => {
  offset = offset + 100;
  slides.style.left = -offset + "vw";
});

const junPgnThree = document.querySelector(".jun_pgn_three");
junPgnThree.addEventListener("click", () => {
  offset = offset + 200;
  slides.style.left = -offset + "vw";
});

//Пагинация Specialist

const specPgnTwo = document.querySelector(".spec_pgn_one");
specPgnTwo.addEventListener("click", () => {
  offset = offset - 100;
  slides.style.left = -offset + "vw";
});

const specPgnThree = document.querySelector(".spec_pgn_three");
specPgnThree.addEventListener("click", () => {
  offset = offset + 100;
  slides.style.left = -offset + "vw";
});

//Пагинация Manager

const managePgnTwo = document.querySelector(".manage_pgn_one");
managePgnTwo.addEventListener("click", () => {
  offset = offset - 200;
  slides.style.left = -offset + "vw";
});

const managePgnThree = document.querySelector(".manage_pgn_two");
managePgnThree.addEventListener("click", () => {
  offset = offset - 100;
  slides.style.left = -offset + "vw";
});

//Автопереключение слайдов
let timer = setInterval(() => {
  offset = offset + 100;
  if (offset > 200) {
    offset = 0;
  }
  slides.style.left = -offset + "vw";
}, 7000);
