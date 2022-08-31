let number=['One','Two','Three','Four','six'];
//syntax- arrayname.splice(index number,Number of deletion,Adding Elements)
number.splice(4,1,'Five');
console.log(number);
// Output
// ['One', 'Two', 'Three', 'Four', 'Five'] deleted six and added five 

let terms=[1,2,3,4,5,6,7,9];
//syntax- arrayname.splice(index number,Number of deletion,Adding Elements)
terms.splice(6,0,8);
console.log(terms);

// Output
//  [1, 2, 3, 4, 5, 6, 8, 7, 9] number 8 is added without deleting any terms
