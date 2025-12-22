
var main = document.querySelector("body")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
const tl2 = gsap.timeline();

tl.from(".navbar h2", {
  y: -20,
  opacity: 0,
  duration: 0.4,
  delay: 0.4,
});

tl.from(".navbar i", {
  y: -20,
  opacity: 0,
  duration: 0.3,
  stagger: 0.15,
});

tl.from(".hero", {
  y: 50,
  opacity: 0,
  duration: 0.7,
  stagger:0.3
});

tl.from("#about p", {
  opacity: 0,
  duration: 0.6,
});

tl2.from(".page1 img", {
  x: -100,
  opacity: 0,
  rotate: 45,
  duration: 0.8,
  stagger: 0.25,
  delay: 1.8,
});

tl2.from(".box1, .box2, .bubble p", {
  x: 80,
  y: 60,
  opacity: 0,
  duration: 0.25,
  stagger: 0.1,
});

// gsap.to(".page1", {
//   // opacity: 0,
//   scrollTrigger: {
//     trigger: ".page2",
//     start: "top 90%",
//     end: "top 60%",
//     scrub: true,
//   },
// });

// Page2 pinned scrolling text
gsap.to(".page2 h1", {
  x: "-61%",
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "top -300%",
    scrub: 1.5,
    pin: true,
  },
});


window.addEventListener("load", () => {
  const svg = document.querySelector("#string svg");
  const path = svg.querySelector("path");

  if (!svg || !path) return;

  const LEFT = 10;
  const RIGHT = 1275;
  const MID = 640;
  const BASE_Y = 50;

  const MAX_DEFLECT = 40; // 👈 realistic tension (10–16 sweet spot)

  const REST_PATH = `M ${LEFT} ${BASE_Y} Q ${MID} ${BASE_Y} ${RIGHT} ${BASE_Y}`;
  gsap.set(path, { attr: { d: REST_PATH } });

  function bendString(e) {
    const rect = svg.getBoundingClientRect();

    // Map pointer Y to SVG space (0–100)
    let y = ((e.clientY - rect.top) / rect.height) * 200;

    // Clamp deflection
    let deflect = (y - BASE_Y) ;
    deflect = Math.max(-MAX_DEFLECT, Math.min(MAX_DEFLECT, deflect));

    gsap.to(path, {
      attr: {
        d: `M ${LEFT} ${BASE_Y} Q ${MID} ${
          BASE_Y + deflect
        } ${RIGHT} ${BASE_Y}`,
      },
      duration: 0.5,
      ease: "power3.out",
    });
  }

  svg.addEventListener("pointermove", bendString);

  svg.addEventListener("pointerleave", () => {
    gsap.to(path, {
      attr: { d: REST_PATH },
      duration: 2.5,
      ease: "elastic.out(3, 0.1)",
    });
  });
});

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
        ease:"back.out(2,0.1)",
    })  
})

// image.addEventListener("mouseenter", function () {
//     cursor.innerHTML = "<p>View<br>More</p>"
//     gsap.to(cursor,{
//         scale:4,
//     })
// })

// image.addEventListener("mouseleave", function () {
//     cursor.innerHTML = ""
//     gsap.to(cursor,{
//         scale:1,
//     })
// })

main.addEventListener("mouseenter", function () {
    gsap.to(cursor,{
        opacity:1,
        duration:0.3
    })  
})


var menu = document.querySelector(".navbar i")
var close = document.querySelector(".tag i")

var TL = gsap.timeline()
var TL2 = gsap.timeline()

TL.to(".tag",{
    right:0,
    duration:0.3
})
TL.from(".tag a",{
    opacity:0,
    x:150,
    duration:0.3,
    stagger:0.1
})
TL2.from(".tag i",{
    dalay:3,    
    opacity:0,
})

TL.pause()
TL2.pause()

menu.addEventListener("click",function(){
    TL.play()
    TL2.play()
})

close.addEventListener("click", function(){
    TL.reverse()
})
/*
  Scroll distance is divided into 4 equal segments.
  Dot moves continuously.
  Cards appear when dot crosses their segment.
*/

const tln = gsap.timeline({
  // x:"-50%",
  scrollTrigger: {
    trigger: ".edu-section",
    start: "top top",
    end: "top -300",
    scrub: 2,
    pin:true,
  }
});
// gsap.to(".page2 h1", {
//   x: "-61%",
//   scrollTrigger: {
//     trigger: ".page2",
//     start: "top top",
//     end: "top -300%",
//     scrub: 1.5,
//     pin: true,
//   },
// });
// tln.to({}, { duration: 0.6 });

/* Move dot from left to right */
tln.to(".edu-dot", {
  xPercent: 5650,
  ease: "none",
  scrub:2,
});

/* Reveal cards at checkpoints */
tln.to(".card-1", {
  opacity: 1,
  y: 0,
  scale: 1,
  // ease: "back.out(1.7)"
}, 0.2);

tln.to(".card-2", {
  opacity: 1,
  y: 0,
  scale: 1,
  // ease: "back.out(1.7)"
}, 0.4);

tln.to(".card-3", {
  opacity: 1,
  y: 0,
  scale: 1,
  // ease: "back.out(1.7)"
}, 0.6);

tln.to(".card-4", {
  opacity: 1,
  y: 0,
  scale: 1,
  // ease: "back.out(1.7)"
}, 0.8);

// tln.to({}, { duration: 0.6 });

gsap.from(".left-project", {
  x: -300,
  opacity: 0,
  delay:0.5,
  scrollTrigger: {
    trigger: ".page4",
    start: "top 70%",
  },
});

gsap.from(".right-project", {
  delay:0.5,
  x: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page4",
    start: "top 95%",
  },
});