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
let str = prompt("Enter your string");
let count = 0;
for (let i = 0; i < str.length; i++) {
  let str1 = str.toLowerCase();
  if (
    str1[i] == "a" ||
    str1[i] == "e" ||
    str1[i] == "i" ||
    str1[i] == "o" ||
    str1[i] == "u"
  ) {
    count++;
    console.log(`${str[i]} found at ${i}`);
  }
}
console.log(count);
