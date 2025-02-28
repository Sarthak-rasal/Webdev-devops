function calculateArithmetic(a, b, arithmeticFinalFun) {
  const ans = arithmeticFinalFun(a, b);
  return ans;
}
//   if (type == "sum") {
//     // const value = sum(a, b);
//     // return value;
//     //return a + b;
//   }
//   if (type == "sub") {
//     const value = sub(a, b);
//     return value;
//     //return a - b;
//   }
// }

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const value = calculateArithmetic(1, 2, sum);
console.log(value);
