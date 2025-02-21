// let promise = new Promise((res, rej) => {
//   let x = false;
//   if (x) {
//     res("condition true");
//   } else {
//     rej("condition false");
//   }
// });

// promise.then((result) => console.log(result)).catch((err) => console.log(err));

// var x1 = 5;
// var x2 = "5";
// if (x1 === x2) {
//   console.log("true");
// } else {
//   console.log("falsy");
// }

let arr = {
  name: "Deepanshu",
  age: 25,
};
const { name, age } = arr;
console.log(name, age);
