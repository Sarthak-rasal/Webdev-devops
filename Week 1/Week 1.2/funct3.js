function greet() {
  console.log("Hello world");
}

function greetAlien() {
  console.log("Hello alien");
}
//setTimeout // function , time in milliseconds(it will take the set amount of time)
setTimeout(greet, 1 * 1000);
setInterval(greetAlien, 4 * 1000);
