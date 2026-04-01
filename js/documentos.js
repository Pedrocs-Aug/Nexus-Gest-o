// Selecionando elementos
const modal = document.getElementById("modal-foto");
const imgModal = document.getElementById("img-modal");
const btnFechar = document.querySelector(".fechar");
const btnImprimir = document.getElementById("btn-imprimir");
const cards = document.querySelectorAll(".card");

// Abrir modal ao clicar no card
// Lógica para os botões de seleção (GASTÃO/CORIFEL)
const buttonsSelect = document.querySelectorAll(".btn-select");

buttonsSelect.forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.stopPropagation(); // Evita conflito com o clique do card
        const specificSrc = this.getAttribute("data-src");
        
        if (specificSrc) {
            modal.style.display = "flex";
            imgModal.src = specificSrc;
        }
    });
});

// Atualização da lógica dos cards normais para não quebrar
cards.forEach(card => {
    card.addEventListener("click", function(e) {
        // Se o card tiver botões internos, ignoramos o clique padrão do card
        if (this.querySelector(".overlay-options")) return;

        e.preventDefault();
        const imgOriginal = this.querySelector("img");
        if (imgOriginal && imgOriginal.src) {
            modal.style.display = "flex";
            imgModal.src = imgOriginal.src;
        }
    });
});

// Fechar modal
btnFechar.onclick = () => modal.style.display = "none";

// Fechar ao clicar fora da imagem
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};

// Função de Imprimir
btnImprimir.onclick = () => {
    window.print();
};

