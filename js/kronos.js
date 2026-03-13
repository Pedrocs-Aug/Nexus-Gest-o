/**
 * Banco de Dados Consolidado e Validado - Nexus Gestão
 * Fontes: Bridgestone, Dunlop, Michelin, Pirelli e Yokohama
 */
const dadosAcessorios = [
{ veiculo: 'YARIS HATCH / SEDAN XL (2018/2025)', categoria: 'ÁUDIO E ENTRETENIMENTO', produto: 'CENTRAL MULTIMÍDIA COM AR ANALÓGICO (+ CÂMERA DE RÉ)', pn: 'AKRXN05504' },
{ veiculo: 'YARIS HATCH / SEDAN XL / XS / XLS (2018/2025)', categoria: 'ÁUDIO E ENTRETENIMENTO', produto: 'CENTRAL MULTIMÍDIA COM AR DIGITAL', pn: 'AKRXN05505' },
];

// --- FUNÇÃO PRINCIPAL DE RENDERIZAÇÃO ---
function renderizarTabela(dados) {
    const corpoTabela = document.getElementById('corpoTabela');
    if (!corpoTabela) return;

    corpoTabela.innerHTML = '';

    dados.forEach(item => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>
                <a href="#" class="codigo-link" onclick="abrirModalEtiqueta('${item.pn}', '${item.produto}')">
                    ${item.pn}
                </a>
            </td>
            <td class="coluna-acao">
                <button class="btn-copiar" onclick="copiarTexto('${item.pn}', this)" title="Copiar código">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>
            </td>
            <td>${item.veiculo}</td>
            <td><span class="tag-categoria">${item.categoria}</span></td>
            <td>${item.produto}</td>
        `;
        corpoTabela.appendChild(linha);
    });
}

// --- FUNÇÃO PARA COPIAR O TEXTO ---
function copiarTexto(texto, elemento) {
    navigator.clipboard.writeText(texto).then(() => {
        // Feedback no botão
        const originalColor = elemento.style.color;
        elemento.style.color = "#28a745";

        // Exibir Toast
        const toast = document.getElementById('toast-container');
        if (toast) toast.classList.add('mostrar');

        setTimeout(() => {
            elemento.style.color = originalColor;
            if (toast) toast.classList.remove('mostrar');
        }, 2000);
    });
}
// --- FUNÇÃO PARA ABRIR O MODAL DE ETIQUETA ---
function abrirModalEtiqueta(codigo, descricao) {
    const modal = document.getElementById('modal-etiqueta');
    const area = document.getElementById('area-impressao');

    if (!modal || !area) return;

    let conteudo = '';
    // Gera as 4 etiquetas padrão folha A4
    for (let i = 0; i < 4; i++) {
        conteudo += `
            <div class="bloco-etiqueta">
                <h1 class="codigo-grande">${codigo}</h1>
                <p class="descricao-acessorio">${descricao.toUpperCase()}</p>
            </div>
        `;
    }

    area.innerHTML = conteudo;
    modal.style.display = 'flex';
}

// --- FECHAR MODAL ---
function fecharModal() {
    const modal = document.getElementById('modal-etiqueta');
    if (modal) modal.style.display = 'none';
}

// --- FILTRO DE BUSCA MULTI-CRITÉRIO ---
function inicializarBusca() {
    const inputBusca = document.getElementById('inputBusca');
    if (inputBusca) {
        inputBusca.addEventListener('input', () => {
            const termoBusca = inputBusca.value.toLowerCase().trim();
            const termos = termoBusca.split(' ').filter(t => t.length > 0);

            const filtrados = dadosAcessorios.filter(item => {
                // Verifica cada termo da busca
                return termos.every(termo => {
                    // Garante que os campos existam e padroniza a busca (incluindo o erro 'category')
                    const pn = (item.pn || "").toLowerCase();
                    const veiculo = (item.veiculo || "").toLowerCase();
                    const categoria = (item.categoria || item.category || "").toLowerCase(); // Aceita ambos por segurança
                    const produto = (item.produto || "").toLowerCase();

                    return pn.includes(termo) ||
                           veiculo.includes(termo) ||
                           categoria.includes(termo) ||
                           produto.includes(termo);
                });
            });

            renderizarTabela(filtrados);
        });
    }
}

// --- INICIALIZAÇÃO AO CARREGAR A PÁGINA ---
document.addEventListener('DOMContentLoaded', () => {
    renderizarTabela(dadosAcessorios);
    inicializarBusca();
});

// Fechar modal ao clicar fora dele
window.onclick = function (event) {
    const modal = document.getElementById('modal-etiqueta');
    if (event.target == modal) fecharModal();
};