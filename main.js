let ans = "";
const subBtn = document.getElementById("sub");
const perc = document.getElementById("perc");
const del = document.getElementById("del");

function num(button){
    let calcDisp = document.getElementById("calcDisp");
    let number =  button.id;
    ans += number;
    calcDisp.innerText += number;
    console.log(ans);
}

//couldn't use clear cos its a keyword in js
function clar(){
    let calcDisp = document.getElementById("calcDisp");
    let ansDisp = document.getElementById("ansDisp");
    calcDisp.innerText = "";
    ansDisp.innerText = "";
    ans = "";
    console.log(ans);
}

function backSpace(){
    let calcDisp = document.getElementById("calcDisp");
    ans = ans.substring(0, ans.length - 1);
    calcDisp.innerText = ans;
    console.log(ans);
}

function per(){
    let ansDisp = document.getElementById("ansDisp");
    ans /= 100; 
    ansDisp.innerText = ans;
    console.log(ans);
}

function add(){
    const addBtn = document.getElementById("add");
    // alert("addBtn works");
    ans += "+";
    calcDisp.innerText = ans;
}

function mul(){
    let mulBtn = document.getElementById("mul")
    ans += "*";
    calcDisp.innerText = ans;
}

function div(){
    let divBtn = document.getElementById("div");
    ans += "/";
    calcDisp.innerText = ans;
}

function sub(){
    let subBtn = document.getElementById("sub");
    ans += "-";
    calcDisp.innerText = ans;
}
function equals(){
    let ansDisp = document.getElementById("ansDisp");
    let calcDisp = document.getElementById("calcDisp");
    ansDisp.innerText = eval(ans);
}
// console.error(ans);