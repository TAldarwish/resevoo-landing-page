const socialMediaList = [
    {
        name: 'Facebook',
        svg: './img/social-facebook.svg',
        url: 'https://facebook.com'
    }, {
        name: 'X (AKA Twitter)',
        svg: './img/social-x.svg',
        url: 'https://x.com'
    }, {
        name: 'Instagram',
        svg: './img/social-instagram.svg',
        url: 'https://instagram.com'
    }, {
        name: 'Linkedin',
        svg: './img/social-linkedin.svg',
        url: 'https://linkedin.com'
    }, {
        name: 'Whatsapp',
        svg: './img/social-whatsapp.svg',
        url: 'https://whatsapp.com'
    },
]

const socialMediaListElement = document.querySelector('.social-media-list');
let socialMediaHTML = ''
socialMediaList.forEach((socialMedia, index) => {
    if (socialMediaListElement) {
        socialMediaHTML += `
        <a class="social-media" target="_blank" href="${socialMedia.url}">
            <img loading="lazy"  src="${socialMedia.svg}" alt="${socialMedia.name}">
        </a>
        `;
        socialMediaListElement.innerHTML = socialMediaHTML;
    }
});
