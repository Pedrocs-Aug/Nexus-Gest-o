/**
 * Banco de Dados Consolidado e Validado - Nexus Gestão
 * Fontes: Bridgestone, Dunlop, Michelin, Pirelli e Yokohama
 */
const dadosPneus = [
    { codigo: '08880-84546', categoria: 'ÓLEO MOTOR', desc: 'MINERAL 10W30 API SN', medida : '24x1L' },
{ codigo: '08880-84556', categoria: 'ÓLEO MOTOR', desc: 'SEMISSINTÉTICO 10W40 API SP', medida : '24x1L' },
{ codigo: '08880-84536', categoria: 'ÓLEO MOTOR', desc: 'SEMISSINTÉTICO 5W30 API SP/GF-6', medida : '24x1L' },
{ codigo: '08880-84530', categoria: 'ÓLEO MOTOR', desc: 'SEMISSINTÉTICO 5W30 API SP/GF-6', medida : 'Tambor 200L' },
{ codigo: '08880-84537', categoria: 'ÓLEO MOTOR', desc: 'SEMISSINTÉTICO 5W30 API SP/GF-6', medida : 'Granel' },
{ codigo: '08880-86116', categoria: 'ÓLEO MOTOR', desc: 'SEMISSINTÉTICO 0W20 API SP', medida : '24x1L' },
{ codigo: '08880-86120', categoria: 'ÓLEO MOTOR', desc: 'AL SEMISSINTÉTICO 0W20 API SP', medida : '24x1L' },
{ codigo: '08880-85286', categoria: 'ÓLEO MOTOR', desc: 'SINTÉTICO 5W30 ACEA C2 API SN', medida : '24x1L' },
{ codigo: '08880-85280', categoria: 'ÓLEO MOTOR', desc: 'SINTÉTICO 5W30 ACEA C2 API SN', medida : 'Tambor 200L' },
{ codigo: '08880-84550', categoria: 'ÓLEO MOTOR', desc: 'EXCLUSIVO TSERVICE - SEMISSINTÉTICO 10W40 API SP', medida : 'Tambor200L' },
{ codigo: '08880-84530TS ', categoria: 'ÓLEO MOTOR', desc: 'EXCLUSIVO TSERVICE - SEMISSINTÉTICO 5W30 API SP', medida : 'Tambor 200L' },
{ codigo: '08880-80000-2M', categoria: 'ÓLEO MOTOR', desc: 'EXCLUSIVO TSERVICE - MOBIL SUPER 2000 X1 15W40', medida : '24x1L' },
{ codigo: '08880-80001-2M', categoria: 'ÓLEO MOTOR', desc: 'EXCLUSIVO TSERVICE - MOBIL SUPER 2000 X1 15W40', medida : 'Tambor 200L' },
{ codigo: '08880-80005-2M', categoria: 'ÓLEO MOTOR', desc: 'EXCLUSIVO TSERVICE - MOBIL SUPER 3000 EURO DIESEL 5W30', medida : '24X1L' },
{ codigo: '08880-80002-2M', categoria: 'ÓLEO MOTOR', desc: 'EXCLUSIVO TSERVICE - MOBIL SUPER 3000 FORM F 5W20', medida : '24x1L' },
{ codigo: '08880-80003-2M', categoria: 'ÓLEO MOTOR', desc: 'EXCLUSIVO TSERVICE - MOBIL SUPER 3000 X3 5W40', medida : '24x1L' },
{ codigo: '08880-80004-2M', categoria: 'ÓLEO MOTOR', desc: 'EXCLUSIVO TSERVICE - MOBIL SUPER 3000 X3 5W40', medida : 'Tambor 200L' },
{ codigo: '08886-81936', categoria: 'FLUÍDO DIREÇÃO', desc: 'GENUINE PSF', medida : '24x1L' },
{ codigo: '08886-81206', categoria: 'FLUÍDO TRANSMISSÃO AUTOMÁTICA', desc: 'ATF DIII', medida : '24x1L' },
{ codigo: '08886-81017', categoria: 'FLUÍDO TRANSMISSÃO AUTOMÁTICA', desc: 'E-ATF T IV', medida : '6x0,946L' },
{ codigo: '08886-81926', categoria: 'FLUÍDO TRANSMISSÃO AUTOMÁTICA', desc: 'ATF WS', medida : '24x1L' },
{ codigo: '08886-81926', categoria: 'FLUÍDO TRANSMISSÃO AUTOMÁTICA', desc: 'AL ATF WS', medida : 'Balde 20L' },
{ codigo: '08886-02505', categoria: 'FLUÍDO TRANSMISSÃO AUTOMÁTICA', desc: 'ATF CVT', medida : '6x4L' },
{ codigo: '08886-02505', categoria: 'FLUÍDO TRANSMISSÃO AUTOMÁTICA', desc: 'AL ATF CVT', medida : 'Balde 20L' },
{ codigo: '08886-81915', categoria: 'FLUÍDO TRANSMISSÃO AUTOMÁTICA', desc: 'ATF CVT FLUID FE', medida : '4x4L' },
{ codigo: '08885-81206', categoria: 'FLUÍDO TRANSMISSÃO MANUAL', desc: 'MT GO80W90', medida : '24x1L' },
{ codigo: '08886-81018', categoria: 'FLUÍDO TRANSMISSÃO MANUAL', desc: 'GO SUPER 75W90', medida : '24x1L' },
{ codigo: '08885-81400', categoria: 'FLUÍDO TRANSMISSÃO MANUAL', desc: 'MT GO LV 75W', medida : '12x1L' },
{ codigo: '08885-81212', categoria: 'ÓLEO DIFERENCIAL', desc: 'HYPOID GO LSD 85W-90', medida : 'Balde 20L' },
{ codigo: '08885-81100', categoria: 'ÓLEO DIFERENCIAL', desc: 'DIFF GO 80W90', medida : '24x1L' },
{ codigo: '08885-81101', categoria: 'ÓLEO DIFERENCIAL', desc: 'DIFF GO 80W90', medida : 'Tambor 200L' },
{ codigo: '08885-81060', categoria: 'ÓLEO DIFERENCIAL', desc: 'DIFF GO LT 75W85', medida : '24x1L' },
{ codigo: '08885-81061', categoria: 'ÓLEO DIFERENCIAL', desc: 'AL DIFF MOBILUBE HD-A 85W-90', medida : '24x1L' },
{ codigo: '08885-81062', categoria: 'ÓLEO DIFERENCIAL', desc: 'AL DIFF MOBILUBE HD-A 85W-90', medida : '20L' },
{ codigo: '08885-81080', categoria: 'ÓLEO DIFERENCIAL', desc: 'TC GO LF 75W', medida : '24x1L' },
{ codigo: '08889-80091', categoria: 'FLUÍDO RADIADOR (LÍQUIDO ARREFECIMENTO)', desc: 'GS LONG LIFE', medida : '12x1L' },
{ codigo: '08889-80093', categoria: 'FLUÍDO RADIADOR (LÍQUIDO ARREFECIMENTO)', desc: 'TI EXCLUSIVO TSERVICE - TIRRENO ADITECH OT-C 35L', medida : '12X1L' },
{ codigo: '08889-80094', categoria: 'FLUÍDO RADIADOR (LÍQUIDO ARREFECIMENTO)', desc: 'TI EXCLUSIVO TSERVICE - TIRRENO GLOBAL 35R', medida : '12X1L' },
{ codigo: '08823-80021', categoria: 'FLUÍDO DE FREIO', desc: 'BR BRAKE FLUID', medida : '24x355ml' },
{ codigo: '08823-80022', categoria: 'FLUÍDO DE FREIO', desc: 'TI EXCLUSIVO TSERVICE - TIRRENO FLUIDTECH DOT 3', medida : '20X0.5L' },
{ codigo: '08823-80023', categoria: 'FLUÍDO DE FREIO', desc: 'TI EXCLUSIVO TSERVICE - TIRRENO FLUIDTECH DOT 4', medida : '20X0.5L' },
{ codigo: '08823-80024', categoria: 'FLUÍDO DE FREIO', desc: 'TI EXCLUSIVO TSERVICE - TIRRENO FLUIDTECH DOT 4 LV', medida : '20X0.5L' },
{ codigo: '08884-91001', categoria: 'LIMPA PARA-BRISAS', desc: 'WWF', medida : '24x355ml' },
{ codigo: '08884-91002', categoria: 'LIMPA PARA-BRISAS', desc: 'TI EXCLUSIVO TSERVICE - TIRRENO LIMPA PARA-BRISA', medida : '30X0.1L' },
{ codigo: '08884-91100', categoria: 'ÁGUA DESMINERALIZADA', desc: 'TI  EXCLUSIVO TSERVICE - TIRRENO ÁGUA DESMINERALIZADA', medida : '12X1L' }
];

