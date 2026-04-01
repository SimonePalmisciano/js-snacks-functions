/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

// prima di tutto bisogna prendere ogni elemento dell'array ed analizzarlo

// quindi si usa un ciclo per prendere tutti gli elementi
// poi si fa un if che quando troverà quella determinata lettera pushera il nome in un array

function solitiNomi(array) {
    const solitiNomiConA = []; // dichiarata una variabile con array vuoto in modo da inserire le iniziali dei nomi

    for (let z = 0; z < array.length; z++) { // questo ciclo for assegno ogni nome dell'array 'names' ad un elemento

        const element = array[z]; // ogni elemento è names di z che è l'indice e va avanti di 1 alla volta quindi z=0 element = Anna
        // poi z=1 element = Luca poi z=2 element = Marco ecc...

        const iniziali = element[0]; // qui iniziali sarà indice=0 iniziali = A poi si ripete ogni volta che il ciclo sopra compie 1 giro

        if (iniziali === 'A') {

            solitiNomiConA.push(element)

        }

    }

    return solitiNomiConA;

}


// Invoca la funzione qui e stampa il risultato in console

let nomiConA = solitiNomi(names);

console.log(nomiConA);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]