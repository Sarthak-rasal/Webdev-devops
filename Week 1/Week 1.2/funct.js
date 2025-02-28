// You are only allowed to call one function after this
// How will you displayResult of a sum
function sum(a, b, fnToCall) {
  let sumValue = a + b;
  fnToCall(sumValue); // Calls the callback function with sumValue
}

// Only allowed to call one function after this
const ans = sum(1, 2, displayResult); // Pass displayResult as callback

console.log("WE start a problem");

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sums result is : " + data);
}

const anss = sum(1, 2, displayResult);
// callbacks
