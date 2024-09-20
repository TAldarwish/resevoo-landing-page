window.addEventListener('scroll', function () {
    let header = document.getElementById('navigation');
    let nav = document.querySelector('nav.left'); // Select the nav element inside the header
    let offset = nav.offsetTop;

    if (window.scrollY > offset) {
        header.classList.add('sticky-nav');
    } else {
        header.classList.remove('sticky-nav');
    }
});


const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    sidebar.style.translate = '0';
    overlay.classList.add('active'); // Show the overlay

});

closeSidebar.addEventListener('click', () => {
    sidebar.style.translate = '-100%';
    overlay.classList.remove('active'); // Hide the overlay
});
overlay.addEventListener('click', () => {
    sidebar.style.translate = '-100%';
    overlay.classList.remove('active'); // Hide the overlay
});
