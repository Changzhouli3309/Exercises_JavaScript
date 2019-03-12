function check() {
  var msg,
    d = new Date();
  var y = document.getElementById("input").value;
  console.log("input="+y);
  if (isNaN(y) || y == "") {
    msg = "Not a number";
  } else {
    d.setFullYear(y, 0, 1);
    var m = checkTime(d.getMonth() + 1);
    var da = checkTime(d.getDate());
    msg = d.getFullYear() + "-" + m + "-" + da + " ";
    msg += d.getDay() === 0 ? "is Sunday" : "is not Sunday";
  }
  document.getElementById("display").innerHTML = msg;
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
