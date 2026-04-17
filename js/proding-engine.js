// Responsabilidade: Manipulação do DOM e Lógica de Arquivos
document.getElementById('input-proding').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary', cellStyles: true });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const matriz = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Objeto para armazenar as estatísticas detalhadas
        const resumo = {
            contagemPorJustificativa: {}, // Agrupamento por frase de justificativa
            ignorado_valor: 0,
            totalGeral: 0
        };

        matriz.forEach((linha, index) => {
            if (index < 12) return; // Padrão RTO001

            // 1. Verificar valor na Coluna G (Índice 6)
            const valorDesconto = parseFloat(linha[6]) || 0;

            // Regra: Se o valor for menor que -0,2 (ex: -0,3), ignora
            if (valorDesconto < -0.2) {
                resumo.ignorado_valor++;
                return; 
            }

            // 2. Critérios de Justificativa
            const codigo = String(linha[3] || "").trim().toUpperCase(); // Coluna D
            const nomeCliente = String(linha[40] || "").trim().toUpperCase(); // Coluna AO

            let justificativa = null;

            // Regra Concessionária (Prioridade)
            if (typeof CLIENTES_CONCESSIONARIA !== 'undefined' && CLIENTES_CONCESSIONARIA.includes(nomeCliente)) {
                justificativa = "PEÇA VENDIDA PARA CONCESSIONARIA";
            } 
            // Regra Banco de Dados (Código)
            else if (DATABASE_PRODING[codigo]) {
                justificativa = DATABASE_PRODING[codigo];
            }

            // 3. Aplicação e Contagem
            if (justificativa) {
                const ref = XLSX.utils.encode_cell({ r: index, c: 42 }); // Coluna AQ
                worksheet[ref] = { v: justificativa, t: 's' };
                
                // Contabiliza a frase específica
                resumo.contagemPorJustificativa[justificativa] = (resumo.contagemPorJustificativa[justificativa] || 0) + 1;
                resumo.totalGeral++;
            }
        });

        // Finalização e Download
        XLSX.writeFile(workbook, `PRODING_FINAL_${new Date().getTime()}.xlsx`, { bookType: 'xlsx', type: 'binary' });
        exibirResumoPorJustificativa(resumo);
    };
    reader.readAsBinaryString(file);
});

function exibirResumoPorJustificativa(resumo) {
    const card = document.getElementById('status-card');
    const texto = document.getElementById('detalhes-status');
    card.style.display = 'block';

    // Gerar HTML da lista agrupada
    let listaHTML = '<ul style="list-style: none; padding: 0; margin-top: 10px;">';
    
    for (const [frase, qtd] of Object.entries(resumo.contagemPorJustificativa)) {
        listaHTML += `
            <li style="margin-bottom: 8px;">
                ✅ <b>${qtd}x</b> - <span style="font-size: 0.9em; color: #333;">${frase}</span>
            </li>`;
    }

    listaHTML += `
        <br>
        <li style="border-top: 1px solid #eee; pt-2">
            ⚠️ <b>${resumo.ignorado_valor}</b> itens ignorados (Desconto Superior a 20%)
        </li>
    </ul>`;

    texto.innerHTML = `
        <p><strong>Automação Concluída!</strong></p>
        <p>Total de itens processados: <span class="highlight-count">${resumo.totalGeral}</span></p>
        <hr>
        ${listaHTML}
    `;
}