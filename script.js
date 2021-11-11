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
    if (!divisor) {
        return "xD";
    }
    return dividend / divisor;
}

function operate(number_1, number_2, operator) {
    console.log("Operacja " + number_1 + " " + operator + " " + number_2);
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

function performOperation () {
    decimal_mode = false;
    decimal_part = 0;
    decimal_string =".";
    if (!last_button_equal) {
        memory_value = display_value;
    }
    // operation = "+";
    display_value = 0;
    updateDisplayEquation(operation);
    last_button_equal = false;
}

function performEquals () {
    decimal_mode = false;
    decimal_part = 0;
    decimal_string = ".";
    result_value = operate(memory_value, display_value, operation);
    printResult();
    clearDisplayEquation();
    last_button_equal = true;
    memory_value = result_value;
    console.log("display_value = " + display_value);
    console.log("memory_value = " + memory_value);
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
        return number.round(DIGIT_LIMIT - checkNumberOfIntegerDigits(number) - 1);
    }
}

function addDecimalString() { // remove old decimal part and add new
    console.log("Decimal string to add " + decimal_string);
    console.log("Display value before adding the decimal string " + display_value);
    display_value = Math.trunc(display_value);
    display_value = parseFloat(display_value + decimal_string);
    console.log("Display value after adding the decimal string " + display_value);
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

function addDigit (digit) {
    resetValues();
    if (checkNumberOfAllDigits(display_value)<DIGIT_LIMIT) {
        if (decimal_mode) {
            decimal_string += digit;
            addDecimalString();
        } else {
                display_value = display_value*10 + parseInt(digit);
        }
        updateDisplayMain();
    }
    last_button_equal = false;
}

function deleteLastDigit() {
    if (decimal_string!= ".") {
        decimal_string = decimal_string.toString().split('').slice(0, -1).join('');
        addDecimalString();
    } else {
        display_value = Number(display_value.toString().split('').slice(0, -1).join(''));
    }
}

function updateDisplayMain() {
    display_main.innerText = limitRoundDecimals(display_value);
    console.log("Current display_value = " + display_value);
}
function printResult() {
    display_main.innerText = limitRoundDecimals(result_value);
    console.log("Current result_value = " + result_value);
}
function updateDisplayEquation(operation) {
    display_equation.innerText = limitRoundDecimals(memory_value) + " " + operation;
    console.log("Current memory_value = " + memory_value);
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
const button_percent = document.getElementById("percent");
const button_backspace = document.getElementById("backspace");
const button_clear = document.getElementById("clear");
const display_main = document.getElementById("display-main");
const display_equation = document.getElementById("display-equation")

button_0.addEventListener("click", function() {
    addDigit("0");
    this.blur(); //blur removes focus and stops buttons from getting pressed again when using enter to press "="
})
button_1.addEventListener("click", function() {
    addDigit("1");
    this.blur();
})
button_2.addEventListener("click", function() {
    addDigit("2");
    this.blur();
})
button_3.addEventListener("click", function() {
    addDigit("3");
    this.blur();
})
button_4.addEventListener("click", function() {
    addDigit("4");
    this.blur();
})
button_5.addEventListener("click", function() {
    addDigit("5");
    this.blur();
})
button_6.addEventListener("click", function() {
    addDigit("6");
    this.blur();
})
button_7.addEventListener("click", function() {
    addDigit("7");
    this.blur();
})
button_8.addEventListener("click", function() {
    addDigit("8");
    this.blur();
})
button_9.addEventListener("click", function() {
    addDigit("9");
    this.blur();
})

button_backspace.addEventListener("click", function() {
    deleteLastDigit();
    updateDisplayMain();
    this.blur();
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
    this.blur();
})
button_add.addEventListener("click", function () {
    operation = "+";
    performOperation();
    this.blur();
})
button_subtract.addEventListener("click", function() {
    operation = "-";
    performOperation();
    this.blur();
})
button_multiply.addEventListener("click", function (){
    operation = "*";
    performOperation();
    this.blur();
})
button_divide.addEventListener("click", function (){
    operation = "/";
    performOperation();
    this.blur();
})
button_change_sign.addEventListener("click", function() {
    changeNumberSign();
    updateDisplayMain();
    this.blur();
})
button_percent.addEventListener("click", function() {
    display_value = display_value/100;
    updateDisplayMain();
    this.blur();
})
button_decimal.addEventListener("click", function() {
    decimal_mode = true;
    this.blur();
})
button_equals.addEventListener("click", function () {
    performEquals();
    printResult();
    this.blur();
})

document.addEventListener('keydown', function(e) {
    console.log(` ${e.code}`);
    if (e.code === "Digit0") /*addDigit("0")*/ button_0.click()
    else if (e.code === "Digit1") /*addDigit("1")*/ button_1.click()
    else if (e.code === "Digit2") /*addDigit("2")*/ button_2.click()
    else if (e.code === "Digit3") /*addDigit("3")*/ button_3.click()
    else if (e.code === "Digit4") /*addDigit("4")*/ button_4.click()
    else if (e.code === "Digit5") /*addDigit("5")*/ button_5.click()
    else if (e.code === "Digit6") /*addDigit("6")*/ button_6.click()
    else if (e.code === "Digit7") /* addDigit("7") */ button_7.click()
    else if (e.code === "Digit8") /* addDigit("8") */ button_8.click()
    else if (e.code === "Digit9") /* addDigit("9") */ button_9.click()
    else if (e.code === "Backspace") {
/*         deleteLastDigit();
        updateDisplayMain(); */
        button_backspace.click();
    }
    else if (e.code === "Period") decimal_mode = true
    else if (e.key === "+") {
        // operation = "+";
        // performOperation();
        button_add.click();
    }
    else if (e.key === "-") {
        // operation = "-";
        // performOperation();
        button_subtract.click();
    }
    else if (e.key === "*") { // For some reason doesn't work for "8*" button
        // operation = "*";
        // performOperation();
        button_multiply.click();
    }
    else if (e.key === "/") {
        // operation = "/";
        // performOperation();
        button_divide.click();
    }
    else if (e.key === "Enter") {
        // performEquals();
        // clearDisplayEquation();
        button_equals.click();
        // return false;
        // printResult();
    }
});