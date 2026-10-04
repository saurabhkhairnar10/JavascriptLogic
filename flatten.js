let arr = [1,2,3,4,[5,6,[7,8,[9,10,[11,12]]]]];
let flatten = [];
function flattenArr(arr){

for(let val of arr){

if(Array.isArray(val)){
    flattenArr(val);
}else{
flatten.push(val);
}
}
return flatten;
}
console.log("flatten",flatten);
console.log(flattenArr(arr))