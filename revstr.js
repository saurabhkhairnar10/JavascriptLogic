let str = "India is my country";
// let arrStr = str.split("");
// console.log("arrstr",arrStr);
// let newStr = [];
// let word = '';
// let rev = ''
// for(let s of arrStr){
//     newStr.unshift(s);
// }

// let newrevStr = newStr.join('');
// let newrevStrArr = newrevStr.split(' ');

// console.log("word",newStr,newrevStr);
// console.log("new Rev Str",newrevStrArr);

// let updatedRevStr = [];
// for(let val of newrevStrArr){
//       updatedRevStr.unshift(val)
// }

// console.log("updatedrev",updatedRevStr.join(' '));

// Method-2
// let words = str.split(" ");
// let finalArray = [];

// for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let reversedWord = "";
//     // Loop backwards through the word
//     for (let j = word.length - 1; j >= 0; j--) {
//         reversedWord += word[j];
//     }
//     finalArray.push(reversedWord);
// }

// console.log(finalArray.join(" "));

// Method-3

let result = '';
let word = '';
let oup = ''

for(let s of str){
if(s===' '){
 result += word + s;
 word = '';
}else{
    word = s + word;
}
oup= result + word

}

console.log("Result",oup);