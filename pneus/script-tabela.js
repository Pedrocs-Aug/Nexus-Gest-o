/**
 * Banco de dados consolidado das planilhas: 
 * Yokohama, Dunlop, Michelin, Pirelli e Bridgestone
 */
const dadosPneus = [
    // --- BRIDGESTONE ---
    { codigo: '42652 90001', marca: 'BRIDGESTONE', veiculo: 'ETIOS', desc: '175/65R14 82T F-700' },
    { codigo: '42652 90102', marca: 'BRIDGESTONE', veiculo: 'YARIS', desc: '185/60R15 84H Ecopia EP150' },
    { codigo: '42652 90002', marca: 'BRIDGESTONE', veiculo: 'YARIS/GOL/ARGO', desc: '185/60R15 84H Turanza ER300' },
    { codigo: '42652 91102', marca: 'BRIDGESTONE', veiculo: 'FIELDER/PRIUS', desc: '195/60R15 88V Ecopia EP150' },
    { codigo: '42652 91203', marca: 'BRIDGESTONE', veiculo: 'PRIUS', desc: '195/65R15 91H Ecopia EP150' },
    { codigo: '42652 91014', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: '205/55R16 91V Ecopia EP150' },
    { codigo: '42652 91006', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: '225/45R17 91W Turanza T005' },
    { codigo: '42652 91008', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: '225/50R18 95V Alenza 001' },
    { codigo: '42652 94103', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: '225/60R18 100H Alenza H/L 33' },
    { codigo: '42652 94003', marca: 'BRIDGESTONE', veiculo: 'LEXUS NX', desc: '225/60R18 100H Dueler H/L 33' },
    { codigo: '42652 95003', marca: 'BRIDGESTONE', veiculo: 'CAMRY', desc: '235/45R18 94W Turanza T005A' },
    { codigo: '42652 94002', marca: 'BRIDGESTONE', veiculo: 'LEXUS NX200T', desc: '235/55R18 100V Dueler H/L 33' },

    // --- DUNLOP ---
    { codigo: '42652 50001', marca: 'DUNLOP', veiculo: 'ETIOS', desc: '175/65R14 82T SP Touring T1' },
    { codigo: '42652 50002', marca: 'DUNLOP', veiculo: 'YARYS / ETIOS', desc: '185/60R15 84H Enasave EC300+' },
    { codigo: '42652 51002', marca: 'DUNLOP', veiculo: 'PRIUS', desc: '195/60R15 88V SP Sport LM704' },
    { codigo: '42652 51003', marca: 'DUNLOP', veiculo: 'PRIUS', desc: '195/65R15 91H SP Sport LM704' },
    { codigo: '42652 51004', marca: 'DUNLOP', veiculo: 'COROLLA', desc: '205/55R16 91V SP Sport LM704' },
    { codigo: '42652 51005', marca: 'DUNLOP', veiculo: 'COROLLA', desc: '215/50R17 91V SP Sport LM704' },
    { codigo: '42652 51007', marca: 'DUNLOP', veiculo: 'COROLLA CROSS', desc: '215/60R17 96H Enasave EC300+' },
    { codigo: '42652 51011', marca: 'DUNLOP', veiculo: 'HILUX/SW4', desc: '265/65R17 112S Grandtrek AT25' },
    { codigo: '42652 52005', marca: 'DUNLOP', veiculo: 'SW4', desc: '265/60R18 110H Grandtrek AT25' },

    // --- MICHELIN ---
    { codigo: '42652 60001', marca: 'MICHELIN', veiculo: 'ETIOS', desc: '175/65R14 82T Energy XM2' },
    { codigo: '42652 60002', marca: 'MICHELIN', veiculo: 'YARIS', desc: '185/60R15 88H XL Primacy 4' },
    { codigo: '42652 61001', marca: 'MICHELIN', veiculo: 'ETIOS', desc: '185/70R14 88H Energy XM2' },
    { codigo: '42652 61002', marca: 'MICHELIN', veiculo: 'PRIUS', desc: '195/60 R15 88H Energy XM2' },
    { codigo: '42652 61203', marca: 'MICHELIN', veiculo: 'PRIUS', desc: '195/65 R15 91H Primacy 4' },
    { codigo: '42652 61004', marca: 'MICHELIN', veiculo: 'COROLLA', desc: '205/55R16 91V Primacy 4' },
    { codigo: '42652 61105', marca: 'MICHELIN', veiculo: 'COROLLA', desc: '215/50R17 95W XL Primacy 4' },
    { codigo: '42652 61006', marca: 'MICHELIN', veiculo: 'COROLLA', desc: '225/45 R17 94W XL Primacy 4' },
    { codigo: '42652 64003', marca: 'MICHELIN', veiculo: 'COROLLA CROSS', desc: '225/60 R18 104V XL Primacy 4' },
    { codigo: '42652 62002', marca: 'MICHELIN', veiculo: 'HILUX/SW4', desc: '265/70 R16 112T LTX Force (A/T)' },
    { codigo: '42652 63102', marca: 'MICHELIN', veiculo: 'HILUX/SW4', desc: '265/65 R17 112T X LT A/S (H/T)' },
    { codigo: '42652 62015', marca: 'MICHELIN', veiculo: 'SW4', desc: '265/60R18 110H LTX Force (A/T)' },

    // --- PIRELLI ---
    { codigo: '42652 80001', marca: 'PIRELLI', veiculo: 'ETIOS', desc: '175/65R14 82T P1cint' },
    { codigo: '42652 80002', marca: 'PIRELLI', veiculo: 'COROLLA', desc: '185/60R15 88H XL P1cint' },
    { codigo: '42652 81001', marca: 'PIRELLI', veiculo: 'ETIOS/YARIS', desc: '185/70R14 88H P1cint' },
    { codigo: '42652 81102', marca: 'PIRELLI', veiculo: 'PRIUS', desc: '195/60R15 88V P1cint' },
    { codigo: '42652 81104', marca: 'PIRELLI', veiculo: 'COROLLA', desc: '205/55R16 91V P7cint' },
    { codigo: '42652 81005', marca: 'PIRELLI', veiculo: 'COROLLA', desc: '215/50R17 91V P7cint' },
    { codigo: '42652 81006', marca: 'PIRELLI', veiculo: 'COROLLA', desc: '225/45R17 91W P7cint' },
    { codigo: '42652 81108', marca: 'PIRELLI', veiculo: 'COROLLA CROSS', desc: '225/50R18 95V P7cint' },
    { codigo: '42652 83011', marca: 'PIRELLI', veiculo: 'HILUX/SW4', desc: '265/65R17 112T S-ATR' },
    { codigo: '42652 82105', marca: 'PIRELLI', veiculo: 'SW4', desc: '265/60R18 110H S-VERD' },

    // --- YOKOHAMA ---
    { codigo: '42652 70101', marca: 'YOKOHAMA', veiculo: 'ETIOS', desc: '175/65R14 82T ES32' },
    { codigo: '42652 70102', marca: 'YOKOHAMA', veiculo: 'YARIS', desc: '185/60R15 84H ES32' },
    { codigo: '42652 71101', marca: 'YOKOHAMA', veiculo: 'ETIOS/YARIS', desc: '185/70R14 88T ES32' },
    { codigo: '42652 71102', marca: 'YOKOHAMA', veiculo: 'PRIUS', desc: '195/60R15 88H ES32' },
    { codigo: '42652 71104', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: '205/55R16 91V Advan A460' },
    { codigo: '42652 71014', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: '205/55R16 91V ES32' },
    { codigo: '42652 71105', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: '215/50R17 95V ES32' },
    { codigo: '42652 74001', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: '225/65R17 102H Geolandar G91AV' },
    { codigo: '42652 74002', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: '235/55R18 100V Geolandar SUV G055' },
    { codigo: '42652 73102', marca: 'YOKOHAMA', veiculo: 'HILUX/SW4', desc: '265/65R17 112H Geolandar G056 H/T' },
    { codigo: '42652 72105', marca: 'YOKOHAMA', veiculo: 'SW4', desc: '265/60R18 110H Geolandar G056 H/T' },
];

