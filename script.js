function add(addend_1, addend_2) {
    return addend_1 + addend_2;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(multiplier, multiplicand) {
    return multiplier * multiplicand;
}

function divide(dividend, divisor) {
    return dividend / divisor;
}

function operate(number_1, number_2, operator) {
    if (operator === "+") {
        return(add(number_1, number_2));
    } else if (operator === "-") {
        return (subtract(number_1, number_2));
    } else if (operator === "*") {
        return(multiply(number_1, number_2));
    } else if (operator === "/") {
        return (divide(number_1, number_2));
    } else {
        return 0; // To chyba załatwia sytuację wciśnięcia = bez niczego innego wcześniej po wczytaniu strony
    }
}
// If last button pressed was equal then reset values to 0
function resetValues() {
    if (last_button_equal) {
        display_value = 0;
        memory_value = 0;
        clearDisplayEquation();
        updateDisplayMain();
    }
}

function updateDisplayMain() {
    display_main.innerText = display_value;
}
function updateDisplayEquation(operation) {
    display_equation.innerText = memory_value + " " + operation;
}
function clearDisplayEquation(operation) {
    display_equation.innerText = "";
}


let display_value = 0;
let memory_value = 0;
let operation = null;
let last_button_equal = false;

const button_0 = document.getElementById("digit_0");
const button_1 = document.getElementById("digit_1");
const button_2 = document.getElementById("digit_2");
const button_3 = document.getElementById("digit_3");
const button_4 = document.getElementById("digit_4");
const button_5 = document.getElementById("digit_5");
const button_6 = document.getElementById("digit_6");
const button_7 = document.getElementById("digit_7");
const button_8 = document.getElementById("digit_8");
const button_9 = document.getElementById("digit_9");
const button_add = document.getElementById("add");
const button_subtract = document.getElementById("subtract");
const button_multiply = document.getElementById("multiply");
const button_divide = document.getElementById("divide");
const button_equals = document.getElementById("equals");
const button_decimal = document.getElementById("decimal");
const button_clear = document.getElementById("clear");
const display_main = document.getElementById("display-main");
const display_equation = document.getElementById("display-equation")

button_0.addEventListener("click", function() {
    resetValues();
    display_value = display_value*10 + 0;
    updateDisplayMain();
    last_button_equal = false;
})
button_1.addEventListener("click", function() {
    resetValues();
    display_value = display_value*10 + 1;
    updateDisplayMain();
    last_button_equal = false;
})
button_2.addEventListener("click", function() {
    resetValues();
    display_value = display_value*10 + 2;
    updateDisplayMain();
    last_button_equal = false;
})
button_3.addEventListener("click", function() {
    resetValues();
    display_value = display_value*10 + 3;
    updateDisplayMain();
    last_button_equal = false;
})
button_4.addEventListener("click", function() {
    resetValues();
    display_value = display_value*10 + 4;
    updateDisplayMain();
    last_button_equal = false;
})
button_5.addEventListener("click", function() {
    resetValues();
    display_value = display_value*10 + 5;
    updateDisplayMain();
    last_button_equal = false;
})
button_6.addEventListener("click", function() {
    resetValues();
    display_value = display_value*10 + 6;
    updateDisplayMain();
    last_button_equal = false;
})
button_7.addEventListener("click", function() {
    resetValues();
    display_value = display_value*10 + 7;
    updateDisplayMain();
    last_button_equal = false;
})
button_8.addEventListener("click", function() {
    resetValues();
    display_value = display_value*10 + 8;
    updateDisplayMain();
    last_button_equal = false;
})
button_9.addEventListener("click", function() {
    resetValues();
    display_value = display_value*10 + 9;
    updateDisplayMain();
    last_button_equal = false;
})

button_clear.addEventListener("click", function(){
    display_value = 0;
    memory_value = 0;
    updateDisplayMain();
    clearDisplayEquation();
    last_button_equal = false;
})
button_add.addEventListener("click", function () {
    memory_value = display_value;
    operation = "+";
    display_value = 0;
    // updateDisplayMain();
    updateDisplayEquation(operation);
    last_button_equal = false;
})
button_subtract.addEventListener("click", function() {
    memory_value = display_value;
    operation = "-";
    display_value = 0;
    updateDisplayEquation(operation);
    last_button_equal = false;
})
button_equals.addEventListener("click", function () {
    memory_value = operate(memory_value, display_value, operation);
    temp = display_value;
    display_value = memory_value;
    updateDisplayMain();
    display_value = temp;
    clearDisplayEquation();
    last_button_equal = true;
})