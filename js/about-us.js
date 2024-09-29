
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-us .section-1",
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
    }
});

tl1.from([".section-1 .title", ".section-1 .subtitle",".section-1 p"], {
    yPercent: 100,
    duration: .7,
    autoAlpha: 0,
    stagger: .3,
    ease: 'power3.out'
}).to(".section-1 .gold-filling", {
    backgroundPosition: '0',
    duration: .7,
    ease: 'power3.out'
}, '-=.7');


const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-us .section-2",
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
    }
});

tl2.from(".section-2 .subtitle", {
    xPercent: -100,
    duration: .7,
    autoAlpha: 0,
    ease: 'power3.out'
}).from(".section-2 p", {
    xPercent: 100,
    duration: .7,
    autoAlpha: 0,
    ease: 'power3.out'
});


const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-us .section-3",
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
    }
});

tl3.from([".section-3 .title", ".section-3 .subtitle",".section-3 p"], {
    yPercent: 100,
    duration: .7,
    autoAlpha: 0,
    stagger: .3,
    ease: 'power3.out'
}).to(".section-3 .gold-filling", {
    backgroundPosition: '0',
    duration: .7,
    ease: 'power3.out'
}, '-=.7');
