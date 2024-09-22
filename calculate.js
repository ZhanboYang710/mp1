// this is the javascript for a calculator

let first;
let second;

function getValue() {
    first = document.getElementById("firstnum").value;
    second = document.getElementById("secondnum").value;

    first = Number(first);
    second = Number(second);
}

let result;

function checkNeg(input) {
    if (input < 0) {
        document.getElementById("calculation-output").style.color = "red";
    }
    else   {
        document.getElementById("calculation-output").style.color = "black";
    }
}

// add
function addition() {
    getValue();
    result = first + second;

    document.getElementById("calculation-output").innerHTML = `<p>${result}</p>`;
    checkNeg(result);
}

// minus
function subtraction() {
    getValue();
    result = first - second;

    document.getElementById("calculation-output").innerHTML = `<p>${result}</p>`;
    checkNeg(result);
}

// multiply
function multiplication() {
    getValue();
    result = first * second;

    document.getElementById("calculation-output").innerHTML = `<p>${result}</p>`;
    checkNeg(result);
}

// divide
function division() {
    getValue();
    result = first / second;
    console.log(result);
    
    document.getElementById("calculation-output").innerHTML = `<p>${result}</p>`;
    checkNeg(result);
}

// power
function power() {
    getValue();
    result = 1

    for (i = 0; i < second; i ++) {
        result = result * first;
    }

    document.getElementById("calculation-output").innerHTML = `<p>${result}</p>`;
    checkNeg(result);
}

// clear
function clear() {
    document.getElementById("calculation-output").innerHTML = `<p></p>`;
    document.getElementById("firstnum").value = "";
    document.getElementById("secondnum").value = "";
    document.getElementById("calculation-output").style.color = "black";
}