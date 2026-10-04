let arr = [1,2,-3,1,9,4,4];
let target= 10;
// method-1
// function twoSum(arr,target){
//    let oup = {};
//    let diff;

//    for(let i = 0; i<arr.length; i++){

//     diff = target - arr[i];

//     if(oup[diff]){
//          return [oup[diff],i];
//     }else{
//         oup[arr[i]] = i;
//     }


//    }
// return null;
// }

// Method-2
function twoSum(arr,target){
    let map = new Map();
    let diff;
    console.log("map",map);
    for(let i =0;i<arr.length; i++){
        diff = target - arr[i];
        console.log("diff",diff);
        if(map.has(diff)){
            console.log("map1111",map)
             return [map.get(diff),i];
        }
        map.set(arr[i],i)
    }
 return null
}

console.log(twoSum(arr,target));