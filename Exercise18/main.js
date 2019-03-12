function gD() {
  var re,
    d1 = new Date(),
    d2 = new Date(),
    y = new Number(document.getElementById("input1").value),
    m = new Number(document.getElementById("input2").value);
    console.log("input="+y+" "+m);
  if (checkN(y) && checkM(m)) {
    d1.setFullYear(y, m - 1, 1);
    if (m == 12) {
      y += 1;
      m = 0;
    }
    d2.setFullYear(y, m, 1);
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
    var d = (d2.getTime() - d1.getTime()) / 86400000;
    re = d.toFixed(0) + " days";
  } else {
    re = "not availd number";
  }
  document.getElementById("display").innerHTML = re;
}

function checkN(n) {
  if (n != null && n != "" && !isNaN(n)) {
    return true;
  } else {
    return false;
  }
}

function checkM(m) {
  if (m != null && m != "" && !isNaN(m) && m > 0 && m < 13) {
    return true;
  } else {
    return false;
  }
}
