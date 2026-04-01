/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// bisogna fare in modo di prendere la prima lettera di ogni nome nell'array
// e mandarla in un'altro array

//possiamo creare un ciclo che prende tutte le parole dell'array
// poi per prendere le singole lettere dobbiamo creare un'altro ciclo che prende le prime lettere
// e le da ad un array

function primaLetteraNome(array) { // funzione che prende le inizili del nome

    const inizialiNomi = []; // dichiarata una variabile con array vuoto in modo da inserire le iniziali dei nomi

    for (let z = 0; z < array.length; z++) { // questo ciclo for assegno ogni nome dell'array 'names' ad un elemento

        const element = array[z]; // ogni elemento è names di z che è l'indice e va avanti di 1 alla volta quindi z=0 element = Anna
        // poi z=1 element = Luca poi z=2 element = Marco ecc...

        const iniziali = element[0]; // non serve un ciclo for per fare questo poichè basta scrivere in questo modo
        // cioè le iniziali sarà uguale a indice 0 dell'elemento ovvero iniziali = indice 0 di Anna = 'A' ecc...

        inizialiNomi.push(iniziali); // ogni giro viene pushata l'iniziale all'interno dell'array

    }

    return inizialiNomi; // viene restituito questo valore quando la funzione verrà richiamata o invocata
}


// Invoca la funzione qui e stampa il risultato in console

let tutteLeInizialiNomi = primaLetteraNome(names);

console.log(tutteLeInizialiNomi);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]