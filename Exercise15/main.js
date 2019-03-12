function sort() {
  var msg = "Not Numbers",
    nArr = new Array(),
    arr2 = new Array(),
    s = document.getElementById("input").value.trim(),
    arr1 = s.split(",");
    console.log("input="+s);
  arr1.forEach(e => {
    e=e.trim();
    if (e != null && e != "") {
      arr2.push(e);
    }
  });
  arr2.forEach(e => {
    var n = new Number(e);
    n=checkTime(n);
    if (!isNaN(n)) {
      nArr.push(n);
    }
  });
  nArr.sort();
  document.getElementById("display").innerHTML = nArr.length > 0 ? nArr : msg;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
