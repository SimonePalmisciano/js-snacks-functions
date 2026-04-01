/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// bisogna fare in modo di prendere la prima lettera di ogni nome nell'array
// e mandarla in un'altro array

//possiamo creare un ciclo che prende tutte le parole dell'array
// poi per prendere le singole lettere dobbiamo creare un'altro ciclo che prende le prime lettere
// e le da ad un array

function primaLetteraNome(nome) {

    const inizialiNomi = []; // dichiarata una variabile con array vuoto in modo da inserire le iniziali dei nomi
}

for (let z = 0; z < names.length; z++) {

    const element = names[z];

    console.log(element);

    for (let z = 0; z < 1; z++) {

        const iniziali = element[z];

        console.log(iniziali);
        
    }

}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]