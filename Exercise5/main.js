function displayDate() {
  var time = new Date();
  console.log("Current Time: "+time.toISOString)
  var cr = new Date();
  time.setFullYear(2019,11,25);
  cr.setFullYear(time.getFullYear(), 11, 25);
  if (time.getMonth() == 11 && time.getDate() > 25) {
    cr.setFullYear(time.getFullYear() + 1);
  }
  console.log("Christmas: "+cr);
  var ttc = cr.getTime() - time.getTime();
  document.getElementById("display").innerHTML = ttc / 86400000 + " " + "Days";
}
