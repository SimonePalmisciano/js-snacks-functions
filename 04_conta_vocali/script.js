/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// ci serve una funzione che legga quante vocali ci sono nella stringa
// quindi bisogna prendere la stringa.length e analizzarla lettera per lettera
// si può fare questo con un ciclo for per controllare ogni lettera
// se è una vocale in contatore diventa + 1 se non lo è non restituisce nulla

function contaVocali(stringa) {

    let contatore = 0;

    let singolaLettera = '';

    for (let z = 0; z < stringa.length; z++) {

        singolaLettera += stringa[z];

    }

    if (singolaLettera === 'a' || singolaLettera ===  'e' || singolaLettera === 'i' || singolaLettera === 'o' || singolaLettera === 'u') {
        contatore += 1;

    }

    return contatore;
}


// Invoca la funzione qui e stampa il risultato in console

let vocaliPresenti = contaVocali(word);

console.log(vocaliPresenti);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)


////////////////////////////////////////////////////////////////////////////
// ALTRO METODO
////////////////////////////////////////////////////////////////////////////

// function haVocali (stringa) {
    
//     const vocali = stringa.match(/[aeiou]/gi); 

//     return vocali ? vocali.length: 0;
// }

// let vocaliPresenti = haVocali(word);

// console.log(vocaliPresenti);
