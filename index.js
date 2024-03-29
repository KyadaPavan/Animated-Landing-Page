function loading() {

    var tl = gsap.timeline();

    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    })
    tl.from("#yellow2", {
        top: "100%",
        delay: 0.6,
        duration: 0.7,
        ease: "expo.out"
    }, "anim")
    tl.to("#loader h1", {
        color: "black",
        duration: 0.7,
        delay: 0.2
    }, "anim")
    tl.to("#loader", {
        opacity: 0
    })
    tl.to("#loader", {
        display: "none"
    })
}

loading()

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });
// console.log(scroll);



