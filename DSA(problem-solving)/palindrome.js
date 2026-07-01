// 1. Palindrome

let palString = 'madam';

// with split & reverse methods

let rev = palString.split("").reverse().join("");
let res = (palString === rev) ? palString + ' is a palindrome' : palString + ' is not a palindrome';
//console.log(res);

// without split & reverse methods

let revstr = '';
for(let i=0; i<palString.length; i++){
    revstr += palString[palString.length-1 - i];
}
let fr = (palString === revstr) ? 'given is palindrome' : 'not a palindrome';
console.log(fr);