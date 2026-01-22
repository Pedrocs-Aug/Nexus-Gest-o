// Selecionando elementos
const modal = document.getElementById("modal-foto");
const imgModal = document.getElementById("img-modal");
const btnFechar = document.querySelector(".fechar");
const btnImprimir = document.getElementById("btn-imprimir");
const cards = document.querySelectorAll(".card");

// Abrir modal ao clicar no card
cards.forEach(card => {
    card.addEventListener("click", function(e) {
        e.preventDefault(); // Impede o link de navegar
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