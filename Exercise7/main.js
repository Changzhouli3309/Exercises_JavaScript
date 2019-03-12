function manipulation() {
  var re = "",
    s = document.getElementById("input").value.trim();
    console.log("input=" + s);
  if (s == null || s == "") {
    re = "Need input";
  } else {
    for (let k = 0; k < s.length; k++) {
      for (let i = k; i < s.length; i++) {
        for (let j = k; j < i + 1; j++) {
          re += s.charAt(j);
        }
        if (!(k==s.length-1&&i==s.length-1)) {
            re += ", ";
        }
      }
    }
  }
  document.getElementById("display").innerHTML = re;
}
