document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const imageElement = document.querySelector(".card-image");
    let canFlipByTouch = false;  // This flag will determine if the card is allowed to be flipped by touch
    let currentImageIndex = 0;  // Index to keep track of the current image being displayed
    const imageUrls = [
        "./images/3B_Throw.jpg",
        "./images/logan_AB.jpg",
        "./images/on_deck.jpg",
        // Add additional image URLs here
    ];

    function changeImageWithDelay() {
        setTimeout(function () {
            // Increment the current image index and loop back to the beginning if needed
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
            // Set the image source to the next image in the array
            imageElement.src = imageUrls[currentImageIndex];
        }, 230); // milliseconds delay
    }

    // Add a click event listener to the card to toggle the "flipped" class
    card.addEventListener("click", function () {
        if (canFlipByTouch) {
            card.classList.toggle("flipped");  // Toggle the "flipped" class
            changeImageWithDelay(); // Change the image with a 0.5-second delay when the card is flipped by the user
        }
    });

    // Flip the card after 5 seconds and allow flipping by touch
    setTimeout(() => {
        card.classList.add("flipped");
        canFlipByTouch = true;  // Allow the card to be flipped by touch after the initial flip
        changeImageWithDelay(); // Change the image immediately after the card is flipped
    }, 5000); // 5 seconds
});

document.addEventListener("DOMContentLoaded", function () {

    const statsData = {
        stats: {
            pitching: {
                "fb-mph": 88.3,
                "fb-rpm": 2311,
                "sl-mph": 76,
                "sl-rpm": 2600,
                "cb-mph": 75,
                "cb-rpm": 2604
            },
            hitting: {
                "exit-velo": 95.3
            },
            running: {
                "60yd-dash": 7.26
            }
        }
    };

    // Populate Pitching stats
    document.getElementById("fb-mph").textContent = statsData.stats.pitching["fb-mph"];
    document.getElementById("fb-rpm").textContent = statsData.stats.pitching["fb-rpm"];
    document.getElementById("sl-mph").textContent = statsData.stats.pitching["sl-mph"];
    document.getElementById("sl-rpm").textContent = statsData.stats.pitching["sl-rpm"];
    document.getElementById("cb-mph").textContent = statsData.stats.pitching["cb-mph"];
    document.getElementById("cb-rpm").textContent = statsData.stats.pitching["cb-rpm"];

    // Populate Hitting stats
    document.getElementById("exit-velo").textContent = statsData.stats.hitting["exit-velo"] + " MPH";

    // Populate Running stats
    document.getElementById("60yd-dash").textContent = statsData.stats.running["60yd-dash"] + "s";

});


