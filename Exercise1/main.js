function displayDate() {
  var today = new Date(),
    date = checkTime(today.getDate()),
    month = checkTime(today.getMonth()+1),
    year = today.getFullYear(),
    h = checkTime(today.getHours()),
    min = checkTime(today.getMinutes()),
    sec = checkTime(today.getSeconds()),
    weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    wd = weekday[today.getDay()];
  document.getElementById("display").innerHTML =
    wd + ", " + date + "/" + month + "/" + year + " " + h + ":" + min + ":" + sec;
  t = setTimeout(function() {
    displayDate();
  }, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
