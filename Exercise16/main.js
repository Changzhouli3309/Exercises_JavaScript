function RemoveD() {
  var re = new Array(),
    s = document.getElementById("input").value.trim(),
    sArr = s.split(" ");
    console.log("input="+s);
  sArr.forEach(e => {
    e = e.trim();
  });

  for (let i = 0; i < sArr.length; i++) {
    temt = sArr[i];
    for (let j = i + 1; j < sArr.length; j++) {
      if (temt == sArr[j]) {
        sArr[i] = null;
      }
    }
  }
  sArr.forEach(e => {
    if (e != null && e != "") {
      re.push(e);
    }
  });
  document.getElementById("display").innerHTML = re.length > 0 ? re : "nothing";
}
