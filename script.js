/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


/* =====================================================
   FECHAR MENU AO CLICAR EM UM LINK
===================================================== */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* =====================================================
   ANIMAÇÃO AO APARECER NA TELA
===================================================== */

const sections = document.querySelectorAll(
    ".section, .art-section, .final-section"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.08
    }
);


sections.forEach(section => {
    section.classList.add("animate");
    observer.observe(section);
});