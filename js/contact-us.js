
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-us",
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
    }
});

tl1.from([".contact-us .content .title", ".contact-us .content .subtitle"], {
    yPercent: 300,
    duration: 1,
    autoAlpha: 0,
    stagger: .2,
    ease: 'power3.inOut'
}).from(".contact-us .form-group", {
    yPercent: 100,
    duration: .4,
    autoAlpha: 0,
    stagger: .2,
    ease: 'power3.out'
}, '-=.4')