/**
 * Função principal para renderizar a tabela com os novos campos e coluna de cópia
 */
function renderizarTabela(filtro = "") {
    const corpoTabela = document.getElementById('corpoTabela');
    corpoTabela.innerHTML = "";

    // Divide o termo de busca em múltiplas palavras (critérios)
    const termos = filtro.toLowerCase().trim().split(/\s+/);

    const filtrados = dadosPneus.filter(item => {
        // Para cada pneu, verifica se TODAS as palavras digitadas existem em algum campo
        return termos.every(termo => {
            return (
                item.codigo.toLowerCase().includes(termo) ||
                item.categoria.toLowerCase().includes(termo) ||
                item.medida.toLowerCase().includes(termo) ||
                item.desc.toLowerCase().includes(termo)
            );
        });
    });

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
            <td><strong style="color: var(--cor-primaria);">${item.categoria}</strong></td>
            <td>${item.medida}</td>
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
        if (toast) toast.classList.add('mostrar');

        setTimeout(() => {
            elemento.style.color = originalColor;
            if (toast) toast.classList.remove('mostrar');
        }, 2000);
    });
}

function abrirModalEtiqueta(codigo, descricao) {
    const modal = document.getElementById('modal-etiqueta');
    const area = document.getElementById('area-impressao');

    let conteudo = '';
    for (let i = 0; i < 4; i++) {
        if (i === 0) {
            conteudo += `
        <div class="bloco-etiqueta">
            <h1 class="codigo-grande">${codigo}</h1>
            <p class="descricao-pneu">PNEU ${descricao.toUpperCase()}</p>
            
            <input type="text" class="input-etiqueta-extra" 
                   placeholder="Digite o valor..." oninput="replicarInfo(this.value)">
            
            <p class="alvo-replica somente-impressao"></p>
        </div>
    `;
        } else {
            // RESTANTES ETIQUETAS: Apenas o P que recebe o texto
            conteudo += `
                <div class="bloco-etiqueta">
                    <h1 class="codigo-grande">${codigo}</h1>
                    <p class="descricao-pneu">PNEU ${descricao.toUpperCase()}</p>
                    <p class="alvo-replica"></p>
                </div>
            `;
        }
    }

    area.innerHTML = conteudo;
    modal.style.display = 'flex';
}

