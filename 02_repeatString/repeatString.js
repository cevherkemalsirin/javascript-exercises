const repeatString = function(text, num) {
    if(num >= 0)
    {   
        let newText = "";
        for(let i = 0; i < num; i++)
        {
            newText += text;
        }
        return newText;
    }
    else 
    {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = repeatString;
