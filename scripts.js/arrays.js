const numbers = [1, 5, 10, 15, 20, 50, 100, 150, 200, 250, 300];

const filterNumbers = (number) => {
    if (number >= 5) {
        return true;
    }
};

const filtered = numbers.filter((number) => {
    if(number >= 5) {
        return true;
    }
});

console.log(numbers);

/*
const pokemon = [
    "Bulbasaur",
    "Squirtle",
    "Charmander",
    "Geodude",
    "Abra",
    "Zubat"
];

const filterStrArrEx = (arr) => {
    return arr.filter((item) => item.toLowerCase() === term.toLowerCase());
};

const filterStrArrLng = []

*/

const dogs = [
    { id: 1, name: 'doberman' },
    { id: 2, name: 'Labrador' },
    { id: 3, name: 'Terrier' },
    { id: 4, name: 'rottie' },
    { id: 5, name: 'Setter' },
    { id: 6, name: 'doge' },
    { id: 7, name: 'bulldog' },
    { id: 8, name: 'Beagle' },
];


const filterDogs = (dog) => {
    if (dog.name.toLowerCase().startsWith('b')) {
        return true;
    }
};

const filteredDogs = dogs.filter(filterDogs);

console.log(filteredDogs);


const people = [
    { id: 1, name: 'doberman' },
    { id: 2, name: 'Labrador' },
    { id: 3, name: 'Terrier' },
    { id: 4, name: 'rottie' },
    { id: 5, name: 'Setter' },
    { id: 6, name: 'doge' },
    { id: 7, name: 'bulldog' },
    { id: 8, name: 'Beagle' },
];

