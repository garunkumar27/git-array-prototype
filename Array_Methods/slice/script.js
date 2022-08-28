// slice-It's a range.In below eg it takes only (a[2],a[3]) and give it as output
// Always the given 2nd value must not be taken. only inbetween values has to be taken
// it doesn't change any value in array 
let a=["Nura","Ramuk","Eerhs","Ahpur","Illav","Apap","Arun"];
let ab=a.slice(2,5);
console.log(ab);

// output
// (2) ['Eerhs', 'Ahpur']
// 0: "Eerhs"
// 1: "Ahpur"
// length: 2

let b=[1,2,3,4,5];
let ba=b.slice(-4,-2);//Negative values takes reverse order. Only start with large number at first 
console.log(ba);
// a[0]=5;a[-1]=4;a[-2]=3;a[-3]=2;a[-4]=1;
 
// output
// 0: 2
// 1: 3