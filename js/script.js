// =========================
// NAVBAR - ESCONDER AO DESCER
// =========================

let ultimaPosicao = 0;

window.addEventListener("scroll", function () {
    let posicaoAtual = window.scrollY;

    if (posicaoAtual > ultimaPosicao) {
        // Descendo
        document.querySelector(".navbar").style.top = "-100px";
    } else {
        // Subindo
        document.querySelector(".navbar").style.top = "0";
    }

    ultimaPosicao = posicaoAtual;
});


// =========================
// NAVBAR - LINK ATIVO
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_content a");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
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
    },
    {
        threshold: 0.5,
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// =========================
// ABAS DO PORTFÓLIO
// =========================

const btnProjetos = document.getElementById("btn_projetos");
const btnCertificados = document.getElementById("btn_certificados");
const btnStack = document.getElementById("btn_stack");

const conteudoProjetos = document.getElementById("conteudo_projetos");
const conteudoCertificados = document.getElementById("conteudo_certificados");
const conteudoStack = document.getElementById("conteudo_stack");

btnProjetos.classList.add("ativo");

function removerAtivo() {
    btnProjetos.classList.remove("ativo");
    btnCertificados.classList.remove("ativo");
    btnStack.classList.remove("ativo");
}


// CERTIFICADOS

btnCertificados.addEventListener("click", function () {

    removerAtivo();

    conteudoProjetos.style.display = "none";
    conteudoCertificados.style.display = "grid";
    conteudoStack.style.display = "none";

    btnCertificados.classList.add("ativo");
});


// STACK

btnStack.addEventListener("click", function () {

    removerAtivo();

    conteudoCertificados.style.display = "none";
    conteudoProjetos.style.display = "none";
    conteudoStack.style.display = "grid";

    btnStack.classList.add("ativo");
});


// PROJETOS

btnProjetos.addEventListener("click", function () {

    removerAtivo();

    conteudoCertificados.style.display = "none";
    conteudoProjetos.style.display = "grid";
    conteudoStack.style.display = "none";

    btnProjetos.classList.add("ativo");
});


// =========================
// MODO ESCURO / CLARO
// =========================

const botaoTema = document.querySelector("#theme-toggle");
const iconeTema = botaoTema.querySelector("i");

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        iconeTema.classList.remove("fa-sun");
        iconeTema.classList.add("fa-moon");
    } else {
        iconeTema.classList.remove("fa-moon");
        iconeTema.classList.add("fa-sun");
    }

});

const nome = document.querySelector(".titulo h1 span strong");

const texto = nome.textContent;
nome.textContent = "";

nome.style.whiteSpace = "nowrap";

texto.split("").forEach((letra, index) => {
    const span = document.createElement("span");

    span.textContent = letra === " " ? "\u00A0" : letra;

    span.style.opacity = "0";
    span.style.display = "inline-block";
    span.style.transform = "translateY(40px)";

    span.style.animation = `aparecerLetra 0.5s ease forwards`;
    span.style.animationDelay = `${index * 0.08}s`;

    nome.appendChild(span);
});

// =========================
// ANIMAÇÃO AO TROCAR DE SEÇÃO
// =========================

const secoesAnimadas = document.querySelectorAll(
    "#sobre, #portfolio, #contatos"
);

const observadorSecoes = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                // Reinicia a animação
                entrada.target.classList.remove("secao-visivel");

                // Força o navegador a atualizar
                void entrada.target.offsetWidth;

                // Ativa novamente a animação
                entrada.target.classList.add("secao-visivel");

            } else {

                // Quando sair da tela, prepara para animar novamente
                entrada.target.classList.remove("secao-visivel");

            }

        });

    },
    {
        threshold: 0.2
    }
);

secoesAnimadas.forEach(function (secao) {

    secao.classList.add("secao-animada");

    observadorSecoes.observe(secao);

});