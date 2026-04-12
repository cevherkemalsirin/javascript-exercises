const removeFromArray = function(arr, ...args) {
    for(let a = 0; a < args.length; a++)
    {
        if(arr.includes(args[a]))
        {
            arr.splice(arr.indexOf(args[a]),1);
            a--;
        }
    
    }
   
   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
