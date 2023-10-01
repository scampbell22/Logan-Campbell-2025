document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".card");
    let canFlipByTouch = false;  // This flag will determine if the card is allowed to be flipped by touch

    // Flip the card after 5 seconds
    setTimeout(() => {
        card.classList.add("flipped");
        canFlipByTouch = true;  // Allow the card to be flipped by touch after the initial flip
    }, 5000); // 5 seconds

    card.addEventListener("click", function() {
        if (canFlipByTouch) {
            card.classList.toggle("flipped");  // toggle() will add or remove the class based on its current state
        }
    });
});
