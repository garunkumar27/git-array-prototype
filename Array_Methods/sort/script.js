// It only see the first letter or first number and arrange it ascendingly.
// A-Sort only see first number and then start to make an order in ascending
// If the acending order for numeric values is needed, use (function(a,b){returna-b});

let b=['Ram','Arun','Kumar','Siva'];//B
b.sort();
console.log(b);

// output
// (4) ['Arun', 'Kumar', 'Ram', 'Siva']
// 0: "Arun"
// 1: "Kumar"
// 2: "Ram"
// 3: "Siva"
// length: 4

let a=[1,3,5,2,8,7,6,9];
a.sort();//if the given number is single digit ,simply use sort() if it is more than one digit refer (c)
console.log(a);

// output
// (8) [1, 2, 3, 5, 6, 7, 8, 9]
// 0: 1
// 1: 2
// 2: 3
// 3: 5
// 4: 6
// 5: 7
// 6: 8
// 7: 9
// length: 8



let c=[21,20,25,19,11,55,3,7,6,5,101,123,143];
c.sort(function(a,b) {return a-b}) ;//function(a,b) and return a-b is used to achieve ascending order
console.log(c);

// output
// [11, 19, 20, 21, 25, 3, 5, 55, 6, 7]
// 0: 11
// 1: 19
// 2: 20
// 3: 21
// 4: 25
// 5: 3
// 6: 5
// 7: 55
// 8: 6
// 9: 7
// length: 10

let d=[123,145,24,213,225,10,12];
d.sort(function(a,b) {return b-a}) //return b-a is used for descending order
console.log(d);

// Output
// [225, 213, 145, 123, 24, 12, 10]