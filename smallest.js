let arr = [33,11,2,5,8,9,0,21];
let smallest;
// Method-1
// function findSmallest(arr) {

//   if (arr.length <= 0) {
//     return null;
//   }
//   smallest = arr[0];
//   for (let i = 1; i < arr.length; i++){
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;

// }

// console.log("smallest",findSmallest(arr));

// Method-2
// let sm = arr.reduce((Acc, current) => {
//         console.log("Accu",Acc,"cureent",current);
//         return current < Acc ? current : Acc;
//     });

// console.log("smallest",sm);  

// 3rd smallest no

let small = Infinity;
let secondsmall = Infinity;
let thirdsmall = Infinity;

for(let val of arr){
    if(val < small){
        thirdsmall = secondsmall;
        secondsmall=small;
        small = val;
    }else if(val < secondsmall){
        thirdsmall=secondsmall;
        secondsmall = val;
    }else if(val < thirdsmall){
        thirdsmall = val;
    }
}

console.log("Small",small,"Seconds",secondsmall,"thirdsmall",thirdsmall);
