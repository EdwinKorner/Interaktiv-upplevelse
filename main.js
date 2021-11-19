let namn = prompt("Skriv in ditt namn");
document.getElementById("namn").innerHTML = namn;

function startaspelet(){
    let h2 = document.getElementById('main-h2');
    h2.remove();

    let button = document.getElementById('starta-spelet');
    button.remove();

    document.getElementById("välj-kamera").style.display = "block";
}

document.getElementById("cam1").addEventListener("click", kamera1);

//Variabler för att göra mer läsbara funtioner

let securityCam1 = document.getElementById("security-cam1");
let securityCam3 = document.getElementById("security-cam3");
let securityCam7 =  document.getElementById("security-cam7");
let knappar = document.getElementById("knappar");
let static = document.getElementById("static");
let cam1 = document.getElementById("cam1");
let cam3 = document.getElementById("cam3");
let cam7 = document.getElementById("cam7");
let startaOm = document.getElementById("startaOm");
let wait = document.getElementById("vänta");
let ringChef = document.getElementById("ringChefen");
let avstängd = document.getElementById("svartrektangel");

function youDied(){
    document.querySelector("main").style.display="none";
    document.getElementById("youDied").style.display="block";
}

document.getElementById("spelaIgen").addEventListener("click", spelaIgen);

function spelaIgen(){
    window.location.reload();
}

function kamera1(){
    securityCam1.style.display="block";
    securityCam3.style.display="none";
    securityCam7.style.display="none";
    knappar.style.bottom ="5rem";
    cam1.style.display="none";
    cam3.style.display="block";
    cam7.style.display="block";
}

document.getElementById("cam3").addEventListener("click", kamera3);

function kamera3(){

    securityCam1.style.display="none";
    securityCam3.style.display="block";
    securityCam7.style.display="none";
    knappar.style.bottom ="5rem";
    cam1.style.display="block";
    cam3.style.display="none";
    cam7.style.display="block";
}

document.getElementById("cam7").addEventListener("click", kamera7);

let malfunction = document.getElementById("malfunction");

let audio = new Audio('/Ljud-och-videos/Malfunction.mp3');
let knock = new Audio('/Ljud-och-videos/Knock.mp3');
let Wendigo = new Audio('/Ljud-och-videos/Wendigo.mp3');

function play(){
    audio.loop = true;
    audio.play();
}

function kamera7(){
    securityCam1.style.display="none";
    securityCam3.style.display="none";
    securityCam7.style.display="block";
    knappar.style.bottom ="5rem";
    cam1.style.display="block";
    cam3.style.display="block";
    cam7.style.display="none";
}

function malfunction1() {
    setTimeout(function(){malfunction.style.display="block"; play();}, 1000);
    setTimeout(function(){document.getElementById("fixaKamera").style.display="block";}, 1000);
}

startaOm.addEventListener("click", fixaMalfunction);


function fixaMalfunction(){
    malfunction.style.display="none";
    document.getElementById("fixaKamera").style.display="none";
    audio.pause();
}

startaOm.addEventListener("click", startaom);

function startaom(){
    avstängd.style.display="block";
    setTimeout(function(){avstängd.style.display="none";}, 5000);
    setTimeout(function(){securityCam7.style.display="block";}, 5000);
    setTimeout(function(){document.getElementById("ögon").style.display="block";}, 5000);
    setTimeout(function(){alert("Det står något i mörkret")}, 7000);
}

wait.addEventListener("click", vänta);

function vänta(){
    document.getElementById("fixaKamera").style.display="none";
    setTimeout(fixaMalfunction, 7000);
    setTimeout(function(){avstängd.style.display="block";}, 7000);
    setTimeout(function(){knock.play()}, 10000);
    setTimeout(function(){Wendigo.play()}, 19000);
    setTimeout(youDied, 30000);
}

ringChef.addEventListener("click", ringChefen);

function ringChefen(){
    alert("Din mobil har ingen täckning och jobbtelefonen funkar inte");
    ringChef.style.display="none";
}