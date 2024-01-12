const getTheTitles = function(bookArr) {
return bookArr.reduce((titleArr,book)=>{titleArr.push(book.title); return titleArr},[]);
};

// Do not edit below this line
module.exports = getTheTitles;
