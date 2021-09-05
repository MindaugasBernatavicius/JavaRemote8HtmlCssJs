

console.log("Hi");
// console.log("Hello");

if(true){
    console.log("True");
} else {
    console.log("False");
}

let myName = "Mindaugas";
let myAge = 66.9;
let isTeacher = true;
let somethingUndefined;

console.log("My name: " + myName + " my age: " + myAge);
console.log(somethingUndefined)

let arrOfStudents = [ "Mindaugas", "Jonas", "Antanas" ];
console.log(typeof arrOfStudents);
console.log(arrOfStudents instanceof Array);

const daysInAWeek = 7;
// daysInAWeek = 5; // Assignment to constant variable.


// let vs. var
// var foo = 10;
// let bar = 20;
//
// var foo = 15;
// let bar = 30; // here we get an error Uncaught SyntaxError: Identifier 'bar' has already been declared

// let throw = 5;
// console.log(throw);

console.log(thisVariableIsDeclaredAfterItIsUsed);
var thisVariableIsDeclaredAfterItIsUsed = "Jonas";

//loops

for (let i = 0; i < 3; i++) {
    console.log(i);
}

for(let i = 0; i < arrOfStudents.length; i++){
    console.log(i + " : " + arrOfStudents[i]);
}

arrOfStudents.forEach(function ( val, idx){
    console.log(idx + " : " + val);
})

// let password = "passw00rd";
// let usersEnteredPassword = "";
// do {
//     usersEnteredPassword = window.prompt("Please enter password!");
// } while(password !== usersEnteredPassword);


// functions
function add(a, b) {
    return a + b;
}

let res = add(51, 2);
console.log(res);

let res2 = (function(a, b){
    return a + b;
})(20, 30);

console.log(res2);

// In java, similarly: Function<Long, Long> adder = (value) -> value + 3;
const multiply = function(first, second){ return first * second; }
console.log(multiply(5, 53));

const pad = (str, amount = 12) => str.padStart(amount);

const subtract = (f,s) => f * s;

const padWithLogging = (str, amount) => {
    console.log(`Function called with parameters: ${ str } ${ amount }`);
    return str.padStart(amount);
}

console.log("|" + pad("Jonas"));
console.log(padWithLogging("Jonas", 53));


// Arrays
let employees = [ "Jonas", "Petras"];
employees.push("Juozas"); // (3)["Jonas", "Petras", "Juozas"]
let itemRemoved = employees.shift(); // (2) ["Petras", "Juozas"]
console.log(employees)
console.log(itemRemoved)

const array = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
let arrFinal = array.concat(array2).concat(["Mindaugas", "Jonas"]);
console.log(arrFinal);

arrOfStudents.forEach(( val, idx) => {
    console.log(idx + " : " + val);
})

let transformedStudents = arrOfStudents.map((student) => student.toUpperCase());
console.log(transformedStudents);
console.log(arrOfStudents);

let filteredStudents = arrOfStudents.filter((student) => student.length >= 7 );
console.log(filteredStudents);

console.log(arrOfStudents.slice(1, 2));

console.log(arrOfStudents.splice(1, 1));
console.log(arrOfStudents);

// objects
let student = { name: "Mindaugas", grades: [ 8, 5, 10, 2] }
console.log(student);
console.log(student.name);
console.log(student["name"]);

class Student{
    constructor(name, gender, grades) {
        this.name = name;
        this.gender = gender;
        this.grades = grades;
    }
}

let studentsAsObjects = [
    new Student("Maks", "Male", [10, 5]),
    new Student("Budis", "Female", [3, 5, 10]),
    new Student("Džonas", "Male", [5, 9]),
]

// Užduotis: sužinokime vidutinį pažymį studentų vyrai
let averagaMaleGrade = studentsAsObjects
    .filter(student => student.gender === "Male")
    .reduce((accumulator, currentStudent, idx, arr) => {
        let averageForStudent = currentStudent.grades.reduce((a, b) => a + b) / currentStudent.grades.length;
        if(idx === arr.length -1){
            accumulator += averageForStudent;
            return accumulator / arr.length;
        }
        return accumulator += averageForStudent;
    }, 0);

console.log(averagaMaleGrade);