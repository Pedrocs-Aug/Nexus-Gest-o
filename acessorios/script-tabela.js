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
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal', pn: 'ATURY12406' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera de Trailer/Carretinha', pn: 'ATURY12414' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo tubular', pn: 'ATURY09514' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico com led', pn: 'ATURY06501' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico sem led', pn: 'ATURY04501' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK MT', categoria: 'TAPETES', produto: 'Tapete organizador transporte cargas', pn: 'ATURY09521' },
    
    // --- HILUX CABINE DUPLA POWER PACK AT ---
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro', pn: 'ATURY11401' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'AUTOMAÇÃO', produto: 'Trava elétrica de caçamba', pn: 'ATURY12422' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ALARMES', produto: 'Alarme sonoro de marcha ré', pn: 'ATURY09515' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11407' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal', pn: 'ATURY12406' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'HILUX CABINE DUPLA POWERPACK AT', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico com led', pn: 'ATURY06501' },

    // --- HILUX CABINE DUPLA SR ---
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro', pn: 'ATURY11402' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'AUTOMAÇÃO', produto: 'Trava elétrica de caçamba', pn: 'ATURY12422' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11407' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico sem led', pn: 'ATURY04501' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'ILUMINAÇÃO', produto: 'Iluminação branca caçamba', pn: 'ATURY12421' },
    { veiculo: 'HILUX CABINE DUPLA SR', categoria: 'TAPETES', produto: 'Tapete organizador - transporte cargas', pn: 'ATURY09521' },

    // --- HILUX CABINE DUPLA SRV ---
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro + Rebatimento de retrovisores', pn: 'ATURY11403' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'AUTOMAÇÃO', produto: 'Trava elétrica de caçamba', pn: 'ATURY12422' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11407' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo tubular', pn: 'ATURY09514' },
    { veiculo: 'HILUX CABINE DUPLA SRV', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico com led', pn: 'ATURY06501' },

    // --- HILUX CABINE DUPLA SRX E SRX PLUS ---
    { veiculo: 'HILUX CABINE DUPLA SRX/SRX PLUS', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro + Rebatimento de retrovisores', pn: 'ATURY11403' },
    { veiculo: 'HILUX CABINE DUPLA SRX/SRX PLUS', categoria: 'AUTOMAÇÃO', produto: 'Trava elétrica de caçamba', pn: 'ATURY12422' },
    { veiculo: 'HILUX CABINE DUPLA SRX/SRX PLUS', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HILUX CABINE DUPLA SRX/SRX PLUS', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11407' },
    { veiculo: 'HILUX CABINE DUPLA SRX/SRX PLUS', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12412' },
    { veiculo: 'HILUX CABINE DUPLA SRX/SRX PLUS', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'HILUX CABINE DUPLA SRX/SRX PLUS', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo tubular', pn: 'ATURY09514' },
    { veiculo: 'HILUX CABINE DUPLA SRX/SRX PLUS', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },

    // --- HILUX CABINE SIMPLES (MT ou AT) E CHASSI ---
    { veiculo: 'HILUX CABINE SIMPLES / CHASSI', categoria: 'AUTOMAÇÃO', produto: 'Kit de Vidros e Travas Elétricas', pn: 'ATURY04504' },
    { veiculo: 'HILUX CABINE SIMPLES / CHASSI', categoria: 'AUTOMAÇÃO', produto: 'Carregador indução + USB-C', pn: 'ATURY04506' },
    { veiculo: 'HILUX CABINE SIMPLES / CHASSI', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'HILUX CABINE SIMPLES / CHASSI', categoria: 'ALARMES', produto: 'Alarme sonoro de marcha ré', pn: 'ATURY09515' },
    { veiculo: 'HILUX CABINE SIMPLES / CHASSI', categoria: 'ALARMES', produto: 'Alarme completo com controle remoto', pn: 'ATURY09510' },
    { veiculo: 'HILUX CABINE SIMPLES / CHASSI', categoria: 'ESTRIBOS', produto: 'Estribo lateral fixo', pn: 'ATURY04505' },

    // --- SW4 SRX (5 e 7 Lugares) e Diamond ---
    { veiculo: 'SW4 SRX E DIAMOND', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro + Rebatimento de retrovisores', pn: 'ATURY11403' },
    { veiculo: 'SW4 SRX E DIAMOND', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'SW4 SRX E DIAMOND', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11408' },
    { veiculo: 'SW4 SRX E DIAMOND', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12412' },
    { veiculo: 'SW4 SRX E DIAMOND', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'SW4 SRX E DIAMOND', categoria: 'ESTRIBOS', produto: 'Estribo lateral elétrico com led', pn: 'ATURY06502' },
    { veiculo: 'SW4 SRX E DIAMOND', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'SW4 SRX E DIAMOND', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },

    // --- COROLLA CROSS (XR, XRE, XRX, HÍBRIDO, GR SPORT) ---
    { veiculo: 'COROLLA CROSS XR / XRE', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Rebatimento + Tilt Down', pn: 'ATURY11412' },
    { veiculo: 'COROLLA CROSS XRX / GR SPORT', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Teto Solar', pn: 'ATURY12401' },
    { veiculo: 'COROLLA CROSS (TODOS)', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'COROLLA CROSS (TODOS)', categoria: 'ENGATES', produto: 'Modulo de Engate + Tomada 7 Pinos de Engate', pn: 'ATURY12402' },
    { veiculo: 'COROLLA CROSS (TODOS)', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'COROLLA CROSS (TODOS)', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal', pn: 'ATURY12408' },
    { veiculo: 'COROLLA CROSS (TODOS)', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'COROLLA CROSS (TODOS)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'COROLLA CROSS (TODOS)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },

    // --- COROLLA SEDAN (GLI, XEI, ALTIS PREMIUM, HYBRID, GR SPORT) ---
    { veiculo: 'COROLLA GLI + XEI', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro + Rebatimento + Tilt Down', pn: 'ATURY11414' },
    { veiculo: 'COROLLA ALTIS + GR SPORT', categoria: 'AUTOMAÇÃO', produto: 'Módulo de vidro + Rebatimento + Tilt Down', pn: 'ATURY11412' },
    { veiculo: 'COROLLA SEDAN (TODOS)', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'COROLLA SEDAN (TODOS)', categoria: 'ENGATES', produto: 'Módulo de engate', pn: 'ATURY11411' },
    { veiculo: 'COROLLA SEDAN (TODOS)', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'COROLLA SEDAN (TODOS)', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'COROLLA SEDAN (TODOS)', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal', pn: 'ATURY12409' },
    { veiculo: 'COROLLA SEDAN (TODOS)', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'COROLLA SEDAN (TODOS)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'COROLLA SEDAN (TODOS)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },

    // --- YARIS CROSS (XR, XRE, XRX, HÍBRIDO) ---
    { veiculo: 'YARIS CROSS (TODOS)', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro', pn: 'ATURY09502' },
    { veiculo: 'YARIS CROSS (TODOS)', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Retrovisor Tilt Down', pn: 'ATURY09503' },
    { veiculo: 'YARIS CROSS (TODOS)', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'YARIS CROSS (TODOS)', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'YARIS CROSS (TODOS)', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY09505' }, // XR/XRE
    { veiculo: 'YARIS CROSS XRX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY09506' }, // XRX
    { veiculo: 'YARIS CROSS (TODOS)', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal', pn: 'ATURY09526' },
    { veiculo: 'YARIS CROSS (TODOS)', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'YARIS CROSS (TODOS)', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'YARIS CROSS (TODOS)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'YARIS CROSS (TODOS)', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },
    { veiculo: 'YARIS CROSS (TODOS)', categoria: 'ESTÉTICA', produto: 'Capa de Smartkey cor preta e prata', pn: 'ATURY12510' },

    // --- HIACE MINI ONIBUS AT DX ---
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro', pn: 'ATURY12401' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ALARMES', produto: 'Alarme sonoro de marcha ré', pn: 'ATURY09515' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal', pn: 'ATURY09511' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Assoalho para 12 passageiros', pn: 'ATURY09512' },
    { veiculo: 'HIACE MINI ONIBUS AT DX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },

    // --- RAV4 XSE e SX ---
    { veiculo: 'RAV4 XSE / SX', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Rebatimento + Tilt Down', pn: 'ATURY11409' },
    { veiculo: 'RAV4 XSE / SX', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'RAV4 XSE / SX', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'RAV4 XSE / SX', categoria: 'ENGATES', produto: 'Modulo de Engate', pn: 'ATURY11411' },
    { veiculo: 'RAV4 XSE / SX', categoria: 'ENGATES', produto: 'Tomada 7 Pinos de Engate', pn: 'ATURY06507' },
    { veiculo: 'RAV4 XSE / SX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'RAV4 XSE / SX', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'RAV4 XSE / SX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'RAV4 XSE / SX', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },

    // --- GR COROLLA ---
    { veiculo: 'GR COROLLA', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Rebatimento + Tilt Down', pn: 'ATURY11414' },
    { veiculo: 'GR COROLLA', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'GR COROLLA', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12403' },
    { veiculo: 'GR COROLLA', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'GR COROLLA', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Subwoofer 8" Slim Plug and Play', pn: 'ATURY03506' },
    { veiculo: 'GR COROLLA', categoria: 'ILUMINAÇÃO', produto: 'Iluminação decorativa RGB - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'GR COROLLA', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' },

    // --- YARIS HATCH E SEDAN ---
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro + Rebatimento - vidros automáticos 4 portas', pn: 'ATURY11417' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Vidro - vidro automático na porta motorista', pn: 'ATURY11402' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'AUTOMAÇÃO', produto: 'Modulo de Teto Solar', pn: 'ATURY11410' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'AUTOMAÇÃO', produto: 'Carregador indução + USB-C', pn: 'ATURY12424' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ALARMES', produto: 'Alarme antifurto de rodas e pneus', pn: 'ATURY11405' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ALARMES', produto: 'Alarme volumétrico', pn: 'ATURY11406' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ENGATES', produto: 'Módulo de engate - Sedan', pn: 'ATURY11418' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ENGATES', produto: 'Modulo de Engate - Hatch', pn: 'ATURY11411' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmeras laterais', pn: 'ATURY12404' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Câmera frontal', pn: 'ATURY12410' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'INTEGRAÇÃO COM MULTIMÍDIA', produto: 'Smart Midia Multi Apps com wifi zone', pn: 'ATURY06503' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ILUMINAÇÃO', produto: 'Iluminação colorida - 4 Portas + Painel', pn: 'ATURY12415' },
    { veiculo: 'YARIS HATCH E SEDAN', categoria: 'ILUMINAÇÃO', produto: 'Iluminação Branca - Porta-Malas', pn: 'ATURY09525' }
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
        if(toast) toast.classList.add('mostrar');

        setTimeout(() => {
            elemento.style.color = originalColor;
            if(toast) toast.classList.remove('mostrar');
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

// --- FILTRO DE BUSCA ---
function inicializarBusca() {
    const inputBusca = document.getElementById('inputBusca');
    if (inputBusca) {
        inputBusca.addEventListener('input', () => {
            const termo = inputBusca.value.toLowerCase();
            const filtrados = dadosAcessorios.filter(item => 
                item.pn.toLowerCase().includes(termo) ||
                item.veiculo.toLowerCase().includes(termo) ||
                item.categoria.toLowerCase().includes(termo) ||
                item.produto.toLowerCase().includes(termo)
            );
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
window.onclick = function(event) {
    const modal = document.getElementById('modal-etiqueta');
    if (event.target == modal) fecharModal();
};