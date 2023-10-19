//  1. Ways to print in JavaScript
//  console.log("Hello World");
alert("Your computer is hacked!!");
//  document.write("This is document write");

//  2. JavaScript console API
//  console.log("Hello World", 4 + 6, "Another log");
//  console.warn("This is warning");
//  console.error("This is an error")

//  3. JavaScript Variables 
//  What are variables? - Containers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

//  4. Data types in JavaScript

//  At a very high level there are two types of data types in JavaScript :

//  1. Primitive Data Types : undefined, null, string, number, boolean, symbol 

//  Numbers
// var num1 = 455;
// var num2 = 11.11;

//  String
// var str1 = "This is a string";
// var str2 = 'This is also a string';

//Booleans
// var a = true;
// var b = false;
// console.log(a, b);

//  var und = undefined;
//  console.log(und)
//  console.log(undefined);

//  var und;
//  consolel.log(und);

//  var n = null;
//  console.log(n);

//  2. Reference Data Types : arrays and objects

//  var arr = [1,2,3,4,5]
//  console.log(arr);
//  The counting will always start from zero. You can write anything in between.
//  For ex. [1[0], 2[1], 3[2], 4[3], 5[4]]

//Objects
//  var marks = {
//  xxx: 90,
//  yyy: 90,
//  zzz: 90,
// }
//  console.log(marks);

// Operators in JavaScript

//  Arethimatic Operators : 
//  var a = 11;
//  var b = 36;

//  console.log("The value of a + b is", a+b);
//  console.log("The value of a - b is", a-b);
//  console.log("The value of a * b is", a*b);
//  console.log("The value of a / b is", a/b);

//  Assignment Operators :

//  var c = b;
//  Here this will be printed with the value of b as c = b.
//  console.log(c);

//  c += 2; // c = c + 2.
//  c -= 2; // c = c - 2.
//  c *= 2; // c = c * 2.
//  c /= 2; // c = c / 2.

//  console.log(c);

//  Comparison Operators :

//  var x = 11;
//  var y = 36;

//  console.log(x == y);
//  false
//  console.log(x >= y);
//  false
//  console.log(x <= y);
//  true
//  console.log(x > y);
//  false
//  console.log(x < y);
//  true

//  Logical Operators :

//  Logical and :

//  console.log(true && true);
//  true

//  console.log(false && true);
//  false

//  console.log(true && false);
//  false

//  console.log(false && false);
//  false

//  Logical or :

//  console.log(true || true);
//  true

//  console.log(false || true);
//  true

//  console.log(true || false);
//  true

//  console.log(false || false);
//  false

//  Logical not :

//  console.log(!false);
//  true

//  console.log(!true);
//  false

//  5. Functions in JavaScript : 

//  function avg(a, b){
//       return (a + b)/2;
// }

//  c = avg(11, 36);

//  6. Conditionals in JavaScript :

// var age = 12;

//  Single if statement : 

//  if(age > 18){
//      console.log("You can drive");
//}

//  If - Else statemnt :

//  if(age > 18){
//      console.log("You can drive");
//}
//  else{
//      console.log("You cannot drive");
//}

//  If - Else ladder :

// var age = 11;

// if(age > 18){
//     console.log("You are not a kid");
// }
// else if(age > 21){
//     console.log("You aren't a kid");
// }
// else if(age > 19){
//     console.log("Yes you aren't a kid");
// }
// else if(age > 20){
//     console.log("No you aren't a kid");
// }
// else{
//     console.log("You are a kid");
// }

//  var arr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11];

//  console.log(arr);
//  for(var i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//  arr.forEach(function(element){
//    console.log(element);
// })

//  let j = 0;
//  const ac = 0;
//  ac++;
//  ac = ac + 1;

// an error will be showed.