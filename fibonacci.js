let inp = 8;
let fib = [];
let oup;
function fibbo(inp){
    if(inp === 0) return [];
    if(inp === 1) return 0 
   for(let i=0; i< inp;i++){
      if(oup){
         oup = fib[i-2]+fib[i-1];
         fib.push(oup); 
      }else{
       oup = i;
       fib.push(oup)
      }
   }
   return fib;
}

console.log("fibbbo",fibbo(inp))