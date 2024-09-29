
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-us",
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
    }
});

tl1.from([".contact-us .title", ".contact-us .subtitle"], {
    yPercent: 200,
    duration: 1,
    autoAlpha: 0,
    stagger: .3,
    ease: 'power3.out'
}).from(".contact-us .form-group", {
    yPercent: 100,
    duration: .7,
    autoAlpha: 0,
    stagger: .3,
    ease: 'power3.out'
})
