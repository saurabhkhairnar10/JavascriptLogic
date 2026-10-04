let str = "abaaba";
let strlen = Math.floor(str.length / 2);
console.log("str",strlen);

function palindrome(str){
for(let i = 0; i <= strlen; i++){
    if(str[i] !== str[str.length -i-1]){
      return false;
    }
}
return true;
}

console.log("palindrome",palindrome(str))