# JS FIZZBUZZ

**Consegna:**
 Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

 **BONUS 1:**
 Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
 **BONUS 2:**
 Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
 Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

### Svolgimento

### HTML
1. Creo container
2. Creo la row

#### JS
1. Creo un ciclo for per stampare i numeri da 1 a 100
2. Dichiaro variabile multiple con stringa vuota
3. Inserisco una condizione:
    - [x] Se il numero corrente è multiplo di 3 --> multiple = "Fizz"
    - [x] Altrimenti se il numero corrente è multiplo di 5 --> multiple = "Buzz"
    - [x] Altrimenti se il numero corrente è multiplo sia di 5 che di 3 --> multiple = "FizzBuzz"
4. Stampo il risultato in console

