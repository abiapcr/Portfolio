// let ultimaPosicao = 0;

// window.addEventListener("scroll", function () {
//     let posicaoAtual = window.scrollY;

//     if (posicaoAtual > ultimaPosicao) {
//         // Descendo
//         document.querySelector(".navbar").style.top = "-100px";
//     } else {
//         // Subindo
//         document.querySelector(".navbar").style.top = "0";
//     }

//     ultimaPosicao = posicaoAtual;
// });

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_content a");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav_content a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }

    });

}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
});