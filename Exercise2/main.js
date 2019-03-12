function isLeapYear() {
  var y, msg;
  y = document.getElementById("input").value;
  console.log("input="+y);
  if (isNaN(y)||y=="") {
    msg = "Not a number";
  } else {
    msg = y % 4 === 0 ? "Leap Year" : "Not Leap Year";
  }
  document.getElementById("display").innerHTML = msg;
}
