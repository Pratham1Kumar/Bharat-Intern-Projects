var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");
var btn = document.getElementById("btn");

function roundNumber(number){
    return Math.round(number*100)/100;
}

cel.addEventListener('input',function(){
    let c = parseFloat(cel.value);
    let f = ((9/5)*c) + 32;
    let k = c + 273.15;

    fah.value = roundNumber(f);
    kel.value = roundNumber(k);
});

fah.addEventListener('input',function(){
    let f = parseFloat(fah.value);
    let c = (f-32)*(5/9);
    let k = (f-32)*(5/9) + 273.15;

    cel.value = roundNumber(c);
    kel.value = roundNumber(k);
});

kel.addEventListener('input',function(){
    let k = parseFloat(kel.value);
    let c = k - 273.15;
    let f = (k-273.15)*(9/5) + 32;

    cel.value = roundNumber(c);
    fah.value = roundNumber(f);
});

btn.addEventListener('click',function(){
    cel.value = "";
    fah.value = "";
    kel.value = "";
});