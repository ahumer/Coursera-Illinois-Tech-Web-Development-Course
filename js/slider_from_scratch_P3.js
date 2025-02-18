let slideIndex = 1;
let sliderInterval;
let flagInterval;
let flag = false;

showSlides(slideIndex);
startSlider();


function startSlider() {
  sliderInterval = setInterval(() => {
  slideIndex++;
  showSlides(slideIndex); 
}, 4000);
}

function stopSlider() {
  clearInterval(sliderInterval); // Stop the automatic slider
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i=0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Pause the slider when hovering
const containers = document.getElementsByClassName("slidershow_container");
containers[0].addEventListener("mouseenter",stopSlider);
containers[0].addEventListener("mouseleave", startSlider);