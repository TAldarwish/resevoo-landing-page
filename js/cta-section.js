const ctaSection = document.querySelector('.cta-section')
const firstButton = ctaSection.querySelector('.buttons button:first-child')
const ctaTl = gsap.timeline({
    scrollTrigger: {
        trigger: ctaSection,
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
    },
});
ctaTl.from('.cta-section .title', {
    x: -100,
    duration: .5,
    autoAlpha: 0,
    ease: 'power3.out'
}).from('.cta-section .subtitle', {
    x: -100,
    duration: .5,
    autoAlpha: 0,
    ease: 'power3.out'
}).from('.cta-section .slogan', {
    x: -100,
    duration: 2,
    autoAlpha: 0,
    ease: 'elastic.out'
}).from('.cta-section .buttons button:first-child', {
    duration: .5,
    x: -50,
    autoAlpha: 0,
    ease: 'power3.out'
}, '<').from('.cta-section .buttons button:last-child', {
    duration: .5,
    autoAlpha: 0,
    x: 50,
    ease: 'power3.out'
}, '<')
.to('.cta-section .gold-filling', {
    backgroundPosition: '0',
    duration: .7,
    ease: 'power3.out'
}, '<').from('.cta-section .phone', {
    xPercent: 200,
    rotateZ: 30,
    autoAlpha: 0,
    duration: .5,
    ease: 'power3.out'
}, '<')