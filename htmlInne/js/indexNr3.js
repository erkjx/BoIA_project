function pokaz(id) {
    var tresc = "";
    switch (id) {
        case 2: tresc += infoPatek(); break;
        case 3: tresc += infoHarry(); break;
        case 4: tresc += infoRichard(); break;
        default: tresc += infoRolex();;
    }
    document.getElementById('blok').innerHTML = tresc;
}
function infoRolex() {
    var tresc = '<h2><br />Rolex</h2> ';
    tresc +=
        '<img align="left" src="zdjecia/1.JPG" />' +
        '<p>Szwajcarskie przedsiębiorstwo zajmujące się produkcją zegarków, założone w 1905 roku.' +
        'Jego właścicielem jest Hans Wilsdorf Foundation, rodzinna fundacja założyciela' +
        'firmy. W tej chwili jest największym producentem ekskluzywnych zegarków na świecie z' +
        'rocznymi obrotami sięgającymi 3 mld USD.</p>'
    return tresc;
}
function infoPatek() {
    var tresc = '<h2><br />Patek Phillippe</h2>';
    tresc += '<img align="left" src="zdjecia/2.JPG"/>' +
        '<p>Od 1839 roku nieprzerwanie Patek Philippe kontynuuje tradycje zegarmistrzostwa' +
        'genewskiego. Jako ostatni niezależny, rodzinny producent zegarków w Genewie, Patek' +
        'Philippe cieszy się całkowitą swobodą twórczą w całkowitym projektowaniu, produkcji' +
        'i montażu tego, co eksperci uznają za najlepsze zegarki na świecie.</p>'

    return tresc;
}

function infoHarry() {
    var tresc = '<h2><br />Harry Winston</h2>';
    tresc +=
        '<img align="left" src="zdjecia/3.JPG">' +
        'Amerykański luksusowy jubiler i producent szwajcarskich zegarków. Firma została' +
        'założona w 1932 roku jako Harry H. Winston Jewels, Inc. i zmieniła nazwę na Harry' +
        'Winston Inc. w styczniu 1936 roku. Nazwa firmy pochodzi od jej założyciela,' +
        'Harry"ego Winstona, przez wielu nazywanego „Królem Diamentów”<br>'
    return tresc;
}

function infoRichard() {
    tresc = '<h2><br />Richard Mille</h2>';
    tresc +=
    '<img align="left" src="zdjecia/4.JPG">' +
    'Richard Mille to szwajcarska firma zajmująca się luksusowymi zegarkami, założona w'+
    '2001 roku przez Dominique Guenat i Richarda Mille, z siedzibą w Les Breuleux w'+
    'Szwajcarii.Marka specjalizuje się w bardzo drogich zegarkach z mechanizmem'+
    'zegarowym.'
    return tresc;
}



