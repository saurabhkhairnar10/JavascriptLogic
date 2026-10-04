let evn = [1,2,3,4,5,6,7,8];

let ev = evn.filter((val,ind,arr)=>{
    return val % 2 === 0;
})

console.log("Even No",ev);

// Method-2
let evnNo = [];

for(let i = 0; i<evn.length; i++){
    if(evn[i] % 2 === 0){
        evnNo.push(evn[i])
    }
}

console.log("even no",evnNo);