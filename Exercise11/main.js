function witchType() {
  var msg = "",
    s = document.getElementById("input").value;
  console.log("input=" + s);
  if (s == "") {
    msg = "Empty";
  } else {
    if (isNaN(s)) {
      if (s.toLowerCase() == "true" || s.toLowerCase() == "false") {
        msg = " is Boolean";
        console.log("boolean");
      } else {
        msg = " is String";
        console.log("string");
      }
    } else {
      msg = " is Number";
      console.log("number");
    }
  }
  document.getElementById("display").innerHTML = s + msg;
}
