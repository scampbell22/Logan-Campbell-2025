document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".card");

    function toggleCardFlip() {
        card.classList.toggle("flipped");
    }

    // Handle click event for desktop
    card.addEventListener("click", toggleCardFlip);

    // Handle touch event for mobile devices
    card.addEventListener("touchend", toggleCardFlip);
});
