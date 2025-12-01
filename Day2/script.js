// for loop

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
//While Loop

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
//Do while Loop - Infinite Loop
// do {
//   console.log(i);
//   if (i == 58) {
//     break;
//   }
//   i++;
// } while (i > 0);

// Question : Print All the even numbers from 0 to 100
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// let i = 0;
// while (i <= 100) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }
// let userinput = parseInt(prompt("Enter your Required number"));
// for (let i = 1; i <= 100; i++) {
//   if (i % userinput == 0) {
//     if (i != userinput) {
//       console.log(i);
//       break;
//     }
//   }
// }

// let userinput = parseInt(prompt("Enter The Number"));

// for (let i = 1; i <= 10; i++) {
//   console.log(userinput, " X", " ", i, " = ", userinput * i);
// }
// let i = 1;
// while (i <= 10) {
//   console.log(`${userinput} X ${i} = ${i * userinput}`);
//   i++;
// }

//Template Literals
// let Name = prompt("What is Your name");
// let age = prompt("What is Your age");

// console.log(`Hello ${Name}, your Age is ${age}`);
// console.log("Hello", Name, "your Age is ", age);

//Question :Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
// let userinput = parseInt(prompt("Guess the correct number"));
// while (true) {
//   if (userinput == 69) {
//     console.log("CONGRATS!!! YOUR GUSSED NUMBER IS CORRECT");
//     break;
//   } else {
//     userinput = parseInt(prompt("your gussed number is incorrect"));
//   }
// }

//String
// let str = "   PiyushAndJanhavi   ";
// let length = str.length; //Reurtn INT
// console.log(length);

// console.log(str[2]);
// let str1 = str.toUpperCase();
// let str2 = str.toLowerCase();
// let str3 = str.trim();

// console.log(str1, "\n", str2, "\n", str3);
// let str = prompt("Enter your string");
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let str1 = str.toLowerCase();
//   if (
//     str1[i] == "a" ||
//     str1[i] == "e" ||
//     str1[i] == "i" ||
//     str1[i] == "o" ||
//     str1[i] == "u"
//   ) {
//     count++;
//     console.log(`${str[i]} found at ${i}`);
//   }
// }
// console.log(count);
// let n = parseInt(prompt("Enter the number of rows"));
// var row = "";
// for (let i = 1; i <= n; i++) {
//   row += "|";
//   for (let j = 1; j <= n; j++) {
//     if (i == j) {
//       row += " 1 ";
//     } else {
//       row += " 0 ";
//     }
//   }
//   row += "|";
//   row += "\n";
// }
// console.log(row);

// let n = parseInt(prompt("Enter rows for your matrix"));
// let m = parseInt(prompt("Enter colums for your matrix"));
// var row = "";
// for (let i = 1; i <= n; i++) {
//   row += "|";
//   for (let j = 1; j <= m; j++) {
//     let num = prompt(`Enter number for ${i} row and ${j} column`);
//     row += ` ${num} `;
//   }
//   row += "|";
//   row += "\n";
// }
// console.log(row);

// let n = parseInt(prompt("Enter rows for your matrix"));
// var row = "";
// for (let i = 1; i <= n; i++) {
//   row += "|";
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       row += " * ";
//     } else {
//       row += "   ";
//     }
//   }
//   row += "|";
//   row += "\n";
// }
// console.log(row);

// function printing() {
//   console.log("Printed");
// }
// printing();

// let calling = () => {
//   return "Called";
// };
// let whathappen = calling();
// console.log(whathappen);
// function addition(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// let userinput1 = parseInt(prompt("Enter number"));
// let userinput2 = parseInt(prompt("Enter number"));
// let sum1 = addition(userinput1, userinput2);
// console.log(sum1);

// function comparsion(num1, num2) {
//   if (num1 < num2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// if (comparsion(3, 5)) {
//   console.log("Num2 is greater");
// } else {
//   console.log("Num1 is greater");
// }

function addition(num1, num2) {
  let answer = num1 + num2;
  console.log(answer);
}
function subraction(num1, num2) {
  let answer = num1 - num2;
  console.log(answer);
}
function multiplication(num1, num2) {
  let answer = num1 * num2;
  console.log(answer);
}
function division(num1, num2) {
  let answer = num1 / num2;
  console.log(answer);
}
function calculator() {
  let userinput1 = parseInt(prompt("Enter number"));
  let userinput2 = parseInt(prompt("Enter number"));
  let operation = prompt("enter the operation which you want to perform");
  if (operation == "+") {
    addition(userinput1, userinput2);
  } else if (operation == "-") {
    subraction(userinput1, userinput2);
  } else if (operation == "*") {
    multiplication(userinput1, userinput2);
  } else if (operation == "/") {
    division(userinput1, userinput2);
  } else {
    console.log("enter valid inputs");
  }
}
