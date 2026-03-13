/**
 * Banco de Dados Consolidado e Validado - Nexus Gestão
 * Fontes: Bridgestone, Dunlop, Michelin, Pirelli e Yokohama
 */
const dadosAcessorios = [

    // --- COROLLA ---
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'Aplique cromado da maçaneta', pn: 'PV403-02010' },
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'Aplique cromado do farol de neblina', pn: 'PV598-02020' },
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'Aplique cromado do para-choque dianteiro', pn: 'PV401-02010' },
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'Aplique cromado do para-choque traseiro', pn: 'PV405-02010' },
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'Aplique cromado do retrovisor', pn: 'PV403-02020' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Bandeja de porta-malas', pn: 'PV241-02030' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Barras transversais de teto', pn: 'PW301-02001' },
    { veiculo: 'COROLLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Cadeirinha Corolla', pn: '73700-0W310' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Caixa organizadora de porta-malas com três divisórias', pn: 'PZ002-0D012' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Calha de chuva', pn: 'PV162-02020' },
    { veiculo: 'COROLLA', categoria: 'TECNOLOGIA', produto: 'CARREGADOR POR INDUÇÃO SEM FIO', pn: '861C0-12090' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Chicote do engate', pn: 'PW5D0-02564 / PZ401-00560-13' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'CONJUNTO TAPETE DE BORRACHA', pn: '58510-YYF10' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Engate', pn: 'PV960-02010' },
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'Friso lateral', pn: 'PV170-02010' },
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'Friso lateral com inserto cromado', pn: 'PV170-02040' },
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'Friso lateral inferior cromado', pn: 'PV170-02030' },
    { veiculo: 'COROLLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Kit de segurança das rodas de liga leve', pn: 'PZV83-11210' },
    { veiculo: 'COROLLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Kit farol de neblina em LED', pn: 'PC593-1200Z' },
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'Ponteira de escapamento cromada', pn: 'PC413-12001' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'Soleira', pn: 'PV382-02010' },
    { veiculo: 'COROLLA', categoria: 'DESIGN', produto: 'Soleira iluminada', pn: 'P7531-12001' },
    { veiculo: 'COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Suporte para bicicleta', pn: 'PW308-00007' },
    { veiculo: 'COROLLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Trava de segurança do estepe', pn: 'PV458-0D001' },
    // --- YARIS HATCH ---

    { veiculo: 'YARIS HATCH', categoria: 'TECNOLOGIA', produto: 'Alto-falante frontal - tweeter', pn: 'PV691-0D210' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Aplique cromado da maçaneta (CUP)', pn: 'PC168-0D007' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Aplique cromado da tampa do porta-malas', pn: 'PV405-0D070' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Aplique cromado do para-choque traseiro', pn: 'PV405-0D050' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Aplique cromado na maçaneta (com smart entry)', pn: 'PV403-0D010' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Aplique do carbono da maçaneta', pn: 'PC168-0D00F' },
    { veiculo: 'YARIS HATCH', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'YARIS HATCH', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'YARIS HATCH', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'YARIS HATCH', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Bandeja porta-malas', pn: 'PV241-0D011' },
    { veiculo: 'YARIS HATCH', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Cadeirinha Toyota para bebê e criança', pn: '73700-71060' },
    { veiculo: 'YARIS HATCH', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Caixa organizadora de porta-malas com três divisórias', pn: 'PZ002-0D012' },
    { veiculo: 'YARIS HATCH', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Calha de chuva', pn: 'PV162-0D010' },
    { veiculo: 'YARIS HATCH', categoria: 'TECNOLOGIA', produto: 'Central multimídia Toyota Play+ tecnologia Harman', pn: 'PV602-0D021' },
    { veiculo: 'YARIS HATCH', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Friso lateral (cor material)', pn: 'PV170-0D020-10' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Friso lateral inferior cromado', pn: 'PV170-0D030' },
    { veiculo: 'YARIS HATCH', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Kit de lâmpadas de luz branca para faróis', pn: 'PV581-02001' },
    { veiculo: 'YARIS HATCH', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Kit de segurança das rodas de liga leve', pn: 'PZV83-11210' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Maçanetas cromadas', pn: 'PV403-0K010' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Moldura cromada da maçaneta', pn: 'PC168-0D006' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Moldura de painel sport', pn: 'PC280-0D005' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Moldura para descanso de braço sport', pn: 'PC285-0D008' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Ponteira do escapamento', pn: 'PZ056-0D007' },
    { veiculo: 'YARIS HATCH', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rede de porta-malas', pn: 'PZ003-0D005' },
    { veiculo: 'YARIS HATCH', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Saia esportiva traseira', pn: 'PC158-0D00H' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Saia lateral', pn: 'PC156-0D00J' },
    { veiculo: 'YARIS HATCH', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'SENSOR DE ESTACIONAMENTO DIANTEIRO.', pn: 'PV501-0D210' },
    { veiculo: 'YARIS HATCH', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'SENSOR DE ESTACIONAMENTO TRASEIRO.', pn: 'PV501-0D220' },
    { veiculo: 'YARIS HATCH', categoria: 'DESIGN', produto: 'Soleira', pn: 'PV382-0D010' },
    { veiculo: 'YARIS HATCH', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Tapete traseiro de borracha', pn: 'PV213-0D061' },
    { veiculo: 'YARIS HATCH', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Tapete traseiro de carpete', pn: 'PV213-0D063' },

    // --- Yaris Cross ---

    { veiculo: 'YARIS CROSS', categoria: 'DESIGN', produto: 'Aplique Cromado do Farol de Neblina', pn: 'PV175-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'DESIGN', produto: 'Aplique Cromado do Retrovisor', pn: 'PV169-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Bandeja de Porta-Malas', pn: 'PV241-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Calha de Chuva', pn: 'PV162-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Cama PET', pn: 'PV22C-BY020' },
    { veiculo: 'YARIS CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Capa Protetora PET', pn: 'PV228-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'TECNOLOGIA', produto: 'Carregador Sem Fio', pn: 'PV676-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Chicote do Engate de Reboque', pn: 'PV5D2-BY020' },
    { veiculo: 'YARIS CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Cinto Guia PET', pn: 'PV22C-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Engate de Reboque', pn: 'PV960-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'DESIGN', produto: 'Friso Lateral', pn: 'PV170-BY020' },
    { veiculo: 'YARIS CROSS', categoria: 'DESIGN', produto: 'Friso Lateral Inferior', pn: 'PV170-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'DESIGN', produto: 'Iluminação do Cockpit', pn: 'PV52B-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Kit de Segurança das Rodas de Liga Leve', pn: 'PV456-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'DESIGN', produto: 'Ornamento Lateral Inferior', pn: 'PV179-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rack de Teto', pn: 'PV301-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Sensor de Estacionamento Dianteiro', pn: 'PV501-BY012' },
    { veiculo: 'YARIS CROSS', categoria: 'DESIGN', produto: 'Soleira', pn: 'PV382-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'DESIGN', produto: 'Soleira Iluminada', pn: 'PV52D-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'DESIGN', produto: 'Spoiler Dianteiro', pn: 'PV154-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'DESIGN', produto: 'Spoiler Lateral', pn: 'PV150-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'DESIGN', produto: 'Spoiler Traseiro', pn: 'PV156-BY010' },
    { veiculo: 'YARIS CROSS', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Trava de segurança do estepe', pn: 'PV458-0D002' },

    // --- YARIS SEDAN ---

    { veiculo: 'YARIS SEDÃ', categoria: 'TECNOLOGIA', produto: 'Alto-falante frontal - tweeter', pn: 'PV691-0D210' },
  { veiculo: 'YARIS SEDÃ', categoria: 'DESIGN', produto: 'Aplique cromado da maçaneta (CUP)', pn: 'PC168-0D007' },
  { veiculo: 'YARIS SEDÃ', categoria: 'DESIGN', produto: 'Aplique cromado da tampa do porta-malas', pn: 'PV405-0D080' },
  { veiculo: 'YARIS SEDÃ', categoria: 'DESIGN', produto: 'Aplique cromado do para-choque traseiro', pn: 'PV405-0D060' },
  { veiculo: 'YARIS SEDÃ', categoria: 'DESIGN', produto: 'Aplique cromado na maçaneta (com smart entry)', pn: 'PV403-0D010' },
  { veiculo: 'YARIS SEDÃ', categoria: 'DESIGN', produto: 'Aplique do carbono da maçaneta', pn: 'PC168-0D00F' },
  { veiculo: 'YARIS SEDÃ', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
  { veiculo: 'YARIS SEDÃ', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
  { veiculo: 'YARIS SEDÃ', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
  { veiculo: 'YARIS SEDÃ', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Bandeja de porta-malas', pn: 'PV241-0D021' },
  { veiculo: 'YARIS SEDÃ', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Cadeirinha Toyota para bebê e criança', pn: '73700-71060' },
  { veiculo: 'YARIS SEDÃ', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Caixa organizadora de porta-malas com três divisórias', pn: 'PZ002-0D012' },
  { veiculo: 'YARIS SEDÃ', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Calha de chuva', pn: 'PV162-0D020' },
  { veiculo: 'YARIS SEDÃ', categoria: 'TECNOLOGIA', produto: 'Central multimídia Toyota Play+ tecnologia Harman', pn: 'PV602-0D021' },
  { veiculo: 'YARIS SEDÃ', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
  { veiculo: 'YARIS SEDÃ', categoria: 'DESIGN', produto: 'Friso lateral (cor material)', pn: 'PV170-0D020-10' },
  { veiculo: 'YARIS SEDÃ', categoria: 'DESIGN', produto: 'Friso lateral inferior cromado', pn: 'PV170-0D030' },
  { veiculo: 'YARIS SEDÃ', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Kit de lâmpadas de luz branca para faróis', pn: 'PV581-02001' },
  { veiculo: 'YARIS SEDÃ', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Kit de segurança das rodas de liga leve', pn: 'PZV83-11210' },
  { veiculo: 'YARIS SEDÃ', categoria: 'DESIGN', produto: 'Moldura cromada da maçaneta', pn: 'PC168-0D006' },
  { veiculo: 'YARIS SEDÃ', categoria: 'DESIGN', produto: 'Moldura de painel sport', pn: 'PC280-0D005' },
  { veiculo: 'YARIS SEDÃ', categoria: 'DESIGN', produto: 'Moldura para descanso de braço sport', pn: 'PC285-0D008' },
  { veiculo: 'YARIS SEDÃ', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rede de porta-malas', pn: 'PZ003-0D006' },
  { veiculo: 'YARIS SEDÃ', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },
  { veiculo: 'YARIS SEDÃ', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'SENSOR DE ESTACIONAMENTO DIANTEIRO.', pn: 'PV501-0D210' },
  { veiculo: 'YARIS SEDÃ', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'SENSOR DE ESTACIONAMENTO TRASEIRO.', pn: 'PV501-0D220' },
  { veiculo: 'YARIS SEDÃ', categoria: 'DESIGN', produto: 'Soleira', pn: 'PV382-0D010' },
  { veiculo: 'YARIS SEDÃ', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Tapete traseiro de borracha', pn: 'PV213-0D061' },
  { veiculo: 'YARIS SEDÃ', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Tapete traseiro de carpete', pn: 'PV213-0D063' },
  { veiculo: 'YARIS SEDÃ', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Trava de segurança do estepe', pn: 'PV458-0D002' },

  // --- CAMRY ---
    { veiculo: 'CAMRY', categoria: 'DESIGN', produto: 'Aplique cromado da maçaneta', pn: 'PV403-02010' },
    { veiculo: 'CAMRY', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Caixa organizadora de porta-malas com três divisórias', pn: 'PZ002-0D012' },
    { veiculo: 'CAMRY', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
    { veiculo: 'CAMRY', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },

    // --- COROLLA CROSS ---
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Aplique azul da maçaneta', pn: 'PV403-02010-J0' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Aplique azul do farol de neblina', pn: 'PV401-0A010-J0' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Aplique azul do retrovisor.', pn: 'PV403-0A010-J0' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Aplique cromado da maçaneta', pn: 'PV403-02010' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Aplique cromado do farol de neblina', pn: 'PV401-0A010' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Aplique cromado do retrovisor', pn: 'PV403-0A010' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Aplique marrom da maçaneta', pn: 'PV403-02010-E0' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Aplique marrom do farol de neblina', pn: 'PV401-0A010-E0' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Aplique marrom do retrovisor', pn: 'PV403-0A010-E0' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'APLIQUE VERMELHO DO FAROL DE NEBLINA', pn: 'PV401-0A020' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'APLIQUE VERMELHO DO RETROVISOR', pn: 'PV403-0A020' },
    { veiculo: 'COROLLA CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'COROLLA CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'COROLLA CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Bandeja de porta-malas', pn: 'PV241-0A010' },
    { veiculo: 'COROLLA CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Caixa organizadora de porta-malas com três divisórias', pn: 'PZ002-0D012' },
    { veiculo: 'COROLLA CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Calha de chuva', pn: 'PV162-0A010' },
    { veiculo: 'COROLLA CROSS', categoria: 'TECNOLOGIA', produto: 'Carregador sem fio', pn: 'PC5C1-0A00A' },
    { veiculo: 'COROLLA CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
    { veiculo: 'COROLLA CROSS', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Conjunto Para-Barro (4 peças)', pn: 'PC389-0A001' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'CONJUNTO TAPETE DE BORRACHA', pn: '58510-YYZ00' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Emblema Capô (Black Piano)', pn: 'PC187-0A002' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Emblema Capô (Cromado)', pn: 'PC187-0A001' },
    { veiculo: 'COROLLA CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Engate', pn: 'PV960-02110' },
    { veiculo: 'COROLLA CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Estribo lateral', pn: 'PV388-0A010' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Friso lateral (cor material)', pn: 'PV170-0A010' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Friso lateral inferior', pn: 'PC170-0A001' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'FRISO LATERAL PRETO E VERMELHO', pn: 'PV170-0A020' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Moldura Porta-malas Cromado', pn: 'PC405-0A001' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Moldura Porta-malas Cromado Black', pn: 'PC405-0A002' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Moldura Tampa Traseira (Black Piano)', pn: 'PC405-0A00D43' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Moldura Tampa Traseira (Primer-Sem Pintura)', pn: 'PC405-0A00F00' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Par Moldura Para-Choque (Black Piano)', pn: 'PC401-0A00Y' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Par Moldura Para-Choque (Cromado)', pn: 'PC401-0A00Z' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Par Moldura Para-Choque Traseiro (Cromado)', pn: 'PC405-0A009' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Ponteira de escapamento cromada', pn: 'PV413-0A010' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'PONTEIRA DE ESCAPAMENTO GR', pn: 'PV413-0A020' },
    { veiculo: 'COROLLA CROSS', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Protetor do Porta-malas', pn: 'PC382-0A003' },
    { veiculo: 'COROLLA CROSS', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Protetor para Para-brisa', pn: 'PC234-0A001' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Rack-teto', pn: 'PT767-16220' },
    { veiculo: 'COROLLA CROSS', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Rede de Porta-malas Lateral', pn: 'PC246-0A003' },
    { veiculo: 'COROLLA CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rede do porta-malas', pn: 'PC246-0A001' },
    { veiculo: 'COROLLA CROSS', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Soleira', pn: 'PV382-0A010' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Soleira iluminada', pn: 'P7531-0A001' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Spoiler da tampa traseira', pn: 'PC150-0A001-00' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Spoiler Para-Choque Dianteiro (Black Piano)', pn: 'PC154-0A00A43' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Spoiler parachoque traseiro', pn: 'PC158-0A001' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'Spoiler Para-Choque Traseiro (Black Piano)', pn: 'PC158-0A00A43' },
    { veiculo: 'COROLLA CROSS', categoria: 'DESIGN', produto: 'TAPETE GR (Conjunto)', pn: 'PV210-0A010' },
    { veiculo: 'COROLLA CROSS', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Trava de segurança do estepe', pn: 'PV458-0D001' },

    // --- SW4 ---
    { veiculo: 'SW4', categoria: 'DESIGN', produto: 'Aplique cromado da tampa de porta-malas', pn: 'PC407-0K001' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Bandeja de porta-malas', pn: 'PC246-0K004' },
    { veiculo: 'SW4', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Cadeirinha Toyota para bebê e criança', pn: '73700-71060' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Caixa organizadora de porta-malas com três divisórias', pn: 'PZ002-0D012' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Calha de chuva', pn: 'PC162-0K00H' },
    { veiculo: 'SW4', categoria: 'TECNOLOGIA', produto: 'CARREGADOR POR INDUÇÃO SEM FIO', pn: 'PC5C1-0K00C' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Chicote do engate', pn: 'PH5D2-0KB10' },
    { veiculo: 'SW4', categoria: 'DESIGN', produto: 'Combo SW4', pn: 'COMBO-SW4' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'ENGATE 3.000 KG', pn: 'PH9600KB21' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Engate (750 Kg) teste', pn: 'PV960-0K020' },
    { veiculo: 'SW4', categoria: 'DESIGN', produto: 'FRISO LATERAL INFERIOR', pn: 'PC170-0K01H' },
    { veiculo: 'SW4', categoria: 'DESIGN', produto: 'Luz esportiva do assoalho (2FR+2RR)', pn: 'PC523-0K00G' },
    { veiculo: 'SW4', category: 'SEGURANÇA E PROTEÇÃO', produto: 'PELÍCULA PROTETORA CAPÔ', pn: 'PH175-0KB10' },
    { veiculo: 'SW4', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Película protetora da maçaneta (2 peças)', pn: 'PZN55-DD301' },
    { veiculo: 'SW4', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'PELÍCULA PROTETORA PARA-CHOQUE TRASEIRO', pn: 'PH178-0KB10' },
    { veiculo: 'SW4', categoria: 'DESIGN', produto: 'Ponteira de escapamento', pn: 'PC413-0K001' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Protetor de para-brisa', pn: 'PC234-0K001' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rede de porta-malas', pn: 'PC246-0K001' },
    { veiculo: 'SW4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },
    { veiculo: 'SW4', categoria: 'DESIGN', produto: 'Soleira de porta-malas', pn: 'PC176-0K00R' },
    { veiculo: 'SW4', categoria: 'DESIGN', produto: 'Soleiras', pn: 'PC382-0K00H' },

    // --- RAV4 ---
    { veiculo: 'RAV4', categoria: 'DESIGN', produto: 'Aplique cromado da tampa do porta-malas', pn: 'PW405-42000-01' },
    { veiculo: 'RAV4', categoria: 'DESIGN', produto: 'Aplique cromado do para-choque', pn: 'PW401-42000-01' },
    { veiculo: 'RAV4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'RAV4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'RAV4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'RAV4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Caixa organizadora de porta-malas com três divisórias', pn: 'PZ002-0D012' },
    { veiculo: 'RAV4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
    { veiculo: 'RAV4', categoria: 'DESIGN', produto: 'Friso lateral inferior cromado', pn: 'PW156-42000-01' },
    { veiculo: 'RAV4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rede de porta-malas', pn: 'PZ472-Q0341-ZA' },
    { veiculo: 'RAV4', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },

    // --- HILUX CABINE DUPLA ---
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Aplique cinza brilhante da lanterna', pn: 'PC410-0K00G' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Aplique cromado da lanterna', pn: 'PC410-0K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Aplique cromado da lanterna', pn: 'PC405-0K005' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Aplique cromado do farol', pn: 'PC401-0K02A' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Aplique cromado do para-lama', pn: 'PC403-0K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Aplique cromado farol de neblina', pn: 'PC401-0K02Z' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Aplique cromado na maçaneta', pn: 'PC168-0K004' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Aplique cromado na tampa da caçamba', pn: 'PC406-0K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Aplique preto brilhante da tampa da caçamba', pn: 'PC406-0K008' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Aplique preto fosco da lanterna', pn: 'PC410-0K00D' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Aplique preto fosco da tampa da caçamba', pn: 'PC406-0K007' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'ASSISTENTE ABERTURA CAPÔ', pn: 'PC4A1-0K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Assistente de abertura da caçamba', pn: 'PC3B2-0K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'ASSISTENTE DE SUBIDA DA TAMPA TRASEIRA', pn: 'PC3A2-0K005' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Cadeirinha Toyota para bebê e criança', pn: '73700-71060' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Calha de chuva', pn: 'PC162-0K003' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Capota marítima de lona', pn: 'PH3B1-0KA11' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'TECNOLOGIA', produto: 'CARREGADOR POR INDUÇÃO SEM FIO', pn: 'PC5C1-0K009' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Chicote do engate', pn: 'PH5D2-10010' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Combo Hilux', pn: 'COMBO-HILUX' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'CONJUNTO REVESTIMENTO CAIXA DE RODA (4 PEÇAS)', pn: 'PC458-0K005' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Engate 3.500 Kg', pn: 'PH960-0KM20' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Engate (750 Kg)', pn: 'PV960-0K010' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Entrada fluxo de ar - SNORKEL', pn: 'PZQ12-89100' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Espelho retrovisor retrátil', pn: 'PC642-0K002' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Estribo lateral', pn: 'PH700-0KM10-DO' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Extensor de caçamba com rampa', pn: 'PV3B9-0K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Friso lateral inferior prata', pn: 'PC170-0K01U' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'LONGARINA DE TETO DECORATIVA', pn: 'PC308-0K002' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Luz esportiva do assoalho (2FR+2RR)', pn: 'PC523-0K00G' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Maçanetas cromadas', pn: 'PV403-0K010' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Moldura cromada na maçaneta', pn: 'PC168-0K005' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'MOLDURA DECORATIVA CAPÔ', pn: 'PC401-0K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Moldura do paralama (KIT)', pn: 'PC403-0K014' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Para-barros traseiro direito', pn: '76625-0K510' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Para-barros traseiro esquerdo', pn: '76626-0K510' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Película protetora da maçaneta (2 peças)', pn: 'PZN55-DD301' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'PELÍCULA PROTETORA DE CAPÔ', pn: 'PH175-0KM10' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'PELÍCULA REPELENTE RETROVISOR', pn: 'PC186-0K1FG' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Ponteira de escapamento', pn: 'PC413-0K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'TECNOLOGIA', produto: 'PROJETOR DE PARA-BRISA', pn: 'PC6A6-0K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Protetor de borda da caçamba', pn: 'PH3B2-0KA10' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Protetor de borda da tampa da caçamba', pn: 'PH3B2-0KA10-TG' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'PROTETOR DE CÁRTER', pn: 'PH3B4-10010' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Protetor de para-brisa', pn: 'PC234-0K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rack do teto', pn: 'PC301-0K002' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Rede de caçambas', pn: 'PH3B5-10010' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Santantônio cromado', pn: 'PH3B0-0KA11' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Santantônio sport', pn: 'PH3B0-0KA11-BL' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'SANTO ANTÔNIO DE TRABALHO (D/C)', pn: 'PH3B0-0KA10' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Sobre-capa de parachoque', pn: 'PH401-10020' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'DESIGN', produto: 'Soleira', pn: 'PC382-0K004' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Suporte para bicicleta', pn: 'PW308-00007' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Trava de segurança do estepe', pn: 'PV458-0K001' },
    { veiculo: 'HILUX CABINE DUPLA', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Trava elétrica da tampa da caçamba', pn: 'PZQ71-89070' },

    // --- HILUX CABINE SIMPLES ---
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'ASSISTENTE ABERTURA CAPÔ', pn: 'PC4A1-0K001' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Chicote do engate', pn: 'PH5D2-10010' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Engate 3.500 Kg', pn: 'PH960-0KM20' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Engate (750 Kg)', pn: 'PV960-0K010' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Kit farol de neblina', pn: 'PC593-0K003' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'DESIGN', produto: 'LONGARINA DE TETO DECORATIVA', pn: 'PC308-0K002' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'DESIGN', produto: 'MOLDURA DECORATIVA CAPÔ', pn: 'PC401-0K001' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Película protetora da maçaneta (2 peças)', pn: 'PZN55-DD301' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'PELÍCULA PROTETORA DE CAPÔ', pn: 'PH175-0KM10' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'PELÍCULA REPELENTE RETROVISOR', pn: 'PC186-0K1FG' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'TECNOLOGIA', produto: 'PROJETOR DE PARA-BRISA', pn: 'PC6A6-0K001' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'PROTETOR DE CÁRTER', pn: 'PH3B4-10010' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Protetor de para-brisa', pn: 'PC234-0K001' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Rede de caçambas', pn: 'PH3B5-10010' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'SANTO ANTÔNIO DE TRABALHO (S/C)', pn: 'PH3B0-0KJ10' },
    { veiculo: 'HILUX CABINE SIMPLES', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Sobrecapa do para-choque', pn: 'PH401-0KM10' },

    // --- GR COROLLA ---
    { veiculo: 'GR COROLLA', categoria: 'DESIGN', produto: 'Aerofólio Traseiro', pn: 'PT9381223002' },
    { veiculo: 'GR COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'GR COROLLA', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Manopla para Alavanca de Câmbio', pn: 'PTR5712220' },
    { veiculo: 'GR COROLLA', categoria: 'DESIGN', produto: 'Soleira', pn: 'PT41312220' },

    // --- COROLLA HYBRID ---
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'Aplique cromado da maçaneta', pn: 'PV403-02010' },
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'Aplique cromado do farol de neblina', pn: 'PV598-02020' },
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'Aplique cromado do para-choque dianteiro', pn: 'PV401-02010' },
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'Aplique cromado do para-choque traseiro', pn: 'PV405-02010' },
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'Aplique cromado do retrovisor', pn: 'PV403-02020' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Bandeja de porta-malas', pn: 'PV241-02030' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Barras transversais de teto', pn: 'PW301-02001' },
    { veiculo: 'COROLLA HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Cadeirinha Corolla', pn: '73700-0W310' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Caixa organizadora de porta-malas com três divisórias', pn: 'PZ002-0D012' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Calha de chuva', pn: 'PV162-02020' },
    { veiculo: 'COROLLA HYBRID', categoria: 'TECNOLOGIA', produto: 'CARREGADOR POR INDUÇÃO SEM FIO', pn: '861C0-12090' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Chicote do engate', pn: 'PW5D0-02564 / PZ401-00560-13' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'CONJUNTO TAPETE DE BORRACHA', pn: '58510-YYF10' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Engate', pn: 'PV960-02010' },
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'Friso lateral', pn: 'PV170-02010' },
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'Friso lateral com inserto cromado', pn: 'PV170-02040' },
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'Friso lateral inferior cromado', pn: 'PV170-02030' },
    { veiculo: 'COROLLA HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Kit de segurança das rodas de liga leve', pn: 'PZV83-11210' },
    { veiculo: 'COROLLA HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Kit farol de neblina em LED', pn: 'PC593-1200Z' },
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'Ponteira de escapamento cromada', pn: 'PC413-12001' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'Soleira', pn: 'PV382-02010' },
    { veiculo: 'COROLLA HYBRID', categoria: 'DESIGN', produto: 'Soleira iluminada', pn: 'P7531-12001' },
    { veiculo: 'COROLLA HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Suporte para bicicleta', pn: 'PW308-00007' },
    { veiculo: 'COROLLA HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Trava de segurança do estepe', pn: 'PV458-0D001' },

    // --- COROLLA GR-SPORT ---
    { veiculo: 'COROLLA GR-SPORT', categoria: 'DESIGN', produto: 'Aplique cromado da maçaneta', pn: 'PV403-02010' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'DESIGN', produto: 'Aplique cromado do retrovisor', pn: 'PV403-02020' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Bandeja de porta-malas', pn: 'PV241-02030' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Barras transversais de teto', pn: 'PW301-02001' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Cadeirinha Corolla', pn: '73700-0W310' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Caixa organizadora de porta-malas com três divisórias', pn: 'PZ002-0D012' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Calha de chuva', pn: 'PV162-02020' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'TECNOLOGIA', produto: 'CARREGADOR POR INDUÇÃO SEM FIO', pn: '861C0-12090' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'DESIGN', produto: 'CONJUNTO TAPETE DE BORRACHA', pn: '58510-YYF10' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'DESIGN', produto: 'Friso lateral', pn: 'PV170-02010' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'DESIGN', produto: 'Friso lateral com inserto cromado', pn: 'PV170-02040' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'DESIGN', produto: 'Friso lateral inferior cromado', pn: 'PV170-02030' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Kit de segurança das rodas de liga leve', pn: 'PZV83-11210' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'DESIGN', produto: 'Soleira', pn: 'PV382-02010' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'DESIGN', produto: 'Soleira iluminada', pn: 'P7531-12001' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Suporte para bicicleta', pn: 'PW308-00007' },
    { veiculo: 'COROLLA GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Trava de segurança do estepe', pn: 'PV458-0D001' },

    // --- HILUX GR-SPORT ---
    { veiculo: 'HILUX GR-SPORT', categoria: 'DESIGN', produto: 'Aplique cromado da lanterna', pn: 'PC405-0K005' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'ASSISTENTE ABERTURA CAPÔ', pn: 'PC4A1-0K001' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'ASSISTENTE DE SUBIDA DA TAMPA TRASEIRA', pn: 'PC3A2-0K005' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'TECNOLOGIA', produto: 'CARREGADOR POR INDUÇÃO SEM FIO', pn: 'PC5C1-0K009' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'DESIGN', produto: 'Entrada fluxo de ar - SNORKEL', pn: 'PZQ12-89100' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Espelho retrovisor retrátil', pn: 'PC642-0K002' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'DESIGN', produto: 'LONGARINA DE TETO DECORATIVA', pn: 'PC308-0K002' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'DESIGN', produto: 'MOLDURA DECORATIVA CAPÔ', pn: 'PC401-0K001' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Para-barros traseiro direito', pn: '76625-0K510' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Para-barros traseiro esquerdo', pn: '76626-0K510' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'PELÍCULA PROTETORA DE CAPÔ', pn: 'PH175-0KM10' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'PELÍCULA REPELENTE RETROVISOR', pn: 'PC186-0K1FG' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'TECNOLOGIA', produto: 'PROJETOR DE PARA-BRISA', pn: 'PC6A6-0K001' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'PROTETOR DE CÁRTER', pn: 'PH3B4-10010' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rack do teto', pn: 'PC301-0K002' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'SANTO ANTÔNIO DE TRABALHO (D/C)', pn: 'PH3B0-0KA10' },
    { veiculo: 'HILUX GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Trava elétrica da tampa da caçamba', pn: 'PZQ71-89070' },

    // --- SW4 GR-SPORT ---
    { veiculo: 'SW4 GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Bandeja de porta-malas', pn: 'PC246-0K004' },
    { veiculo: 'SW4 GR-SPORT', categoria: 'TECNOLOGIA', produto: 'CARREGADOR POR INDUÇÃO SEM FIO', pn: 'PC5C1-0K00C' },
    { veiculo: 'SW4 GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'ENGATE 3.000 KG', pn: 'PH9600KB21' },
    { veiculo: 'SW4 GR-SPORT', categoria: 'DESIGN', produto: 'Soleira de porta-malas', pn: 'PC176-0K00R' },

    // --- COROLLA CROSS GR-SPORT ---
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'APLIQUE VERMELHO DO FAROL DE NEBLINA', pn: 'PV401-0A020' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'APLIQUE VERMELHO DO RETROVISOR', pn: 'PV403-0A020' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Conjunto Para-Barro (4 peças)', pn: 'PC389-0A001' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'CONJUNTO TAPETE DE BORRACHA', pn: '58510-YYZ00' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'Emblema Capô (Black Piano)', pn: 'PC187-0A002' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'Emblema Capô (Cromado)', pn: 'PC187-0A001' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'FRISO LATERAL PRETO E VERMELHO', pn: 'PV170-0A020' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'Moldura Porta-malas Cromado', pn: 'PC405-0A001' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'Moldura Porta-malas Cromado Black', pn: 'PC405-0A002' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'Moldura Tampa Traseira (Black Piano)', pn: 'PC405-0A00D43' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'Moldura Tampa Traseira (Primer-Sem Pintura)', pn: 'PC405-0A00F00' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'Par Moldura Para-Choque Traseiro (Cromado)', pn: 'PC405-0A009' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'PONTEIRA DE ESCAPAMENTO GR', pn: 'PV413-0A020' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Protetor do Porta-malas', pn: 'PC382-0A003' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Protetor para Para-brisa', pn: 'PC234-0A001' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'Rack-teto', pn: 'PT767-16220' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Rede de Porta-malas Lateral', pn: 'PC246-0A003' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rede do porta-malas', pn: 'PC246-0A001' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'Spoiler Para-Choque Dianteiro (Black Piano)', pn: 'PC154-0A00A43' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'Spoiler Para-Choque Traseiro (Black Piano)', pn: 'PC158-0A00A43' },
    { veiculo: 'COROLLA CROSS GR-SPORT', categoria: 'DESIGN', produto: 'TAPETE GR (Conjunto)', pn: 'PV210-0A010' },

    // --- COROLLA CROSS HYBRID ---
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Aplique azul da maçaneta', pn: 'PV403-02010-J0' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Aplique azul do farol de neblina', pn: 'PV401-0A010-J0' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Aplique azul do retrovisor.', pn: 'PV403-0A010-J0' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Aplique cromado da maçaneta', pn: 'PV403-02010' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Aplique cromado do farol de neblina', pn: 'PV401-0A010' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Aplique cromado do retrovisor', pn: 'PV403-0A010' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Aplique marrom da maçaneta', pn: 'PV403-02010-E0' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Aplique marrom do farol de neblina', pn: 'PV401-0A010-E0' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Aplique marrom do retrovisor', pn: 'PV403-0A010-E0' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'APLIQUE VERMELHO DO FAROL DE NEBLINA', pn: 'PV401-0A020' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'APLIQUE VERMELHO DO RETROVISOR', pn: 'PV403-0A020' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Bandeja de porta-malas', pn: 'PV241-0A010' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Calha de chuva', pn: 'PV162-0A010' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'TECNOLOGIA', produto: 'Carregador sem fio', pn: 'PC5C1-0A00A' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Conjunto Para-Barro (4 peças)', pn: 'PC389-0A001' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'CONJUNTO TAPETE DE BORRACHA', pn: '58510-YYZ00' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Emblema Capô (Black Piano)', pn: 'PC187-0A002' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Emblema Capô (Cromado)', pn: 'PC187-0A001' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Engate', pn: 'PV960-02110' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Estribo lateral', pn: 'PV388-0A010' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Friso lateral (cor material)', pn: 'PV170-0A010' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Friso lateral inferior', pn: 'PC170-0A001' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'FRISO LATERAL PRETO E VERMELHO', pn: 'PV170-0A020' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Moldura Porta-malas Cromado', pn: 'PC405-0A001' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Moldura Porta-malas Cromado Black', pn: 'PC405-0A002' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Moldura Tampa Traseira (Black Piano)', pn: 'PC405-0A00D43' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Moldura Tampa Traseira (Primer-Sem Pintura)', pn: 'PC405-0A00F00' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Par Moldura Para-Choque (Black Piano)', pn: 'PC401-0A00Y' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Par Moldura Para-Choque (Cromado)', pn: 'PC401-0A00Z' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Par Moldura Para-Choque Traseiro (Cromado)', pn: 'PC405-0A009' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Ponteira de escapamento cromada', pn: 'PV413-0A010' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'PONTEIRA DE ESCAPAMENTO GR', pn: 'PV413-0A020' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Protetor do Porta-malas', pn: 'PC382-0A003' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Protetor para Para-brisa', pn: 'PC234-0A001' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Rack-teto', pn: 'PT767-16220' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Rede de Porta-malas Lateral', pn: 'PC246-0A003' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rede do porta-malas', pn: 'PC246-0A001' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Soleira', pn: 'PV382-0A010' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Soleira iluminada', pn: 'P7531-0A001' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Spoiler da tampa traseira', pn: 'PC150-0A001-00' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Spoiler Para-Choque Dianteiro (Black Piano)', pn: 'PC154-0A00A43' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Spoiler parachoque traseiro', pn: 'PC158-0A001' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'Spoiler Para-Choque Traseiro (Black Piano)', pn: 'PC158-0A00A43' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'DESIGN', produto: 'TAPETE GR (Conjunto)', pn: 'PV210-0A010' },
    { veiculo: 'COROLLA CROSS HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Trava de segurança do estepe', pn: 'PV458-0D001' },

    // --- RAV4 PLUG-IN HYBRID ---
    { veiculo: 'RAV4 PLUG-IN HYBRID', categoria: 'DESIGN', produto: 'Aplique cromado da tampa do porta-malas', pn: 'PW405-42000-01' },
    { veiculo: 'RAV4 PLUG-IN HYBRID', categoria: 'DESIGN', produto: 'Aplique cromado do para-choque', pn: 'PW401-42000-01' },
    { veiculo: 'RAV4 PLUG-IN HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'RAV4 PLUG-IN HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (bege)', pn: 'PZ0100000102' },
    { veiculo: 'RAV4 PLUG-IN HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'RAV4 PLUG-IN HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Caixa organizadora de porta-malas com três divisórias', pn: 'PZ002-0D012' },
    { veiculo: 'RAV4 PLUG-IN HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Compressor de ar 12 V digital', pn: 'PZ068-00003' },
    { veiculo: 'RAV4 PLUG-IN HYBRID', categoria: 'DESIGN', produto: 'Friso lateral inferior cromado', pn: 'PW156-42000-01' },
    { veiculo: 'RAV4 PLUG-IN HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rede de porta-malas', pn: 'PZ472-Q0341-ZA' },
    { veiculo: 'RAV4 PLUG-IN HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },

    // --- HIACE ---
    { veiculo: 'HIACE', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'ALMOFADA PROTETORA CINTO DE SEGURANÇA', pn: 'PC22C0D001' },
    { veiculo: 'HIACE', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO AIR MOTION (Preto)', pn: 'PC2290K001' },
    { veiculo: 'HIACE', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'APOIO ENCOSTO DE BANCO (preto)', pn: 'PZ0100000101' },
    { veiculo: 'HIACE', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Caixa organizadora de porta-malas com três divisórias', pn: 'PZ002-0D012' },
    { veiculo: 'HIACE', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'CALHA DE CHUVA', pn: 'PC16226001' },
    { veiculo: 'HIACE', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'PORTA DOCUMENTO', pn: 'PC2340D003' },
    { veiculo: 'HIACE', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Refrigerador portátil', pn: 'PZ006-06001' },

    // --- YARIS CROSS HYBRID ---
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'DESIGN', produto: 'Aplique Cromado do Farol de Neblina', pn: 'PV175-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'DESIGN', produto: 'Aplique Cromado do Retrovisor', pn: 'PV169-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Bandeja de Porta-Malas', pn: 'PV241-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Calha de Chuva', pn: 'PV162-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Cama PET', pn: 'PV22C-BY020' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Capa Protetora PET', pn: 'PV228-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Chicote do Engate de Reboque', pn: 'PV5D2-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Cinto Guia PET', pn: 'PV22C-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Engate de Reboque', pn: 'PV960-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'DESIGN', produto: 'Friso Lateral', pn: 'PV170-BY020' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'DESIGN', produto: 'Friso Lateral Inferior', pn: 'PV170-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'DESIGN', produto: 'Iluminação do Cockpit', pn: 'PV52B-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'DESIGN', produto: 'Ornamento Lateral Inferior', pn: 'PV179-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'CONFORTO E CONVENIÊNCIA', produto: 'Rack de Teto', pn: 'PV301-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Sensor de Estacionamento Dianteiro', pn: 'PV501-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'DESIGN', produto: 'Soleira', pn: 'PV382-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'DESIGN', produto: 'Spoiler Dianteiro', pn: 'PV154-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'DESIGN', produto: 'Spoiler Lateral', pn: 'PV150-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'DESIGN', produto: 'Spoiler Traseiro', pn: 'PV156-BY010' },
    { veiculo: 'YARIS CROSS HYBRID', categoria: 'SEGURANÇA E PROTEÇÃO', produto: 'Trava de segurança do estepe', pn: 'PV458-0D002' },


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
            const termos = termoBusca.split(' ').filter(t => t.length > 0);

            const filtrados = dadosAcessorios.filter(item => {
                // Verifica cada termo da busca
                return termos.every(termo => {
                    // Garante que os campos existam e padroniza a busca (incluindo o erro 'category')
                    const pn = (item.pn || "").toLowerCase();
                    const veiculo = (item.veiculo || "").toLowerCase();
                    const categoria = (item.categoria || item.category || "").toLowerCase(); // Aceita ambos por segurança
                    const produto = (item.produto || "").toLowerCase();

                    return pn.includes(termo) ||
                           veiculo.includes(termo) ||
                           categoria.includes(termo) ||
                           produto.includes(termo);
                });
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