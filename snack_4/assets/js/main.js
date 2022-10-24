/*
Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

// creo 2 array separati
const numbers = [1, 2, 3];

const letters = ['a', 'b', 'c'];

// // Scrivo una funzione che fonda due array

// let newArr = [...numbers, ...letters]

// console.log(newArr);

// function merge(arr1, arr2) {
//     let result = [...arr1, ...arr2];
//     console.log(result);
// }

const mergedArr = merge(numbers, letters)

function merge(arr1, arr2) {
    const arr3 = [];
    const arrLengths = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < arrLengths; i++) {
      if (arr1[i] !== 0) {
        arr3.push(arr1[i]);
        arr3.push(arr2[i]);
      }
    }
    
    return arr3;
}

console.log(mergedArr);