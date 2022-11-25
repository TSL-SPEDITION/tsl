function connect() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username != "admin" || password != "antonia54") {
    window.location.href = "http://tsl-spedition.github.io/tsl/";
    alert("Logarea nu a avut succes,te redirecționăm la pagna principala!");
    return false;
  } else{
    window.location.href = "http://tsl-spedition.github.io/tsl/dashboard.html";
    alert("Vă redirecționăm la Panoul de Admistrare!")
  }
}
