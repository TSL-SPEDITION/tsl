var typed = new  Typed(".auto-type",{
    strings : ["Site-ul este aproape gata!","Pregătim totul pentru dumneavoasră!","Afișăm timpul estimat pentru încarcarea informațiilor:"],
    typeSpeed : 50,
    backSpeed : 50,
    loop:true
})

var deadline = new Date("November 25, 2022 15:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("ctdn").innerHTML = hours + " ore" + "  " + minutes + " " + " minute" + " " + seconds + " secunde";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("ctdn").innerHTML = "Website-ul a fost lansat,reîmprospătează pagina!";
        window.location.href = "http://tsl-spedition.github.io/tsl";
    }
}, 1000);