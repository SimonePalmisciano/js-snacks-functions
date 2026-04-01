/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const userName = 'Mario';


// Dichiara la funzione qui.

function salutoEducato (name) {

    const d = new Date();
    let hour = d.getHours();
    let saluti = '';

    if (hour >= 0 && hour <= 13) {
        saluti = 'Buongiorno'; 

    } else if (hour > 14 && hour < 17) {
        saluti = 'Buon Pomeriggio';
        
    } else if (hour > 17) {
        saluti = 'Buonasera';
        
    }

    return (saluti + ' ' + name);
}


// Invoca la funzione qui e stampa il risultato in console

let salutoInBaseOra = salutoEducato(userName);

console.log(salutoInBaseOra);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.