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

function claculate10(){
    tip.innerHTML = "$ " + bill * .1 / people;
    total.innerHTML = (bill * .1 / people) + (bill / people);
    }
    claculate10();

    function claculate15(){
        tip.innerHTML = "$ " + bill * .15 / people;
        total.innerHTML = (bill * .15 / people) + (bill / people);
        }
        claculate15();

        function claculate20(){
            tip.innerHTML = "$ " + bill * .2 / people;
            total.innerHTML = (bill * .2 / people) + (bill / people);
            }
            claculate5();

            function claculate25(){
                tip.innerHTML = "$ " + bill * .25 / people;
                total.innerHTML = (bill * .25 / people) + (bill / people);
                }
                claculate25();

function clearAll(){
    tip.innerHTML = "$ 0";
    total.innerHTML = "$ 0";
    bill = "0";
    people = "0";
}