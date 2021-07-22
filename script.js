// //define variables
var bill = document.querySelector('#bill').value;
var custom = document.querySelector('#custom');
var people = document.querySelector('#people').value;
var tip = document.querySelector('#tip');
var total = document.querySelector('#total');

function claculate5(){
tip.innerHTML = "$ " + bill * .05 / people;
total.innerHTML = (bill * .05 / people) + (bill / people);
}
claculate5();

function clearAll(){
    tip.innerHTML = "$ 0";
    total.innerHTML = "$ 0";
    bill = "0";
    people = "0";
}