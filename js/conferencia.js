document.getElementById('input-excel').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: 'binary', codepage: 65001 });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const matriz = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });

            const linhasDados = matriz.slice(1);
            const listaCaixas = [];

            const dadosTratados = linhasDados.map(linha => {
                const pedido = String(linha[2] || "").trim();
                const caixa = String(linha[6] || "").trim();

                if (caixa !== "") {
                    listaCaixas.push(caixa);
                }
                
                return {
                    valores: [pedido, linha[4], linha[5], linha[7], caixa, ""],
                    destaque: pedido.toLowerCase().startsWith('u') || pedido.toLowerCase().startsWith('b')
                };
            });

            renderizarTabela(dadosTratados, [...new Set(listaCaixas)].length);
        } catch (erro) {
            console.error(erro);
            alert("Erro ao processar o arquivo.");
        }
    };

    reader.readAsBinaryString(file);
});

function renderizarTabela(dados, totalVolumes) {
    const container = document.getElementById('tabela-container');
    const btnImprimir = document.getElementById('btn-imprimir');

    let html = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #ddd; padding-bottom: 10px;">
            <div style="text-align: left;">
                <h2 style="margin:0; color: #2c343a;">RELATÓRIO DE RECEBIMENTO DE PÇS</h2>
                <small style="color: #666;">Gerado em: ${new Date().toLocaleString('pt-BR')}</small>
            </div>
            <div style="background: #2c343a; color: white; padding: 10px 20px; border-radius: 8px; text-align: center;">
                <span style="display: block; font-size: 0.8rem; text-transform: uppercase;">Volumes</span>
                <strong style="font-size: 1.5rem;">${totalVolumes}</strong>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th style="width: 30px; text-align: center;">Nº</th>
                    <th>PEDIDO</th>
                    <th>CÓDIGO</th>
                    <th>DESCRIÇÃO</th>
                    <th>QTD</th>
                    <th>CAIXA</th>
                    <th style="width: 80px;">CONF.</th>
                </tr>
            </thead>
            <tbody>
    `;

    // O segundo parâmetro do forEach (index) nos dá o número da linha
    dados.forEach((item, index) => {
        const estiloLinha = item.destaque ? 'style="font-weight: 700; background-color: #fff9e6;"' : '';
        
        html += `<tr ${estiloLinha}>`;
        // Adiciona a célula com o número da linha (index + 1)
        html += `<td style="text-align: center; background-color: #f8f9fa; color: #666; font-weight: bold;">${index + 1}</td>`;
        
        item.valores.forEach(celula => {
            html += `<td>${celula}</td>`;
        });
        html += `</tr>`;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
    
    if(btnImprimir) {
        btnImprimir.style.display = 'inline-block';
        btnImprimir.onclick = function() { window.print(); };
    }
}