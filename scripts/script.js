// JavaScript Document
console.log("test!");

var pijp1 = document.querySelector ('.groenePijp.een');
var pijp2 = document.querySelector ('.groenePijp.twee');
var pijp3 = document.querySelector ('.groenePijp.drie');
var pijp4 = document.querySelector ('.groenePijp.vier');
var pijp5 = document.querySelector ('.groenePijp.vijf');
var pijp6 = document.querySelector ('.groenePijp.zes');

var yoshi1990 = document.querySelector(".yoshi1");
var yoshi1993 = document.querySelector(".yoshi2");
var yoshi1995 = document.querySelector(".yoshi3");
var yoshi1998 = document.querySelector(".yoshi4");
var yoshi2005 = document.querySelector(".yoshi5");
var yoshi2019 = document.querySelector(".yoshi6");


var achtergrond1990 = document.querySelector("#achtergrond");
var achtergrond1993 = document.querySelector("#achtergrond");
var achtergrond1995 = document.querySelector("#achtergrond");
var achtergrond1998 = document.querySelector("#achtergrond");
var achtergrond2005 = document.querySelector("#achtergrond");
var achtergrond2019 = document.querySelector("#achtergrond");


function verschijn1 () {
    console.log('klik pijp1');
    console.log('yoshi1 verschijnt');
    console.log('achtergrond1 verschijnt');
    yoshi1990.src = "images/yoshi_1990.png";
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
    yoshi2005.src = "images/yoshi_2005.png";
    achtergrond2005.src ="images/Background2005.png";
}

function verschijn6 () {
    console.log('klik pijp 6');
    console.log('klik yoshi 6');
    yoshi2019.src = "images/yoshi_2019.png";
    achtergrond2019.src ="images/Background2019.png";
}

pijp1.addEventListener ('click', verschijn1);
pijp2.addEventListener ('click', verschijn2);
pijp3.addEventListener ('click', verschijn3);
pijp4.addEventListener ('click', verschijn4);
pijp5.addEventListener ('click', verschijn5);
pijp6.addEventListener ('click', verschijn6);
