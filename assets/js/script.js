// goal is to have a photo real i can movewith the buttons

// existing on page
const canvasEl = $(".main-canvas");
const nextBut = $("#forwards");
const backBut = $("#backwards");
const middleBut = $("thisOne");
let imageEl = $("img");

// tobe used
let imageIndex = 0;



const pictures =
      ["../photos/20220106_094054.jpg",
       "../photos/DarkSynth.png",
       "../photos/ElonDickRiders.jpg",
       "../photos/FEClogo.png",
       "../photos/GiantIceCube.webp",
       "../photos/gitflow.jpg",
       "../photos/money.jpg",
       "../photos/The_Junto_Institute_Emotion_Wheel-1.jpeg",
       "../photos/Tux.svg.png",
      ];

function loadImage (imageFile) {
  imageEl.attr("src", imageFile);
}


let goNext = () => {
  imageEl.attr("src",pinctures[++inmageIndex]);
}
let goBack = () => {
  imageEl.attr("src",pinctures[--inmageIndex]);
}
let thisOne = () => {
// need to ahve picture grow to fill the page

}


//loadImage(pictures[0]);
nextBut.on("click", goNext);
backBut.on("click", goBack);
middleBut.on("click", thisOne);
