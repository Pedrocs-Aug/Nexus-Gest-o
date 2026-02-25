/**
 * Banco de Dados Consolidado e Validado - Nexus Gestão
 * Fontes: Bridgestone, Dunlop, Michelin, Pirelli e Yokohama
 */
const dadosAcessorios = [
    // --- HILUX CABINE DUPLA POWER PACK MT ---
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro', pn: 'ATURY11401' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'AUTOMAÇÃO', produto: 'Carregador indução + USB-C', pn: 'ATURY12423' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'AUTOMAÇÃO', produto: 'Trava elétrica de caçamba', pn: 'ATURY12422' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ALARMES', produto: 'Alarme sonoro de marcha ré', pn: 'ATURY09515' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11407' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal (1)', pn: 'ATURY12406' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo tubular', pn: 'ATURY09514' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico com led', pn: 'ATURY06501' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico sem led', pn: 'ATURY04501' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ESTRIBOS', produto: 'Estribo traseiro mecânico para caçamba', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },

    // --- HILUX CABINE DUPLA POWER PACK AT ---
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Caçamba', pn: 'ATURY12421' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL – Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Logotipo Frontal', pn: 'ATURY04509' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'TAPETES', produto: 'Tapete organizador - transporte cargas', pn: 'ATURY09521' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'TAPETES', produto: 'Trava cargas T (3)', pn: 'ATURY11502' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'TAPETES', produto: 'Trava cargas ajustável (3)', pn: 'ATURY11503' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'TAPETES', produto: 'Trava cargas X (kit com 4) (3)', pn: 'ATURY11507' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'TAPETES', produto: 'Trava cargas barra (3)', pn: 'ATURY11508' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro', pn: 'ATURY11401' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'AUTOMAÇÃO', produto: 'Trava elétrica de caçamba', pn: 'ATURY12422' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ALARMES', produto: 'Alarme sonoro de marcha ré', pn: 'ATURY09515' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11407' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal (1)', pn: 'ATURY12406' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo tubular', pn: 'ATURY09514' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico com led', pn: 'ATURY06501' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico sem led', pn: 'ATURY04501' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ESTRIBOS', produto: 'Estribo traseiro mecânico para caçamba', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Caçamba', pn: 'ATURY12421' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL - Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca – Logotipo Frontal', pn: 'ATURY04509' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'TAPETES', produto: 'Tapete organizador - transporte cargas', pn: 'ATURY09521' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'TAPETES', produto: 'Trava cargas T (3)', pn: 'ATURY11502' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'TAPETES', produto: 'Trava cargas ajustável (3)', pn: 'ATURY11503' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'TAPETES', produto: 'Trava cargas X (kit com 4) (3)', pn: 'ATURY11507' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'TAPETES', produto: 'Trava cargas barra', pn: 'ATURY11508' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- HILUX CABINE DUPLA SR ---
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro', pn: 'ATURY11402' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'AUTOMAÇÃO', produto: 'Trava elétrica de caçamba', pn: 'ATURY12422' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11407' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal (1)', pn: 'ATURY12406' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo tubular', pn: 'ATURY09514' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico com led', pn: 'ATURY06501' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico sem led', pn: 'ATURY04501' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ESTRIBOS', produto: 'Estribo traseiro mecânico para caçamba', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação branca - caçamba', pn: 'ATURY12421' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL - Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Logotipo Frontal', pn: 'ATURY04509' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'TAPETES', produto: 'Tapete organizador - transporte cargas', pn: 'ATURY09521' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'TAPETES', produto: 'Trava cargas T (3)', pn: 'ATURY11502' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'TAPETES', produto: 'Trava cargas ajustável (3)', pn: 'ATURY11503' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'TAPETES', produto: 'Trava cargas X (kit com 4) (3)', pn: 'ATURY11507' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'TAPETES', produto: 'Trava cargas barra', pn: 'ATURY11508' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- HILUX CABINE DUPLA SRV ---
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro + Rebatimento de retrovisores', pn: 'ATURY11403' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'AUTOMAÇÃO', produto: 'Trava elétrica de caçamba', pn: 'ATURY12422' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11407' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal (1)', pn: 'ATURY12406' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo tubular', pn: 'ATURY09514' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico com led', pn: 'ATURY06501' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico sem led', pn: 'ATURY04501' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ESTRIBOS', produto: 'Estribo traseiro mecânico para caçamba', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Caçamba', pn: 'ATURY12421' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL - Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Logotipo Frontal', pn: 'ATURY04509' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'TAPETES', produto: 'Tapete organizador - transporte cargas', pn: 'ATURY09521' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'TAPETES', produto: 'Trava cargas T', pn: 'ATURY11502' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'TAPETES', produto: 'Trava cargas ajustável', pn: 'ATURY11503' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'TAPETES', produto: 'Trava cargas X (kit com 4)', pn: 'ATURY11507' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'TAPETES', produto: 'Trava cargas barra', pn: 'ATURY11508' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- HILUX CABINE DUPLA SRX ---
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro + Rebatimento de retrovisores', pn: 'ATURY11403' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'AUTOMAÇÃO', produto: 'Trava elétrica de caçamba', pn: 'ATURY12422' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11407' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12412' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo tubular', pn: 'ATURY09514' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico com led', pn: 'ATURY06501' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico sem led', pn: 'ATURY04501' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ESTRIBOS', produto: 'Estribo traseiro mecânico para caçamba', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida- Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca – Caçamba', pn: 'ATURY12421' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL - Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'TAPETES', produto: 'Tapete organizador - transporte cargas', pn: 'ATURY09521' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'TAPETES', produto: 'Trava cargas T (3)', pn: 'ATURY11502' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'TAPETES', produto: 'Trava cargas ajustável (3)', pn: 'ATURY11503' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'TAPETES', produto: 'Trava cargas X (kit com 4) (3)', pn: 'ATURY11507' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'TAPETES', produto: 'Trava cargas barra (3)', pn: 'ATURY11508' },
    { veiculo: 'HILUX CABINE DUPLA SRX', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- HILUX CABINE DUPLA SRX PLUS ---
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro + Rebatimento de retrovisores', pn: 'ATURY11403' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'AUTOMAÇÃO', produto: 'Trava elétrica de caçamba', pn: 'ATURY12422' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11407' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12412' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo tubular', pn: 'ATURY09514' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico com led', pn: 'ATURY06501' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico sem led', pn: 'ATURY04501' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ESTRIBOS', produto: 'Estribo traseiro mecânico para caçamba', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca – Caçamba', pn: 'ATURY12421' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL - Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'TAPETES', produto: 'Tapete organizador - transporte cargas', pn: 'ATURY09521' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'TAPETES', produto: 'Tapete organizador - transporte cargas', pn: 'ATURY09521' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'TAPETES', produto: 'Trava cargas T (3)', pn: 'ATURY11502' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'TAPETES', produto: 'Trava cargas ajustável (3)', pn: 'ATURY11503' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'TAPETES', produto: 'Trava cargas X (kit com 4) (3)', pn: 'ATURY11507' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'TAPETES', produto: 'Trava cargas barra (3)', pn: 'ATURY11508' },
    { veiculo: 'HILUX CABINE DUPLA SRX PLUS', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- Hilux Cabine Simples (MT ou AT) ---
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'AUTOMAÇÃO', produto: 'Kit de Vidros e Travas Elétricas', pn: 'ATURY04504' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'AUTOMAÇÃO', produto: 'Carregador indução + USB-C (1)', pn: 'ATURY04506' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'AUTOMAÇÃO', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ALARMES', produto: 'Alarme sonoro de marcha ré', pn: 'ATURY09515' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ALARMES', produto: 'Alarme completo com controle remoto', pn: 'ATURY09510' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11407' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo', pn: 'ATURY04505' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ESTRIBOS', produto: 'Estribo traseiro mecânico para caçamba', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Caçamba', pn: 'ATURY12421' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca – Logotipo Frontal', pn: 'ATURY04509' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'TAPETES', produto: 'Tapete organizador - transporte cargas', pn: 'ATURY09522' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'TAPETES', produto: 'Trava cargas T (3)', pn: 'ATURY11502' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'TAPETES', produto: 'Trava cargas ajustável (3)', pn: 'ATURY11503' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'TAPETES', produto: 'Trava cargas X (kit com 4) (3)', pn: 'ATURY11507' },
    { veiculo: 'HILUX CABINE SIMPLES (MT OU AT)', categoria: 'TAPETES', produto: 'Trava cargas barra (2)', pn: 'ATURY11508' },

    // --- Hilux Chassi (MT ou AT) ---

    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'AUTOMAÇÃO', produto: 'Kit de Vidros e Travas Elétricas', pn: 'ATURY04504' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'AUTOMAÇÃO', produto: 'Carregador indução + USB-C (1)', pn: 'ATURY04506' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'ALARMES', produto: 'Alarme sonoro de marcha ré', pn: 'ATURY09515' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'ALARMES', produto: 'Alarme completo com controle remoto', pn: 'ATURY09510' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo', pn: 'ATURY04505' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (1)', pn: 'ATURY12416' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (1)', pn: 'ATURY12419' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (1)', pn: 'ATURY12418' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (1)', pn: 'ATURY12417' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'HILUX CHASSI (MT OU AT)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca – Logotipo Frontal', pn: 'ATURY04509' },

    // --- SW4 SRX (5 e 7 Lugares) e Diamond ---
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro + Rebatimento de retrovisores', pn: 'ATURY11403' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11408' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12412' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico com led', pn: 'ATURY06502' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico sem led', pn: 'ATURY04502' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'SW4 SRX (5 E 7 LUGARES) E DIAMOND', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- Corolla Cross XR ---
    { veiculo: 'COROLLA CROSS XR', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Rebatimento + Tilt Down', pn: 'ATURY11412' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'ENGATES', produto: 'Modulo de Engate + Tomada 7 Pinos de Engate', pn: 'ATURY12402' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal (1)', pn: 'ATURY12408' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL - Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'COROLLA CROSS XR', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- Corolla Cross XRE ---

    { veiculo: 'COROLLA CROSS XRE', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Rebatimento + Tilt Down', pn: 'ATURY11412' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'ENGATES', produto: 'Modulo de Engate + Tomada 7 Pinos de Engate', pn: 'ATURY12402' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal (1)', pn: 'ATURY12408' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL - Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'COROLLA CROSS XRE', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- Corolla Cross XRX ---

    { veiculo: 'COROLLA CROSS XRX', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Teto Solar', pn: 'ATURY12401' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ENGATES', produto: 'Modulo de Engate + Tomada 7 Pinos de Engate', pn: 'ATURY12402' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera Frontal (1)', pn: 'ATURY12408' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Teto Solar (2)', pn: 'EM BREVE' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL - Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'COROLLA CROSS XRX', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- Corolla Cross XREH (Híbrido) ---

    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Teto solar', pn: 'ATURY12401' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'ENGATES', produto: 'Modulo de Engate + Tomada 7 Pinos de Engate', pn: 'ATURY12402' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL - Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'COROLLA CROSS XRX HÍBRIDO', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- Corolla Cross GR SPORT ---

    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Teto Solar', pn: 'ATURY12401' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'ENGATES', produto: 'Modulo de Engate + Tomada 7 Pinos de Engate', pn: 'ATURY12402' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Teto Solar (2)', pn: 'EM BREVE' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'COROLLA CROSS GR SPORT', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- Corolla GLI + XEI ---

    { veiculo: 'COROLLA GLI + XEI', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro + Rebatimento + Tilt Down', pn: 'ATURY11414' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'AUTOMAÇÃO', produto: 'Automação de abertura/fechamento Porta-Malas', pn: 'EM BREVE' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11411' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal (1)', pn: 'ATURY12409' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL - Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'COROLLA GLI + XEI', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- Corolla Altis Premium + Altis Premium Hybrid + GR Sport ---

    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro + Rebatimento + Tilt Down', pn: 'ATURY11412' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'AUTOMAÇÃO', produto: 'Automação de abertura/fechamento Porta-Malas', pn: 'EM BREVE' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11411' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal (1)', pn: 'ATURY12409' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Teto Solar (2)', pn: 'EM BREVE' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação DRL - Posição + repetidor de direcionais', pn: 'EM BREVE' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'COROLLA ALTIS PREMIUM + HYBRID + GR SPORT', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- Yaris Cross XR + XRE + XRE Híbrido ---
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro', pn: 'ATURY09502' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Retrovisor Tilt Down', pn: 'ATURY09503' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY09505' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal (1)', pn: 'ATURY09526' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Suporte para subwoofer (2)', pn: 'ATURY03507' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (3)', pn: 'ATURY12416' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (3)', pn: 'ATURY12419' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (3)', pn: 'ATURY12418' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Porta Objetos (3)', pn: 'ATURY12417' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'YARIS CROSS XR + XRE + XRE HÍBRIDO', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'ATURY12510' },

    // --- Yaris Cross XRX + XRX Híbrido ---

    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro', pn: 'ATURY09502' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Retrovisor Tilt Down', pn: 'ATURY09503' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'AUTOMAÇÃO', produto: 'Módulo do Teto Solar (cortina interna)', pn: 'EM BREVE' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY09506' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Suporte para subwoofer (2)', pn: 'ATURY03507' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (3)', pn: 'ATURY12416' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida Alto Falantes (3)', pn: 'ATURY12419' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (3)', pn: 'ATURY12418' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Porta Objetos (3)', pn: 'ATURY12417' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Teto Solar (3)', pn: 'EM BREVE' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'YARIS CROSS XRX + XRX HÍBRIDO', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'ATURY12513' },

    // --- Hiace Mini Onibus AT DX ---

    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro', pn: 'ATURY12401' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'AUTOMAÇÃO', produto: 'Automação abertura/fechamento Porta Lateral Basculante', pn: 'EM BREVE' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ALARMES', produto: 'Alarme sonoro de marcha ré', pn: 'ATURY09515' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal (1)', pn: 'ATURY09511' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Assoalho para 12 passageiros', pn: 'ATURY09512' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- RAV4 XSE ---

    { veiculo: 'RAV4 XSE', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Rebatimento + Tilt Down', pn: 'ATURY11409' },
    { veiculo: 'RAV4 XSE', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'RAV4 XSE', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'RAV4 XSE', categoria: 'ENGATES', produto: 'Modulo de Engate', pn: 'ATURY11411' },
    { veiculo: 'RAV4 XSE', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'RAV4 XSE', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'RAV4 XSE', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'RAV4 XSE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'RAV4 XSE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (1)', pn: 'ATURY12416' },
    { veiculo: 'RAV4 XSE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (1)', pn: 'ATURY12419' },
    { veiculo: 'RAV4 XSE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (1)', pn: 'ATURY12418' },
    { veiculo: 'RAV4 XSE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (1)', pn: 'ATURY12417' },
    { veiculo: 'RAV4 XSE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'RAV4 XSE', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'RAV4 XSE', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- RAV4 SX ---

    { veiculo: 'RAV4 SX', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Rebatimento + Tilt Down + Teto Solar', pn: 'ATURY11409' },
    { veiculo: 'RAV4 SX', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'RAV4 SX', categoria: 'ENGATES', produto: 'Modulo de Engate', pn: 'ATURY11411' },
    { veiculo: 'RAV4 SX', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'RAV4 SX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'RAV4 SX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'RAV4 SX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação decorativa RGB - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'RAV4 SX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (1)', pn: 'ATURY12416' },
    { veiculo: 'RAV4 SX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (1)', pn: 'ATURY12419' },
    { veiculo: 'RAV4 SX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Maçanetas (1)', pn: 'ATURY12418' },
    { veiculo: 'RAV4 SX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (1)', pn: 'ATURY12417' },
    { veiculo: 'RAV4 SX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Teto Solar (1)', pn: 'EM BREVE' },
    { veiculo: 'RAV4 SX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'RAV4 SX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca – Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'RAV4 SX', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata - Kit com 5 peças', pn: 'EM BREVE' },

    // --- GR Corolla ---

    { veiculo: 'GR COROLLA', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Rebatimento + Tilt Down', pn: 'ATURY11414' },
    { veiculo: 'GR COROLLA', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'GR COROLLA', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'GR COROLLA', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'GR COROLLA', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'GR COROLLA', categoria: 'ILUMINAÇÃO', produto: 'Iluminação decorativa RGB - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'GR COROLLA', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (1)', pn: 'ATURY12416' },
    { veiculo: 'GR COROLLA', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (1)', pn: 'ATURY12419' },
    { veiculo: 'GR COROLLA', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Maçanetas (1)', pn: 'ATURY12418' },
    { veiculo: 'GR COROLLA', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – Porta Objetos (1)', pn: 'ATURY12417' },
    { veiculo: 'GR COROLLA', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'GR COROLLA', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca – Porta-Malas', pn: 'ATURY09525' },

    // --- Yaris Hatch e Sedan ---

    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Rebatimento - vidros automáticos 4 portas', pn: 'ATURY11417' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro - vidro automático na porta motorista', pn: 'ATURY11402' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Teto Solar', pn: 'ATURY11410' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'AUTOMAÇÃO', produto: 'Carregador indução + USB-C', pn: 'ATURY12424' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ENGATES', produto: 'Módulo de engate - Sedan', pn: 'ATURY11418' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ENGATES', produto: 'Modulo de Engate - Hatch', pn: 'ATURY11411' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12404' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal (1)', pn: 'ATURY12410' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha (1)', pn: 'ATURY12414' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida – 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Assoalhos (2)', pn: 'ATURY12416' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Alto Falantes (2)', pn: 'ATURY12419' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Maçanetas (2)', pn: 'ATURY12418' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Porta Objetos (2)', pn: 'ATURY12417' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - Teto Solar (2)', pn: 'EM BREVE' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Ground Light para portas dianteiras', pn: 'EM BREVE' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
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
            
            // Divide a busca por espaços para aceitar múltiplos termos
            const termos = termoBusca.split(' ').filter(t => t.length > 0);

            const filtrados = dadosAcessorios.filter(item => {
                // Para cada termo da pesquisa, ele deve existir em pelo menos um campo do item
                return termos.every(termo => 
                    item.pn.toLowerCase().includes(termo) ||
                    item.veiculo.toLowerCase().includes(termo) ||
                    item.categoria.toLowerCase().includes(termo) ||
                    item.produto.toLowerCase().includes(termo)
                );
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