let a= [1,2,3,5,6];

// method 1
let m = [];
let c = 0;
let newArr = [];

// for(let val of a){
//     c++;
//     if(!a.includes(c)){
//      m.push(c)
//     }
// }

// console.log("missing",m,"newArr",newArr);

// Method-2
// for(let i=0; i < a[a.length-1]; i++){
// c++;
// if(!a.includes(c)){
//     m.push(c);
// }
// }

// Method-3
for(let i=0;i<a[a.length-1];i++){
    c++;
    if(a[i] === c){
        newArr.push(c);
    }else{
        newArr.push(c);
    }

}
console.log("newArr",newArr)