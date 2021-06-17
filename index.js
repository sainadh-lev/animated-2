
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const heading = document.querySelector(".heading");
const sneaker = document.querySelector(".sneaker");

container.addEventListener("mousemove",(e) => {
   const xAxis = (window.innerWidth/2-e.screenX)/20;
   const yAxis = (window.innerHeight/2-e.screenY)/20;
   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter",() => {
    card.style.transition = "none";
    heading.style.transform = "translatez(50px)";
    sneaker.style.transform = "translatez(100px) rotate(-30deg)";
});

container.addEventListener("mouseleave",(e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    sneaker.style.transform = "translatez(0px) rotate(0deg)";
});