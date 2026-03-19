// Referências dos elementos do DOM
const inputPdf = document.getElementById('input-pdf');
const listaArquivos = document.getElementById('lista-arquivos');
const btnImprimir = document.getElementById('btn-imprimir-tudo');
const dropzone = document.getElementById('dropzone');

let arquivosSelecionados = [];

// 1. Escutar seleção de arquivos
inputPdf.addEventListener('change', (e) => {
    adicionarArquivos(e.target.files);
});

// 2. Lógica para adicionar e listar arquivos
function adicionarArquivos(files) {
    const novosArquivos = Array.from(files);
    arquivosSelecionados = [...arquivosSelecionados, ...novosArquivos];
    atualizarInterface();
}

function atualizarInterface() {
    listaArquivos.innerHTML = '';
    
    arquivosSelecionados.forEach((file, index) => {
        const item = document.createElement('div');
        item.className = 'file-item';
        item.innerHTML = `
            <div class="file-info">
                <span class="file-index">${index + 1}</span>
                <span>📄 ${file.name}</span>
            </div>
            <button onclick="removerArquivo(${index})" 
                    style="color: #e81d1d; border:none; background:none; cursor:pointer; font-weight:bold; padding: 5px 10px;">
                X
            </button>
        `;
        listaArquivos.appendChild(item);
    });

    btnImprimir.style.display = arquivosSelecionados.length > 0 ? 'block' : 'none';
}

function removerArquivo(index) {
    arquivosSelecionados.splice(index, 1);
    atualizarInterface();
}

// 3. A Mágica: Mesclar, Gerar Relatório e Imprimir
btnImprimir.addEventListener('click', async () => {
    if (arquivosSelecionados.length === 0) return;

    btnImprimir.innerText = 'Processando...';
    btnImprimir.disabled = true;

    try {
        // Criar o documento mestre
        const pdfMesclado = await PDFLib.PDFDocument.create();

        // --- BUSCA DO LOGO ---
        // Buscando o logo que você definiu na estrutura da Nexus
        const logoUrl = '../img/img-menus/nexus_logo.png';
        const logoBytes = await fetch(logoUrl).then(res => res.arrayBuffer());
        const nexusLogo = await pdfMesclado.embedPng(logoBytes);
        const logoDims = nexusLogo.scale(0.2); // Ajuste de escala do logo

        // 1. Mesclar os PDFs enviados
        for (const arquivo of arquivosSelecionados) {
            const bytes = await arquivo.arrayBuffer();
            const pdfDoc = await PDFLib.PDFDocument.load(bytes);
            const paginasCopiadas = await pdfMesclado.copyPages(pdfDoc, pdfDoc.getPageIndices());
            paginasCopiadas.forEach(pagina => pdfMesclado.addPage(pagina));
        }

        // 2. CRIAR PÁGINA DE RELATÓRIO FINAL
        const paginaRelatorio = pdfMesclado.addPage([595.28, 841.89]); // A4
        const { width, height } = paginaRelatorio.getSize();
        
        const fontNegrito = await pdfMesclado.embedStandardFont(PDFLib.StandardFonts.HelveticaBold);
        const fontNormal = await pdfMesclado.embedStandardFont(PDFLib.StandardFonts.Helvetica);

        // --- POSICIONAMENTO ---
        
        // 1. Logo (Bem no topo)
        paginaRelatorio.drawImage(nexusLogo, {
            x: 50,
            y: height - 100, // Subimos o logo (antes estava em -140)
            width: logoDims.width,
            height: logoDims.height,
        });

        // 2. Título (Abaixo do logo)
        paginaRelatorio.drawText('RELATÓRIO DE IMPRESSÃO', {
            x: 50,
            y: height - 150, // Espaço confortável abaixo do logo
            size: 18,
            font: fontNegrito,
            color: PDFLib.rgb(0.91, 0.11, 0.11), 
        });

        // 3. Informações (Descendo o Y para não encavalar)
        const dataAtual = new Date().toLocaleString('pt-BR');
        paginaRelatorio.drawText(`Data: ${dataAtual}`, { x: 50, y: height - 180, size: 10, font: fontNormal });
        paginaRelatorio.drawText(`Responsável: Pedro Augusto`, { x: 50, y: height - 195, size: 10, font: fontNormal });
        paginaRelatorio.drawText(`Total de Documentos: ${arquivosSelecionados.length}`, { x: 50, y: height - 210, size: 10, font: fontNormal });

        // 4. Lista de Arquivos (Começando mais abaixo)
        let yPos = height - 250; // Começa a lista com um respiro maior
        paginaRelatorio.drawText('ARQUIVOS PROCESSADOS:', { x: 50, y: yPos, size: 12, font: fontNegrito });
        yPos -= 25; // Espaço entre o título da lista e o primeiro item

        arquivosSelecionados.forEach((file, index) => {
            if (yPos > 60) {
                paginaRelatorio.drawText(`${index + 1}. ${file.name}`, { x: 60, y: yPos, size: 10, font: fontNormal });
                yPos -= 18; // Espaçamento entre linhas da lista
            }
        });

        // 3. Gerar e Abrir
        const pdfFinalBytes = await pdfMesclado.save();
        const blob = new Blob([pdfFinalBytes], { type: 'application/pdf' });
        const urlFinal = URL.createObjectURL(blob);

        const win = window.open(urlFinal, '_blank');
        if (win) {
            win.focus();
            setTimeout(() => win.print(), 500);
        }

    } catch (erro) {
        console.error('Erro no processamento:', erro);
        alert('Erro ao buscar o logo ou processar PDFs. Verifique se a imagem está na pasta correta.');
    } finally {
        btnImprimir.innerText = 'Mesclar e Abrir Fila de Impressão';
        btnImprimir.disabled = false;
    }
});

// Drag & Drop
dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('dragover'); });
dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    adicionarArquivos(e.dataTransfer.files);
});