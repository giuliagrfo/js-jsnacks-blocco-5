/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC)
*/

const saluto = 'Ciao'

function reverse(word) {
    // converto la stringa in un array 
    const userWordArr = word.split('');
    // inverto l'ordine degli elementi dell'array
    const userWordArrReverse = userWordArr.reverse();
    //  creo una stringa con gli elementi dell'array
    const invertedWord = userWordArrReverse.join('');
    console.log(invertedWord);
   
}

const reversedWord = reverse(saluto);
