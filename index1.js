// let age = 13;
// let rest = age >= 18 ? "true": "false";
// console.log(rest);

// let day = 4
// switch(day){
//     case 0:
//         console.log("sunday");
//         break;

//         case 1:
//             console.log("monday");
//             break;

//             case 2:
//             console.log("tuesday");
//             break;

//             case 3:
//                 console.log("wednesday");
//                 break;

                 
//             case 4:
//                 console.log("thusday");
//                 break;
                
//             case 5:
//                 console.log("friday");
//                 break;

//             case 6:
//                 console.log("satruday");

// }


// let Rahul = { Name:"rahul", class:"12th", email:"rahul@60gmail.com",address:"dayalpur" }
//  for(let data in Rahul){
//     console.log(`${data} ${Rahul[data]}`)

// }


// let products = ["Sky", "Wheather", "DayLight"];
// for(let data of products){
//     console.log(data)
// }

// let productsPrice = [100, 200, 500, 800];

// productsPrice.forEach((rahul,index, arr) => {
//    arr[index] *= 0.3;
//    console.log(rahul);
// })
// console.log(productsPrice);


// let getData = new Promise((resolve, reject) => {
//    let age = 28
//    if( age >= 18 ){
//       resolve("Valid");
      
//    } else {
//       reject("error comes fill valid age");
      
//    }
// })

// console.log(getData);


// let getData = new Promise ((resolve, reject) => {
//    let time = 40
//    if( time >= 30){
//       resolve ( "delivery Done");
//    }
//    else {
//       reject("Delivery not accepted");
//    }
// })

// console.log (getData);


function Delivery(amount){
   return new Promise ((reslove,reject)=>{
      if (amount >=200)
         reslove("Delivery will  be done");
      else{
         reject ("Delivery not accpted");
       }
    })
}

Delivery(50).then(result => console.log(result)).catch(error => console.log((error)))


const fetchData = async () => {
  try {
   let data = await fetch("https://dummyjson.com/posts")
    let res = data.json();
 console.log(res);
 
  } catch(err){
   console.errors("Invalid data in there", err);
   
  }
   
}

fetchData()