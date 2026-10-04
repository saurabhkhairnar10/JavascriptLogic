var string='priya riya supriya';
let str = string.split('')

let result = str.filter((val,ind,arr)=>{
    return arr.indexOf(val) === ind;
});

console.log("res",result.join(''));

let hash = {};
let data = [];
let count = 1;

for(let key in str){
    if(str[key] !== ' '){
        if(hash[str[key]]){
        hash[str[key]] = count + 1;
        }else{
            hash[str[key]] = count;
        }
    }
}

for(let key in hash){
    if(hash[key] == 1){
        data.push(key)
    }
}

console.log("hash",hash,"data",data.join(''));

