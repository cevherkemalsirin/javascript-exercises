const reverseString = function(text) {
    const textArray = text.split("");
    
    let tempText = "";
    for(let i = 0; i < textArray.length / 2; i++)
    {
        tempText = textArray[i];
        textArray[i] = textArray[textArray.length - 1 - i];
        textArray[textArray.length-1-i] = tempText;
    }

    let newText = textArray.join("");
    return newText;
};

// Do not edit below this line
module.exports = reverseString;
