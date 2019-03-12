function show() {
  var re = new Array();
  for (let i = 1; re.length < 10; i++) {
    n = i;
    console.log("i=" + n);
    var c = 0;
    while (n != 1 && n != 4) {
      c++;
      n = count(n);
      console.log("n" + c + "=" + n);
    }
    if (n == 1) {
      re.push(i);
    }
  }
  document.getElementById("display").innerHTML = re;
}
function count(n) {
  var arr = new Array();
  d = getDigtal(n);
  for (let i = 0; i < d; i++) {
    arr.push(n % 10);
    n = (n - (n % 10)) / 10;
  }
  n = 0;
  arr.forEach(e => {
    n += Math.pow(e, 2);
  });
  return n;
}
function getDigtal(n) {
  var d = 0;
  while (n > 0) {
    d++;
    n = (n - (n % 10)) / 10;
  }
  return d;
}
