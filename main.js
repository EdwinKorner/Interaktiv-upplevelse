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

function cam1(){

    document.getElementById("knappar").style.bottom ="5rem";
    document.getElementById("static").style.display="block";
    document.getElementById("backrooms1").style.display="block";
    document.getElementById("cam1").style.display="none";
    document.getElementById("cam3").style.display="block";
    document.getElementById("cam7").style.display="block";
}

function cam3(){

    document.getElementById("knappar").style.bottom ="5rem";
    document.getElementById("static").style.display="block";
    document.getElementById("backrooms2").style.display="block";
    document.getElementById("cam1").style.display="block";
    document.getElementById("cam3").style.display="none";
    document.getElementById("cam7").style.display="block";
}

function cam7(){

    document.getElementById("knappar").style.bottom ="5rem";
    document.getElementById("static").style.display="block";
    document.getElementById("backrooms3").style.display="block";
    document.getElementById("cam1").style.display="block";
    document.getElementById("cam3").style.display="block";
    document.getElementById("cam7").style.display="none";

}