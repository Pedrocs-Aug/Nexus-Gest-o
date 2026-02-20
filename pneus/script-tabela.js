/**
 * Banco de Dados Consolidado e Validado - Nexus Gestão
 * Fontes: Bridgestone, Dunlop, Michelin, Pirelli e Yokohama
 */
const dadosPneus = [
    // --- BRIDGESTONE / FIRESTONE ---
    // --- LINHA ETIOS E YARIS (Aros 14 e 15) ---
    { codigo: '42652 90113', marca: 'FIRESTONE', veiculo: 'ETIOS', desc: 'PNEU 175/65 R14 82T F-700 FIRESTONE' },
    { codigo: '42652 90101', marca: 'BRIDGESTONE', veiculo: 'ETIOS', desc: 'PNEU 175/65R14 82T F-700 BRIDGESTONE' },
    { codigo: '42652 90001', marca: 'BRIDGESTONE', veiculo: 'ETIOS / YARIS', desc: 'PNEU 175/65R14 B250' },
    { codigo: '42652 90013', marca: 'FIRESTONE', veiculo: 'ETIOS', desc: 'PNEU 175/65R14 F-700 (82T)' },
    { codigo: '42652 90102', marca: 'BRIDGESTONE', veiculo: 'ETIOS / YARIS', desc: 'PNEU 185/60R15 84H ECOPIA EP150 BRIDGESTONE' },
    { codigo: '42652 90014', marca: 'FIRESTONE', veiculo: 'ETIOS / YARIS', desc: 'PNEU 185/60R15 84H F-700 FIRESTONE' },
    { codigo: '42652 90002', marca: 'BRIDGESTONE', veiculo: 'YARIS / COROLLA', desc: 'PNEU 185/60R15 84H TURANZA ER300' },
    { codigo: '42652 90104', marca: 'FIRESTONE', veiculo: 'ETIOS / YARIS', desc: 'PNEU F700 185/60R15' },

    // --- LINHA COROLLA (Sedan - Aros 15, 16 e 17) ---
    { codigo: '42652 91001', marca: 'FIRESTONE', veiculo: 'COROLLA (ANTIGO)', desc: 'PNEU 185/70 R14' },
    { codigo: '42652 91101', marca: 'FIRESTONE', veiculo: 'COROLLA (ANTIGO)', desc: 'PNEU 185/70R14 88T F' },
    { codigo: '42652 91002', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 195/60 R15' },
    { codigo: '42652 91102', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 195/60 R15 88H' },
    { codigo: '42652 91202', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 195/60R15 88V ECOPIA EP 150 BRIDGESTONE' },
    { codigo: '42652 91203', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 195/65R15 91H ECOPIA EP150' },
    { codigo: '42652 91003', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 195/65R15 91H ECOPIA EP150 BRIGESTONE' },
    { codigo: '42652 90114', marca: 'FIRESTONE', veiculo: 'COROLLA', desc: 'PNEU F700 195/65R15' },
    { codigo: '42652 91103', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU TURANZA 195/65' },
    { codigo: '42652 91004', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V TURANZA ER300' },
    { codigo: '42652 91015', marca: 'FIRESTONE', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 F-700 91V FIRESTONE' },
    { codigo: '42652 91014', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V ECOPIA EP150 BRIDGESTONE' },
    { codigo: '42652 91005', marca: 'BRIDGESTONE', veiculo: 'COROLLA ALTIS', desc: 'PNEU 215/50R17 91V TURANZA ER33 NRFT' },
    { codigo: '42652 91105', marca: 'BRIDGESTONE', veiculo: 'COROLLA ALTIS', desc: 'PNEU 215/50R17 95W XL TURANZA T005 NRFT' },
    { codigo: '42652 91016', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'TIRE 215/50R17 95W T' },
    { codigo: '42652 91110', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU TRNZ T005 215/5' },
    { codigo: '42652 91115', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'TIRE TURANZA 215/50R' },

    // --- LINHA COROLLA CROSS / RAV4 / CAMRY (Aros 17 e 18) ---
    { codigo: '42652 95002', marca: 'BRIDGESTONE', veiculo: 'CAMRY', desc: 'PNEU 215/55R17 93V TURANZA ER33' },
    { codigo: '42652 95102', marca: 'BRIDGESTONE', veiculo: 'CAMRY', desc: 'PNEU 215/55R17 94V TURANZA T005 NRFT' },
    { codigo: '42652 91006', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/45R17 91W TURANZA T005' },
    { codigo: '42652 98005', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50R/18 95V' },
    { codigo: '42652 91008', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50R18 95V ALENZA 001' },
    { codigo: '42652 99001', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU 225/50R18 95W T' },
    { codigo: '42652 94103', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU 225/60R18 100H ALENZA H/L 33' },
    { codigo: '42652 94001', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU 225/65 R17' },
    { codigo: '42652 94101', marca: 'FIRESTONE', veiculo: 'RAV4', desc: 'PNEU 225/65R17 102H DESTINATION LE2 NRFT' },
    { codigo: '42652 94002', marca: 'BRIDGESTONE', veiculo: 'RAV4 / SW4', desc: 'PNEU 235/55R18 100V DUELER H/L 33 NRFT' },

    // --- LINHA HILUX E SW4 (Aros 16, 17, 18 e 20) ---
    { codigo: '42652 92003', marca: 'BRIDGESTONE', veiculo: 'HILUX (BASE)', desc: 'PNEU 205/70 R16' },
    { codigo: '42652 92001', marca: 'BRIDGESTONE', veiculo: 'HILUX', desc: 'PNEU 255/70 R15' },
    { codigo: '42652 92005', marca: 'BRIDGESTONE', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110H DUELER H/T 684II' },
    { codigo: '42652 92105', marca: 'BRIDGESTONE', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110T DUELER H/T 684 II ECOPIA NRF' },
    { codigo: '42652 93001', marca: 'BRIDGESTONE', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65 R17 BRIDGESTONE DUELER HT 684 112S' },
    { codigo: '42652 93002', marca: 'BRIDGESTONE', veiculo: 'HILUX', desc: 'PNEU 265/65R17 112S DUELER A/T 693 III NRFT BRIDG' },
    { codigo: '42652 92106', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU 265/65R17 112T DESTINATION ATX NRFT FIRES' },
    { codigo: '42652 92002', marca: 'BRIDGESTONE', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112S DUELER H/T 840 NRFT' },
    { codigo: '42652 92102', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112T DESTINATION H/T FIRESTONE' },
    { codigo: '42652 92202', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112T, DESTINATION H/T NRFT FIRES' },
    { codigo: '42652 92004', marca: 'BRIDGESTONE', veiculo: 'HILUX', desc: 'PNEU LT265/75R16' },
    { codigo: '42652 94004', marca: 'BRIDGESTONE', veiculo: 'SW4 DIAMOND', desc: 'PNEU 235/50R20 100V ALENZA 001 BRIDGESTONE' },
    { codigo: '42652 97004', marca: 'BRIDGESTONE', veiculo: 'SW4', desc: 'PNEU 245/45RF20 99Y' },

    // --- LINHA ALENZA / DESTINATION / TURANZA (Geral/Outros) ---
    { codigo: '42652 94107', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: 'PNEU ALENZA 001 215/' },
    { codigo: '42652 94106', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: 'PNEU ALENZA 001 225/' },
    { codigo: '42652 94006', marca: 'BRIDGESTONE', veiculo: 'RAV4 / SW4', desc: 'PNEU ALENZA 001 235/' },
    { codigo: '42652 90004', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU DEST ATX 265/60' },
    { codigo: '42652 90008', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU DEST ATX 265/70' },
    { codigo: '42652 90003', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU DEST LE3 265/60' },
    { codigo: '42652 90006', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU DEST LE3 265/65' },
    { codigo: '42652 91112', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'TIRE TURANZA T005 22' },
    { codigo: '42652 96102', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'TIRE TURANZA T005 RF' },

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
    { codigo: '42652 62105', marca: 'MICHELIN', veiculo: 'SW4/HILUX', desc: '265/60R18 110H Primacy SUV (H/T)' },
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
    { codigo: '42652 84001', marca: 'PIRELLI', veiculo: 'RAV4', desc: '225/65R17 102H Scorpion Verde All Season' },
    { codigo: '42652 83011', marca: 'PIRELLI', veiculo: 'HILUX/SW4', desc: '265/65R17 112T Scorpion ATR' },
    { codigo: '42652 82105', marca: 'PIRELLI', veiculo: 'SW4', desc: '265/60R18 110H Scorpion Verde' },

    // --- YOKOHAMA ---
    { codigo: '42652 70101', marca: 'YOKOHAMA', veiculo: 'ETIOS', desc: '175/65R14 82T BluEarth ES32' },
    { codigo: '42652 70102', marca: 'YOKOHAMA', veiculo: 'YARIS', desc: '185/60R15 84H BluEarth ES32' },
    { codigo: '42652 71101', marca: 'YOKOHAMA', veiculo: 'ETIOS/YARIS', desc: '185/70R14 88T BluEarth ES32' },
    { codigo: '42652 71102', marca: 'YOKOHAMA', veiculo: 'PRIUS', desc: '195/60R15 88H BluEarth ES32' },
    { codigo: '42652 71104', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: '205/55R16 91V Advan A460' },
    { codigo: '42652 71014', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: '205/55R16 91V BluEarth ES32' },
    { codigo: '42652 71105', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: '215/50R17 95V BluEarth ES32' },
    { codigo: '42652 74001', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: '225/65R17 102H Geolandar SUV G055' },
    { codigo: '42652 74002', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: '235/55R18 100V Geolandar SUV G055' },
    { codigo: '42652 73102', marca: 'YOKOHAMA', veiculo: 'HILUX/SW4', desc: '265/65R17 112H Geolandar G056 H/T' },
    { codigo: '42652 72105', marca: 'YOKOHAMA', veiculo: 'SW4', desc: '265/60R18 110H Geolandar G056 H/T' },
];

/**
 * Função principal para renderizar a tabela com os novos campos e coluna de cópia
 */
function renderizarTabela(filtro = "") {
    const corpoTabela = document.getElementById('corpoTabela');
    corpoTabela.innerHTML = "";

    const termoBusca = filtro.toLowerCase();

    const filtrados = dadosPneus.filter(item =>
        item.codigo.toLowerCase().includes(termoBusca) ||
        item.marca.toLowerCase().includes(termoBusca) ||
        item.veiculo.toLowerCase().includes(termoBusca) ||
        item.desc.toLowerCase().includes(termoBusca)
    );

    filtrados.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <a href="javascript:void(0)" 
                   onclick="abrirModalEtiqueta('${item.codigo}', '${item.desc}')" 
                   class="codigo-link">
                   ${item.codigo}
                </a>
            </td>
            <td class="coluna-acao">
                <button class="btn-copiar" onclick="copiarTexto('${item.codigo}', this)" title="Copiar código">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>
            </td>
            <td><strong style="color: var(--cor-primaria);">${item.marca}</strong></td>
            <td>${item.veiculo}</td>
            <td><span class="status-badge">${item.desc}</span></td>
        `;
        corpoTabela.appendChild(tr);
    });
}

/**
 * Função de Cópia com Notificação Toast
 */
function copiarTexto(texto, elemento) {
    navigator.clipboard.writeText(texto).then(() => {
        // Feedback no botão
        const originalColor = elemento.style.color;
        elemento.style.color = "#28a745";
        
        // Exibir Toast
        const toast = document.getElementById('toast-container');
        if(toast) toast.classList.add('mostrar');

        setTimeout(() => {
            elemento.style.color = originalColor;
            if(toast) toast.classList.remove('mostrar');
        }, 2000);
    });
}

function abrirModalEtiqueta(codigo, descricao) {
    const modal = document.getElementById('modal-etiqueta');
    const area = document.getElementById('area-impressao');

    let conteudo = '';
    for (let i = 0; i < 4; i++) {
        conteudo += `
            <div class="bloco-etiqueta">
                <h1 class="codigo-grande">${codigo}</h1>
                <p class="descricao-pneu">PNEU ${descricao.toUpperCase()}</p>
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