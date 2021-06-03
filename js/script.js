// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz". :collisione:
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// varianile number
var number;


// con un for faccio 100 cicli, segno 101 perchè parte sempre da 0

for ( var i = 1; i < 101; i++) {
    number=i;
    // se numero module multiplo di 3 e modulo multiplo di 5 = numero intero 0 con a fianco la scritta FizzBuzz

    if ((number % 3 == 0) && (number % 5 == 0)){
        console.log(number + 'FizzBuzz');
    }

    // se modulo multiplo di 3 = numero intero 0 + scritta Fizz

    else if (number % 3 == 0) {
        console.log(number + 'Fizz');
    } 

    // se modulo multiplo di 5 = numero intero 0 + scritta Buzz

    else if (number % 5 == 0) {
        console.log(number + 'Buzz');
    }

    // se numero senza operazioni stampalo normalmente

    else {
        console.log(number);
    }
    
    
}
