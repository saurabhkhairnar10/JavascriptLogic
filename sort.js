let a = [2,3,5,6,1,2,5,7,8,6,3,2,4,5,6,7,8,2,3,1,11];
let oup = {}

let duplicate = a.filter((val,ind,arr)=>{
    // console.log("111",ind);
    // console.log("2222",arr.indexOf(val))
     return arr.indexOf(val) === ind
})
console.log("duplicate",duplicate);

// Method-1
// for(let i = 0; i<duplicate.length;i++){
//     oup[duplicate[i]] = duplicate[i];
// }


// console.log("oup",Object.values(oup));


// Method-2
for(let i = 0; i<duplicate.length; i++){
    for(let j = 0; j < duplicate.length-1-i; j++){
        if(duplicate[j]>duplicate[j+1]){
        // let temp = duplicate[j];
        // duplicate[j+1]=duplicate[j];
        // duplicate[j] = temp;
        [duplicate[j],duplicate[j+1]] = [duplicate[j+1],duplicate[j]]
        }
    }
}

console.log("sorting",duplicate);

