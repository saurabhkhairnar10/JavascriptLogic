// method-1 only for single ()
function add(a){
    return function(b){
        if(b === undefined){
             return add(a);
        }
       return add(a+b);
    }
}

console.log("method1",add(1)(2)(3)()()());

// Method-2 for multiple undefined ()()()()...

function add(a) {
    console.log("aaaaaa",inner);
    function inner(b) {
        console.log("bbbbbb",inner.valueOf(),"bb",b);
        return b !== undefined ? add(a + b) : inner;
    }
    console.log("ccccc",inner);
    inner.valueOf = () => a;
    inner.toString = () => a;
    console.log("ddddd",inner.valueOf());
    return inner;
}
let oup = +add(1)(2)(7)()()()
console.log("Method2",oup); // 6