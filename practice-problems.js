// Problem No:- 1
var fruits = ["Apple", "Banana", "Orange"];

var findBanana = fruits.indexOf("Banana");
console.log(findBanana);

fruits[1] = "Mango";
console.log(fruits);

fruits.pop();
fruits.push("Watermelon");
console.log(fruits);

// Problem No:- 2
var marks = 85;
if (marks >= 80) {
  console.log("congratulation's you have got A");
} else if (marks >= 60) {
  console.log("congratulation's you have got B");
} else if (marks >= 50) {
  console.log("congratulation's you have got C");
} else if (marks >= 40) {
  console.log("congratulation's you have got D");
} else if (marks <= 39) {
  console.log("Result not found.");
}

// Problem No:- 3
// 1. You are given three numbers 13 , 79 , and 45. Write a program that will print the
//     largest number using if - else .
// 2. You are given a triangle with the sides 9 , 8 , 9. Write a program to check whether a
//     triangle is Isosceles or not using if - else .
//                               Isosceles = > two sides are equal

var num1 = 13;
var num2 = 79;
var num3 = 45;
if (num1 > num2 && num3) {
  console.log("The big number is", num1);
} else if (num2 > num1 && num3) {
  console.log("The big number is", num2);
} else if (num3 > num1 && num2) {
  console.log("The big number is", num3);
}

var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2) {
  console.log("Side1 and Side2 are equals");
} else if (side1 == side3) {
  console.log("Side1 and Side3 are equals");
} else if (side2 == side1) {
  console.log("Side2 and Side1 are equals");
} else if (side2 == side3) {
  console.log("Side2 and Side3 are equals");
} else if (side3 == side1) {
  console.log("Side3 and Side1 are equals");
} else if (side3 == side2) {
  console.log("Side3 and Side2 are equals");
}
