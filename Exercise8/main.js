function manipulation() {
  var re = "",
    s = document.getElementById("input").value.trim(),
    sArr = new Array();
    console.log("input=" + s);
  if (s == null || s == "") {
    re = "Need input";
  } else {
    for (let i = 0; i < s.length; i++) {
      sArr.push(s.charAt(i));
    }
    sArr = sArr.sort();
    sArr.forEach(s => (re += s));
  }
  document.getElementById("display").innerHTML = re;
}
