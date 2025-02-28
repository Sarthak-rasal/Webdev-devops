// This function uses no callback functions

function calculateArithematic(a, b, type) {
  if (type == "sum") {
    const value = sum(a, b);
    return value;
    //return a + b;
  }
  if (type == "sub") {
    const value = sub(a, b);
    return value;
    //return a - b;
  }
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const value = calculateArithematic(1, 2, "sum");
console.log(value);
