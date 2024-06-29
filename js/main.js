// Get all cards from the page
const cards = document.querySelectorAll(".card-inner");
// Loop through each card
cards.forEach(card => {
    // Get inner elements of the card
    const moreBtn = card.querySelector(".mor-btn");
    const backBtn = card.querySelector(".back-btn");
    // Add click event to more button
    moreBtn.addEventListener("click", () => {
        // Toggle the visibility of the back side
        card.classList.add("card-flipped");
    });
    // Add click event to back button
    backBtn.addEventListener("click", () => {
        // Toggle the visibility of the back side
        card.classList.remove("card-flipped");
    });
});