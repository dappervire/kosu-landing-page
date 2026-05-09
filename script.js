const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️"
    } else {
        themeToggle.textContent = "🌙"
    }
})


const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        question.parentElement.classList.toggle('active');
    });
});

const hamburger = document.querySelector("#hamburger")
const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll('nav ul a');

hamburger.addEventListener("click", () => {
    nav.classList.toggle("menu-open");
})
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("menu-open");
    })
})

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    observer.observe(section);
});