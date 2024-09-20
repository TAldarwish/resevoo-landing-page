gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
    }
});

// Add animations to the timeline
tl.from(".hero .headline", {
    yPercent: 100,
    duration: .7,
    autoAlpha: 0,
    ease: 'power3.out'
}).from(".hero .sub-headline", {
    yPercent: -100,
    autoAlpha: 0,
    duration: .7,
    ease: 'power3.out'
}, '-=.3').from(".hero .btn:first-child", {
    xPercent: -200,
    autoAlpha: 0,
    duration: .7,
    ease: 'expo.out'
}, '-=.3').from(".hero .btn:last-child", {
    xPercent: 200,
    autoAlpha: 0,
    duration: .7,
    ease: 'expo.out'
}, '<');
