/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

const zucchine = [
    {
        varietà: 'verde',
        lunghezza: '10cm',
        peso: 1
    },
    {
        varietà: 'chiara',
        lunghezza: '5cm',
        peso: 2
    },
    {
        varietà: 'tonda',
        lunghezza: '6cm',
        peso: 4
    },
    {
        varietà: 'fiorentina',
        lunghezza: '8cm',
        peso: 1
    },
    {
        varietà: 'trombetta',
        lunghezza: '3cm',
        peso: 3
    },
    {
        varietà: 'gialla',
        lunghezza: '4cm',
        peso: 5
    },
    {
        varietà: 'siciliana',
        lunghezza: '7cm',
        peso: 8
    },
    {
        varietà: 'triestina',
        lunghezza: '12cm',
        peso: 2
    },
    {
        varietà: 'crookneck',
        lunghezza: '13cm',
        peso: 6
    },
    {
        varietà: 'pâtisson',
        lunghezza: '16cm',
        peso: 5
    },
]

console.log(zucchine);


let sum = 0

zucchine.forEach(zucchina => {
sum += zucchina.peso
}) 
console.log(sum);