function renderizarTabela(filtro = "") {
    const corpoTabela = document.getElementById('corpoTabela');
    corpoTabela.innerHTML = ""; 

    const filtrados = dadosPneus.filter(item => 
        item.codigo.toLowerCase().includes(filtro.toLowerCase()) ||
        item.marca.toLowerCase().includes(filtro.toLowerCase())
    );

    filtrados.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <a href="javascript:void(0)" 
                   onclick="abrirModalEtiqueta('${item.codigo}', '${item.desc}')" 
                   style="color: #2c343a; font-weight: bold; text-decoration: underline;">
                   ${item.codigo}
                </a>
            </td>
            <td><strong style="color: var(--cor-primaria);">${item.marca}</strong></td>
            <td>${item.veiculo}</td>
            <td><span class="status-badge">${item.desc}</span></td>
        `;
        corpoTabela.appendChild(tr);
    });
}

function abrirModalEtiqueta(codigo, descricao) {
    const modal = document.getElementById('modal-etiqueta');
    const area = document.getElementById('area-impressao');
    
    // Gera 4 repetições conforme sua imagem de referência
    let conteudo = '';
    for(let i = 0; i < 4; i++) {
        conteudo += `
            <div class="bloco-etiqueta">
                <h1>${codigo}</h1>
                <p>PNEU ${descricao.toUpperCase()}</p>
            </div>
        `;
    }
    
    area.innerHTML = conteudo;
    modal.style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modal-etiqueta').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarTabela();
    document.getElementById('inputBusca').addEventListener('input', (e) => renderizarTabela(e.target.value));
});