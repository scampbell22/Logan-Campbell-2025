document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".card");
    let canFlipByTouch = false;  // This flag will determine if the card is allowed to be flipped by touch

    // Flip the card after 5 seconds
    setTimeout(() => {
        card.classList.add("flipped");

        // Flip the card back after 60 seconds
        setTimeout(() => {
            card.classList.remove("flipped");
            canFlipByTouch = true;  // Allow the card to be flipped by touch after the sequence
        }, 60000); // 60 seconds

    }, 5000); // 5 seconds

    card.addEventListener("click", function() {
        if (canFlipByTouch) {
            if (card.classList.contains("flipped")) {
                card.classList.remove("flipped");
            } else {
                card.classList.add("flipped");
            }
        }
    });
});
