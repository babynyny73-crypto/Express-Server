// =========================
// NYLAEH+ INTERACTIONS
// =========================


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Watch buttons
const watchButtons = document.querySelectorAll(".watch-btn");

watchButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Welcome to Nylaeh+! Your movie would start playing here."
        );

    });

});


// More Info button
const infoButton = document.querySelector(".info-btn");

if (infoButton) {

    infoButton.addEventListener("click", () => {

        alert(
            "The Last Adventure — An original action and adventure story available on Nylaeh+."
        );

    });

}


// Search button
const searchButton = document.querySelector(".search-btn");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        const search = prompt(
            "What would you like to search for?"
        );

        if (search) {

            alert(
                "Searching Nylaeh+ for: " + search
            );

        }

    });

}


// Movie card click interaction
const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach(card => {

    card.addEventListener("click", () => {

        const title =
            card.querySelector("h3")?.textContent || "Movie";

        alert(
            "You selected: " + title
        );

    });

});