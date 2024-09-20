const clients = [
    {
        image: `../img/restaurant-${Math.floor(Math.random() * 3) + 1}.jpg`,
        name: 'Restaurant Name 1',
        address: 'Restaurant Address 1'
    },
    {
        image: `../img/restaurant-${Math.floor(Math.random() * 3) + 1}.jpg`,
        name: 'Restaurant Name 2',
        address: 'Restaurant Address 2'
    },
    {
        image: `../img/restaurant-${Math.floor(Math.random() * 3) + 1}.jpg`,
        name: 'Restaurant Name 3',
        address: 'Restaurant Address 3'
    },
    {
        image: `../img/restaurant-${Math.floor(Math.random() * 3) + 1}.jpg`,
        name: 'Restaurant Name 4',
        address: 'Restaurant Address 4'
    },
    {
        image: `../img/restaurant-${Math.floor(Math.random() * 3) + 1}.jpg`,
        name: 'Restaurant Name 5',
        address: 'Restaurant Address 5'
    },
    {
        image: `../img/restaurant-${Math.floor(Math.random() * 3) + 1}.jpg`,
        name: 'Restaurant Name 6',
        address: 'Restaurant Address 6'
    },
    {
        image: `../img/restaurant-${Math.floor(Math.random() * 3) + 1}.jpg`,
        name: 'Restaurant Name 7',
        address: 'Restaurant Address 7'
    },
    {
        image: `../img/restaurant-${Math.floor(Math.random() * 3) + 1}.jpg`,
        name: 'Restaurant Name 8',
        address: 'Restaurant Address 8'
    },
    {
        image: `../img/restaurant-${Math.floor(Math.random() * 3) + 1}.jpg`,
        name: 'Restaurant Name 1',
        address: 'Restaurant Address 9'
    },
    {
        image: `../img/restaurant-${Math.floor(Math.random() * 3) + 1}.jpg`,
        name: 'Restaurant Name 1',
        address: 'Restaurant Address 1'
    },
]
const swiperWrapper = document.querySelector('.swiper-wrapper');
clients.forEach((client, index) => {
    if (swiperWrapper) {
        const cardHTML = `
        <div class="swiper-slide client-slide">
            <div class="slide-inner ${index === 0 ? 'flipped' : ''}">
                <div class="slide-front">
                    <img class="resevoo" src="./img/logo.png" alt="Resevoo Logo">
                </div>
                <div class="slide-back">
                    <img src="${client.image}" alt="Random Image">
                </div>
            </div>
        </div>
    `;
        swiperWrapper.innerHTML += cardHTML;
    }
});


var swiper = new Swiper('.clients-swiper', {
    effect: 'cards',
    grabCursor: true,
    autoplay: {
        delay: 2500
    },
    on: {
        slideChange: function () {
            const cards = this.wrapperEl.querySelectorAll('.client-slide');
            const activeCardInner = cards[this.activeIndex].querySelector('.slide-inner');

            const tl = gsap.timeline()
            tl.from(activeCardInner, {
                rotateX: 150,
                rotateZ: 30,
                duration: 0.2,
                ease: "elastic.in",
            }).to(activeCardInner, {
                rotateY: 180,
                duration: 0.2,
                ease: "power1.inOut",
            },'<');

            // Loop through all cards to reset the previously active card
            cards.forEach((card, index) => {
                const cardInner = card.querySelector('.slide-inner');

                if (index !== this.activeIndex) {
                    // If the card is not active, reset its rotation
                    gsap.to(cardInner, {
                        rotateY: 0,
                        duration: 0.2,
                        ease: "power1.inOut",
                        onComplete: () => {
                            cardInner.classList.remove('open'); // Ensure the class is removed after flipping
                        }
                    });
                } else {
                    // For the active card, add the 'open' class
                    cardInner.classList.add('open');
                }
            });
        }
    }
});
