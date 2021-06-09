// gsap resto de la pagina
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero',{
    scrollTrigger: '.animate-hero',
    duration: 1,
    opacity: 1,
    x: -150,
    stagger:0.12

});
gsap.from('.animate-image',{
    scrollTrigger: '.animate-image',
    duration: 1.7,
    opacity: 0,
    x: -200,
    delay: 0.5,
    stagger:0.3
    

});
gsap.from('.animate-text',{
    scrollTrigger: '.animate-text',
    duration: 1.7,
    opacity: 0,
    x: -200,
    delay: 0.5,
    stagger:0.3
});
gsap.from('.animate-text2',{
    scrollTrigger: '.animate-text2',
    duration: 0.3,
    opacity: 0,
    y: 200,
    delay: 0.5,
    stagger:0.3
});
gsap.from('.animate-text3',{
    scrollTrigger: '.animate-text3',
    duration: 1.7,
    opacity: 0,
    x: -200,
    delay: 0.5,
    stagger:0.3
});
gsap.from('.animate-artista1',{
    scrollTrigger: '.animate-artista1',
    duration: 1.7,
    opacity: 0,
    x: -200,
    delay: 0.5,
    stagger:0.3
});
gsap.from('.animate-artista2',{
    scrollTrigger: '.animate-artista2',
    duration: 1.7,
    opacity: 0,
    x: -200,
    delay: 0.5,
    stagger:0.3
});
gsap.from('.animate-artista3',{
    scrollTrigger: '.animate-artista3',
    duration: 1.7,
    opacity: 0,
    x: -200,
    delay: 0.5,
    stagger:0.3
});


gsap.from('.animate-btn-art',{
    scrollTrigger: '.animate-btn-art',
    duration: 1.7,
    opacity: 0,
    x: 200,
    delay: 0.5,
    stagger:0.3
});


// Boton leer mas

const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Ver más") {
    readMoreBtn.innerText = "Ver menos";
  } else {
    readMoreBtn.innerText = "Ver más";
  }
});

