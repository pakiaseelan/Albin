// sum(1)(2)(3)(4)()

// this is normal recurrsive function

// let sum = function(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return function(e){
//                     if(e){
//                         return a;
//                     }else{
//                         return a+b+c+d;
//                     }
//                 }
//             }
//         }
//     }
// }

//console.log(sum(1)(2)(3)(4)());

//lets do it with arrow function with ternary operator

// let sum = (a)=>{
//     return (b)=>{
//         return (c)=>{
//             return (d)=>{
//                 return (e)=>{
//                     return e?a:a+b+c+d;
//                 }
//             }
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4)());

//single line of code

//let sum = a=>b=>c=>d=>e=>e?a:a+b+c+d;
//console.log(sum(1)(2)(3)(4)());

//infinite function

let sum = (a)=>{
    return (b)=>{
        return b?sum(a+b) : a;
    }
}

console.log(sum(10)(20)(44)(33)(4)(5)(1)());