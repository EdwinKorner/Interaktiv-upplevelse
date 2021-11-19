let namn = prompt("Skriv in ditt namn");
document.getElementById("namn").innerHTML = namn;

/** Denna funktionen tar bort allt från startsidan och ersätter den med starten av spelet */
function startaspelet(){
    let h2 = document.getElementById('main-h2');
    h2.remove();

    let button = document.getElementById('starta-spelet');
    button.remove();

    document.getElementById("välj-kamera").style.display = "block";
}

/** Jag har gjort två knappar som tar dig till kamera ett men "cam1" används bara i slutet av spelet. "Cam1Decoy" används fram tills man är klar med kamera 7 */

document.getElementById("cam1").addEventListener("click", kamera1);
document.getElementById("cam1Decoy").addEventListener("click", kamera1);

//Variabler för att göra mer läsbara funtioner

let securityCam1 = document.getElementById("security-cam1");
let securityCam3 = document.getElementById("security-cam3");
let securityCam7 =  document.getElementById("security-cam7");
let knappar = document.getElementById("knappar");
let static = document.getElementById("static");
let cam1Decoy = document.getElementById("cam1Decoy");
let cam1 = document.getElementById("cam1");
let cam3 = document.getElementById("cam3");
let cam7 = document.getElementById("cam7");
let startaOm = document.getElementById("startaOm");
let wait = document.getElementById("vänta");
let ringChef = document.getElementById("ringChefen");
let avstängd = document.getElementById("svartrektangel");
let gåUt = document.getElementById("gåUt");
let kollaKamera = document.getElementById("kollaKamera");
let rörelsedetektor = document.getElementById("rörelsedetektor");
let gåUtVideo = document.getElementById("gåUtVideo");

/** Denna funktionen kommer när man har gjort fel val och spelet slutar. Den tar bort allt inom elementet "main" och lägger till en div med två text rader och en knapp
 * @param {Element} "main" är main elementet
 * 
 * @param {Element} "youDied" är en div som innehåller alla element som behövs
*/

function youDied(){
    document.querySelector("main").style.display="none";
    document.getElementById("youDied").style.display="block";
}

/** You won körs när man har vunnit */

function youWon(){
    document.querySelector("main").style.display="none";
    document.getElementById("youWon").style.display="block";
}

document.getElementById("spelaIgen").addEventListener("click", spelaIgen);

/** Här är knappen som visas med funktionen "youDied()", den laddar om sidan så att man kan spela igen */

function spelaIgen(){
    window.location.reload();
}

/** 
 * @function kamera1() ser till att det ända som visas är det som ska vara med på sidan och sätter display: none på allt annat.
 * @function kamera1() kallas av "cam1Decoy" knappen
*/

function kamera1(){
    securityCam1.style.display="block";
    securityCam3.style.display="none";
    securityCam7.style.display="none";
    knappar.style.bottom ="5rem";
    cam1Decoy.style.display="none";
    cam3.style.display="block";
    cam7.style.display="block";
}

/** Här är en eventlistener som gör att funktionen "kamera3()" kallas när man klickar på knappen "cam3".
 * @function kamera3()  gör samma sak som @function kamera1() fast omvänt så att de rätta elementen för denna scenen är med
 */

document.getElementById("cam3").addEventListener("click", kamera3);

function kamera3(){

    securityCam1.style.display="none";
    securityCam3.style.display="block";
    securityCam7.style.display="none";
    knappar.style.bottom ="5rem";
    cam1Decoy.style.display="block";
    cam3.style.display="none";
    cam7.style.display="block";
}

/** @param {String} malfunction är id på videon som spelas i @function kamera7() */

let malfunction = document.getElementById("malfunction");

/** Dessa ger variabler till de olika ljuden som används i funktionerna
 * @param {String} /Ljud-och-videos/ är mappen som ljuden ligger i och det som står efter är namnet på mp3 filen
 */

let audio = new Audio('/Ljud-och-videos/Malfunction.mp3');
let knock = new Audio('/Ljud-och-videos/Knock.mp3');
let Wendigo = new Audio('/Ljud-och-videos/Wendigo.mp3');
let gåUtLjud = new Audio('/Ljud-och-videos/gå-ut.mp3');

/** @function play() kallas när @var audio ska spelas upp. Funktionen består av en property som heter "loop". Det är en boolean som säger om ljudet ska loopas eller inte. */

function play(){
    audio.loop = true;
    audio.play();
}

document.getElementById("cam7").addEventListener("click", kamera7);

function kamera7(){
    securityCam1.style.display="none";
    securityCam3.style.display="none";
    securityCam7.style.display="block";
    knappar.style.bottom ="5rem";
    cam1Decoy.style.display="block";
    cam3.style.display="block";
    cam7.style.display="none";
}

/** Denna funktionen spelar upp en video i kamera 7
 * @function malfunction1() är en funktion som kallas av knappen cam7 som har ett @event onclick på sig
 */

function malfunction1() {
    setTimeout(function(){malfunction.style.display="block"; play();}, 5000);
    setTimeout(function(){document.getElementById("fixaKamera").style.display="block";}, 5000);
}

/** Funktionen fixaMalfunction() tar bort videon som spelas och även knapparna och texten
 * Funktionen startaom() startar 6 stycken setTimeout funktioner som tar bort och leger till element samt skickar ut alerts. Det är denna funktionen som ersätter "cam1Decoy" med "cam1"
 * @function fixaMalfunction samt @function startaom kallas av knappen startaOm genom en @method addEventListener som har ett @event click på sig
 */

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
    setTimeout(function(){alert("Det står något borta i korridoren")}, 7000);
    setTimeout(function(){alert("Rörelsedetektorn på kamera 1 kände av att någon befann sig i rummet")}, 11000);
    setTimeout(function(){cam1Decoy.style.display="none"; cam1.style.display="block"}, 11000);
}

/** Funktionen "vänta()" och "ringChefen()" är de två andra alternativen man kan välja mellan. Av funtionen "vänta()" blir skärmen svart och olika ljud spelas upp
 * och tillslut kallas @function youDied()
 * Av funktionen "ringChefen()" kallas ändast en alert som säger att det valet inte hjälper dig och så tas knappen bort
 */

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

/** Här är de olika valen i kamera 1. Funktionen gåUtFunktion() tar bort vissa element och spelar upp en video. Funktionen "kollaKameraFunktion" skickar endast ut en alert
 * 
 */

function detektor(){
    rörelsedetektor.style.display="block";
}

gåUt.addEventListener("click", gåUtFunktion);

function gåUtFunktion(){
    setTimeout(function(){avstängd.style.display="block";}, 1000);
    setTimeout(function(){avstängd.style.display="none";}, 2000);
    setTimeout(function(){securityCam1.style.display="none";}, 1000);
    setTimeout(function(){gåUtVideo.style.display="block";}, 2000);
    setTimeout(function(){gåUtLjud.play();}, 2000);
    rörelsedetektor.style.display="none";
    setTimeout(youDied, 12000);
}

kollaKamera.addEventListener("click", kollaKameraFunktion);

function kollaKameraFunktion(){
    rörelsedetektor.style.display="none";
    setTimeout(function(){alert("Det verkar som att rörelsedetektorn var ett falskt alarm")}, 5000);
    setTimeout(youWon, 7000);
}