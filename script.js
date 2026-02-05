// slide show
const slideImages = document.getElementById("slide-images");
const images = document.querySelectorAll("#slide-images img");

let currentIndex = 0;

const changeImage = () => {
  if (currentIndex >= images.length) currentIndex = 0;
  else if (currentIndex < 0) currentIndex = images.length - 1;

  slideImages.style.transform = `translateX(${-currentIndex * 100}%)`;
};

const slideshow = () => {
  currentIndex++;

  changeImage();
};

let intervalId = setInterval(slideshow, 2000);
