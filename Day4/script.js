let btn = document.getElementsByClassName("Okbtn");
let input = document.querySelector("#Inputfield");
let parent = document.querySelector(".parent");

// function changename() {
//     let value = Math.floor(Math.random() * 15)
//   input.value = value;
// }

// changename();

// function getValue() {
//   console.log(input.value);
// }

// console.log(input.innerHTML);
console.log(parent.innerHTML);

input.value = parent.innerHTML;
