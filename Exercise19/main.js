function gV() {
    var re,
    n = new Number(document.getElementById("input").value);
    console.log("input="+n);
    if(checkN(n)){
        re=((n-n%60)/60)+" hour(s) and " +(n%60)+ " minute(s). "
    }else{
        re="not availd number";
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