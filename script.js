// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }
    });

    // Close menu after clicking a link
    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });

    });
}


// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    ".section, .education-card, .skill-card, .interest-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// CURRENT YEAR IN FOOTER
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${new Date().getFullYear()} Nitul Haldar | Designed with ❤️`;
}


// CONSOLE MESSAGE
console.log("Welcome to Nitul Haldar's Portfolio!");