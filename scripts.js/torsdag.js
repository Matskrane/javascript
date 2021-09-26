/*
const myVar = "hello world";

window.localStorage.setItem("myvariable", myVar);


document.getElementsByClassName(".buttonOne").addEventListener("onclick", makeVar())

function makeVar () {
    
};



 const Person = {
    name: "Jon",
    born: 1997,
    occupation: {1:'Co-founder', 2: 'Lecturer' },
    school: 'Noroff',
    pets: null
};

window.localStorage.setItem('Person', JSON.stringify(Person))

const isPerson = window.localStorage.getItem('myvariable');

console.log(isPerson);

console.log(myVar)

window.localStorage.removeItem('myvariable'); 
*/

const filterBtn = document.getElementById('filterBtn');
const filterInput = document.getElementById('filterInput');

let filterValue;

filterBtn.addEventListener('click', () => {
    filterValue = 0;
    filterValue = parseInt(filterInput.value);
    console.log(filterValue);
});

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


const newArr = numbers.filter((number) => {
    if (number <= inputValue) {
        return true;
    }
})





