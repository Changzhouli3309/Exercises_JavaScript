function gA() {
  var re,
    y = new Number(document.getElementById("input").value),
    d = new Date(),
    d2 = new Date();
  d2.setFullYear(y);
  console.log("input="+y);
  if (checkN(y) && d2 < d) {
    age = d.getTime() - d2.getTime();
    console.log(age);
    age/=31577600000;
    re = "The age is " + age.toFixed(0) +".";
  } else {
    re = "Not availd number";
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
