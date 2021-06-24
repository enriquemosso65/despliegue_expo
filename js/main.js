function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}
function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });
    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
    
    barba.hooks.enter(() => {
        window.scrollTo(0, 0);
    });
}
barba.hooks.enter(() => {
    window.scrollTo(0, 0);
});
function contentAnimation() {
    var tl = gsap.timeline();
    tl.fromTo(".h1animate",{
        y: "500%",
        opacity: 0
    },{
        duration: 2.4,
        y: "0%",
        opacity: 1,
        ease: "power1.out"
    });
    tl.fromTo(".h2animate",{
        y: "100%",
        opacity: 0
    },{
        duration: 2.5,
        y: "0%",
        opacity: 1
    },"-=1");
    barba.hooks.enter(() => {
        window.scrollTo(0, 0);
    });    
}
function btnmore(){
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
    barba.hooks.enter(() => {
        window.scrollTo(0, 0);
    });
}
function inicio(){
    gsap.to(".hero", {
    scrollTrigger: {
        trigger: ".hero",
        scrub: true,
        pin: true,
        start: "center center",
        end: "bottom -100%",
        toggleClass: "active",
        ease: "power2"
    }
    });
    gsap.to(".hero__image", {
    scrollTrigger: {
        trigger: ".hero",
        scrub: 0.9,
        start: "top bottom",
        end: "bottom -1000%",
        ease: "power2"
    },
    y: "-120%"
    });
    const tl = gsap.timeline();
    tl.to(".animation",{
        y:"-100%",
        duration:1,
        delay:1,
        ease:"Expo.easeInOut"
    })
    barba.hooks.enter(() => {
        window.scrollTo(0, 0);
    });
    gsap.from('.title__index',{
        scrollTrigger: '.title__index',
        duration: 3.5,
        opacity: 0,
        y: 100,
        delay: 0.5,
        stagger:1
    });
    gsap.from('.subtitle__index',{
        scrollTrigger: '.subtitle__index',
        duration: 3.7,
        opacity: 0,
        y: 100,
        delay: 0.5,
        stagger:1
    });
    gsap.from('.button__index',{
        scrollTrigger: '.button__index',
        duration: 3.9,
        opacity: 0,
        y: 100,
        delay: 0.5,
        stagger:1
    });
    gsap.from('.animate-hero',{
        scrollTrigger: '.animate-hero',
        duration: 1,
        opacity: 1,
        x: -150,
        stagger:0.12
    });
    gsap.from('.animate-text',{
        scrollTrigger: '.animate-text',
        duration: 1.7,
        opacity: 0,
        x: -200,
        delay: 0.5,
        stagger:0.3
    });
    gsap.from('.animate-image',{
        scrollTrigger: '.animate-image',
        duration: 2,
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
        duration: 3.1,
        opacity: 0,
        x: -200,
        delay: 0.5,
        stagger:0.3
    });
    gsap.from('.animate-artista2',{
        scrollTrigger: '.animate-artista2',
        duration: 3.2,
        opacity: 0,
        x: -200,
        delay: 0.5,
        stagger:0.3
    });
    gsap.from('.animate-artista3',{
        scrollTrigger: '.animate-artista3',
        duration: 3.3,
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
} 
$(function () {
    barba.init({
        sync: true,
        transitions: [
            {
                async leave(data) {
                    const done = this.async();
                    pageTransition();
                    await delay(1000);
                    done();
                },
                async once(data) {
                    inicio();
                    contentAnimation();
                    btnmore();
                },
                async after(data){
                    inicio();
                },
                async enter(data) { 
                    contentAnimation();
                    btnmore();
                },
            },
        ],
    });
});



