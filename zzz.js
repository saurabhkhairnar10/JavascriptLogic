
// function add(a){

//      return function (b){
        
//        return function (c){
//             return a+b+c;
//         }

//      }

// }

// let oup = add(1)(2)(7)
// console.log(oup);

// function add1(a){

//    function inner(b){
//     return b !== undefined ? add1(a+b): inner;
//    }

//    inner.valueOf = ()=>a;
//    inner.toString = ()=>a;


//    return inner;
// }


// let oup1 = add1(1)(2)(7)()();
// console.log("oup1",oup1.valueOf());

// 1. convert array into object 

// const names = ["Rahul", "Sneha", "Amit"];

// let nameArr = names.reduce((acc,val,ind)=>{
//      acc[ind] = val;
//      return acc;
// },{})

// console.log("nameArr",nameArr);


// let inp = 8;
// let oup;
// fib = []
// function fibb(inp){
// for(let i = 0; i<inp; i++){
//   if(oup){
//     oup = fib[i-2]+fib[i-1];
//     fib.push(oup)
//   }else{
//     oup = i;
//     fib.push(oup)
//   }
// }
//   return fib;
// }

// console.log("first",fibb(inp))


// let arr = [1,2,3,4,[5,6,[7,8,[9,10,[11,12]]]]];
// let flatten = [];

// function flatArr(arr){
// for(let val of arr){
//     if(!Array.isArray(val)){
//         flatten.push(val)
//     }else{
//         flatArr(val)
//     }
// }
// return flatten;
// }
// console.log("flattenArr",flatArr(arr),flatten)

// let a= [1,2,3,4,6];
// let c = 0;
// let m = [];

// for(let i=0; i < a[a.length-1]; i++){
// c++;
// if(!a.includes(c)){
//     m.push(c);
// }
// }

// for(let val of a){
//     c++;
//     console.log("---c",c);
//     if(!a.includes(c)){
//         m.push(c)
//     }
// }

// console.log("first,",m);

// let str = "abaaba";

// function palindrome(str){
// let strlen = str.length/2;
// for(let i = 0; i<= strlen; i++){
//     if(str[i] = str[strlen-i]){
//         return true;
//     }
// }
// }

// console.log("palindrome",palindrome(str));


// let arr = [1,2,333,5,6,8,99,211];
// let largest = -Infinity;
// let second = -Infinity;
// let third = -Infinity;
// let smallest = Infinity;
// let secondSmall = Infinity;
// let thirdSmall = Infinity;


// for(let val of arr){
//     if(val>largest){
//         third = second;
//         second= largest;
//         largest= val;
//     }else if(val>second && val < largest){
//         third = second;
//         second = val;  
//     }else if( val > third && val < second){
//         third= val;
//     }
// }

// console.log("largest",largest,second,third)

// for(let val of arr){
//    if(val <smallest){
//     secondSmall = smallest;
//     thirdSmall = secondSmall;
//     smallest = val;
//    }else if(val < secondSmall && val > smallest){
//    thirdSmall = secondSmall
//     secondSmall = val;
//    }else if(val < thirdSmall && val > secondSmall){
//     thirdSmall = val;
//    }
// }

// console.log("smaall",smallest,secondSmall,thirdSmall)


let arr = [1,2,-3,9,4,4];
let target= 10;

function targetNo(arr,target){
 let map =  new Map();
 let diff;
 for(let i=0;i<arr.length; i++){
   diff = target - arr[i];
   console.log("first,",map,"diff",diff)
   if(map.has(diff)){
    //  return [diff,arr[i]];
    return [map.get(diff),i]
   }
   map.set(arr[i],i);

 }
 return null;
}

console.log("Target",targetNo(arr,target))

// function targetNo(arr,target){
// let oup = {};
// let diff;

//    for(let i=0; i < arr.length; i++){
//     diff = target - arr[i];
//        if(oup[diff]){
//            return [diff,arr[i]];
//        }else{
//         oup[i]= arr[i];
//        }

//    }
//    return null;
// }

// console.log("target",targetNo(arr,target))