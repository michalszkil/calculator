const DIGIT_LIMIT = 10;

Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
}

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
        return 0;
    }
}
// The rounding doesn't really work for very small numbers but who cares
function checkNumberOfAllDigits(number) {
    return (''+number).length;
}

function checkNumberOfIntegerDigits(number) {
    return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1; // stolen from https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript/28203456#28203456
}

function limitRoundDecimals (number) { // limit number of displayed decimals so that the display fits the whole number
    number_of_digits = checkNumberOfAllDigits(number);
    console.log("Number of digits = " + number_of_digits);
    if (number_of_digits <= DIGIT_LIMIT) {
        return number;
    } else if (checkNumberOfIntegerDigits(number) >= DIGIT_LIMIT) {
        return "LOL";
    } else {
        return number.round(DIGIT_LIMIT - checkNumberOfIntegerDigits(number));
    }
}

function addDecimalString() { // remove old decimal part and add new
    display_value = Math.trunc(display_value);
    display_value = parseFloat(display_value + decimal_string);
}

function changeNumberSign() {
    display_value = -display_value;
}

// If last button pressed was "=" then reset values to 0
function resetValues() {
    if (last_button_equal) {
        display_value = 0;
        memory_value = 0;
        clearDisplayEquation();
        updateDisplayMain();
    }
}

function updateDisplayMain() {
    display_main.innerText = limitRoundDecimals(display_value);
}
function printResult() {
    display_main.innerText = limitRoundDecimals(result_value);
}
function updateDisplayEquation(operation) {
    display_equation.innerText = limitRoundDecimals(memory_value) + " " + operation;
}
function clearDisplayEquation(operation) {
    display_equation.innerText = "";
}


let display_value = 0;
let memory_value = 0;
let decimal_part = 0;
let decimal_string = ".";
let result_value = 0;
let operation = null;
let last_button_equal = false;
let decimal_mode = false;

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
const button_change_sign = document.getElementById("change-sign");
const button_clear = document.getElementById("clear");
const display_main = document.getElementById("display-main");
const display_equation = document.getElementById("display-equation")

button_0.addEventListener("click", function() {
    resetValues();
    if (checkNumberOfAllDigits(display_value)<DIGIT_LIMIT) {
        if (decimal_mode) {
            decimal_string += "0";
            addDecimalString();
        } else {
                display_value = display_value*10 + 0;
        }
        updateDisplayMain();
    }
    last_button_equal = false;
})
button_1.addEventListener("click", function() {
    resetValues();
    if (checkNumberOfAllDigits(display_value)<DIGIT_LIMIT) {
        if (decimal_mode) {
            decimal_string += "1";
            addDecimalString();
        } else {
                display_value = display_value*10 + 1;
        }
        updateDisplayMain();
    }
    last_button_equal = false;
})
button_2.addEventListener("click", function() {
    resetValues();
    if (checkNumberOfAllDigits(display_value)<DIGIT_LIMIT) {
        if (decimal_mode) {
            decimal_string += "2";
            addDecimalString();
        } else {
                display_value = display_value*10 + 2;
        }
        updateDisplayMain();
    }
    last_button_equal = false;
})
button_3.addEventListener("click", function() {
    resetValues();
    if (checkNumberOfAllDigits(display_value)<DIGIT_LIMIT) {
        if (decimal_mode) {
            decimal_string += "3";
            addDecimalString();
        } else {
                display_value = display_value*10 + 3;
        }
        updateDisplayMain();
    }
    last_button_equal = false;
})
button_4.addEventListener("click", function() {
    resetValues();
    if (checkNumberOfAllDigits(display_value)<DIGIT_LIMIT) {
        if (decimal_mode) {
            decimal_string += "4";
            addDecimalString();
        } else {
                display_value = display_value*10 + 4;
        }
        updateDisplayMain();
    }
    last_button_equal = false;
})
button_5.addEventListener("click", function() {
    resetValues();
    if (checkNumberOfAllDigits(display_value)<DIGIT_LIMIT) {
        if (decimal_mode) {
            decimal_string += "5";
            addDecimalString();
        } else {
                display_value = display_value*10 + 5;
        }
        updateDisplayMain();
    }
    last_button_equal = false;
})
button_6.addEventListener("click", function() {
    resetValues();
    if (checkNumberOfAllDigits(display_value)<DIGIT_LIMIT) {
        if (decimal_mode) {
            decimal_string += "6";
            addDecimalString();
        } else {
                display_value = display_value*10 + 6;
        }
        updateDisplayMain();
    }
    last_button_equal = false;
})
button_7.addEventListener("click", function() {
    resetValues();
    if (checkNumberOfAllDigits(display_value)<DIGIT_LIMIT) {
        if (decimal_mode) {
            decimal_string += "7";
            addDecimalString();
        } else {
                display_value = display_value*10 + 7;
        }
        updateDisplayMain();
    }
    last_button_equal = false;
})
button_8.addEventListener("click", function() {
    resetValues();
    if (checkNumberOfAllDigits(display_value)<DIGIT_LIMIT) {
        if (decimal_mode) {
            decimal_string += "8";
            addDecimalString();
        } else {
                display_value = display_value*10 + 8;
        }
        updateDisplayMain();
    }
    last_button_equal = false;
})
button_9.addEventListener("click", function() {
    resetValues();
    if (checkNumberOfAllDigits(display_value)<DIGIT_LIMIT) {
        if (decimal_mode) {
            decimal_string += "9";
            addDecimalString();
        } else {
                display_value = display_value*10 + 9;
        }
        updateDisplayMain();
    }
    last_button_equal = false;
})

button_clear.addEventListener("click", function(){
    decimal_mode = false;
    decimal_part = 0;
    decimal_string =".";
    display_value = 0;
    memory_value = 0;
    updateDisplayMain();
    clearDisplayEquation();
    last_button_equal = false;
})
button_add.addEventListener("click", function () {
    decimal_mode = false;
    decimal_part = 0;
    decimal_string =".";
    if (!last_button_equal) {
        memory_value = display_value;
    }
    operation = "+";
    display_value = 0;
    updateDisplayEquation(operation);
    last_button_equal = false;
})
button_subtract.addEventListener("click", function() {
    decimal_mode = false;
    decimal_part = 0;
    decimal_string =".";
    if (!last_button_equal) {
        memory_value = display_value;
    }
    operation = "-";
    display_value = 0;
    updateDisplayEquation(operation);
    last_button_equal = false;
})
button_multiply.addEventListener("click", function (){
    decimal_mode = false;
    decimal_part = 0;
    decimal_string =".";
    if (!last_button_equal) {
        memory_value = display_value;
    }
    operation = "*";
    display_value = 0;
    updateDisplayEquation(operation);
    last_button_equal = false;
})
button_divide.addEventListener("click", function (){
    decimal_mode = false;
    decimal_part = 0;
    decimal_string =".";
    if (!last_button_equal) {
        memory_value = display_value;
    }
    operation = "/";
    display_value = 0;
    updateDisplayEquation(operation);
    last_button_equal = false;
})
button_change_sign.addEventListener("click", function() {
    changeNumberSign();
    updateDisplayMain();
})
button_decimal.addEventListener("click", function(){
    decimal_mode = true;
})
button_equals.addEventListener("click", function () {
    decimal_mode = false;
    decimal_part = 0;
    result_value = operate(memory_value, display_value, operation);
    printResult();
    clearDisplayEquation();
    last_button_equal = true;
    memory_value = result_value;
    console.log("display_value = " + display_value);
    console.log("memory_value = " + memory_value);
})