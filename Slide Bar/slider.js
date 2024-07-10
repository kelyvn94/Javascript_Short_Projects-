const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");


let sliderNumber = 1; 

const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
    sliderNumber++;
}

const previousSlide = () => {
    slider.style.transform = `translateX(0px)`;
    sliderNumber = 1;
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    sliderNumber = 1;
}

const getLastSlide = () => {
    slider.style.transform = `translateX(${(length - 1) * 800}px)`;
    sliderNumber = 1;
}

right.addEventListener("click", ()=> {

    (sliderNumber < length) ? nextSlide() : previousSlide();
    
});
    
left.addEventListener("click", ()=> {

    (sliderNumber > 1) ? previousSlide() : nextSlide();

});