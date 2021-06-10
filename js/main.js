

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
}



function contentAnimation() {
    var tl = gsap.timeline();
    
    
    tl.fromTo(".h1animate",{
        y: "-500%",
        opacity: 0
    },{
        duration: 1,
        y: "0%",
        opacity: 1,
        ease: "power1.out"
    });
    tl.fromTo(".h2animate",{
        y: "100%",
        opacity: 0
    },{
        duration: 1.5,
        y: "0%",
        opacity: 1
    },"-=1");
    tl.fromTo(".heroImg",{
        y: "0%",
        opacity: 0
    },{
        duration: 2.5,
        x: "0%",
        opacity: 1
    },"-=1");
    tl.from(".animate-this", { 
        duration: 2.5, 
        y: 30, opacity: 0,
        stagger: 0.4,
        delay: 0.2 
    });
    

    //boton leer mas
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
    //
    const cards = document.querySelectorAll('.card');
	function toggleOpen(){
		this.classList.toggle('open');
		for(i =0 ; i<cards.length; i++){
			if( cards[i] !== this){
				cards[i].classList.toggle('close')
			}
		}
	}
	cards.forEach(card => card.addEventListener('click', toggleOpen));
    

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

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});



// Boton leer mas


