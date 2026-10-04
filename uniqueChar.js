let str = "aabbcdd";
let obj = {}
let newStr = ''
let oneRepeated = [];

// for(let val of str){
//   if(!obj[val]){
//     obj[val] = true;
//     oneRepeated.push(val);
//   }
// }
// console.log("nonUnique,",oneRepeated.join(''));


// approach to get single value from object  Method-1
// for(let val of str){
//     if(!obj[val]){
//      obj[val] =true;
//      newStr[val] = val;
//     }  
// }

// console.log(Object.values(newStr).join(''))


// Approach to get single value  Method-2
// for(let val of str){
//       obj[val] = (obj[val] || 0) + 1;
// }
// for (let key in obj) {
//   if (obj[key] === 1) {
//     newStr += key;
//   }
// }

// console.log("Object",obj,"newVal",newStr);