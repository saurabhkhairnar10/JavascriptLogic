let arr = [1,2,333,5,6,8,99,211];
let largest = -Infinity;
let second = -Infinity;
let third = -Infinity;
let uncommon = [];
let newArr = [];

// method-1
// for(let val of arr){
//     if(val > largest){
//         second = largest;
//         largest = val;
//     }
//     if(val > second && val < largest){
//         second = val;
//     }

// }
// newArr.push(largest,second)

// for(let val of arr){
//     if(!newArr.includes(val)){
//         uncommon.push(val)
//     }
// }

// for(let val of uncommon){
//     if(val > third){
//         third = val;
//     }
// }


// console.log("largest",largest,"second largest",second,"newArr",newArr,"uncommon,",uncommon,"third",third);

// Method-2

for(let val of arr){
    if(val > largest){
        third = second;
        second = largest;
        largest= val;
    }else if(val > second && val < largest){
        third = second;
        second = val
    }else if(val > third && val < second){
        third = val;
    }
}

console.log("Largest==",largest,"Seconf largest",second,"Third largest",third);