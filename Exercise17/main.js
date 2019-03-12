function RemoveO() {
  var re = new Array(),
    s = document.getElementById("input").value.trim(),
    sArr = s.split(" ");
    console.log("input="+s);
  sArr.forEach(e => {
    e = e.trim();
  });
  sArr.forEach(e => {
    if (e != null && e != "" && e != 0) {
      re.push(e);
    }
  });
  document.getElementById("display").innerHTML = re.length > 0 ? re : "nothing";
}
