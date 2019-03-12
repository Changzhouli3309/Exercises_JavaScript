var rand,
  msg,
  min = 0,
  max = 9;
function gusse() {
  var n = document.getElementById("input").value;
  console.log("input=" + n);
  if (isNaN(n) || n == "") {
    msg = "Not a number";
  } else {
    msg = n == rand ? "Good Job" : "Did not match";
  }
  document.getElementById("display").innerHTML = msg;
}
function newNumber() {
  rand = Math.round(Math.random() * (max - min)) + min;
  console.log("answer=" + rand);
}
function on() {
  document.getElementById("answer").innerHTML = rand;
}
function off() {
  document.getElementById("answer").innerHTML = "answer";
}
