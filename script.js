// //define variables
var tip = document.querySelector("#tip");
var total = document.querySelector("#total");
var tipProcent = "";


function billCost() {
    var bill = Number(document.querySelector("#bill").value);
    return bill;
}

function peopleCount() {
    var people = Number(document.querySelector("#people").value);
    return people;
}

function calculateTip(){
    var currentTip = billCost() + tipProcent * 100;
    document.querySelector("#tip").innerHTML = "$ " + (billCost() * tipProcent / peopleCount()).toFixed(2); //round to 2 decimals
    document.querySelector("#total").innerHTML = "$ " + (currentTip / peopleCount()).toFixed(2); //round to 2 decimals
}

//Reset all values to zero
function clearAll(){
    tip.innerHTML = "$ " +0;
    total.innerHTML = "$ "+ 0;
    document.querySelector("#bill").value = 0;
    document.querySelector("#people").value = 0;
}