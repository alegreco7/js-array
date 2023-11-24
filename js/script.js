/*
SNACK 1
l'utente inserisce due numeri in successione, con due prompt.
il software stampa il maggiore
*/

// Chiedi all'utente di inserire il primo numero
var numero1 = parseFloat(prompt("Inserisci il primo numero:"));

// Chiedi all'utente di inserire il secondo numero
var numero2 = parseFloat(prompt("Inserisci il secondo numero:"));

// Confronta i due numeri e stampa il maggiore
if (numero1 > numero2) {
    console.log("Il numero maggiore è: " + numero1);
} else if (numero2 > numero1) {
    console.log("Il numero maggiore è: " + numero2);
} else {
    console.log("I due numeri sono uguali.");
}

//***********************************************//

/*
SNACK 2
il software deve chiedere per dieci volte all'utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. 
*/

let somma = 0;

for (let i = 0; i < 10; i++) {
    // Chiedi all'utente di inserire un numero
    let numero = parseInt(prompt("Inserisci un numero:"));

    // Aggiungi il numero alla somma
    somma += numero;
}

// Stampare la somma
console.log("La somma di tutti i numeri inseriti è: " + somma);

//***********************************************//

/*
SNACK 3
in un array sono contenuti i nomi degli invitati alla festa del grande gatsby, chiedi all'utente il suo nome e comunicagli se 
può partecipare alla festa o no
*/

// Array contenente i nomi degli invitati
let invitati = ["Jay Gatsby", "Daisy Buchanan", "Tom Buchanan", "Nick Carraway", "Jordan Baker"];

// Chiedi all'utente il suo nome
let nomeUtente = prompt("Inserisci il tuo nome:");

// Verifica se il nome dell'utente è presente tra gli invitati
if (invitati.includes(nomeUtente)) {
    alert("Benvenuto alla festa del Grande Gatsby, " + nomeUtente + "!");
} else {
    alert("Mi dispiace, " + nomeUtente + ", non sei tra gli invitati alla festa del Grande Gatsby.");
}

//***********************************************//

/* 
SNACK 4
crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell' array
*/

// Creare un array vuoto
let numeriDispari = [];

// Chiedere all'utente di inserire un numero per 6 volte
for (let i = 0; i < 6; i++) {
    let numeroUtente = parseInt(prompt("Inserisci un numero:"));

    // Verificare se il numero è dispari e inserirlo nell'array
    if (numeroUtente % 2 !== 0) {
        numeriDispari.push(numeroUtente);
    }
}

// Stampare l'array risultante
console.log("Numeri dispari inseriti:", numeriDispari);

//***********************************************//