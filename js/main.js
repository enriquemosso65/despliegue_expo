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
                     
                    btnmore();
                },
                async after(data){
                    inicio();
                },
                async enter(data) { 
                     
                    btnmore();
                },
            },
        ],
    });
});



