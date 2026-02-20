/**
 * Banco de Dados Consolidado e Validado - Nexus Gestão
 * Fontes: Bridgestone, Dunlop, Michelin, Pirelli e Yokohama
 */
const dadosPneus = [
    // --- BRIDGESTONE / FIRESTONE ---
    // --- 1 a 10 ---
    { codigo: '42652 90113', marca: 'FIRESTONE', veiculo: 'ETIOS', desc: 'PNEU 175/65 R14 82T F-700 FIRESTONE' },
    { codigo: '42652 90101', marca: 'BRIDGESTONE', veiculo: 'ETIOS', desc: 'PNEU 175/65R14 82T F-700 BRIDGESTONE' },
    { codigo: '42652 90001', marca: 'BRIDGESTONE', veiculo: 'ETIOS / YARIS', desc: 'PNEU 175/65R14 B250' },
    { codigo: '42652 90013', marca: 'FIRESTONE', veiculo: 'ETIOS', desc: 'PNEU 175/65R14 F-700 (82T)' },
    { codigo: '42652 90102', marca: 'BRIDGESTONE', veiculo: 'ETIOS / YARIS', desc: 'PNEU 185/60R15 84H ECOPIA EP150 BRIDGESTONE' },
    { codigo: '42652 90014', marca: 'FIRESTONE', veiculo: 'ETIOS / YARIS', desc: 'PNEU 185/60R15 84H F-700 FIRESTONE' },
    { codigo: '42652 90002', marca: 'BRIDGESTONE', veiculo: 'YARIS / COROLLA', desc: 'PNEU 185/60R15 84H TURANZA ER300' },
    { codigo: '42652 91001', marca: 'FIRESTONE', veiculo: 'COROLLA (ANTIGO)', desc: 'PNEU 185/70 R14' },
    { codigo: '42652 91101', marca: 'FIRESTONE', veiculo: 'COROLLA (ANTIGO)', desc: 'PNEU 185/70R14 88T F' },
    { codigo: '42652 91002', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 195/60 R15' },

    // --- 11 a 20 ---
    { codigo: '42652 91102', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 195/60 R15 88H' },
    { codigo: '42652 91202', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 195/60R15 88V ECOPIA EP 150 BRIDGESTONE' },
    { codigo: '42652 91203', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 195/65R15 91H ECOPIA EP150' },
    { codigo: '42652 91003', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 195/65R15 91H ECOPIA EP150 BRIGESTONE' },
    { codigo: '42652 91004', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V TURANZA ER300' },
    { codigo: '42652 91015', marca: 'FIRESTONE', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 F-700 91V FIRESTONE' },
    { codigo: '42652 91014', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V ECOPIA EP150 BRIDGESTONE' },
    { codigo: '42652 92003', marca: 'BRIDGESTONE', veiculo: 'HILUX', desc: 'PNEU 205/70 R16' },
    { codigo: '42652 91005', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 215/50R17 91V TURANZA ER33 NRFT' },
    { codigo: '42652 91105', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU 215/50R17 95W XL TURANZA T005 NRFT' },

    // --- 21 a 30 ---
    { codigo: '42652 95002', marca: 'BRIDGESTONE', veiculo: 'CAMRY', desc: 'PNEU 215/55R17 93V TURANZA ER33' },
    { codigo: '42652 95102', marca: 'BRIDGESTONE', veiculo: 'CAMRY', desc: 'PNEU 215/55R17 94V TURANZA T005 NRFT' },
    { codigo: '42652 95001', marca: 'BRIDGESTONE', veiculo: 'HILUX/SW4', desc: 'PNEU 215/60 R16 BRIDGESTONE FIRESTONE DO BRAS' },
    { codigo: '42652 96006', marca: 'BRIDGESTONE', veiculo: 'ESPORTIVO', desc: 'PNEU 225/40R18 88Y' },
    { codigo: '42652 91006', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/45R17 91W TURANZA T005' },
    { codigo: '42652 98005', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50R/18 95V' },
    { codigo: '42652 91008', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50R18 95V ALENZA 001' },
    { codigo: '42652 99001', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU 225/50R18 95W T' },
    { codigo: '42652 94003', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU 225/60R18 , DE' },
    { codigo: '42652 94103', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU 225/60R18 100H ALENZA H/L 33' },

    // --- 31 a 40 ---
    { codigo: '42652 94001', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU 225/65 R17' },
    { codigo: '42652 94101', marca: 'FIRESTONE', veiculo: 'RAV4', desc: 'PNEU 225/65R17 102H DESTINATION LE2 NRFT' },
    { codigo: '42652 95003', marca: 'BRIDGESTONE', veiculo: 'SW4', desc: 'PNEU 235/45R18, DE BRIDGESTONE' },
    { codigo: '42652 94004', marca: 'BRIDGESTONE', veiculo: 'SW4 Diamond', desc: 'PNEU 235/50R20 100V ALENZA 001 BRIDGESTONE' },
    { codigo: '42652 94002', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU 235/55R18 100V DUELER H/L 33 NRFT' },
    { codigo: '42652 98003', marca: 'BRIDGESTONE', veiculo: 'SW4', desc: 'PNEU 235/55R19 101W' },
    { codigo: '42652 98004', marca: 'BRIDGESTONE', veiculo: 'SW4', desc: 'PNEU 235/55R20 102V' },
    { codigo: '42652 94005', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU 235/60R18 103 V' },
    { codigo: '42652 98102', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU 235/60R18 103W' },
    { codigo: '42652 99101', marca: 'BRIDGESTONE', veiculo: 'UTILITARIO', desc: 'PNEU 235/65R16C BL115RD DURAVIS R660 BRIDGEST' },

    // --- 41 a 50 ---
    { codigo: '42652 97002', marca: 'BRIDGESTONE', veiculo: 'CAMRY', desc: 'PNEU 245/45R19, DE B' },
    { codigo: '42652 97004', marca: 'BRIDGESTONE', veiculo: 'SW4', desc: 'PNEU 245/45RF20 99Y' },
    { codigo: '42652 96005', marca: 'BRIDGESTONE', veiculo: 'ESPORTIVO', desc: 'PNEU 245/45R17 95Y P' },
    { codigo: '42652 96003', marca: 'BRIDGESTONE', veiculo: 'ESPORTIVO', desc: 'PNEU 255/35R18 90Y ,' },
    { codigo: '42652 92001', marca: 'BRIDGESTONE', veiculo: 'HILUX', desc: 'PNEU 255/70 R15' },
    { codigo: '42652 92005', marca: 'BRIDGESTONE', veiculo: 'HILUX/SW4', desc: 'PNEU 265/60R18 110H DUELER H/T 684II' },
    { codigo: '42652 92105', marca: 'BRIDGESTONE', veiculo: 'HILUX/SW4', desc: 'PNEU 265/60R18 110T DUELER H/T 684 II ECOPIA NRF' },
    { codigo: '42652 93001', marca: 'BRIDGESTONE', veiculo: 'HILUX/SW4', desc: 'PNEU 265/65 R17 BRIDGESTONE DUELER HT 684 112S' },
    { codigo: '42652 93002', marca: 'BRIDGESTONE', veiculo: 'HILUX', desc: 'PNEU 265/65R17 112S DUELER A/T 693 III NRFT BRIDG' },
    { codigo: '42652 92106', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU 265/65R17 112T DESTINATION ATX NRFT FIRES' },

    // --- 51 a 60 ---
    { codigo: '42652 92002', marca: 'BRIDGESTONE', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112S DUELER H/T 840 NRFT' },
    { codigo: '42652 92102', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112T DESTINATION H/T FIRESTONE' },
    { codigo: '42652 92202', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112T, DESTINATION H/T NRFT FIRES' },
    { codigo: '42652 94107', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: 'PNEU ALENZA 001 215/' },
    { codigo: '42652 94106', marca: 'BRIDGESTONE', veiculo: 'COROLLA CROSS', desc: 'PNEU ALENZA 001 225/' },
    { codigo: '42652 94006', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU ALENZA 001 235/' },
    { codigo: '42652 94104', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU ALENZA 001 235/' },
    { codigo: '42652 94105', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU ALENZA 001 235/' },
    { codigo: '42652 90004', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU DEST ATX 265/60' },
    { codigo: '42652 90008', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU DEST ATX 265/70' },

    // --- 61 a 70 ---
    { codigo: '42652 90005', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU DEST H/T 265/65' },
    { codigo: '42652 90003', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU DEST LE3 265/60' },
    { codigo: '42652 90006', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU DEST LE3 265/65' },
    { codigo: '42652 90007', marca: 'FIRESTONE', veiculo: 'HILUX', desc: 'PNEU DEST MT 23 LT26' },
    { codigo: '42652 92103', marca: 'BRIDGESTONE', veiculo: 'HILUX', desc: 'PNEU DLR A/T REVO 2' },
    { codigo: '42652 90104', marca: 'FIRESTONE', veiculo: 'ETIOS/YARIS', desc: 'PNEU F700 185/60R15' },
    { codigo: '42652 90114', marca: 'FIRESTONE', veiculo: 'COROLLA', desc: 'PNEU F700 195/65R15' },
    { codigo: '42652 92004', marca: 'BRIDGESTONE', veiculo: 'HILUX', desc: 'PNEU LT265/75R16' },
    { codigo: '42652 98002', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'PNEU P235/60R18 103V' },
    { codigo: '42652 91110', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU TRNZ T005 215/5' },

    // --- 71 a 80 ---
    { codigo: '42652 97103', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU TRNZ T005 RFT 2' },
    { codigo: '42652 97102', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU TRNZ T005A EXT' },
    { codigo: '42652 91103', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'PNEU TURANZA 195/65' },
    { codigo: '42652 91016', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'TIRE 215/50R17 95W T' },
    { codigo: '42652 96202', marca: 'BRIDGESTONE', veiculo: 'RAV4', desc: 'TIRE ALENZA 001 235/' },
    { codigo: '42652 99102', marca: 'BRIDGESTONE', veiculo: 'SUV', desc: 'TIRE ECOPIA R710A 21' },
    { codigo: '42652 91115', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'TIRE TURANZA 215/50R' },
    { codigo: '42652 91112', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'TIRE TURANZA T005 22' },
    { codigo: '42652 96102', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'TIRE TURANZA T005 RF' },
    { codigo: '42652 96002', marca: 'BRIDGESTONE', veiculo: 'COROLLA', desc: 'TIRE TURANZA T005A E' },

    // --- DUNLOP ---
    // --- LINHA ETIOS E YARIS (Aros 14 e 15) ---
    { codigo: '42652 50001', marca: 'DUNLOP', veiculo: 'ETIOS', desc: 'PNEU 175/65R14 82T S' },
    { codigo: '42652 50101', marca: 'DUNLOP', veiculo: 'ETIOS', desc: 'PNEU 175/65R14 82T SP TOURING R1L DUNLOP' },
    { codigo: '42652 50102', marca: 'DUNLOP', veiculo: 'ETIOS / YARIS', desc: 'PNEU 185/60R15 84H ENASAVE EC300+' },
    { codigo: '42652 50002', marca: 'DUNLOP', veiculo: 'ETIOS / YARIS', desc: 'PNEU 185/60R15 84H ENASAVE EC300+' },
    { codigo: '42652 50202', marca: 'DUNLOP', veiculo: 'YARIS', desc: 'PNEU 185/60R15 88H XL SP SPORT FM800' },
    { codigo: '42652 51002', marca: 'DUNLOP', veiculo: 'YARIS / COROLLA', desc: 'PNEU 195/60R15 88V S' },
    { codigo: '42652 51013', marca: 'DUNLOP', veiculo: 'YARIS / COROLLA', desc: 'PNEU 195/65R15 91H E' },
    { codigo: '42652 51003', marca: 'DUNLOP', veiculo: 'YARIS / COROLLA', desc: 'PNEU 195/65R15 91H S' },

    // --- LINHA COROLLA (Sedan - Aros 16 e 17) ---
    { codigo: '42652 51004', marca: 'DUNLOP', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V S' },
    { codigo: '42652 51104', marca: 'DUNLOP', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V SP SPORT LM704' },
    { codigo: '42652 51105', marca: 'DUNLOP', veiculo: 'COROLLA ALTIS', desc: 'PNEU 215/50R17 91V SP SPORT FM800 DUNLOP' },
    { codigo: '42652 51005', marca: 'DUNLOP', veiculo: 'COROLLA ALTIS', desc: 'PNEU 215/50R17 91V SP SPORT LM704' },
    { codigo: '42652 55002', marca: 'DUNLOP', veiculo: 'COROLLA', desc: 'PNEU 215/55R17 94V S' },
    { codigo: '42652 55102', marca: 'DUNLOP', veiculo: 'COROLLA', desc: 'PNEU 215/55R17 94W S' },
    { codigo: '42652 51006', marca: 'DUNLOP', veiculo: 'COROLLA GR/ALTIS', desc: 'PNEU 225/45R17 91W SPORT MAXX 050' },
    { codigo: '42652 53A21', marca: 'DUNLOP', veiculo: 'COROLLA', desc: 'PNEU 225/45R17 Y/H,' },
    { codigo: '42652 53A20', marca: 'DUNLOP', veiculo: 'COROLLA', desc: 'PNEU 225/45R17 Y/H,' },

    // --- LINHA COROLLA CROSS / RAV4 (Aros 17 e 18) ---
    { codigo: '42652 51007', marca: 'DUNLOP', veiculo: 'COROLLA CROSS', desc: 'PNEU 215/60R17 96H ENASAVE EC300+' },
    { codigo: '42652 51008', marca: 'DUNLOP', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50R18 95V SP SPORT MAXX 050' },
    { codigo: '42652 59001', marca: 'DUNLOP', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50RF18 95V SP SPORT MAXX 050' },
    { codigo: '42652 54003', marca: 'DUNLOP', veiculo: 'RAV4', desc: 'PNEU 225/60R18 100H SP SPORT 01' },
    { codigo: '42652 52006', marca: 'DUNLOP', veiculo: 'RAV4', desc: 'PNEU 225/70R17 108/1' },
    { codigo: '42652 54002', marca: 'DUNLOP', veiculo: 'RAV4', desc: 'PNEU 235/55R18 100H,' },
    { codigo: '42652 54102', marca: 'DUNLOP', veiculo: 'RAV4', desc: 'PNEU 235/55R18 100V DUNLOP' },

    // --- LINHA HILUX E SW4 (Aros 16, 17 e 18) ---
    { codigo: '42652 52005', marca: 'DUNLOP', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110H GRANDTREK AT 25' },
    { codigo: '42652 53002', marca: 'DUNLOP', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112S,' },
    { codigo: '42652 52102', marca: 'DUNLOP', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112T' },
    { codigo: '42652 52002', marca: 'DUNLOP', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112T' },

    // --- CÓDIGOS ESPECÍFICOS E GENÉRICOS ---
    { codigo: '42652 50000', marca: 'DUNLOP', veiculo: 'TOYOTA', desc: 'PNEU DUNLOP 215/55R1' },
    { codigo: '42652 52111', marca: 'DUNLOP', veiculo: 'HILUX', desc: 'PNEU DUNLOP 265/60R1' },
    { codigo: '42652 52110', marca: 'DUNLOP', veiculo: 'HILUX', desc: 'PNEU DUNLOP 265/65R1' },
    { codigo: '42652 51205', marca: 'DUNLOP', veiculo: 'COROLLA', desc: 'PNEU TIRE 215/50 R17' },
    { codigo: '42652 50180', marca: 'DUNLOP', veiculo: 'AUTOMÓVEL', desc: 'PNEU, AUTOMOVEL' },
    { codigo: '42652 50360', marca: 'DUNLOP', veiculo: 'AUTOMÓVEL', desc: 'PNEU, AUTOMOVEL' },
    { codigo: '42652 50260', marca: 'DUNLOP', veiculo: 'AUTOMÓVEL', desc: 'PNEU, AUTOMOVEL' },
    { codigo: '42652 51102', marca: 'DUNLOP', veiculo: 'YARIS / COROLLA', desc: 'TIRE 195/60R15 88V S' },
    { codigo: '42652 51103', marca: 'DUNLOP', veiculo: 'COROLLA', desc: 'TIRE 195/65R15 91H S' },
    { codigo: '42652 52202', marca: 'DUNLOP', veiculo: 'HILUX', desc: 'TIRE DUNLOP 265/70R1' },

    // --- MICHELIN ---
    // --- PNEU (Itens 1 a 10) ---
    { codigo: '42652 65002', marca: 'MICHELIN', veiculo: 'CAMRY', desc: 'PNEU 215/55 R17 94W MICHELIN M4.+' },
    { codigo: '42652 60101', marca: 'MICHELIN', veiculo: 'ETIOS', desc: 'PNEU 175/65R14 82H E' },
    { codigo: '42652 60001', marca: 'MICHELIN', veiculo: 'ETIOS', desc: 'PNEU 175/65R14 82T' },
    { codigo: '42652 60002', marca: 'MICHELIN', veiculo: 'ETIOS / YARIS', desc: 'PNEU 185/60R15 88H' },
    { codigo: '42652 60102', marca: 'MICHELIN', veiculo: 'ETIOS / YARIS', desc: 'PNEU 185/60R15 88H PRIMACY4 MICHELIN' },
    { codigo: '42652 61001', marca: 'MICHELIN', veiculo: 'ETIOS (ANTIGO)', desc: 'PNEU 185/70R14 88H' },
    { codigo: '42652 61002', marca: 'MICHELIN', veiculo: 'YARIS / COROLLA', desc: 'PNEU 195/60 R15 88H' },
    { codigo: '42652 61102', marca: 'MICHELIN', veiculo: 'YARIS / COROLLA', desc: 'PNEU 195/60R15 88V TL ENERGY XM2+ M' },
    { codigo: '42652 61003', marca: 'MICHELIN', veiculo: 'YARIS', desc: 'PNEU 195/65R15 91H' },
    { codigo: '42652 61103', marca: 'MICHELIN', veiculo: 'YARIS', desc: 'PNEU 195/65R15 91H PRIMACY 4, MICHELIN' },

    // --- PNEU (Itens 11 a 20) ---
    { codigo: '4265261203', marca: 'MICHELIN', veiculo: 'YARIS', desc: 'PNEU 195/65R15 91H PRIMACY4' },
    { codigo: '42652 61004', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V' },
    { codigo: '42652 61204', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V PRIMACY 4 MICHELIN' },
    { codigo: '42652 61304', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91VT PRIMACY4+MI' },
    { codigo: '42652 61005', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 215/50R17 91V,' },
    { codigo: '42652 61305', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 215/50R17 95 WXLT PRIMACY MICHELIN' },
    { codigo: '42652 61205', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 215/50R17 95WXLTLPCY4+MI' },
    { codigo: '42652 65001', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 215/60 R16 99V' },
    { codigo: '42652 65201', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 215/60R16 99V P' },
    { codigo: '42652 65101', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 215/60R16 99V,' },

    // --- PNEU (Itens 21 a 30) ---
    { codigo: '42652 66006', marca: 'MICHELIN', veiculo: 'ESPORTIVO', desc: 'PNEU 225/40 ZR18 92Y' },
    { codigo: '42652 66106', marca: 'MICHELIN', veiculo: 'ESPORTIVO', desc: 'PNEU 225/40ZR18 92Y,' },
    { codigo: '42652 66001', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 225/45R17 94W' },
    { codigo: '42652 66101', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 225/45R17 94W P' },
    { codigo: '42652 66201', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'PNEU 225/45R17 94W XLT PRIMACY 4' },
    { codigo: '42652 66002', marca: 'MICHELIN', veiculo: 'ESPORTIVO', desc: 'PNEU 225/45ZR18 95Y' },
    { codigo: '42652 66102', marca: 'MICHELIN', veiculo: 'ESPORTIVO', desc: 'PNEU 225/45ZR18 95Y,' },
    { codigo: '42652 69001', marca: 'MICHELIN', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50 R18 95W TL PRIMACY 3 ZP GRNX MI' },
    { codigo: '42652 61108', marca: 'MICHELIN', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50 R18 99W XL TL PRIMACY 4 * MICHELIN' },
    { codigo: '42652 61105', marca: 'MICHELIN', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50R17 MICHELIN PRIMACY 4' },

    // --- PNEU (Itens 31 a 40) ---
    { codigo: '42652 61008', marca: 'MICHELIN', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50R18 99W XL TL PRIMACY 4' },
    { codigo: '42652 67001', marca: 'MICHELIN', veiculo: 'CAMRY', desc: 'PNEU 225/55 R17 97W' },
    { codigo: '42652 67101', marca: 'MICHELIN', veiculo: 'CAMRY', desc: 'PNEU 225/55R17 101W PRIMACY 4' },
    { codigo: '42652 64003', marca: 'MICHELIN', veiculo: 'RAV4', desc: 'PNEU 225/60R18 100V TL PILOT SPORT 4 SUV' },
    { codigo: '42652 63113', marca: 'MICHELIN', veiculo: 'RAV4', desc: 'PNEU 225/65 R17 106H XL TL PRIMACY SUV+ MI,' },
    { codigo: '42652 64001', marca: 'MICHELIN', veiculo: 'RAV4', desc: 'PNEU 225/65R17 102H' },
    { codigo: '42652 62105', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU 225/65R17 102H GEOLANDAR G91AV YOKOHAMA' },
    { codigo: '42652 64101', marca: 'MICHELIN', veiculo: 'RAV4', desc: 'PNEU 225/65R17 102H, PRIMACY SUV MI' },
    { codigo: '42652 65003', marca: 'MICHELIN', veiculo: 'ESPORTIVO', desc: 'PNEU 235/45R18 98W P' },
    { codigo: '42652 65103', marca: 'MICHELIN', veiculo: 'ESPORTIVO', desc: 'PNEU 235/45R18 98Y P' },

    // --- PNEU (Itens 41 a 50) ---
    { codigo: '42652 67003', marca: 'MICHELIN', veiculo: 'SW4', desc: 'PNEU 235/50 R18 97V' },
    { codigo: '42652 67103', marca: 'MICHELIN', veiculo: 'SW4', desc: 'PNEU 235/50R18 101Y' },
    { codigo: '42652 67203', marca: 'MICHELIN', veiculo: 'SW4', desc: 'PNEU 235/50R18 101Y' },
    { codigo: '42652 64002', marca: 'MICHELIN', veiculo: 'RAV4', desc: 'PNEU 235/55 R18 100H' },
    { codigo: '42652 68003', marca: 'MICHELIN', veiculo: 'RAV4', desc: 'PNEU 235/55 R19 101W' },
    { codigo: '42652 64102', marca: 'MICHELIN', veiculo: 'RAV4', desc: 'PNEU 235/55R18 100V,' },
    { codigo: '42652 68103', marca: 'MICHELIN', veiculo: 'SW4 / RAV4', desc: 'PNEU 235/55R19 105Y PILOT SPORT 4 SUV' },
    { codigo: '42652 68002', marca: 'MICHELIN', veiculo: 'RAV4', desc: 'PNEU 235/60R18 103V' },
    { codigo: '42652 68102', marca: 'MICHELIN', veiculo: 'RAV4', desc: 'PNEU 235/60R18 103W LATITUDE SPORT 3 MICHELIN' },
    { codigo: '42652 66005', marca: 'MICHELIN', veiculo: 'ESPORTIVO', desc: 'PNEU 245/45 R17 95Y' },

    // --- PNEU (Itens 51 a 60) ---
    { codigo: '42652 66105', marca: 'MICHELIN', veiculo: 'ESPORTIVO', desc: 'PNEU 245/45R17 99Y P' },
    { codigo: '42652 67002', marca: 'MICHELIN', veiculo: 'CAMRY', desc: 'PNEU 245/45R19 98Y' },
    { codigo: '42652 67102', marca: 'MICHELIN', veiculo: 'CAMRY', desc: 'PNEU 245/45R19 98Y,' },
    { codigo: '42652 66003', marca: 'MICHELIN', veiculo: 'ESPORTIVO', desc: 'PNEU 255/35 ZR18 94Y' },
    { codigo: '42652 66103', marca: 'MICHELIN', veiculo: 'ESPORTIVO', desc: 'PNEU 255/35ZR18 94Y,' },
    { codigo: '42652 62001', marca: 'MICHELIN', veiculo: 'HILUX', desc: 'PNEU 255/70 R15 108H' },
    { codigo: '42652 62305', marca: 'MICHELIN', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60 R18 110H TL PRIMACY SUV+ FRV MICHELIN' },
    { codigo: '42652 62205', marca: 'MICHELIN', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60 R18 110H TL PRIMACY SUV+ MICHELIN' },
    { codigo: '42652 62125', marca: 'MICHELIN', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60 R18 110T TL LTX FORCE MICHELIN' },
    { codigo: '42652 62015', marca: 'MICHELIN', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110H' },

    // --- PNEU (Itens 61 a 70) ---
    { codigo: '42652 62005', marca: 'MICHELIN', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110V' },
    { codigo: '42652 62025', marca: 'BFGOODRICH', veiculo: 'HILUX', desc: 'PNEU 265/60R18 114/110S ALL-TERRAIN T/A KO2' },
    { codigo: '42652 62115', marca: 'MICHELIN', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 114H' },
    { codigo: '42652 63103', marca: 'MICHELIN', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112H TL LTX TRAIL ST MICHELIN' },
    { codigo: '42652 63003', marca: 'MICHELIN', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112T' },
    { codigo: '42652 63102', marca: 'MICHELIN', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112T A/T MICHELIN' },
    { codigo: '42652 63101', marca: 'MICHELIN', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 120/1' },
    { codigo: '42652 62002', marca: 'MICHELIN', veiculo: 'HILUX', desc: 'PNEU 265/70 R16 112T LTX FORCE MICHELIN' },
    { codigo: '42652 62225', marca: 'MICHELIN', veiculo: 'HILUX', desc: 'PNEU LT 265/60R18/D' },
    { codigo: '42652 63201', marca: 'MICHELIN', veiculo: 'HILUX', desc: 'PNEU LT 265/65R17/D' },

    // --- PNEU / TIRE (Itens 71 a 83) ---
    { codigo: '42652 62204', marca: 'MICHELIN', veiculo: 'HILUX', desc: 'PNEU LT 265/70R16/D' },
    { codigo: '42652 62006', marca: 'MICHELIN', veiculo: 'HILUX', desc: 'PNEU LT265/65 R18 11' },
    { codigo: '42652 63001', marca: 'MICHELIN', veiculo: 'HILUX', desc: 'PNEU LT265/65R17 12' },
    { codigo: '42652 62104', marca: 'MICHELIN', veiculo: 'HILUX', desc: 'PNEU LT265/70R16 112' },
    { codigo: '42652 62004', marca: 'MICHELIN', veiculo: 'HILUX', desc: 'PNEU LT265/70R16 117' },
    { codigo: '42652 68001', marca: 'MICHELIN', veiculo: 'HILUX', desc: 'PNEU P225/70 R16 101' },
    { codigo: '42652 63002', marca: 'MICHELIN', veiculo: 'HILUX / SW4', desc: 'PNEU P265/65R17 110' },
    { codigo: '42652 62102', marca: 'MICHELIN', veiculo: 'HILUX', desc: 'PNEU P265/70 R16 111' },
    { codigo: '42652 60680', marca: 'GENÉRICO', veiculo: 'AUTOMÓVEL', desc: 'PNEU, AUTOMOVEL' },
    { codigo: '42652 61104', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'TIRE 205/55R16 94V P' },
    { codigo: '42652 61017', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'TIRE 215/60R17 100H' },
    { codigo: '42652 61007', marca: 'MICHELIN', veiculo: 'COROLLA', desc: 'TIRE 215/60R17 96H P' },
    { codigo: '42652 68005', marca: 'MICHELIN', veiculo: 'SW4 Diamond', desc: 'TIRE 235/50 R21 101W' },

    // --- PIRELLI ---
    // --- PNEU (Itens 1 a 10) ---
    { codigo: '42652 85002', marca: 'PIRELLI', veiculo: 'CAMRY / COROLLA', desc: 'PNEU 215/55R17 98W' },
    { codigo: '42652 85001', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'PNEU 215/60 R16 99V CINTURATO P7 PIRELLI' },
    { codigo: '42652 86004', marca: 'PIRELLI', veiculo: 'COROLLA ALTIS', desc: 'PNEU 225/45R17 91Y' },
    { codigo: '42652 86002', marca: 'PIRELLI', veiculo: 'ESPORTIVO', desc: 'PNEU 225/45R18 95W' },
    { codigo: '42652 87001', marca: 'PIRELLI', veiculo: 'CAMRY', desc: 'PNEU 225/55R17 101W' },
    { codigo: '42652 88001', marca: 'PIRELLI', veiculo: 'RAV4 / SW4', desc: 'PNEU 225/70R16 102T' },
    { codigo: '42652 88002', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'PNEU 235/60R18 107V' },
    { codigo: '42652 86005', marca: 'PIRELLI', veiculo: 'ESPORTIVO', desc: 'PNEU 245/45R17 95W' },
    { codigo: '42652 87002', marca: 'PIRELLI', veiculo: 'CAMRY', desc: 'PNEU 245/45R19 98Y' },
    { codigo: '42652 86003', marca: 'PIRELLI', veiculo: 'ESPORTIVO', desc: 'PNEU 255/35R18 94Y' },

    // --- PNEU (Itens 11 a 20) ---
    { codigo: '42652 80001', marca: 'PIRELLI', veiculo: 'ETIOS', desc: 'PNEU 175/65R14 PIRELLI CINTURATO P1 82T' },
    { codigo: '42652 80002', marca: 'PIRELLI', veiculo: 'ETIOS / YARIS', desc: 'PNEU 185/60R15 88H XL P1 CINTURATO' },
    { codigo: '42652 81001', marca: 'PIRELLI', veiculo: 'ETIOS (ANTIGO)', desc: 'PNEU 185/70R14 88T P400EV PIRELLI' },
    { codigo: '42652 80003', marca: 'PIRELLI', veiculo: 'YARIS', desc: 'PNEU 195/50R16 84H C' },
    { codigo: '42652 81002', marca: 'PIRELLI', veiculo: 'ETIOS / YARIS', desc: 'PNEU 195/60 R15 88H' },
    { codigo: '42652 81102', marca: 'PIRELLI', veiculo: 'ETIOS / YARIS', desc: 'PNEU 195/60R15 88H CINTURATO P1' },
    { codigo: '42652 81003', marca: 'PIRELLI', veiculo: 'YARIS', desc: 'PNEU 195/65R15 91H' },
    { codigo: '42652 81103', marca: 'PIRELLI', veiculo: 'YARIS', desc: 'PNEU 195/65R15 91H CINTURATO P1 PIRELLI' },
    { codigo: '42652 81021', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'PNEU 205/55 R16 91V S-I P7 CINT (KS) PIRELLI' },
    { codigo: '42652 81004', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V' },

    // --- PNEU (Itens 21 a 30) ---
    { codigo: '42652 81104', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V CINTURATO P7' },
    { codigo: '42652 82003', marca: 'PIRELLI', veiculo: 'HILUX', desc: 'PNEU 205R16C 110T S' },
    { codigo: '42652 81020', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'PNEU 215/50 R17 91V' },
    { codigo: '42652 81025', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'PNEU 215/50R17 91V P' },
    { codigo: '42652 81005', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'PNEU 215/50R17 91V, CINTURATO' },
    { codigo: '42652 81015', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'PNEU 215/50R17 95W C' },
    { codigo: '42652 86006', marca: 'PIRELLI', veiculo: 'ESPORTIVO', desc: 'PNEU 225/40ZR18 92Y' },
    { codigo: '42652 86011', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'PNEU 225/45R17 91Y PIRELLI POWERGY' },
    { codigo: '42652 86001', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'PNEU 225/45R17 94W CINTURATO P1 PLUS' },
    { codigo: '42652 86102', marca: 'PIRELLI', veiculo: 'ESPORTIVO', desc: 'PNEU 225/45R18 95W C' },

    // --- PNEU (Itens 31 a 40) ---
    { codigo: '42652 89001', marca: 'PIRELLI', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50RF18 95W' },
    { codigo: '42652 84003', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'PNEU 225/60R18 104H SCORPION VEAS PIRELLI' },
    { codigo: '42652 87003', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'PNEU 235/50R18 97V S' },
    { codigo: '42652 88004', marca: 'PIRELLI', veiculo: 'SW4', desc: 'PNEU 235/55R20 102V,' },
    { codigo: '42652 87102', marca: 'PIRELLI', veiculo: 'CAMRY', desc: 'PNEU 245/45R19 98Y P' },
    { codigo: '42652 87004', marca: 'PIRELLI', veiculo: 'SW4', desc: 'PNEU 245/45R20 103W' },
    { codigo: '42652 82015', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110H' },
    { codigo: '42652 82115', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110H S-A/T+ WL PIRELLI' },
    { codigo: '42652 82005', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110H,' },
    { codigo: '42652 83102', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112H SCORPION STR' },

    // --- PNEU (Itens 41 a 50) ---
    { codigo: '42652 83002', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112H SCORPION STR PIRELLI' },
    { codigo: '42652 83011', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112S' },
    { codigo: '42652 83101', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112T' },
    { codigo: '42652 83001', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112T' },
    { codigo: '42652 83201', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112T' },
    { codigo: '42652 82002', marca: 'PIRELLI', veiculo: 'HILUX', desc: 'PNEU 265/70 R16 112T' },
    { codigo: '42652 82102', marca: 'PIRELLI', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112T' },
    { codigo: '42652 82012', marca: 'PIRELLI', veiculo: 'HILUX', desc: 'PNEU 265/75R16 123S' },
    { codigo: '42652 82101', marca: 'PIRELLI', veiculo: 'HILUX', desc: 'PNEU LT255/75R15 109' },
    { codigo: '42652 84001', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'PNEU P225/65R17 102' },

    // --- PNEU (Itens 51 a 61) ---
    { codigo: '42652 84002', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'PNEU P235/58R18 104V' },
    { codigo: '42652 88003', marca: 'PIRELLI', veiculo: 'SW4', desc: 'PNEU P235/55R19 105V' },
    { codigo: '42652 82001', marca: 'PIRELLI', veiculo: 'HILUX', desc: 'PNEU P265/70 R15 112' },
    { codigo: '42652 82004', marca: 'PIRELLI', veiculo: 'HILUX', desc: 'PNEU P265/70R16 112H' },
    { codigo: '42652 83003', marca: 'PIRELLI', veiculo: 'HILUX', desc: 'PNEU P265/70R17 113T' },
    { codigo: '42652 80124', marca: 'PIRELLI', veiculo: 'COROLLA / CAMRY', desc: 'PNEU PIRELLI 215/55R' },
    { codigo: '42652 80123', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'PNEU PIRELLI 215/60R' },

    // --- TIRE (Itens 62 a 70) ---
    { codigo: '42652 80000', marca: 'PIRELLI', veiculo: 'ETIOS / YARIS', desc: 'TIRE 195/55R15 85H P' },
    { codigo: '42652 84000', marca: 'PIRELLI', veiculo: 'YARIS', desc: 'TIRE 195/60R16 89H P' },
    { codigo: '42652 81000', marca: 'PIRELLI', veiculo: 'YARIS', desc: 'TIRE 195/65R15 91H P' },
    { codigo: '42652 81200', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 205/50R17 89H P' },
    { codigo: '42652 85000', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 205/55R16 91V P' },
    { codigo: '42652 81400', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 205/55R17 91V S' },
    { codigo: '42652 81300', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 205/55R17 91V S' },
    { codigo: '42652 82600', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 205/55R17 91V S' },
    { codigo: '42652 82000', marca: 'PIRELLI', veiculo: 'YARIS', desc: 'TIRE 205/60R15 91H P' },

    // --- TIRE (Itens 71 a 80) ---
    { codigo: '42652 83000', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 205/60R15 91H S' },
    { codigo: '42652 86000', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 205/60R16 92H S' },
    { codigo: '42652 87000', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 205/60R16 92H S' },
    { codigo: '42652 88000', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 205/65R16 95H S' },
    { codigo: '42652 81500', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 215/55R17 94V P' },
    { codigo: '42652 81600', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 215/55R17 94V S' },
    { codigo: '42652 81800', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 215/60R17 100H' },
    { codigo: '42652 81700', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 215/60R17 100H' },
    { codigo: '42652 81017', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 215/60R17 100H' },
    { codigo: '42652 81007', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 215/60R17 100H' },

    // --- TIRE (Itens 81 a 90) ---
    { codigo: '42652 89000', marca: 'PIRELLI', veiculo: 'COROLLA CROSS', desc: 'TIRE 215/65R16 102H' },
    { codigo: '42652 81110', marca: 'PIRELLI', veiculo: 'UTILITARIO', desc: 'TIRE 215/65R16C 109T' },
    { codigo: '42652 82500', marca: 'PIRELLI', veiculo: 'COROLLA', desc: 'TIRE 225/45R17 91W P' },
    { codigo: '42652 82900', marca: 'PIRELLI', veiculo: 'ESPORTIVO', desc: 'TIRE 225/45R18 95W X' },
    { codigo: '42652 84300', marca: 'PIRELLI', veiculo: 'CAMRY', desc: 'TIRE 225/45R19 92W S' },
    { codigo: '42652 81120', marca: 'PIRELLI', veiculo: 'COROLLA CROSS', desc: 'TIRE 225/50R18 95V S' },
    { codigo: '42652 81008', marca: 'PIRELLI', veiculo: 'COROLLA CROSS', desc: 'TIRE 225/50R18 95W C' },
    { codigo: '42652 83800', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'TIRE 225/55R18 98H S' },
    { codigo: '42652 83100', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'TIRE 225/55R18 98H S' },
    { codigo: '42652 83300', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'TIRE 225/55R18 98V S' },

    // --- TIRE (Itens 91 a 103) ---
    { codigo: '42652 83200', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'TIRE 225/55R18 98V S' },
    { codigo: '42652 81130', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'TIRE 225/60R17 103H' },
    { codigo: '42652 83400', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'TIRE 225/60R18 104H' },
    { codigo: '42652 83500', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'TIRE 225/60R18 104H' },
    { codigo: '42652 82100', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'TIRE 225/65R17 102H' },
    { codigo: '42652 83900', marca: 'PIRELLI', veiculo: 'SW4', desc: 'TIRE 235/45R19 95V S' },
    { codigo: '42652 83600', marca: 'PIRELLI', veiculo: 'SW4', desc: 'TIRE 235/50R18 97V S' },
    { codigo: '42652 81140', marca: 'PIRELLI', veiculo: 'SW4 Diamond', desc: 'TIRE 235/50R19 99V S' },
    { codigo: '42652 83700', marca: 'PIRELLI', veiculo: 'RAV4', desc: 'TIRE 235/60R18 107H' },
    { codigo: '42652 82300', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'TIRE 235/65R17 108H' },
    { codigo: '42652 82200', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'TIRE 235/65R17 108H' },
    { codigo: '42652 84100', marca: 'PIRELLI', veiculo: 'CAMRY', desc: 'TIRE 245/45R19 98Y R' },
    { codigo: '42652 84200', marca: 'PIRELLI', veiculo: 'SW4 Diamond', desc: 'TIRE 255/55R19 111H' },
    { codigo: '42652 82400', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'TIRE 265/65R17 112T' },
    { codigo: '42652 81100', marca: 'PIRELLI', veiculo: 'HILUX', desc: 'TIRE 265/70R16 112T' },
    { codigo: '42652 83103', marca: 'PIRELLI', veiculo: 'HILUX / SW4', desc: 'TIRE LT265/70R17 121' },
    { codigo: '42652 84400', marca: 'PIRELLI', veiculo: 'SW4 Diamond', desc: 'TIRE P265/50R20 107V' },

    // --- YOKOHAMA ---
    // --- LINHA YOKOHAMA (Itens 1 a 20) ---
    { codigo: '42652 711SE', marca: 'LANVIGATOR', veiculo: 'YARIS', desc: '195/60R15 LANVIGATOR COMFORT II' },
    { codigo: '42652 73101', marca: 'YOKOHAMA', veiculo: 'HILUX / SW4', desc: '265/65R17 112HGEOLANDAR G015 A/T YOKOHAMA' },
    { codigo: '42652 701SE', marca: 'JKTYRE', veiculo: 'ETIOS', desc: 'PNEU 175/70R14 JKTYRE VECTRA' },
    { codigo: '42652 74002', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU 235/55R18 100V' },
    { codigo: '42652 70001', marca: 'YOKOHAMA', veiculo: 'ETIOS', desc: 'PNEU 175/65R14 82T B' },
    { codigo: '42652 70101', marca: 'YOKOHAMA', veiculo: 'ETIOS', desc: 'PNEU 175/65R14 82T E' },
    { codigo: '42652 70TSE', marca: 'ULTMA', veiculo: 'ETIOS', desc: 'PNEU 175/70R13 82T ULTMA XPS TUBELESS (IP)' },
    { codigo: '42652 71TSE', marca: 'SUNFULL', veiculo: 'ETIOS', desc: 'PNEU 185/60 R14 82H SF-688 SUNFULL' },
    { codigo: '42652 70002', marca: 'YOKOHAMA', veiculo: 'YARIS', desc: 'PNEU 185/60R15 84H B' },
    { codigo: '42652 70102', marca: 'YOKOHAMA', veiculo: 'YARIS', desc: 'PNEU 185/60R15 84H E' },

    // --- LINHA YOKOHAMA (Itens 21 a 40) ---
    { codigo: '42652 71001', marca: 'YOKOHAMA', veiculo: 'ETIOS', desc: 'PNEU 185/70R14 88H B' },
    { codigo: '42652 71101', marca: 'YOKOHAMA', veiculo: 'ETIOS', desc: 'PNEU 185/70R14 88T E' },
    { codigo: '42652 71002', marca: 'YOKOHAMA', veiculo: 'YARIS', desc: 'PNEU 195/60R15 88H /' },
    { codigo: '42652 71102', marca: 'YOKOHAMA', veiculo: 'YARIS', desc: 'PNEU 195/60R15 88H E' },
    { codigo: '42652 71103', marca: 'YOKOHAMA', veiculo: 'YARIS', desc: 'PNEU 195/65R15 91H / A349 GX YOKOHAMA' },
    { codigo: '42652 71003', marca: 'YOKOHAMA', veiculo: 'YARIS', desc: 'PNEU 195/65R15 91H B' },
    { codigo: '42652 71013', marca: 'YOKOHAMA', veiculo: 'YARIS', desc: 'PNEU 195/65R15 91H E' },
    { codigo: '42652 71004', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'PNEU 205/55 R16 91V ES32 YOKOHAMA' },
    { codigo: '42652 71104', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V A' },
    { codigo: '42652 71014', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'PNEU 205/55R16 91V E' },

    // --- LINHA YOKOHAMA (Itens 41 a 60) ---
    { codigo: '42652 71005', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'PNEU 215/50R17 91V,' },
    { codigo: '42652 71105', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'PNEU 215/50R17 95V E' },
    { codigo: '42652 75002', marca: 'YOKOHAMA', veiculo: 'CAMRY', desc: 'PNEU 215/55R17 93VDEB E70 YOKOHAMA' },
    { codigo: '42652 75012', marca: 'YOKOHAMA', veiculo: 'CAMRY', desc: 'PNEU 215/55R17 94V E' },
    { codigo: '42652 75001', marca: 'YOKOHAMA', veiculo: 'COROLLA CROSS', desc: 'PNEU 215/60R16 95V A348 YOKOHAMA' },
    { codigo: '42652 76006', marca: 'YOKOHAMA', veiculo: 'ESPORTIVO', desc: 'PNEU 225/40R18 92Y A' },
    { codigo: '42652 76201', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'PNEU 225/45R17 94W A' },
    { codigo: '42652 76301', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'PNEU 225/45R17 94W ADVAN FLEVA YOKOHAMA' },
    { codigo: '42652 76101', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'PNEU 225/45R17 94W,' },
    { codigo: '42652 76001', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'PNEU 225/45R17 94Y A' },
    { codigo: '42652 76002', marca: 'YOKOHAMA', veiculo: 'ESPORTIVO', desc: 'PNEU 225/45R18 95Y A' },
    { codigo: '42652 79001', marca: 'YOKOHAMA', veiculo: 'COROLLA CROSS', desc: 'PNEU 225/50RF18 95V' },
    { codigo: '42652 77101', marca: 'YOKOHAMA', veiculo: 'CAMRY', desc: 'PNEU 225/55R17 101W' },
    { codigo: '42652 77001', marca: 'YOKOHAMA', veiculo: 'CAMRY', desc: 'PNEU 225/55R17 101Y' },
    { codigo: '42652 74013', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU 225/60R18 100H' },
    { codigo: '42652 74003', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU 225/60R18 100H,' },
    { codigo: '42652 74103', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU 225/60R18 100V' },
    { codigo: '42652 74001', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU 225/65R17 102H GEOLANDAR G91AV YOKOHAMA' },
    { codigo: '42652 74111', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU 225/65R17 102HGEOLANDAR G91AV' },
    { codigo: '42652 78011', marca: 'YOKOHAMA', veiculo: 'HILUX', desc: 'PNEU 225/70R16 103H' },

    // --- LINHA YOKOHAMA (Itens 61 a 80) ---
    { codigo: '42652 72006', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU 225/70R17 108/1' },
    { codigo: '42652 72016', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU 225/70R17 108T' },
    { codigo: '42652 75003', marca: 'YOKOHAMA', veiculo: 'ESPORTIVO', desc: 'PNEU 235/45ZR18 98Y' },
    { codigo: '42652 77003', marca: 'YOKOHAMA', veiculo: 'SW4', desc: 'PNEU 235/50R18 97V A' },
    { codigo: '42652 74005', marca: 'YOKOHAMA', veiculo: 'SW4 Diamond', desc: 'PNEU 235/50R20 100V (RUN FLAT) BLUEARTH-XT AE61 Z.' },
    { codigo: '42652 74102', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU 235/55R18 100V GEOLANDAR G058' },
    { codigo: '42652 78003', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU 235/55R19 101V' },
    { codigo: '42652 78104', marca: 'YOKOHAMA', veiculo: 'SW4 Diamond', desc: 'PNEU 235/55R20 102V YOKOHAMA GEOLANDAR G058 CV' },
    { codigo: '42652 78004', marca: 'YOKOHAMA', veiculo: 'SW4 Diamond', desc: 'PNEU 235/55R20 102V,' },
    { codigo: '42652 76005', marca: 'YOKOHAMA', veiculo: 'ESPORTIVO', desc: 'PNEU 245/45R17 95W A' },
    { codigo: '42652 77002', marca: 'YOKOHAMA', veiculo: 'CAMRY', desc: 'PNEU 245/45R19 98Y A' },
    { codigo: '42652 77102', marca: 'YOKOHAMA', veiculo: 'CAMRY', desc: 'PNEU 245/45R19 98Y A' },
    { codigo: '42652 76003', marca: 'YOKOHAMA', veiculo: 'ESPORTIVO', desc: 'PNEU 255/35ZR18 94Y' },
    { codigo: '42652 72015', marca: 'YOKOHAMA', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110H' },
    { codigo: '42652 72115', marca: 'YOKOHAMA', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110H GEOLANDAR G015 A/T' },
    { codigo: '42652 72005', marca: 'YOKOHAMA', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110H,' },
    { codigo: '42652 72105', marca: 'YOKOHAMA', veiculo: 'HILUX / SW4', desc: 'PNEU 265/60R18 110H,' },
    { codigo: '42652 73011', marca: 'YOKOHAMA', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 110T' },
    { codigo: '42652 73002', marca: 'YOKOHAMA', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112H' },
    { codigo: '42652 73001', marca: 'YOKOHAMA', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112H' },

    // --- LINHA FINAL E ESTEPES (Itens 81 a 92) ---
    { codigo: '42652 73012', marca: 'YOKOHAMA', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112H' },
    { codigo: '42652 73102', marca: 'YOKOHAMA', veiculo: 'HILUX / SW4', desc: 'PNEU 265/65R17 112HGEOLANDAR G056 H/T YOKOHAMA' },
    { codigo: '42652 72011', marca: 'YOKOHAMA', veiculo: 'HILUX', desc: 'PNEU 265/70R15 112H' },
    { codigo: '42652 72004', marca: 'YOKOHAMA', veiculo: 'HILUX', desc: 'PNEU 265/70R16 111S' },
    { codigo: '42652 72104', marca: 'YOKOHAMA', veiculo: 'HILUX', desc: 'PNEU 265/70R16 111T' },
    { codigo: '42652 72002', marca: 'YOKOHAMA', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112H' },
    { codigo: '42652 72102', marca: 'YOKOHAMA', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112H,' },
    { codigo: '42652 72014', marca: 'YOKOHAMA', veiculo: 'HILUX', desc: 'PNEU 265/70R16 112S' },
    { codigo: '42652 72012', marca: 'YOKOHAMA', veiculo: 'HILUX', desc: 'PNEU 265/75R16 114T' },
    { codigo: '42652 77103', marca: 'YOKOHAMA', veiculo: 'ESPORTIVO', desc: 'PNEU ACE 235/50R18 9' },
    { codigo: '42652 78012', marca: 'YOKOHAMA', veiculo: 'ESPORTIVO', desc: 'PNEU ADVAN V61 235/6' },
    { codigo: '42652 75011', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'PNEU ES32 215/60R16' },
    { codigo: '42652 78001', marca: 'YOKOHAMA', veiculo: 'HILUX', desc: 'PNEU P225/70R16 102H' },
    { codigo: '42652 78002', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'PNEU P235/60R18 107V' },
    { codigo: '42652 72001', marca: 'YOKOHAMA', veiculo: 'HILUX', desc: 'PNEU P265/70R15C 112' },
    { codigo: '42652 77004', marca: 'YOKOHAMA', veiculo: 'CAMRY', desc: 'PNEU V105 ZPS 245/45' },
    { codigo: '42652 71006', marca: 'YOKOHAMA', veiculo: 'AUTOMÓVEL', desc: 'PNEU YOKOHAMA ADVAN' },
    { codigo: '42652 71007', marca: 'YOKOHAMA', veiculo: 'AUTOMÓVEL', desc: 'PNEU YOKOHAMA ADVAN' },
    { codigo: '42652 71009', marca: 'YOKOHAMA', veiculo: 'AUTOMÓVEL', desc: 'PNEU YOKOHAMA ES32 2' },
    { codigo: '42652 75201', marca: 'YOKOHAMA', veiculo: 'AUTOMÓVEL', desc: 'PNEU YOKOHAMA GT 215' },
    { codigo: '42652 75202', marca: 'YOKOHAMA', veiculo: 'AUTOMÓVEL', desc: 'PNEU YOKOHAMA GT 235' },
    { codigo: '42652 71017', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'TIRE 215/60R17 96H G' },
    { codigo: '42652 71008', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'TIRE 225/50R18 95V G' },
    { codigo: '42652 74011', marca: 'YOKOHAMA', veiculo: 'RAV4', desc: 'TIRE 225/65R17 102H' },
    { codigo: '42652 71010', marca: 'YOKOHAMA', veiculo: 'COROLLA', desc: 'TIRE 235/40R18 91W A' },
    { codigo: '42652 78102', marca: 'YOKOHAMA', veiculo: 'SW4', desc: 'TIRE 235/60R18 107V' },
    { codigo: '42652 77203', marca: 'YOKOHAMA', veiculo: 'SW4 Diamond', desc: 'TIRE GT 235/50R18 10' },
    { codigo: '42652 72025', marca: 'YOKOHAMA', veiculo: 'HILUX', desc: 'TIRE LT265/60R18 119' },
    { codigo: '4265A 78001', marca: 'TOYOTA', veiculo: 'ESTEPE', desc: 'PNEU ESTEPE T165/90D' },
    { codigo: '4265A 76001', marca: 'TOYOTA', veiculo: 'ESTEPE', desc: 'PNEU T125/70D17 (STE' },
    { codigo: '4265A 74001', marca: 'TOYOTA', veiculo: 'ESTEPE', desc: 'PNEU T165/80R17 (STE' },
    { codigo: '4265A 710T8', marca: 'TOYOTA', veiculo: 'ESTEPE', desc: 'TIRE T155/70D17 110M' },
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