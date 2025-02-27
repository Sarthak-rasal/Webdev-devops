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

//arrays
const personArray = ["Harkirat", "Sarthak", "Salu bhau"];

console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);

const ages = [21, 22, 23, 24, 25, 26, 27, 28];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log("Even numbers are : " + ages[i]);
  }
}

const genderArray = ["Male", "Male", "Female"];

console.log("All the males from the given array are :");
for (let i = 0; i < genderArray.length; i++) {
  if (genderArray[i] == "Male") {
    console.log(personArray[i]);
  }
}

// Using objects

const users1 = {
  firsttName: "Harkirat",
  genderr: "male",
};

console.log(users1["firsttName"]);

const allUsers = [
  {
    firstNname: "Harkirat",
    gendeer: "male",
  },
  {
    firstNname: "Sarthak",
    gendeer: "male",
    metadata: {
      age: "21",
      address: "WTFF",
    },
  },
  {
    firstNname: "Priya",
    gender: "female",
  },
];

console.log("We are creating objects now :");
for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gendeer"] == "male") {
    console.log(allUsers[i]["firstNname"]);
  }
}
console.log("Now printing triple nested objects");
console.log(allUsers[1]["metadata"]["age"]);
