/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/

// Crea 10 oggetti che rappresentano una zucchina
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

// Dividi in due array separati le zucchine che misurano meno o più di 15cm

const longsZucc = zucchine.filter(zucchina => {
    if(zucchina.lunghezza > '15cm') {
        return true
    }
})
console.log(longsZucc);