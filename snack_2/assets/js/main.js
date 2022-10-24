/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/

// Crea 10 oggetti che rappresentano una zucchina
const zucchine = [
    {
        varietà: 'verde',
        lunghezza: 10,
        peso: 1
    },
    {
        varietà: 'chiara',
        lunghezza: 5,
        peso: 2
    },
    {
        varietà: 'tonda',
        lunghezza: 6,
        peso: 4
    },
    {
        varietà: 'fiorentina',
        lunghezza: 8,
        peso: 1
    },
    {
        varietà: 'trombetta',
        lunghezza: 3,
        peso: 3
    },
    {
        varietà: 'gialla',
        lunghezza: 4,
        peso: 5
    },
    {
        varietà: 'siciliana',
        lunghezza: 7,
        peso: 8
    },
    { 
        varietà: 'triestina',
        lunghezza: 17,
        peso: 2
    },
    {
        varietà: 'crookneck',
        lunghezza: 13,
        peso: 6
    },
    {
        varietà: 'pâtisson',
        lunghezza: 16,
        peso: 5
    },
]

// Dividi in due array separati le zucchine che misurano meno o più di 15cm

const longsZucc = zucchine.filter(zucchina => {
    if(zucchina.lunghezza > 15) {
        return true
    }
});

console.log(longsZucc);


const smallZucc = zucchine.filter(zucchina => {
    if(zucchina.lunghezza < 15) {
        return true
    }
});

console.log(smallZucc);