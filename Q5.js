const   stringTest  = "Oi eu sou o goku"
let     newString   = ""


for(let i = stringTest.length; i >= 0 ;i--){

    if(stringTest[i] !== undefined){
    newString = newString + stringTest[i];
    }    
}

console.log(newString)