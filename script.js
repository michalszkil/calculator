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
        return ("Invalid operator!");
    }
}