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
      ["./assets/photos/20220106_094054.jpg",
       "./assets/photos/DarkSynth.png",
       "./assets/photos/ElonDickRiders.jpg",
       "./assets/photos/FEClogo.png",
       "./assets/photos/GiantIceCube.webp",
       "./assets/photos/gitflow.jpg",
       "./assets/photos/money.jpg",
       "./assets/photos/The_Junto_Institute_Emotion_Wheel-1.jpeg",
       "./assets/photos/Tux.svg.png",
       "./assets/photos/space-dogs.jpg",
      ];

function loadImage (imageFile) {
  imageEl.attr("src", imageFile);
  imageEl.addClass("fit-picture");
  return 0;
}


let goNext = () => {
  imageIndex = (imageIndex === pictures.length-1)? 0 : ++imageIndex;
  imageEl.attr("src",pictures[imageIndex]);
}
let goBack = () => {
  imageIndex = (imageIndex !== 0)? --imageIndex : pictures.length - 1;
  imageEl.attr("src",pictures[imageIndex]);
}
let thisOne = () => {
// need to ahve picture grow to fill the page

}


loadImage(pictures[0]);
nextBut.on("click", goNext);
backBut.on("click", goBack);
middleBut.on("click", thisOne);
