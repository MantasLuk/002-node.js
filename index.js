console.log('Labas vakaras')
console.log('Labas,')

const a = 5;
const b = 7;
const c = 13;

// a + b;
// b + c;
// c + a;

// rezultata pateikti tokiu sablonu:
// skaiciu [a] ir [b] suma yra lygu [suma].

console.log(`skaiciu ${a} ir ${b} suma yra lygu ${a + b}`)



console.clear()


const a1 = [10, 8, 2, 4];
const a2 = [1, 3, 5, 7, 9];
const a3 = [147, 258, 369, 123, 456, 789];

// rezultata pateikti tokiu sablonu:
// skaiciu masyvas, kuri sudaro [kiekis] skaiciai, vidurkis yra [vidurkis].

function vidurkis (array) {
    let suma = 0;
    
    array.forEach(e => {
        suma += e;
    });
    const vidurkis = suma / array.length;
    console.log(`skaiciu masyvas, kuri sudaro ${array.length} skaiciai, vidurkis yra ${vidurkis}`);
    
}
vidurkis(a1);
vidurkis(a2);
vidurkis(a3);

// rezultata pateikti tokiu sablonu:
//Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

const s1 = 'mike Pukuotukas';
const s2 = 'Chuck Norris';
const s3 = 'Wonder WomaN';
const s4 = 'Algimantas cekuolis';

function inicialai (pavadinimas){
    const word = pavadinimas.split(' ');
    const vardas = word[0][0].toUpperCase();
    const pavarde = word[1][0].toUpperCase();

console.log(`Legendines asmenybes ${word[0]} ${word[1]} trumpinys yra ${vardas}.${pavarde}.`);
}

inicialai(s1);
inicialai(s2);
inicialai(s3);
inicialai(s4);

// rezultata pateikti tokiu sablonu:
// [Vardas] [Pavarde] yra [amzius] metu amziaus.
const jonas = {
    name: 'Jonas',
    surname: 'Jonaitis',
    age: 99,
}
const maryte = {
    name: 'Maryte',
    surname: 'Marytaite',
    age: 87,
}

function personAge (person) {
    console.log(`${person.name} ${person.surname} yra ${person.age} metu amziaus`);
}
personAge(jonas);
personAge(maryte);



