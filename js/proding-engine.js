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

        let contador = 0;

        matriz.forEach((linha, index) => {
            if (index < 12) return; // Novo padrão do RTO001

            // Ler a coluna D e converter para maiúsculo
            const codigo = String(linha[3] || "").trim().toUpperCase();

            if (DATABASE_PRODING[codigo]) {
                const ref = XLSX.utils.encode_cell({ r: index, c: 42 }); // Coluna AQ (Justificativa)
                worksheet[ref] = { v: DATABASE_PRODING[codigo], t: 's' };
                contador++;
            }
        });

        // Finalização
        XLSX.writeFile(workbook, `PRODING_FINAL_${new Date().getTime()}.xlsx`, { bookType: 'xlsx', type: 'binary' });
        exibirStatus(contador);
    };
    reader.readAsBinaryString(file);
});

function exibirStatus(total) {
    const card = document.getElementById('status-card');
    const texto = document.getElementById('detalhes-status');
    card.style.display = 'block';
    texto.innerHTML = `Processamento concluído! <span class="highlight-count">${total}</span> justificativas foram inseridas com sucesso.`;
}