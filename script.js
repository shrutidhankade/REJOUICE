function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });





  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

locomotive();


function cursorEffect() {
  const page1 = document.querySelector("#page1-content")
  var cursor = document.querySelector("#cursor")

  page1.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y
    })

  })
  page1.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1
    })
  })

  page1.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0

    })
  })
}
cursorEffect();

// gsap.from(".elem h1", {
//   y: 120,
//   stagger: 0.2,
//   duration: 1,
//   ScrollTrigger: {
//     trigger: "#page2",
//     scroller: "#main",
//     start: "top 47%",
//     end: "top 46%",
//     markers: true,
//     scrup: 2
//   }
// })

gsap.from(" #page2 h1", {
  y:140,
  stagger:0.2,
  duration:2,
  ScrollTrigger:{
    trigger:".elem h1",
    scroller:"body",
    start:"top 10%",
    end:"top 80%",
    markers:true,
    scrup:2,
  }
})
gsap.from(".elem nav",{
  y:140,
  stagger:0.4,
  duration:2,
  ScrollTrigger:{
    trigger:".elem h1",
    scroller:"body",
    start:"top 10%",
    end:"top 80%",
    markers:true,
    scrup:2,
  }
})
gsap.from(".page3-top h1 ",{
  y:140,
  stagger:0.2,
  duration:2,
  ScrollTrigger:{
    trigger:".elem h1",
    scroller:"body",
    start:"top 10%",
    end:"top 80%",
    markers:true,
    scrup:2,
  }
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});

var tl= gsap.timeline()


tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:2,
  stagger:0.1,
})
tl.to("#loader h3",{
  opacity:0,
  x:-40,
  duration:1,
  stagger:0.1,
})
tl.to("#loader",{
  opacity:0,
})
tl.from("#page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:-0.5
})

tl.to("#loader",{
  display:"none"
})


function cursorEffect2() {
  const page4 = document.querySelector("#page4")
  var cursor2 = document.querySelector("#cursor2")

  page4.addEventListener("mousemove", function (elem) {
    gsap.to(cursor2, {
      x: elem.x,
      y: elem.y
    })

  })
  page4.addEventListener("mouseenter", function (elem) {
    gsap.to(cursor2, {
      scale: 1,
      // opacity: 1
    })
  })

  page4.addEventListener("mouseleave", function (elem) {
    gsap.to(cursor2, {
      scale: 1,
      opacity: 1

    })
  })
}
cursorEffect2();



