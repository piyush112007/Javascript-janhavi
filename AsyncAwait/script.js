async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}
async function main() {
  console.log("Loading modules");
  console.log("Do something else");
  console.log("Load Data");
  let data = await getData();
  console.log(data);

  console.log("process data");

  console.log("task 2");
}
main()

// data.then((v) => {
//     console.log(data)
//     console.log(v)

//     console.log("process data")

//     console.log("task 2")

// })
async function promise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4599)
        },2000)
    })
}
let value = promise()
async function display(){
  console.log(await promise())
}
display()
