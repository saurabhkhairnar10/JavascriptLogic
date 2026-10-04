let arr = [1,2,3,4];
let revarr =[];

// method-1
let rev = arr.reduce((acc,ele,ind,arr)=>{
  acc.unshift(ele);
  return acc;
},[])

// method-2
// for(let val of arr){
//     revarr.unshift(val);
// }

// method-3
// for(let i = arr.length-1; i>=0; i--){
//     revarr.push(arr[i]);
// }
console.log("rev",rev);