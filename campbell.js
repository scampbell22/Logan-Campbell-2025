document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".card");

    setTimeout(() => {
        card.classList.add("flipped");
    }, 5000);
});
