const clients = [
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'Le Cinq',
        address: '31 Avenue George V, 75008 Paris, France'
    },
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'Eleven Madison Park',
        address: '11 Madison Ave, New York, NY 10010, USA'
    },
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'Osteria Francescana',
        address: 'Via Stella, 22, 41121 Modena MO, Italy'
    },
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'The French Laundry',
        address: '6640 Washington St, Yountville, CA 94599, USA'
    },
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'Narisawa',
        address: '2 Chome-6-15 Minamiaoyama, Minato City, Tokyo 107-0062, Japan'
    },
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'Alinea',
        address: '1723 N Halsted St, Chicago, IL 60614, USA'
    },
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'Azurmendi',
        address: 'Barrio Legina s/n, 48195 Larrabetzu, Bizkaia, Spain'
    },
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'Per Se',
        address: '10 Columbus Cir, New York, NY 10019, USA'
    },
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'The Fat Duck',
        address: 'High St, Bray SL6 2AQ, United Kingdom'
    },
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'Gaggan',
        address: '68/1 Soi Langsuan, Ploenchit Road, Lumpini, Bangkok, Thailand'
    },
];

const featuredClients = [
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'Le Bernardin',
        address: '155 W 51st St, New York, NY 10019, USA'
    },
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'Restaurant Guy Savoy',
        address: 'Monnaie de Paris, 11 Quai de Conti, 75006 Paris, France'
    },
    {
        image: `./img/restaurant-${Math.floor(Math.random() * 3) + 1}.webp`,
        name: 'Arpège',
        address: '84 Rue de Varenne, 75007 Paris, France'
    },
];
const swiperWrapper = document.querySelector('.swiper-wrapper');
const featuredClientsWrapper = document.querySelector('.featured-clients');
const clientNameElement = document.getElementById('client-name');
const clientAddressElement = document.getElementById('client-address');

// Set up the name and address for the first client
clientNameElement.textContent = clients[0].name;
clientAddressElement.textContent = clients[0].address;


// Dynamically create the Swiper slides based on client data
let clientCardsHTML = '';
clients.forEach((client, index) => {
    if (swiperWrapper) {
        clientCardsHTML += `
        <div class="swiper-slide client-slide">
            <div class="slide-inner ${index === 0 ? 'flipped' : ''}">
                <div class="slide-front">
                    <div class="shine"></div>
                    <img loading="lazy"  class="resevoo" src="./img/logo.webp" alt="Card Back Face">
                </div>
                <div class="slide-back">
                    <img loading="lazy"  src="${client.image}" alt="${client.name}">
                </div>
            </div>
        </div>
        `;
        swiperWrapper.innerHTML = clientCardsHTML;
    }
});

// Initialize the Swiper
var swiper = new Swiper('.clients-swiper', {
    effect: 'cards',
    rewind: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false // Continue autoplay after manual swiping
    },
    on: {
        // Update card flip animations and client info on slide change
        slideChange: function () {
            const cards = this.wrapperEl.querySelectorAll('.client-slide');
            const activeCardInner = cards[this.activeIndex].querySelector('.slide-inner');
            const activeClient = clients[this.activeIndex]; // Get the active client info

            // Kill any previous tweens to avoid conflicts
            gsap.killTweensOf(cards);
            gsap.killTweensOf([clientNameElement, clientAddressElement]);

            // Animate the light reflection (shining effect)
            const shine = activeCardInner.querySelector('.slide-front .shine');
            // Animate the shine
            gsap.fromTo(shine,
                {
                    top: '-100%',
                    left: '-100%',
                    opacity: .5
                },
                {
                    top: '100%',
                    left: '100%',
                    opacity: 0.2, // Shine intensity
                    duration: 0.5,
                    ease: "power2.inOut"
                });

            // Fade out the client name and address
            gsap.to([clientNameElement, clientAddressElement], {
                opacity: 0,
                duration: 0.3,
                ease: "power1.inOut",
                onComplete: () => {
                    // Update the client name and address after fade out
                    clientNameElement.textContent = activeClient.name;
                    clientAddressElement.textContent = activeClient.address;

                    // Fade them back in
                    gsap.to([clientNameElement, clientAddressElement], {
                        opacity: 1,
                        duration: 0.3,
                        ease: "power1.inOut"
                    });
                }
            });

            // GSAP timeline for the active card with 3D flipping effect
            if (activeCardInner.__gsap) {
                gsap.killTweensOf(activeCardInner);
            }
            
            const tl = gsap.timeline();

            tl.to(activeCardInner, {
                rotateX: 120,  // Slight X-axis tilt for 3D effect
                rotateZ: 30,  // Slight Z-axis tilt for 3D effect
                rotateY: 90,  // Start flipping halfway on Y-axis
                duration: 0.3,
                ease: "power2.inOut",
            })
                .to(activeCardInner, {
                    rotateX: 0,   // Reset X-axis tilt
                    rotateZ: 0,   // Reset Z-axis tilt
                    rotateY: 180, // Complete the Y-axis flip
                    duration: 0.3,
                    ease: "power2.inOut",
                });

            // Reset other cards
            cards.forEach((card, index) => {
                const cardInner = card.querySelector('.slide-inner');
                if (index !== this.activeIndex) {
                    // Reset inactive cards with the reverse effect
                    gsap.to(cardInner, {
                        rotateX: 0,  // Ensure X-axis reset
                        rotateZ: 0,  // Ensure Z-axis reset
                        rotateY: 0,  // Reset to original position on Y-axis
                        duration: 0.6,
                        ease: "power2.inOut",
                        onComplete: () => {
                            cardInner.classList.remove('open'); // Remove 'open' class if set
                        }
                    });
                } else {
                    // Add 'open' class to the active card for tracking
                    cardInner.classList.add('open');
                }
            });
        }
    }
});

