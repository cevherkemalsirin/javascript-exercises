const sumAll = function(num1, num2) {

    if((num1 < 0 || num2 < 0) || (typeof num1 !== "number" || typeof num2 !== "number"))
    {
        return "ERROR";
    }

    let number1 = Math.min(num1,num2);
    let number2 = Math.max(num1,num2);

    let total1 = ((number1 - 1) * number1) / 2;
    let total2 = (number2 * (number2 + 1)) / 2;
    return total2 - total1;

};

// Do not edit below this line
module.exports = sumAll;
