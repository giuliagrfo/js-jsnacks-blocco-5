/*
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”
*/

const numbers = [1, 5, 10, 15, 22];

const includedNumbers = numbers.filter(num => {
   for(let i = 0; i < numbers.length; i++) {
        if (num < numbers[i]){
        return true
    }
   }

})

console.log(includedNumbers);
