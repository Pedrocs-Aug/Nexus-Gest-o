// Variável global para manter os dados após o upload
let dadosGlobais = [];
let volumesGlobais = 0;

document.getElementById('input-excel').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: 'binary', codepage: 65001 });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const matriz = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });

            const linhasDados = matriz.slice(1);
            const listaCaixas = [];

            dadosGlobais = linhasDados.map(linha => {
                const pedido = String(linha[2] || "").trim();
                const caixa = String(linha[6] || "").trim();
                if (caixa !== "") listaCaixas.push(caixa);

                return {
                    valores: [pedido, String(linha[4]), String(linha[5]), String(linha[7]), caixa, ""],
                    destaque: pedido.toLowerCase().startsWith('u') || pedido.toLowerCase().startsWith('b')
                };
            });

            volumesGlobais = [...new Set(listaCaixas)].length;
            renderizarTabela(dadosGlobais, volumesGlobais);
        } catch (erro) {
            console.error(erro);
            alert("Erro ao processar o arquivo.");
        }
    };
    reader.readAsBinaryString(file);
});

// LÓGICA DE BUSCA MULTICRITÉRIO
document.getElementById('input-busca').addEventListener('input', function (e) {
    const termoBusca = e.target.value.toLowerCase().trim();

    if (!termoBusca) {
        renderizarTabela(dadosGlobais, volumesGlobais);
        return;
    }

    // Separa os termos por espaço
    const termos = termoBusca.split(" ").filter(t => t !== "");

    const dadosFiltrados = dadosGlobais.filter(item => {
        // Transforma todos os valores da linha em uma única string para busca
        const conteudoLinha = item.valores.join(" ").toLowerCase();

        // Verifica se TODOS os termos digitados estão presentes na linha (Lógica AND)
        return termos.every(termo => conteudoLinha.includes(termo));
    });

    renderizarTabela(dadosFiltrados, volumesGlobais);
});

function renderizarTabela(dados, totalVolumes) {
    const container = document.getElementById('tabela-container');
    const btnImprimir = document.getElementById('btn-imprimir');

    if (dados.length === 0) {
        container.innerHTML = "<p style='padding:20px; text-align:center;'>Nenhum item encontrado.</p>";
        return;
    }

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

    dados.forEach((item, index) => {
        const estiloLinha = item.destaque ? 'style="font-weight: 700; background-color: #fff9e6;"' : '';
        html += `<tr ${estiloLinha}>`;
        html += `<td style="text-align: center; background-color: #f8f9fa; color: #666; font-weight: bold;">${index + 1}</td>`;
        item.valores.forEach(celula => {
            html += `<td>${celula}</td>`;
        });
        html += `</tr>`;
    });

    html += '</tbody></table>';
    container.innerHTML = html;

    if (btnImprimir) {
        btnImprimir.style.display = 'inline-block';
        btnImprimir.onclick = function () { window.print(); };
    }
}

// EVENTO PARA EXPORTAR EXCEL
document.getElementById('btn-exportar-excel').addEventListener('click', function () {
    const tabela = document.querySelector("#tabela-container table");

    if (!tabela) {
        alert("Por favor, importe um arquivo primeiro para gerar os dados.");
        return;
    }

    // Converte a tabela visível (inclusive se estiver filtrada) para Excel
    const wb = XLSX.utils.table_to_book(tabela, { sheet: "Conferência" });

    // Nome do arquivo com a data atual
    const data = new Date().toLocaleDateString('pt-BR').replace(/\//g, '-');
    XLSX.writeFile(wb, `Nexus_Conferencia_${data}.xlsx`);
});

// EVENTO PARA IMPRIMIR PDF (Aproveitando a função nativa do navegador)
document.getElementById('btn-imprimir').addEventListener('click', function () {
    const tabela = document.querySelector("#tabela-container table");

    if (!tabela) {
        alert("Não há dados para imprimir. Importe um arquivo primeiro.");
        return;
    }

    window.print();
});