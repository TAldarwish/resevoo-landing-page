document.addEventListener('mousemove', function(e) {
    // Number of flakes to generate per movement
    const numberOfFlakes = 4; // Increase number of flakes to make it more dynamic
    
    for (let i = 0; i < numberOfFlakes; i++) {
        // Create a flake element
        const flake = document.createElement('div');
        
        // Randomly assign one of the flake classes (flake1, flake2, flake3, etc.)
        const randomClass =  `flake${Math.floor(Math.random() * 13 )}`;
        flake.classList.add(randomClass);

        // Randomize movement directions for each flake
        const randomX = Math.random();
        const randomY = Math.random();
        
        // Set position of the flake near the cursor with some randomness
        const randomOffsetX = Math.random() * 30 - 10; // Small random offset
        const randomOffsetY = Math.random() * 30 - 10;
        flake.style.left = `${e.clientX + randomOffsetX}px`;
        flake.style.top = `${e.clientY + randomOffsetY}px`;

        // Add random movement using custom properties for CSS animation
        flake.style.setProperty('--random-x', randomX);
        flake.style.setProperty('--random-y', randomY);
        
        // Append the flake to the body
        document.body.appendChild(flake);

        // Remove the flake after the animation ends
        setTimeout(() => {
            flake.remove();
        }, 2000); // Match the timeout with the animation duration (2s)
    }
});
