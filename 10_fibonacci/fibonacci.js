const fibonacci = function(value) {
    if(value < 0) return "OOPS";
    if(value === 0) return 0;

    const fabArr = [1,1];
    for(let i = 2; i < +value; i++)
    {
        fabArr.push(fabArr[fabArr.length-1] + fabArr[fabArr.length-2]);
    }
    return fabArr[fabArr.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
