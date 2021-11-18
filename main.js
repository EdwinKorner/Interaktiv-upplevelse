let namn = prompt("Skriv in ditt namn");
document.getElementById("namn").innerHTML = namn;

function startaspelet(){
    let h2 = document.getElementById('main-h2');
    h2.remove();

    let button = document.getElementById('starta-spelet');
    button.remove();

    document.getElementById("välj-kamera").style.display = "block";
}

let scener = ['cam1', 'cam3', 'cam7'];

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

function kamera7(){

    securityCam1.style.display="none";
    securityCam3.style.display="none";
    securityCam7.style.display="block";
    knappar.style.bottom ="5rem";
    cam1.style.display="block";
    cam3.style.display="block";
    cam7.style.display="none";
    setTimeout(function(){document.getElementById("malfunction").style.display="block";}, 15000);
    setTimeout(function(){document.getElementById("fixaKamera").style.display="block";}, 20000);
}



