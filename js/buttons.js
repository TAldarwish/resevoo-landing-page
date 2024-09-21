// Select all buttons with the data-scroll-target attribute
const scrollButtons = document.querySelectorAll('[data-scroll]');
// Add event listener to each button
scrollButtons.forEach(button => {
    button.addEventListener('click', function () {
        const targetSection = this.getAttribute('data-scroll-target'); // Get the section to scroll to
        requestAnimationFrame(() => {
            document.querySelector(targetSection).scrollIntoView({
            });
        });
    });
});
