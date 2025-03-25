// const getData = document.getElementById("dom").innerText = "JS logic here....";
// console.log(getData);


// function changetext (){
//     let a = document.getElementById("dom").innerText= "papa";
// }

// function rahul(){
//     let b = document.getElementsByClassName("ram")[0].innerText="ram ram bhai";
// }

// function ram(){
//   document.getElementById("koko").style.backgroundColor="yellow"; 
//     document.getElementById("koko").style.color="ghostWhite";
//      document.getElementById("koko").style.paddingRight="50%";
// }



// const dog = () => {
//    let d = document.querySelectorAll(".collection");


//     for (let i = 0; i < d.length; i++) {

//         d[i].style.color = 'white';
//         d[i].style.backgroundColor = 'red';

//         }
//       }



//       const a = ["arr1", "arr2", "arr3"];
//       console.log();


//       function jojo(){
//         document.querySelector("#sham").innerText="this is js";
//         document.querySelector("#sham").style.color = "orange";
//         document.querySelector("#sham").style.backgroundColor = "yellow";
//       }


//       function k(){
//         document.getElementById("i").innerText="this is osm";
//       }

//       function r(){
//         document.getElementById("g").style.display="none";
//       }


// function sharma(){
//   document.getElementById("changer").setAttribute("src", "https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=780&h=384&q=90&fit=crop&ar=16%3A10");
// }


// document.getElementById("btn").addEventListener("mouseover", function () {
//   document.getElementById("msg").innerText = "Prasoon Joshi is an Indian poet, writer, lyricist, screenwriter, communication specialist and marketer. He is the CEO of McCann World group India and Chairman APAC, a subsidiary of the"
//   document.getElementById("msg").style.color = "red"
//   document.getElementById("msg").style.background = "yellow"
//   console.log("button clicked !!!");
// });

// document.getElementById("jojo").addEventListener("mouseover", mouseOver);

// function mouseOver (){
//   document.getElementById("jojo").innerText="ram nam";
// }

// document.getElementById("form").addEventListener("submit" ,function(e){
//   e.preventDefault();
//   document.getElementById("inner").innerText = "Thanks for submitting...."

// })

// document.getElementById("form").addEventListener("submit" ,function(e){
//   e.preventDefault();
//   document.getElementById("inner").innerText = "Thanks for submitting...."
// })


// const pages = [ 
//   "<h1>Home page</h1>", //0 index
//   "<b>About Page</b>",  //1 index
//   "<b>ram nam</b>"  //2 index
// ];

// let dynamicData = document.querySelectorAll("a");
// dynamicData.forEach((ele, idx) => {
//   ele.addEventListener("click",(e) => {
//     e.preventDefault();
//     document.getElementById("text").innerHTML = pages[idx];  // data[index]
//   }
// )
  
 
// })


//Map Method -->


// let arrData = ["Mango", "Apple", "Banana", "Grapes"];

// arrData.map((ele)=> {
//   console.log("Arr---->", ele)
// })


// let studentList = [
//   { fullName: "Jatin", city: "FBD" }, //0
//   { fullName: "Amit", city: "Delhi" },   //1
//   { fullName: "Neha", city: "Gurgaon" },  //2
//   { fullName: "Raj", city: "Noida" },  //3
//   { fullName: "Priya", city: "Faridabad" },  //4
//   { fullName: "Ravi", city: "Panipat" }   //5
// ];

// studentList.map((ele) => {
//   console.log("List of Students name is ", ele.fullName, "which live in ", ele.city);
// })



// let List=[
//   {product: "pen",price:10 ,company:"jonny"},
//   {product: "notebook", price: 14, company: "Moleskine"},
// {product: "backpack", price: 55, company: "Herschel"},
// {product: "laptop", price: 556, company: "Dell"},
// {product: "headphones", price: 120, company: "Sony"},
// {product: "water bottle", price: 5, company: "Hydro Flask"},
// ];

// List.map((ele) => {
//   console.log("list of product name is", ele.price * 80)
// })


//Filter
// let arr =[55, 80, 24, 60, 96, 54];

// let eleFilter = arr.filter((ele) => ele > 60);
// console.log(eleFilter);


// const products = [
//   { name: 'Product 1', price: 5 },
//   { name: 'Product 2', price: 12 },
//   { name: 'Product 3', price: 8 },
//   { name: 'Product 4', price: 20 },
//   { name: 'Product 5', price: 7 },
//   { name: 'Product 6', price: 10 },
//   { name: 'Product 7', price: 15 },
//   { name: 'Product 8', price: 3 },
//   { name: 'Product 9', price: 2 },
//   { name: 'Product 10', price: 9 },
//   { name: 'Product 11', price: 4 },
//   { name: 'Product 12', price: 1 }
// ];

// products.filter((ele)=> {
//   console.log(ele.name, "this product matched this price range for you", ele.price > 12);
  
// })



let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let into = document.getElementById("into");
let divide = document.getElementById("divide");
let ans = document.getElementById("ans");


function fun_add(){
    let result = parseInt(num1.value) + parseInt(num2.value);
    ans.innerText = result;
}
add.onclick = fun_add 




