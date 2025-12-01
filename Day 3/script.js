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
