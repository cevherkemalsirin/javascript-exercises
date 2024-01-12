const palindromes = function (str) {
    let removeChars = [",",".","?","!","'"," "];
    let modifiedStr = str.split("").filter((c) => !removeChars.includes(c)).join("").toLowerCase();
    console.log(modifiedStr);
    return modifiedStr === modifiedStr.split("").reverse().join("");
};

console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;