let featuredClientsCardsHTML = ''
featuredClients.forEach((client, index) => {
    if (featuredClientsWrapper) {
        featuredClientsCardsHTML += `
        <div class="featured-client">
            <div class="slide-inner">
                <div class="slide-front">
                    <div class="shine"></div>
                    <img loading="lazy"  class="resevoo" src="./img/logo.webp" alt="Card Back Face">
                </div>
                <div class="slide-back">
                    <img loading="lazy"  src="${client.image}" alt="${client.name}">
                </div>
            </div>
            <div class="client-info">
                <h4>${client.name}</h4>
                <p>${client.address}</p>
            </div>
        </div>
        `;
        featuredClientsWrapper.innerHTML = featuredClientsCardsHTML;
    }
});

const featuredClientsTl = gsap.timeline({
    scrollTrigger: {
        trigger: featuredClientsWrapper,
        start: "top 50%",
        toggleActions: "play none none none",
        once: true,
    },
});
const featuredClientsCards = featuredClientsWrapper.querySelectorAll('.slide-inner');

featuredClientsTl.to(featuredClientsCards, {
    rotateX: 20,  // Slight X-axis tilt for 3D effect
    rotateZ: 10,  // Slight Z-axis tilt for 3D effect
    rotateY: 90,  // Start flipping halfway on Y-axis
    duration: 0.4,
    ease: "power1.out",
    stagger: {
        each: 0.4,  // Delay of 0.1 seconds between each card's animation
        onStart: function () {
            // Delay the shine effect by 0.2 seconds
            gsap.delayedCall(.2, function () {
                // Select the current card's shine element
                const shine = this.targets()[0].querySelector('.shine');
                // Animate the shine for the current card
                gsap.fromTo(shine, 
                {
                    top: '-100%',
                    left: '-100%',
                    opacity: 0.5
                }, 
                {
                    top: '100%',
                    left: '100%',
                    opacity: 0.2,  // Shine intensity
                    duration: 1,  // Duration of the shine effect
                    ease: "power2.inOut"
                });
            }.bind(this));  // Ensure the context of "this" is passed correctly
        }
    }
}).to(featuredClientsCards, {
    rotateX: 0,   // Reset X-axis tilt
    rotateZ: 0,   // Reset Z-axis tilt
    rotateY: 180, // Complete the Y-axis flip
    duration: 0.4,
    ease: "power2.inOut",
    stagger: 0.4, 
}).from('.featured-client .client-info h4', {
    y: -10,
    autoAlpha: 0,
    duration: 0.3,
    ease: "power2.inOut",
    stagger: 0.4,
}, '<').from('.featured-client .client-info p', {
    y: -10,
    autoAlpha: 0,
    duration: 0.3,
    ease: "power2.inOut",
    stagger: 0.4,
}, '<');


const mainTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.clients',
        start: "top 70%",
        toggleActions: "play none none none",
        once: true,
    },
});
mainTl.from('.clients .title', {
    y: -10,
    autoAlpha: 0,
    duration: .5,
    ease: 'power2.out'
}).from('.clients .sub-title', {
    y: -10,
    autoAlpha: 0,
    duration: .5,
    ease: 'power2.out'
})



