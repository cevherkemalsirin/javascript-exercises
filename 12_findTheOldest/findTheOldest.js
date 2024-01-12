const findTheOldest = function(people) {
    return people.reduce((obj,person)=>
    {
        if(!("yearOfDeath" in person)) person.yearOfDeath = new Date().getFullYear();

        if(obj.yearOfDeath - obj.yearOfBirth > person.yearOfDeath - person.yearOfBirth)
        {
            return obj;
        }
        else
        {
            return person;
        }
    },{yearOfDeath : 0, yearOfBirth:0});
};

// Do not edit below this line
module.exports = findTheOldest;
