/**
 * Banco de dados consolidado das planilhas: 
 * Yokohama, Dunlop, Michelin, Pirelli e Bridgestone
 */
const dadosPneus = [
    // --- BRIDGESTONE ---
    { codigo: '4265290001', marca: 'BRIDGESTONE', veiculo: 'ETIOS', desc: '175/65R14 82T F-700' },
    { codigo: '4265290102', marca: 'BRIDGESTONE', veiculo: 'YARIS', desc: '185/60R15 84H Ecopia EP150' },
    { codigo: '4265290002', marca: 'BRIDGESTONE', veiculo: 'YARIS/GOL/ARGO', desc: '185/60R15 84H Turanza ER300' },
    { codigo: '4265291102', marca: 'BRIDGESTONE', veiculo: 'FIELDER/PRIUS', desc: '195/60R15 88V Ecopia EP150' },
    { codigo: '4265291203', marca: 'BRIDGESTONE', veiculo: 'PRIUS', desc: '195/65R15 91H Ecopia EP150' },
    { codigo: '4265291014', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: '205/55R16 91V Ecopia EP150' },
    { codigo: '4265291006', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: '225/45R17 91W Turanza T005' },
    { codigo: '4265291008', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: '225/50R18 95V Alenza 001' },
    { codigo: '4265294103', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: '225/60R18 100H Alenza H/L 33' },
    { codigo: '4265294003', marca: 'BRIDGESTONE', veiculo: 'LEXUS NX', desc: '225/60R18 100H Dueler H/L 33' },
    { codigo: '4265295003', marca: 'BRIDGESTONE', veiculo: 'CAMRY', desc: '235/45R18 94W Turanza T005A' },
    { codigo: '4265294002', marca: 'BRIDGESTONE', veiculo: 'LEXUS NX200T', desc: '235/55R18 100V Dueler H/L 33' },

    // --- DUNLOP ---
    { codigo: '4265250001', marca: 'DUNLOP', veiculo: 'ETIOS', desc: '175/65R14 82T SP Touring T1' },
    { codigo: '4265250002', marca: 'DUNLOP', veiculo: 'YARYS / ETIOS', desc: '185/60R15 84H Enasave EC300+' },
    { codigo: '4265251002', marca: 'DUNLOP', veiculo: 'PRIUS', desc: '195/60R15 88V SP Sport LM704' },
    { codigo: '4265251003', marca: 'DUNLOP', veiculo: 'PRIUS', desc: '195/65R15 91H SP Sport LM704' },
    { codigo: '4265251004', marca: 'DUNLOP', veiculo: 'COROLLA', desc: '205/55R16 91V SP Sport LM704' },
    { codigo: '4265251005', marca: 'DUNLOP', veiculo: 'COROLLA', desc: '215/50R17 91V SP Sport LM704' },
    { codigo: '4265251007', marca: 'DUNLOP', veiculo: 'COROLLA CROSS', desc: '215/60R17 96H Enasave EC300+' },
    { codigo: '4265251011', marca: 'DUNLOP', veiculo: 'HILUX/SW4', desc: '265/65R17 112S Grandtrek AT25' },
    { codigo: '4265252005', marca: 'DUNLOP', veiculo: 'SW4', desc: '265/60R18 110H Grandtrek AT25' },

    // --- MICHELIN ---
    { codigo: '4265260001', marca: 'MICHELIN', veiculo: 'ETIOS', desc: '175/65R14 82T Energy XM2' },
    { codigo: '4265260002', marca: 'MICHELIN', veiculo: 'YARIS', desc: '185/60R15 88H XL Primacy 4' },
    { codigo: '4265261001', marca: 'MICHELIN', veiculo: 'ETIOS', desc: '185/70R14 88H Energy XM2' },
    { codigo: '4265261002', marca: 'MICHELIN', veiculo: 'PRIUS', desc: '195/60 R15 88H Energy XM2' },
    { codigo: '4265261203', marca: 'MICHELIN', veiculo: 'PRIUS', desc: '195/65 R15 91H Primacy 4' },
    { codigo: '4265261004', marca: 'MICHELIN', veiculo: 'COROLLA', desc: '205/55R16 91V Primacy 4' },
    { codigo: '4265261105', marca: 'MICHELIN', veiculo: 'COROLLA', desc: '215/50R17 95W XL Primacy 4' },
    { codigo: '4265261006', marca: 'MICHELIN', veiculo: 'COROLLA', desc: '225/45 R17 94W XL Primacy 4' },
    { codigo: '4265264003', marca: 'MICHELIN', veiculo: 'COROLLA CROSS', desc: '225/60 R18 104V XL Primacy 4' },
    { codigo: '4265262002', marca: 'MICHELIN', veiculo: 'HILUX/SW4', desc: '265/70 R16 112T LTX Force (A/T)' },
    { codigo: '4265263102', marca: 'MICHELIN', veiculo: 'HILUX/SW4', desc: '265/65 R17 112T X LT A/S (H/T)' },
    { codigo: '4265262015', marca: 'MICHELIN', veiculo: 'SW4', desc: '265/60R18 110H LTX Force (A/T)' },

    // --- PIRELLI ---
    { codigo: '4265280001', marca: 'PIRELLI', veiculo: 'ETIOS', desc: '175/65R14 82T P1cint' },
    { codigo: '4265280002', marca: 'PIRELLI', veiculo: 'COROLLA', desc: '185/60R15 88H XL P1cint' },
    { codigo: '4265281001', marca: 'PIRELLI', veiculo: 'ETIOS/YARIS', desc: '185/70R14 88H P1cint' },
    { codigo: '4265281102', marca: 'PIRELLI', veiculo: 'PRIUS', desc: '195/60R15 88V P1cint' },
    { codigo: '4265281104', marca: 'PIRELLI', veiculo: 'COROLLA', desc: '205/55R16 91V P7cint' },
    { codigo: '4265281005', marca: 'PIRELLI', veiculo: 'COROLLA', desc: '215/50R17 91V P7cint' },
    { codigo: '4265281006', marca: 'PIRELLI', veiculo: 'COROLLA', desc: '225/45R17 91W P7cint' },
    { codigo: '4265281108', marca: 'PIRELLI', veiculo: 'COROLLA CROSS', desc: '225/50R18 95V P7cint' },
    { codigo: '4265283011', marca: 'PIRELLI', veiculo: 'HILUX/SW4', desc: '265/65R17 112T S-ATR' },
    { codigo: '4265282105', marca: 'PIRELLI', veiculo: 'SW4', desc: '265/60R18 110H S-VERD' },

    // --- YOKOHAMA ---
    { codigo: '4265270101', marca: 'YOKOHAMA', veiculo: 'ETIOS', desc: '175/65R14 82T ES32' },
    { codigo: '4265270102', marca: 'YOKOHAMA', veiculo: 'YARIS', desc: '185/60R15 84H ES32' },
    { codigo: '4265271101', marca: 'YOKOHAMA', veiculo: 'ETIOS/YARIS', desc: '185/70R14 88T ES32' },
    { codigo: '4265271102', marca: 'YOKOHAMA', veiculo: 'PRIUS', desc: '195/60R15 88H ES32' },
    { codigo: '4265271104', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: '205/55R16 91V Advan A460' },
    { codigo: '4265271014', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: '205/55R16 91V ES32' },
    { codigo: '4265271105', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: '215/50r17 95V ES32' },
    { codigo: '4265274001', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: '225/65R17 102H Geolandar G91AV' },
    { codigo: '4265274002', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: '235/55R18 100V Geolandar SUV G055' },
    { codigo: '4265273102', marca: 'YOKOHAMA', veiculo: 'HILUX/SW4', desc: '265/65R17 112H Geolandar G056 H/T' },
    { codigo: '4265272105', marca: 'YOKOHAMA', veiculo: 'SW4', desc: '265/60R18 110H Geolandar G056 H/T' },
];
function renderizarTabela(filtro = "") {
    const corpoTabela = document.getElementById('corpoTabela');
    corpoTabela.innerHTML = ""; 

    const busca = filtro.toLowerCase();

    const filtrados = dadosPneus.filter(item => 
        item.codigo.toLowerCase().includes(busca) ||
        item.marca.toLowerCase().includes(busca) ||
        item.veiculo.toLowerCase().includes(busca) ||
        item.desc.toLowerCase().includes(busca)
    );

    filtrados.forEach(item => {
        const tr = document.createElement('tr');
        tr.className = "row-highlight";
        
        tr.innerHTML = `
            <td style="font-family: monospace; color: #666;">${item.codigo}</td>
            <td><strong style="color: var(--cor-primaria);">${item.marca}</strong></td>
            <td>${item.veiculo}</td>
            <td><span class="status-badge">${item.desc}</span></td>
        `;
        
        corpoTabela.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarTabela();
    document.getElementById('inputBusca').addEventListener('input', (e) => renderizarTabela(e.target.value));
});