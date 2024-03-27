
// Stampo in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++){

    // Dichiaro variabile multiple
    let multiple = ""; //string

    // Condizione per i multipli
    if (i % 3 === 0  && i % 5 !== 0){
        multiple = "Fizz"
        console.log(multiple);
    } else if (i % 5 === 0 && i % 3 !== 0){
        multiple = "Buzz"
        console.log(multiple);
    } else if (i % 3 === 0 && i % 5 === 0){
        multiple = "FizzBuzz"
        console.log(multiple);
    } else {
        console.log(i);
    }

}