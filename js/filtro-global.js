/**
 * Nexus Gestão - Filtro Global de Cards
 * Aplica-se a: index.html, documentos.html e sites.html
 */

document.addEventListener('DOMContentLoaded', () => {
    // Tenta encontrar o input de busca (independente do ID usado na página)
    const inputBusca = document.querySelector('input[id^="input-busca"]');
    
    if (!inputBusca) return;

    inputBusca.addEventListener('input', function (e) {
        const termoBusca = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            // Pega o texto da legenda (span na home, label nos documentos/sites)
            const legenda = card.querySelector('.legenda-card, .legend');
            const texto = legenda ? legenda.textContent.toLowerCase() : "";

            // Lógica de exibição
            if (texto.includes(termoBusca)) {
                card.style.display = 'flex';
                // Pequena animação de fade
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    });
});