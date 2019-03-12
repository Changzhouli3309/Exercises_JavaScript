function manipulation() {
  var re = "",
    longest = "",
    sArr = new Array(),
    s = document.getElementById("input").value.trim();
    console.log("input=" + s);
  if (s == null || s == "") {
    re = "Need input";
  } else {
    sArr = s.split(" ");
    sArr.forEach(e => {
      e = e.charAt(0).toUpperCase() + e.slice(1, e.lenght);
      re += e + " ";
      if (longest.length < e.length) {
        longest = e;
      }
    });
  }
  document.getElementById("display").innerHTML =
    re + " – the longest word is " + longest;
}
