// let SearchElement = document.querySelector("#SearchElement")
// let EnterBtn = document.querySelector("#EnterBtn")

let text = document.querySelector("p");
let body = document.querySelector("Body");
let ToggleButton = document.querySelector("#ChangeTheme");
let ColorInput = document.querySelector("#color")

// EnterBtn.onclick = ()=> {
//     alert("Btn was clicked")

// };
// EnterBtn.addEventListener("dblclick" , (e)=>{
//     alert("Btn was clicked")
// })
// EnterBtn.addEventListener("dblclick" , (e)=>{
//     console.log(e)
// })

// SearchElement.addEventListener("keypress",(e)=>{
//     if(e.key == "1"){
//     console.log("You pressed " , e.key)}
//     // console.log(e)
// })

var state = "Light";
console.log(color.value)

// ToggleButton.addEventListener("click", () => {
//   if (state == "Light") {
//     state = "Dark";
//     body.style.backgroundColor = "Black";
//     text.style.color = "White";
//     text.innerText = "I Love Janhavi"
//     ToggleButton.innerText = "Light"
//   } else {
//     state = "Light";
//     // console.log("Switched to light mode")
//     body.style.backgroundColor = "White";
//     text.style.color = "Black";
//     text.innerText = "Janhavi is A very good Girl she is beautiful Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eum. Facilis id delectus voluptatibus voluptatem molestias voluptates incidunt, ducimus harum cupiditate ratione suscipit nobis assumenda perspiciatis quod accusantium aperiam minus."
//     ToggleButton.innerText = "Dark"
//   }
// });

ToggleButton.addEventListener("click" , ()=>{
    body.style.background  = color.value
})