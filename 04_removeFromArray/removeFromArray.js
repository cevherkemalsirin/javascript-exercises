const removeFromArray = function(array, ...variables) {
   /* for(let j = 0; j < variables.length; j++)
    {
        for(let i = 0; i < array.length; i++)
        {
            if(array[i] === variables[j])
            {
                array.splice(i,1);
            }
        }
    }
    return array;*/

    return array.filter((item) => !variables.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
