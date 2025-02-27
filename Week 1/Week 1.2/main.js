console.log("hello world");
//console.log(a); //wont run this line but above line will run

var a = 1; // defining variables
console.log(a);

let b = 2; // we use let if the value of the variable keeps changing
console.log(b);

const c = 3; // we use const when we want to fix the value of a variable.
console.log(c);

let firstName = "Sarthak";
let age = "20";
let isMarried = false;

console.log("This person is " + firstName + " and their age is " + age);

//If else statements
if (isMarried == true) {
  console.log(firstName + " is married ");
} else {
  console.log(firstName + " is not married ");
}

//loops
let answer = 0;
for (let i = 0; i <= 1000; i = i + 1) {
  answer = answer + i;
}
console.log(answer);
