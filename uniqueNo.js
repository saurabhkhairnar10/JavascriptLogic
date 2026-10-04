let arr = [1,2,2,3,4,5,1];
// method-1
// let dup = arr.filter((val,ind,arr)=>{
//     console.log("arrind",arr.indexOf(val),"index",ind);
//     return arr.indexOf(val) !== ind;
// })

// Method-2
// let values = [];
// let dup= []
// for(let val of arr){
// if(values.includes(val)){
//     dup.push(val);
//     continue;
// }
// values.push(val);
// }

// console.log("values",values,"dup",dup);

// Method 3
// const seen ={};
// const unique = [];

// for(let val of arr){
//  if(!seen[val]){
//     seen[val] = true;
//     unique.push(val);
//  }
// }

// console.log(unique);   