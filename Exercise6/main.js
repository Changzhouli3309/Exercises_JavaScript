function reverse() {
  var re = "",
    s = document.getElementById("input").value.trim();
    console.log("input=" + s);
  if (s == null || s == "") {
    re = "Need input";
  } else {
    for (let i = 0; i < s.length; i++) {
      re += s.charAt(s.length - 1 - i);
    }
  }
  document.getElementById("display").innerHTML = re;
}
