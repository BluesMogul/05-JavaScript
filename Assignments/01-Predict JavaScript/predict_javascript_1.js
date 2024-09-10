
//PROBLEM 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar)
console.log(otherRandomCar)

//1. Output prediction:
//   const [ randomCar ] = cars OUTPUT: 'Tesla' because the const asks for the first (e.g., index 0) of the string only.
//   const [ ,otherRandomCar ] = cars OUTPUT: 'Mercedes' because the const uses a comma to skip index 0 and asks for the second (index 1) of the string only.
//2. The actual output:
//   const [ randomCar ] = cars OUTPUT Tesla
//   const [ ,otherRandomCar ] = cars OUTPUT Mercedes


//PROBLEM 2
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
console.log(otherName);
console.log(employeeName);

//1. Output prediction:
//   console.log(otherName) OUTPUT: Elon
//   console.log(employeeName) OUTPUT: Error: employeeName is not defined ("employeeName" variable name reassigned as "otherName" making "employeeName" undefined).

//2. The actual output:
//   console.log(otherName) OUTPUT: Elon
//   console.log(employeeName) OUTPUT: Error: 'employeeName' is not defined.

//PROBLEM 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password);
console.log(hashedPassword);

//1. Output prediction:
//   console.log(password) OUTPUT: "12345"
//   console.log(hashedPassword) OUTPUT: "hashedPassword" is undefined because password does not exist in the person object.

//2. Actual Output:
//   console.log(password) OUTPUT: "12345"
//   console.log(hashedPassword) OUTPUT: 'hashedPassword' is undefined.


//PROBLEM 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // first = 2 only;
const [,,,second] = numbers; //second = 6 only
const [,,,,,,,,third] = numbers; //third = 2 only;
console.log(first === second);
console.log(first === third);

//1. Output prediction:
//   console.log(first === second) OUTPUT: false (2 is not equal to 6)
//   console.log(first === third) OUTPUT: true (2 is equal to 2)

//2. Actual Output:
//   console.log(first === second) OUTPUT: false
//   console.log(first === third) OUTPUT: true
//   

//PROBLEM 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
console.log(key);           // 'value'
console.log(secondKey);     // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);  // 1
console.log(willThisWork);  // 5

//1. Output prediction:
//   console.log(key) OUTPUT: value
//   console.log(secondKey) OUTPUT: [1, 5, 1, 8, 3, 3]
//   console.log(secondKey[0]) OUTPUT: 1
//   console.log(willThisWork) OUTPUT: 5
//2. Actual Output:
//   console.log(key) OUTPUT: value
//   console.log(secondKey) OUTPUT: [1, 5, 1, 8, 3, 3]
//   console.log(secondKey[0]) OUTPUT: 1
//   console.log(willThisWork) OUTPUT: 5

//PROBLEM 6
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            var name = names[index];
            console.log(name + ' was found at index ' + index);
        }
        console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

//  1. Number of Scopes: 1

//  2. Output prediction:
//   printNames(beatles):
//      "Paul was found at index 0"
//      "George was found at index 1"
//      "John was found at index 2"
//      "Ringo was found at index 3"
//      "name and index after loop is Ringo:4"
//   printNames(beatles):
//      nothing to output

//3. Actual Output:
//  "Paul was found at index 0"
//      "George was found at index 1"
//      "John was found at index 2"
//      "Ringo was found at index 3"
//      "name and index after loop is Ringo:4"
//   printNames(beatles):
//      nothing to output   

//PROBLEM 7
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}     

//1. Output prediction:
//   console.log(name + ' was found at index ' + index); OUTPUT: Function does not have a defined variable to print/display.

//2. Actual Output:
//   console.log(name + ' was found at index ' + index); OUTPUT: Function does not have a defined variable to print/display.

//PROBLEM 8
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
        const name = names[index];
        console.log(name + ' was found at index ' + index);
        }
    }
    actuallyPrintingNames();
}
printNames(beatles);

//1. Output prediction:
//   console.log(name + ' was found at index ' + index); OUTPUT:
//      Paul was found at index 0
//      George was found at index 1
//      John was found at index 2
//      Ringo was found at index 3

//2. Actual Output:
//   console.log(name + ' was found at index ' + index); OUTPUT:
//      Paul was found at index 0
//      George was found at index 1
//      John was found at index 2
//      Ringo was found at index 3



//PROBLEM 9
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
        composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) //gas = gas | True
console.log(planet === planetCopy)

//1. Output prediction:
//   console.log(planet.composition[0] === planetCopy.composition[0]) OUTPUT: True
//   console.log(planet === planetCopy) OUTPUT: False(?)
//2. Actual Output:
//   console.log(planet.composition[0] === planetCopy.composition[0]) OUTPUT: True
//   console.log(planet === planetCopy) OUTPUT: False

