const counters = document.querySelectorAll(".counter");

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let current = 0;
        const increment = target / 60;

        const update = () => {
            current += increment;

            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target + "+";
            }
        };

        update();
    });
};

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
    }
});

observer.observe(document.querySelector(".hero-stats"));

const toggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggle.querySelector("i");

// Initial Theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    icon.className = "fa-solid fa-sun";   // Dark mode me Sun dikhao (Light mode par switch karne ke liye)
} else {
    icon.className = "fa-solid fa-moon";  // Light mode me Moon dikhao (Dark mode par switch karne ke liye)
}

toggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        icon.className = "fa-solid fa-sun";

    } else {

        localStorage.setItem("theme", "light");

        icon.className = "fa-solid fa-moon";

    }

});

/*==============================
STICKY HEADER
==============================*/

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/*==============================
GSAP HERO ANIMATION
==============================*/

window.addEventListener("load", () => {

    const tl = gsap.timeline();

    tl.from(".hero-subtitle",{

        y:40,
        opacity:0,
        duration:.6,
        ease:"power3.out"

    })

    .from(".hero-title",{

        y:40,
        opacity:0,
        duration:.7,
        ease:"power3.out"

    },"-=0.35")

    .from(".hero-description",{

        y:30,
        opacity:0,
        duration:.6,
        ease:"power3.out"

    },"-=0.35")

    .from(".hero-buttons",{

        y:30,
        opacity:0,
        duration:.5,
        ease:"power3.out"

    },"-=0.25")

    .from(".hero-stats",{

        y:30,
        opacity:0,
        duration:.5,
        ease:"power3.out"

    },"-=0.25")

    .from(".hero-right",{

        x:80,
        opacity:0,
        scale:.9,
        duration:.9,
        ease:"power3.out"

    },"-=0.8");

});

/*==================================
ABOUT GSAP
==================================*/

gsap.registerPlugin(ScrollTrigger);
console.log(ScrollTrigger);

gsap.from(".about-left",{

    scrollTrigger:{

        trigger:".about",

        start:"top 75%"

    },

    x:-80,

    opacity:0,

    duration:1,

    ease:"power3.out"

});

gsap.from(".section-tag",{

    scrollTrigger:{
        trigger:".about",
        start:"top 75%"
    },

    y:30,
    opacity:0,
    duration:.6

});

gsap.from(".about-right h2",{

    scrollTrigger:{
        trigger:".about",
        start:"top 75%"
    },

    y:30,
    opacity:0,
    duration:.6,
    delay:.2

});

gsap.from(".about-right p",{

    scrollTrigger:{
        trigger:".about",
        start:"top 75%"
    },

    y:30,
    opacity:0,
    duration:.6,
    stagger:.2,
    delay:.4

});

