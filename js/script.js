//  Chiedere Età Utente
//  Check Età in base alla fascia di sconto
//  Chiedere n° Km
//  Km* prezzo
//  applicare sconto
//  restituire prezzo finale



var etaUtente = prompt ("Digitare l'età dell'utente: ");
var numKm = prompt ("Quanti Km desidera viaggiare utilizzando i nostri treni? ");
var sconto;
var scontoTesto = false;
var prezzoFinale;


console.log(etaUtente);

if (etaUtente < 18) {
    sconto = 20;
    scontoTesto = true;
} else if (etaUtente >= 65 ) {
    sconto = 40;
    scontoTesto = true;
} else {
    sconto = 0;
}



if (scontoTesto) {
    prezzoFinale = ((0.21 * numKm) - (((0.21 * numKm) * sconto) /100));
    prezzoFinale= prezzoFinale.toFixed(2);
    document.getElementById('Testo').setAttribute('class' , 'visible');
    document.getElementById('Testo').innerHTML = "In base alla sua età anagrafica avrà uno sconto pari al: " + sconto + "%" + ", quindi il suo prezzo finale sarà di " + prezzoFinale + "€ per " + (numKm) + "km";
} else {
    prezzoFinale = (0.21 * numKm);
    prezzoFinale= prezzoFinale.toFixed(2);
    document.getElementById('Testo').setAttribute('class' , 'visible');
    document.getElementById('Testo').innerHTML = "In base alla sua età anagrafica non ha diritto ad uno sconto, quindi il suo prezzo finale sarà di: " + prezzoFinale + "€ per " + (numKm) + "km";
}
