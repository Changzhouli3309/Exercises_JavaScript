function show() {
  var workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    re =
      workDays[0] +
      ", " +
      workDays[1] +
      ", " +
      workDays[2] +
      ", " +
      workDays[3] +
      " and " +
      workDays[4] +
      " are workdays.";
  document.getElementById("display").innerHTML = re;
}
