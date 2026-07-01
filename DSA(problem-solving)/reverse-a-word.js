//2. Reverse a word 

let str = 'Reverse the word';

//with split, reverse, join methods

// let splitwords = str.split(" ");
// let concatstrings = '';
// for(let i=0; i<splitwords.length; i++){
//     concatstrings += splitwords[i].split("").reverse().join("") + ' ';
// }
//console.log(concatstrings);

// without predefined methods - customized logic
let obj = {};
let count=0;
obj[count] = [];
for(let i=0; i<str.length; i++){
    if(str[i] === " "){
        count++;
        obj[count] = [];
    }else{
        obj[count].push(str[i]);
    }
}

let revw='';
for(let j=0; j<Object.keys(obj).length; j++){
    revw +=' ';
    for(let k=0; k<obj[j].length; k++){
        revw += obj[j][obj[j].length-1 -k]; 
    }
}
console.log(revw);