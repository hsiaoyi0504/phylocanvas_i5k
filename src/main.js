import Phylocanvas from 'phylocanvas';

var tree = Phylocanvas.createTree('phylocanvas');
tree.load(
  "('Euperipatoides rowelli':4,('Catajapyx aquilonaris':4,'Hyalella azteca':4,('Limnephilus lunatus':4,'Ephemera danica':4,'Machilis hrabei':4,'Frankliniella occidentalis':4,'Ladona fulva':4,('Halyomorpha halys':4,'Homalodisca vitripennis':4,'Diaphorina citri':4,'Cimex lectularius':4,'Gerris buenoi':4,'Pachypsylla venusta':4,'Oncopeltus fasciatus':4)Hemiptera:4,('Neodiprion lecontei':4,'Orussus abietinus':4,'Cephus cinctus':4,('Habropoda laboriosa':4,'Eufriesea mexicana':4,'Melipona quadrifasciata':4)Apidae:4,'Megachile rotundata':4,('Dufourea novaeangliae':4,'Lasioglossum albipes':4)Halictidae:4,('Diachasma alloeum':4,'Microplitis demolitor':4,'Fopius arisanus':4)Braconidae:4,'Athalia rosae':4,'Copidosoma floridanum':4,'Trichogramma pretiosum':4)Hymenoptera:4,('Mayetiola destructor':4,('Drosophila rhopaloa':4,'Drosophila biarmipes':4,'Drosophila bipectinata':4,'Drosophila kikkawai':4,'Drosophila ficusphila':4,'Drosophila elegans':4,'Drosophila takahashii':4,'Drosophila eugracilis':4)Drosophila:4,('Zeugodacus cucurbitae':4,('Bactrocera oleae':4,'Bactrocera dorsalis':4)Bactrocera:4,'Ceratitis capitata':4)Tephritidae:4)Diptera:4,('Amyelois transitella':4,'Manduca sexta':4)Lepidoptera:4,('Agrilus planipennis':4,'Anoplophora glabripennis':4,'Onthophagus taurus':4,'Nicrophorus vespilloides':4,'Leptinotarsa decemlineata':4,'Tribolium castaneum':4)Coleoptera:4,'Blattella germanica':4)Insecta:4,((('Latrodectus hesperus':4,'Parasteatoda tepidariorum':4)Theridiidae:4,'Loxosceles reclusa':4)Araneae:4,'Centruroides exilicauda':4)Arachnida:4,('Eurytemora affinis':4,'Tigriopus californicus':4)Maxillopoda:4)Arthropoda:4);",
  () => console.log('tree loaded')
);
tree.setTreeType('rectangular');
tree.shiftKeyDrag = true;
tree.alignLabels = true;
tree.draw();
