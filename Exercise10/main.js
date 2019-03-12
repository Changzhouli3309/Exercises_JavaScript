function isPrimeNumber() {
  var msg = "",
    p = true,
    n = document.getElementById("input").value;
  console.log("input=" + n);
  if (isNaN(n) || n == "") {
    msg = "Not a number";
  } else {
    for (let i = 2; i < Math.sqrt(n) + 1; i++) {
      if (n % i == 0 && p != 2) {
        p = false;
      }
    }
    if (p) {
      msg = " is a prime number.";
    } else {
      msg = " is not a prime number.";
    }
  }
  document.getElementById("display").innerHTML = n + msg;
}
