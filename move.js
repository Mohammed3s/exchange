
let usd = document.getElementById("usd") ;

let yer = document.getElementById("yer") ;

let btn = document.getElementById("btn") ;

usd.onkeyup = function() {

    yer.value = usd.value * 250 ;
}

yer.onkeyup = function() {

    usd.value = yer.value / 250 ;
}

btn.addEventListener(`click`,function(){

    window.location.reload() ;
})