function replicarInfo(valor) {
    const campos = document.querySelectorAll('.alvo-replica');
    const input = document.querySelector('.input-etiqueta-extra');
    
    // Remove tudo o que não for dígito
    let apenasNumeros = valor.replace(/\D/g, "");
    
    // 1. Verificação de Vazio ou Zero
    // Se não houver números ou se o valor for "000" (que resultaria em 0,00)
    if (apenasNumeros === "" || parseInt(apenasNumeros) === 0) {
        campos.forEach(campo => campo.textContent = "");
        if (input) input.value = ""; // Limpa o input para não mostrar 0,00
        return;
    }

    // Converte para valor numérico (centavos)
    let valorNumerico = (parseFloat(apenasNumeros) / 100).toFixed(2);
    
    if (isNaN(valorNumerico)) {
        campos.forEach(campo => campo.textContent = "");
        return;
    }

    // Formata para o padrão brasileiro R$
    const formatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorNumerico);

    // Atualiza o input para mostrar a formatação enquanto o usuário digita
    if (input) {
        input.value = formatado;
    }

    // Replica o valor formatado para as etiquetas
    campos.forEach(campo => {
        campo.textContent = formatado;
    });
}

function fecharModal() {
    document.getElementById('modal-etiqueta').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarTabela();
    document.getElementById('inputBusca').addEventListener('input', (e) => renderizarTabela(e.target.value));
});