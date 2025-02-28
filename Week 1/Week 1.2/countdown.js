let count = 30;

function countdownFunction() {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown);
    console.log("Times up");
  }
}

let countdown = setInterval(countdownFunction, 1000);
