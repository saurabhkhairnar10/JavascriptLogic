let arr = [1,3,6,2,9,7];

let sum = arr.reduce((acc,val,ind,arr)=>{
    return acc += (val) ;
})

console.log("Sum",sum);


let output = arr.reduce((result, num) => {
    result.push(num * 2);
    return result;
}, []);

console.log(output); // [2, 6, 12, 4, 18, 14]

// Method-3
let oup = [];
for(let i = 0; i < arr.length; i++){
    oup.push(arr[i] * 2 );
}

console.log("oup",oup);

// Method-2A
let sumAll = 0;
function sumall(n){
   for(let i = 0;i<=n;i++){
     sumAll += i;
   }
   return sumAll;
}

console.log("sum",sumall(5))