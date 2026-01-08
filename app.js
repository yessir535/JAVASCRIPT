function red() {
  document.getElementById("color1").innerHTML;
  document.getElementById("body").style.backgroundColor = "red";
}
function green() {
  document.getElementById("color1").innerHTML;
  document.getElementById("body").style.backgroundColor = "lightgreen";
}
function blue() {
  document.getElementById("color1").innerHTML;
  document.getElementById("body").style.backgroundColor = "lightblue";
}
function kol1() {
  document.getElementById("koleda").innerHTML = "Cicha noc, święta noc";
}
function kol2() {
  document.getElementById("koleda").innerHTML = "Przybieżeli do Betlejem";
}
function kol3() {
  document.getElementById("koleda").innerHTML = "Wśród nocnej ciszy";
}
function czerw() {
  if (document.getElementById("body").style.backgroundColor == "red") {
    document.getElementById("koleda").style.color = "white";
  } else {
    document.getElementById("koleda").style.color = "red";
  }
}
function ziel() {
  document.getElementById("koleda").style.color = "green";
}
function nie() {
  document.getElementById("koleda").style.color = "blue";
}
