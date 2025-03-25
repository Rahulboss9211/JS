// function fulnum(){
//     console.log("fullnum");
// }
// fulnum()

// function sum (a,b){
//     return a+b;
// }
// console.log(sum(2,3));

// const add =(c,d) => c+b;
// console.log(sum(4,7));

// const sub =(e,f) => e-f;
// console.log(sub(93,45))

// //normal
// function sum(a, b) {
 
//     return a + b;
// }

// console.log("Normal Function -->", sum(3, 9));

// Es6


// const arrFunc = (a,B) => a+B;
// console.log("A, b -->", arrFunc(8, 9))

// console.log(arrFunc(1,2))

// const multi = (c,d) => c*d;
// console.log(multi(5,5));

// const sub = (e,f) => e-f;
// console.log(sub(3,2));

// const divide=(g,h) => g/h;
// console.log(divide(3,2))

// function dataComes(a){
//     return function () {
//         console.log(`${a}`);
//   }
// }
// const b = dataComes("JS script");
// b()


function rahul(ok){
  return function(){
    console.log(`${ok}`);
  }
}
const rohit = rahul("sonu,monu,ram")
rohit()




