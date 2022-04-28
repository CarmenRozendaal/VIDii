// JavaScript Document
console.log("test!");

var reload = document.getElementById ("reloadButton");

var pijp1 = document.querySelector (".groenePijp.een");
var pijp2 = document.querySelector (".groenePijp.twee");
var pijp3 = document.querySelector (".groenePijp.drie");
var pijp4 = document.querySelector (".groenePijp.vier");
var pijp5 = document.querySelector (".groenePijp.vijf");
var pijp6 = document.querySelector (".groenePijp.zes");

// var yoshi1990 = document.querySelector(".yoshi1");
var yoshi1993 = document.querySelector(".yoshi2");
var yoshi1995 = document.querySelector(".yoshi3");
var yoshi1998 = document.querySelector(".yoshi4");
var yoshi2006 = document.querySelector(".yoshi5");
var yoshi2019 = document.querySelector(".yoshi6");


var achtergrond1990 = document.querySelector("#achtergrond");
var achtergrond1993 = document.querySelector("#achtergrond");
var achtergrond1995 = document.querySelector("#achtergrond");
var achtergrond1998 = document.querySelector("#achtergrond");
var achtergrond2006 = document.querySelector("#achtergrond");
var achtergrond2019 = document.querySelector("#achtergrond");


function verschijn1 () {
    console.log('klik pijp1');
    console.log('yoshi1 verschijnt');
    console.log('achtergrond1 verschijnt');
    // yoshi1990.src = "images/yoshi_1990.png";
    achtergrond1990.src ="images/Background1990.png";
}

function verschijn2 () {
    console.log('klik pijp 2');
    console.log('klik yoshi 2');
    yoshi1993.src = "images/yoshi_1993.png";
    achtergrond1993.src ="images/Background1993.png";
}

function verschijn3 () {
    console.log('klik pijp 3');
    console.log('klik yoshi 3');
    yoshi1995.src = "images/yoshi_1995.png";
    achtergrond1995.src ="images/Background1995.png";
}

function verschijn4 () {
    console.log('klik pijp 4');
    console.log('klik yoshi 4');
    yoshi1998.src = "images/yoshi_1998.png";
    achtergrond1998.src ="images/Background1998.png";
}

function verschijn5 () {
    console.log('klik pijp 5');
    console.log('klik yoshi 5');
    yoshi2006.src = "images/yoshi_2006.png";
    achtergrond2006.src ="images/Background2006.png";
}

function verschijn6 () {
    console.log('klik pijp 6');
    console.log('klik yoshi 6');
    yoshi2019.src = "images/yoshi_2019.png";
    achtergrond2019.src ="images/Background2019.png";
}

function reloadpagina () {
    console.log('klik button');
    location.reload();
}

pijp1.addEventListener ('click', verschijn1);
pijp2.addEventListener ('click', verschijn2);
pijp3.addEventListener ('click', verschijn3);
pijp4.addEventListener ('click', verschijn4);
pijp5.addEventListener ('click', verschijn5);
pijp6.addEventListener ('click', verschijn6);

reload.addEventListener ('click',reloadpagina);


var nextButton = document.getElementById ("nextButton");
var container = document.getElementById ("titel"); 
var ondertekst = document.getElementById ("platteTekst");

var titel= [
    "1990. Het ontstaan van Yoshi",
    "1993. Yoshi's Safari",
    "1995. Super Mario World 2",
    "1998. Super Mario 64",
    "2006. New Super Mario Bros",
    "2019. Yoshi's Crafted World"
]

var platteTekst= [
    "In het Nintendo spel Super Mario World, is Yoshi voor het eerst te zien. Het woord 'Yoshi' betekent beter, best of gelukkig. Het is niet bekend wat voor dier hij is, maar vele beweren dat Yoshi een dinosaurus is.",
    "Het spel werd ontwikkeld en uitgegeven door Nintendo. In dit spel moeten Mario en Yoshi, King Fret en zijn zoon Prince Pine uit Jewelery Land, uit de handen van Bowser en zijn Koopalings redden.",
    "Ookwel Yoshi's Island. Het eerste spel waarin Yoshi de hoofdrol speelt. Het is een van de eerste spellen van Nintendo die afweek van het springen op vijanden en vuurballen gooien (Uit Mario). Zo kan Yoshi nu ook vijanden opeten, op ze stampen en eieren gooien.",
    "In dit spel ligt de nadruk op verkenning van de enorme werelden, waarin de speler de verschillende missies moet volbrengen. Dit spel is een van de meest revolutionaire spellen ooit gemaakt. De allereerste 3D variant, een grote stap in de virtuele wereld.",
    "Het eerste gloednieuwe 2D platformspel met Mario in de hoofdrol, sinds Super Mario World. Bevat 3D graphics die de klassieke 2D gameplay ondersteunen. Nieuw is de multiplayer modus, waarbij de optie voor het kiezen van Yoshi, nu ook mogelijk is.",
    "Een zijwaarts scrollend platformspel, waarin Yoshi vijanden moet verslaan door ze op te eten of ze van het level af te gooien. Het bevat een multiplayer-optie waarbij je elk met een eigen Yoshi speelt. Aan de stijl zijn nu veel texturen toegevoegd."
]

nextButton.addEventListener ('click',loopen);
// nextButton.addEventListener ('click',tekst);

var i = 0;

function loopen(){
i++;
// console.log(i);
if (i === titel.length) {
    i = 0; 

    }
    container.innerHTML=titel[i];
    ondertekst.innerHTML=platteTekst[i];
}


// var u = 0;

// function tekst(){
//     u++;
//     console.log(u);
//     if (u === platteTekst.length) {
//         u = 0; 
    
//     }
//     document.getElementById("platteTekst").innerHTML=platteTekst[u];
// }