var myDate = new Date();
var hrs = myDate.getHours();
var nickname = "Laurențiu";
var email = "laurentiuenache19@yahoo.com";
var modifyTSLtg = "";

if (hrs < 12) {
  alert("Buna dimineata, " + nickname + "!");
} else if (hrs >= 12 && hrs <= 17) {
  alert("Buna ziua, " + nickname + "!");
} else if (hrs >= 17 && hrs <= 24) {
  alert("Buna seara, " + nickname + "!");
}

function chg_tslth()
{
  var modifyTSLtg = document.getElementById('cgh_TSLtg').value;
  modifyTSLtg = new modifyTSLtg;
  nickname = modifyTSLtg;
}