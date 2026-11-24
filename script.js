
// Welcome message
console.log("Welcome to Piyush's Portfolio!");

// Typing Animation
const roles = [
    "Software Developer",
    "Web Developer",
    "CSE Student",
    "Tech Enthusiast"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

// Start animation
if (typingText) {
    typeEffect();
}

// Website loaded message
window.addEventListener("load", function() {
    console.log("Portfolio loaded successfully!");
});

// Scroll Reveal Animation

const revealSections = document.querySelectorAll(".section");

revealSections.forEach((section) => {
    section.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach((section) => {
    revealObserver.observe(section);
});
