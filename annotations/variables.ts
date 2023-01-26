let apples : number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let nw: Date = new Date();

//array with nothing but strings inside
let colors: string[] = ['red', 'green', 'blue'];

//array with nothing but numbers inside
let myNumbers: number[] = [1,2,3];

//array with nothing but booleans inside
let truths: boolean[] = [true, false, true];


// classes
class Car {

}
let car: Car = new Car();

// object literal

let cat: { x:number; y:number; } = {
    x: 10,
    y: 20
}

// functions
const logNumber: (i: number) => void = (i : number) => {
    console.log(i)
}

// type annotations - we tell typescript what type
// type inferences - typescript guesses
// if variable declaration and initialization is on one line then we dont add type annotations, only add annotations if done on separtae lines or places

// when to use type annotations
// 1. Function that returns the any type
const json = "{'x': 10, 'y': 20}";
const cordinates: { x: number, y:number } = JSON.parse(json);
console.log(cordinates); // {x:10, y:20}

// typescript has no idea what 'any' is - cannot do error checking

// 2. When we declare a variable on one line and initialise it later
let words = ['red', 'green', 'blue'];
let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
    if(words[i] === 'green'){
        foundWords = true;
    }
}

// 3. variable whose type cannot be inferred correctly.
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i =0; i< numbers.length; i++){
    if (numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}